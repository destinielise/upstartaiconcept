import type { VercelRequest, VercelResponse } from '@vercel/node';

const SYSTEM_PROMPT = `You are an Upstart loan payment recovery assistant helping Destini Elise.

Context — never ask for anything listed here, you already know it:
- Borrower: Destini Elise
- Loan: #FN1885393, $6,600 original balance (FNBO, Oct 20 2021)
- Missed: April + May 2024 — $500 total past due
- Failed autopay: Capital One x-9673 (insufficient funds)
- Verified backup account: Chase x-5165 (ready to use)
- Grace period: 5 days before credit bureau reporting and late fee
- Resolving now: late fee waived, no credit impact

How to behave:
- Warm, direct, and concise — 2-4 sentences max unless explaining a plan
- Open with a plan, not questions
- When user confirms a payment, give a confirmation number and next steps
- Reinforce the 5-day urgency without being alarmist
- Resolution sequence: confirm account → process payment → schedule next → update autopay`;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'ANTHROPIC_API_KEY is not set' });
  }

  const { messages } = req.body;
  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: 'messages array required' });
  }

  // Set streaming headers
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Transfer-Encoding', 'chunked');

  try {
    const anthropicRes = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5',
        max_tokens: 512,
        system: SYSTEM_PROMPT,
        stream: true,
        messages,
      }),
    });

    if (!anthropicRes.ok) {
      const err = await anthropicRes.text();
      return res.status(anthropicRes.status).json({ error: err });
    }

    const reader = anthropicRes.body!.getReader();
    const decoder = new TextDecoder();
    let buffer = '';

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split('\n');
      buffer = lines.pop() ?? '';

      for (const line of lines) {
        if (!line.startsWith('data: ')) continue;
        const data = line.slice(6).trim();
        if (data === '[DONE]') continue;
        try {
          const parsed = JSON.parse(data);
          if (
            parsed.type === 'content_block_delta' &&
            parsed.delta?.type === 'text_delta' &&
            parsed.delta?.text
          ) {
            res.write(parsed.delta.text);
          }
        } catch {
          // skip malformed SSE lines
        }
      }
    }

    res.end();
  } catch (err) {
    const msg = err instanceof Error ? err.message : 'Unknown error';
    if (!res.headersSent) {
      res.status(500).json({ error: msg });
    } else {
      res.end();
    }
  }
}

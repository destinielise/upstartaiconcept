export const config = { runtime: 'edge' };

const SYSTEM_PROMPT = `You are an Upstart loan payment recovery assistant helping Destini Elise.

Everything you need to know — never ask for info you already have:
- Borrower: Destini Elise
- Loan: #FN1885393, $6,600 original balance (via FNBO, originated Oct 20 2021)
- Missed: April + May 2024 payments — $500 total past due
- Failed autopay: Capital One x-9673 (insufficient funds)
- Verified backup: Chase x-5165 — ready to use
- Grace period: 5 days before credit bureau reporting + late fee applied
- If resolved now: late fee waived, no credit impact

Your behavior:
- Be warm, direct, and reassuring — like a knowledgeable friend
- Keep responses short (2-4 sentences) unless explaining a multi-step plan
- Never ask for information you already have above
- When the user picks a payment option, confirm clearly and state next steps
- When a payment is confirmed, give them a confirmation number and tell them what happens next
- Sequence for full resolution: confirm payment account → process payment → schedule next → update autopay
- Always reinforce the 5-day urgency when relevant without being alarmist`;

export default async function handler(req: Request): Promise<Response> {
  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return new Response(JSON.stringify({ error: 'ANTHROPIC_API_KEY not configured' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  let messages: { role: 'user' | 'assistant'; content: string }[];
  try {
    const body = await req.json();
    messages = body.messages;
  } catch {
    return new Response('Invalid JSON body', { status: 400 });
  }

  // Call the Anthropic API directly via fetch (most reliable for Edge runtime)
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
    return new Response(JSON.stringify({ error: err }), {
      status: anthropicRes.status,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // Pass the SSE stream through, extracting only text deltas
  const encoder = new TextEncoder();
  const decoder = new TextDecoder();

  const stream = new ReadableStream({
    async start(controller) {
      const reader = anthropicRes.body!.getReader();
      let buffer = '';

      try {
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
                controller.enqueue(encoder.encode(parsed.delta.text));
              }
            } catch {
              // skip malformed lines
            }
          }
        }
      } finally {
        controller.close();
      }
    },
  });

  return new Response(stream, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'no-cache',
      'X-Content-Type-Options': 'nosniff',
    },
  });
}

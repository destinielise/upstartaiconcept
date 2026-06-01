import Anthropic from '@anthropic-ai/sdk';

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
- Always reinforce the 5-day urgency when relevant without being alarmist

Tone examples:
- Good: "Got it — I'll process $250 from Chase x-5165 today and schedule $250 for May 30th. Your late fee will be waived."
- Bad: "I understand you would like to make a payment. Could you please tell me which account you'd like to use?"`;

export default async function handler(req: Request): Promise<Response> {
  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return new Response('ANTHROPIC_API_KEY not set', { status: 500 });
  }

  let messages: { role: 'user' | 'assistant'; content: string }[];
  try {
    const body = await req.json();
    messages = body.messages;
  } catch {
    return new Response('Invalid JSON', { status: 400 });
  }

  const client = new Anthropic({ apiKey });

  const encoder = new TextEncoder();
  const stream = new ReadableStream({
    async start(controller) {
      try {
        const anthropicStream = client.messages.stream({
          model: 'claude-opus-4-8',
          max_tokens: 512,
          system: SYSTEM_PROMPT,
          thinking: { type: 'adaptive' },
          messages,
        });

        for await (const chunk of anthropicStream) {
          if (
            chunk.type === 'content_block_delta' &&
            chunk.delta.type === 'text_delta'
          ) {
            controller.enqueue(encoder.encode(chunk.delta.text));
          }
        }
      } catch (err) {
        const msg = err instanceof Error ? err.message : 'Unknown error';
        controller.enqueue(encoder.encode(`\n[Error: ${msg}]`));
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

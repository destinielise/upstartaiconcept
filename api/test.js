export default async function handler(req, res) {
  const apiKey = process.env.ANTHROPIC_API_KEY;

  if (!apiKey) {
    return res.status(200).json({
      status: 'error',
      message: 'ANTHROPIC_API_KEY is not set',
    });
  }

  // Test a minimal Anthropic API call (non-streaming)
  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5',
        max_tokens: 20,
        messages: [{ role: 'user', content: 'Say "ok"' }],
      }),
    });

    const data = await response.json();

    return res.status(200).json({
      status: response.ok ? 'success' : 'api_error',
      httpStatus: response.status,
      keyPrefix: apiKey.slice(0, 15) + '...',
      response: data,
    });
  } catch (err) {
    return res.status(200).json({
      status: 'fetch_error',
      message: err.message,
    });
  }
}

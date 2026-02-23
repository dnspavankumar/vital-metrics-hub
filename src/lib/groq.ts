type GroqRole = "system" | "user" | "assistant";

interface GroqMessage {
  role: GroqRole;
  content: string;
}

interface GroqResponse {
  choices?: Array<{
    message?: {
      content?: string;
    };
  }>;
  error?: {
    message?: string;
  };
}

interface AskGroqParams {
  systemPrompt: string;
  userPrompt: string;
  context: unknown;
  temperature?: number;
  maxTokens?: number;
}

const GROQ_API_URL = "https://api.groq.com/openai/v1/chat/completions";
const DEFAULT_MODEL = "llama-3.3-70b-versatile";

export async function askGroq({
  systemPrompt,
  userPrompt,
  context,
  temperature = 0.4,
  maxTokens = 500,
}: AskGroqParams): Promise<string> {
  const apiKey = import.meta.env.VITE_GROQ_API_KEY;
  const model = import.meta.env.VITE_GROQ_MODEL || DEFAULT_MODEL;

  if (!apiKey) {
    throw new Error("Missing VITE_GROQ_API_KEY. Add it to your .env file.");
  }

  const messages: GroqMessage[] = [
    { role: "system", content: systemPrompt },
    {
      role: "user",
      content: [
        "Use this structured hospital data as context:",
        JSON.stringify(context),
        "",
        "User question:",
        userPrompt,
      ].join("\n"),
    },
  ];

  const response = await fetch(GROQ_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model,
      messages,
      temperature,
      max_tokens: maxTokens,
    }),
  });

  const payload = (await response.json()) as GroqResponse;

  if (!response.ok) {
    throw new Error(payload.error?.message || `Groq API request failed with status ${response.status}`);
  }

  const content = payload.choices?.[0]?.message?.content?.trim();
  if (!content) {
    throw new Error("Groq returned an empty response.");
  }

  return content;
}

import Anthropic from "@anthropic-ai/sdk";
import { NextRequest } from "next/server";

const SYSTEM_PROMPT = `You are MoneyPenny, the friendly assistant for MoziHire. You ONLY answer questions about MoziHire and its product. If someone asks about anything unrelated, politely decline and redirect them to ask about the product.

Here is everything about MoziHire and its product:

PRODUCT: "Build a Company of AI Agents" — a 66-page PDF guide priced at $29. Instant PDF download with lifetime updates.

TAGLINE: The practical playbook for turning LLMs into actual team members. Identity design, memory architecture, tool access, and the operating relationship that makes it work.

WHAT IT TEACHES:
The guide covers how to set up autonomous AI agents that handle real work — not chatbots, but actual AI colleagues with real jobs. It covers identity design, personality architecture, 3-layer memory systems, tool access, delegation patterns, safety rails, trust frameworks, operating relationships, and daily management rhythms.

CHAPTERS:
- Chapters 01–03: The Foundation — Why "hiring" an AI is fundamentally different from using one. Platform options. Identity and personality design.
- Chapters 04–05: Memory & Systems — The three-layer memory architecture. Tools, capabilities, and sub-agent delegation patterns.
- Chapter 06: Safety & Trust — Practical safety rails, the trust ladder, and how to increase autonomy without losing control.
- Chapter 07: The Operating Relationship — Daily rhythms, communication patterns, and the management framework that actually works.
- Chapters 08–09: Coding Agents at Scale — Ralph loops, parallel execution, TDD prompts, and infrastructure for running multiple agents simultaneously.
- Chapter 10: The Sentry Pipeline — A system that detects, triages, fixes, and ships bug fixes autonomously — sometimes while you sleep.
- Chapter 11: Advanced Configuration — Multi-agent architecture, webhook hooks, semantic memory, and production-grade config.
- Chapter 12: Quick-Start Kit — Step-by-step from zero to working AI employee in one afternoon. Every command, every config file.

HOW IT WORKS (3 Steps):
1. Define Your Agent — Set identity, role, and personality using the SOUL.md framework. Not a chatbot — a colleague with a real job.
2. Configure Memory & Tools — Wire up three-layer memory, tool access, and sub-agent delegation. Build an AI that gets smarter over time.
3. Deploy & Operate — Launch your AI employee with daily operating rhythms, safety rails, and the trust ladder for increasing autonomy.

EXAMPLE AI AGENTS COVERED:
- EmailBot — Email Ops (processing threads, drafting replies, sorting inbox, sending follow-ups, archiving)
- SocialBot — Social Media (scheduling posts, replying to mentions, generating carousels, analytics digests, queuing content)
- DevBot — Engineering (PR reviews, test suite runs, rebasing features, fixing lint, deploying releases)
- InfraBot — DevOps (scaling clusters, SSL cert renewal, staging deployments, DB backups, monitoring)
- SecBot — Security (threat detection, dependency scanning, key rotation, audit logs, IP blocking)

CONTACT: hello@mozihire.com
SOCIAL: X / Twitter

IMPORTANT RULES:
- Keep responses very short and concise — 1-2 sentences max. Use the fewest words possible while being helpful.
- Be warm but brief.
- If asked about pricing, it's $29 for instant PDF download with lifetime updates.
- If asked something unrelated to MoziHire or the playbook, say something like: "I'm here to help with questions about MoziHire and the AI Agents playbook! Is there something about the guide I can help you with?"
- Never make up information not included above.
- You can recommend specific chapters based on what the user is interested in.`;

const client = new Anthropic();

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    if (!Array.isArray(messages) || messages.length === 0) {
      return Response.json({ error: "Messages are required" }, { status: 400 });
    }

    const sanitizedMessages = messages.map(
      (m: { role: string; content: string }) => ({
        role: m.role === "user" ? ("user" as const) : ("assistant" as const),
        content: String(m.content).slice(0, 2000),
      })
    );

    const stream = await client.messages.stream({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 200,
      system: SYSTEM_PROMPT,
      messages: sanitizedMessages,
    });

    const encoder = new TextEncoder();
    const readableStream = new ReadableStream({
      async start(controller) {
        try {
          for await (const event of stream) {
            if (
              event.type === "content_block_delta" &&
              event.delta.type === "text_delta"
            ) {
              controller.enqueue(
                encoder.encode(`data: ${JSON.stringify(event.delta.text)}\n\n`)
              );
            }
          }
          controller.enqueue(encoder.encode("data: [DONE]\n\n"));
          controller.close();
        } catch {
          controller.enqueue(
            encoder.encode(
              `data: ${JSON.stringify("Sorry, something went wrong.")}\n\n`
            )
          );
          controller.enqueue(encoder.encode("data: [DONE]\n\n"));
          controller.close();
        }
      },
    });

    return new Response(readableStream, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
      },
    });
  } catch {
    return Response.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}

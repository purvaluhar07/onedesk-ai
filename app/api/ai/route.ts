import { GoogleGenAI } from "@google/genai";

import { getAgent } from "@/agents/router";
import { getEmailPrompt } from "@/agents/emailAgent";
import { getSchedulerPrompt } from "@/agents/schedulerAgent";
import { getResearchPrompt } from "@/agents/researchAgent";
import { getDocumentPrompt } from "@/agents/documentAgent";
import { getReminderPrompt } from "@/agents/reminderAgent";
import { getGeneralPrompt } from "@/agents/generalAgent";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    const agent = getAgent(message);

    let prompt = "";

    switch (agent) {
      case "email":
        prompt = getEmailPrompt(message);
        break;

      case "scheduler":
        prompt = getSchedulerPrompt(message);
        break;

      case "research":
        prompt = getResearchPrompt(message);
        break;

      case "document":
        prompt = getDocumentPrompt(message);
        break;

      case "reminder":
        prompt = getReminderPrompt(message);
        break;

      default:
        prompt = getGeneralPrompt(message);
    }

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

   let text = response.text ?? "";

// Remove markdown code fences if Gemini adds them
text = text
  .replace(/```json/g, "")
  .replace(/```/g, "")
  .trim();

try {
  const json = JSON.parse(text);

  return Response.json({
    reply: json,
  });
} catch {
  console.log("AI Response:", text);

  return Response.json({
    reply: {
      type: "text",
      text,
    },
  });
}

  } catch (error) {
    console.error(error);

    return Response.json(
      {
        reply: {
          type: "text",
          text: "Something went wrong.",
        },
      },
      { status: 500 }
    );
  }
}
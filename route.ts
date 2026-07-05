import { GoogleGenAI } from "@google/genai";

import { getAgent } from "@/agents/router";
import { getEmailPrompt } from "@/agents/emailAgent";
import { getSchedulerPrompt } from "@/agents/schedulerAgent";
import { getResearchPrompt } from "@/agents/researchAgent";
import { getDocumentPrompt } from "@/agents/documentAgent";
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

      default:
        prompt = getGeneralPrompt(message);
    }

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        temperature: 0.2,
        maxOutputTokens: 500,
      },
    });

    const text = response.text.trim();

    try {
      const json = JSON.parse(text);
      return Response.json(json);
    } catch {
      return Response.json({
        type: "general",
        text,
      });
    }
  } catch (error) {
    console.error("Gemini Error:", error);

    return Response.json(
      {
        type: "general",
        text: "Something went wrong while generating the response.",
      },
      { status: 500 }
    );
  }
}
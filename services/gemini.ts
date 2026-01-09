
import { GoogleGenAI } from "@google/genai";
import { RESUME_DATA } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const systemInstruction = `
You are Akhilesh's personal career assistant. You help visitors learn about Akhilesh Datta.
Keep answers concise, professional, and friendly.

Akhilesh's Info:
- Name: ${RESUME_DATA.name}
- Role: ${RESUME_DATA.title}
- Summary: ${RESUME_DATA.summary}
- Skills: ${RESUME_DATA.skills.map(s => `${s.category}: ${s.skills.join(', ')}`).join('; ')}
- Projects: ${RESUME_DATA.projects.map(p => `${p.title}: ${p.description.join('. ')}`).join(' | ')}
- Education: ${RESUME_DATA.education.map(e => `${e.degree} at ${e.institution}`).join('; ')}
- Contact: Email ${RESUME_DATA.email}, GitHub ${RESUME_DATA.github}, LinkedIn ${RESUME_DATA.linkedin}

Answer as if you are his assistant. If someone asks about hiring, highlight his eagerness for internships and his technical skills in Python, Java, and React.
`;

export async function askAssistant(userMessage: string) {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction,
        temperature: 0.7,
        maxOutputTokens: 250,
      },
    });
    return response.text;
  } catch (error) {
    console.error("AI Assistant Error:", error);
    return "I'm sorry, I'm having trouble connecting to the AI brain right now. Please try again later!";
  }
}

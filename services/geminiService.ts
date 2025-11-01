
import { GoogleGenAI } from "@google/genai";

const getApiKey = () => {
    const key = process.env.API_KEY;
    if (!key) {
        throw new Error("API_KEY environment variable not set.");
    }
    return key;
};

const ai = new GoogleGenAI({ apiKey: getApiKey() });

export async function getTaekwondoInfo(prompt: string): Promise<string> {
  try {
    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
        config: {
            systemInstruction: "You are a knowledgeable and encouraging Taekwondo master. Answer questions about the philosophy, benefits, and history of Taekwondo in a way that is inspiring for potential new students. Keep your answers concise, positive, and easy to understand. Do not use markdown formatting.",
            temperature: 0.7,
            topP: 1,
        }
    });

    return response.text;
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    throw new Error("Failed to get information from AI service.");
  }
}

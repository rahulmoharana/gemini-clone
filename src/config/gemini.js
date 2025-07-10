import { GoogleGenAI } from "@google/genai";

// Replace this with your actual secure API key management
const apiKey = 'AIzaSyBHpGMFnU2QVHdSKdlDdvoOxDqTWuR2KIs';

const ai = new GoogleGenAI({ apiKey });

async function runChat(prompt) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `${prompt}`,
      config: {
        thinkingConfig: {
          thinkingBudget: 0, // Disables thinking
        },
      },
    });
    return response.text; // This will now correctly show the prompt passed when calling runChat
  } catch (error) {
    console.error("Error generating content:", error);
  }
}

// Exporting the function itself, not calling it
export default runChat;

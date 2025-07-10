import { GoogleGenAI } from "@google/genai";
import { CAMPAIGN_DATA } from "../constants";

// Lazy-initialize the AI client to prevent crash on load if process.env is not defined in the browser.
// This ensures the main application renders, and any AI-related errors happen only upon interaction.
const getAiClient = () => {
    const apiKey = import.meta.env.VITE_API_KEY;
    if (!apiKey) {
        // This error will be caught and displayed to the user in the UI.
        throw new Error("API_KEY environment variable not set.");
    }
    return new GoogleGenAI({ apiKey });
};

export const getAiAnalysis = async (userPrompt: string): Promise<string> => {
    try {
        const ai = getAiClient();
        const fullPrompt = `
Here is a summary of the Instagram advertising campaign data:
${JSON.stringify(CAMPAIGN_DATA, null, 2)}

Based on this data, please answer the following question:
"${userPrompt}"
`;
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: fullPrompt,
            config: {
              systemInstruction: "You are a world-class marketing data analyst. Your task is to analyze the provided Instagram advertising campaign data and answer the user's specific question. Provide concise, actionable, and data-driven insights. Format your response using markdown for readability, including lists, bold text, and clear headings where appropriate.",
            }
        });
        
        return response.text;
    } catch (error) {
        console.error("Error generating AI analysis:", error);
        if (error instanceof Error) {
            if (error.message.includes("API_KEY")) {
                return "An error occurred: AI analysis is unavailable. The API_KEY is not configured in the environment. Please ensure it is set up correctly.";
            }
            return `An error occurred while generating the analysis: ${error.message}`;
        }
        return "An unknown error occurred while generating the analysis.";
    }
};

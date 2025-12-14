
import { GoogleGenAI } from "@google/genai";

export const getPoeticQuote = async (context: string): Promise<string> => {
  try {
    if (!process.env.API_KEY) {
      throw new Error("API_KEY environment variable not set");
    }
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

    const prompt = `Based on the following letter context, provide a short (one or two lines), beautiful, and poetic quote in Sinhala. The quote should be suitable to be added to a personal letter. Only return the quote itself, without any introductory text. Context: "${context}"`;
    
    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
    });

    return response.text.trim();
  } catch (error) {
    console.error("Error fetching poetic quote from Gemini:", error);
    return "සිතුවිලි මල් මෙන් පිපේවා!"; // Default quote on error
  }
};

import { GoogleGenAI } from "@google/genai";
import { DietLevel, Difficulty, Language } from "../types";

const apiKey = (typeof process !== 'undefined' && process.env?.API_KEY) || '';

// Initialize safely. If no key, we will handle errors gracefully in components.
let ai: GoogleGenAI | null = null;
if (apiKey) {
  ai = new GoogleGenAI({ apiKey });
}

const getLanguageInstruction = (lang: Language) => {
  switch(lang) {
    case 'es': return "Answer in Spanish.";
    case 'pt': return "Answer in Brazilian Portuguese.";
    default: return "Answer in English.";
  }
}

export const generateMealIdea = async (level: DietLevel, mealType: string, lang: Language): Promise<string> => {
  if (!ai) return "API Key missing. Please configure your environment.";

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Suggest a delicious ${mealType} for someone on the "${level}" Carnivore Diet. 
      Keep it simple, focus on ingredients allowed in this level. 
      ${getLanguageInstruction(lang)}
      Format: **Meal Name**\n\nBrief description.\n\nIngredients list.`,
    });
    return response.text || "Could not generate meal.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Error generating content. Please try again.";
  }
};

export const generateWorkoutTip = async (difficulty: Difficulty, focus: string, lang: Language): Promise<string> => {
  if (!ai) return "API Key missing.";

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Give me a quick 1-paragraph tip or modification for a "${difficulty}" home workout focusing on ${focus}. Be motivating. ${getLanguageInstruction(lang)}`,
    });
    return response.text || "Keep pushing!";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Stay consistent!";
  }
};

export const askCoach = async (question: string, lang: Language): Promise<string> => {
  if (!ai) return "API Key missing.";

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `You are an expert Carnivore Diet and Fitness coach. Answer this question concisely (max 3 sentences): "${question}". ${getLanguageInstruction(lang)}`,
    });
    return response.text || "I couldn't understand that.";
  } catch (error) {
    return "Error connecting to the coach.";
  }
}
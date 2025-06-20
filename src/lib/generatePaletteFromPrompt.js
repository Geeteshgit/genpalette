import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function generateAIPalettes(promptText) {
  try {
    const prompt = `
      You are a professional color palette generator for UI/UX designers.
      Given a theme or idea: "${promptText}", generate exactly 12 palettes. Each palette is an array of exactly 5 unique hex color codes.
      Structure your output as follows:
      The first **4 palettes** should be dark to light shades of the given theme based colors moving from a little shade of that color to a light shade of the same color. 
      The next **2 palettes** should be diverse **shades and tints** of the theme-based colors — a mix of **light and dark variations** representing different moods (e.g., soft, bold, muted, deep, pastel).
      The next **6 palettes** should be optimized for **website design**, including color combinations suitable for:
      - backgrounds,
      - text,
      - buttons,
      - links,
      - accents.
      All palettes must maintain good contrast and visual harmony.
      Return the result in strict format like this:
      [
        ["#111111", "#222222", "#333333", "#444444", "#555555"],
        ...
      ]
      Only return the array. No extra commentary, no labels, no explanation — just a raw array of 12 subarrays, each with 5 hex codes.
      `
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });
    const text = response.text;

    const cleaned = text
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    const palettes = JSON.parse(cleaned);
    return palettes;
  } catch (err) {
    console.error(err.message);
  }
}

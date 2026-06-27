import { GoogleGenerativeAI } from '@google/generative-ai';

if (!process.env.REACT_APP_GEMINI_API_KEY) {
	throw new Error('REACT_APP_GEMINI_API_KEY is not set in .env file');
}

const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_API_KEY);

export async function validateIdea(idea) {
	const model = genAI.getGenerativeModel({
		model: 'gemini-3.5-flash',
		generationConfig: {
			temperature: 0.4,
			responseMimeType: 'application/json',
		},
		systemInstruction:
			'You are Thales, a rigorous AI product validator used by early-stage founders. ' +
			'Given a product idea, you return a structured JSON analysis. ' +
			'Be direct, specific, and evidence-based. Do not be encouraging for its own sake.',
	});

	const prompt = `
Analyze this product idea: "${idea}"

Return ONLY valid JSON — no markdown fences, no preamble:

{
  "productName": "string",
  "oneLiner": "string — one crisp sentence describing the product",
  "validationScore": number 0–100,
  "verdict": "string — one sentence explaining the score",

  "scores": {
    "marketSize": number 0–10,
    "competition": number 0–10,
    "feasibility": number 0–10,
    "monetization": number 0–10,
    "timing": number 0–10,
    "founder_fit": number 0–10
  },

  "mvpItems": [
    { "feature": "string", "rationale": "string", "effort": "S" | "M" | "L" }
  ],

  "competitorStrength": [
    { "name": "string", "strength": number 0–100 }
  ],

  "icp": "markdown string",
  "competitors": "markdown string — use a pipe table with columns: Competitor | Category | Positioning",
  "swot": "markdown string — use a pipe table with columns: Quadrant | Points",
  "risks": "markdown string",
  "mvpFeatures": "markdown string",
  "pricing": "markdown string",
  "landingPage": "markdown string — headline, subheadline, 3 value props, CTA, social proof blurb",

  "leanCanvas": {
    "problem": "string",
    "solution": "string",
    "uniqueValueProp": "string",
    "unfairAdvantage": "string",
    "customerSegments": "string",
    "keyMetrics": "string",
    "channels": "string",
    "costStructure": "string",
    "revenueStreams": "string"
  }
}`;

	const result = await model.generateContent(prompt);
	const text = result.response.text();

	// Strip markdown fences if Gemini wraps the response anyway
	const clean = text.replace(/^```json\s*/i, '').replace(/```\s*$/i, '').trim();
	return JSON.parse(clean);
}

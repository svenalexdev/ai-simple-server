import { GoogleGenAI } from '@google/genai';
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

let history = [
  {
    role: 'user',
    parts: [{ text: 'Hello' }]
  },
  {
    role: 'model',
    parts: [{ text: 'Great to meet you. What would you like to know?' }]
  }
];

export const createChat = async (req, res) => {
  const {
    body: { message }
  } = req;

  const chat = ai.chats.create({
    model: 'gemini-2.0-flash',
    history
  });
  const aiResponse = await chat.sendMessage({ message });

  history = chat.getHistory();

  console.log(JSON.stringify(history));

  res.json({ message: aiResponse.text });
};

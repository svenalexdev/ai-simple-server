import { GoogleGenAI } from '@google/genai';
import Chat from '../models/Chat.js';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const model = 'gemini-2.0-flash';
const systemInstruction = 'You are Gollum after becoming a senior web developer';

const createSimpleChat = async (req, res) => {
  const {
    body: { message }
  } = req;

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

  const chat = ai.chats.create({
    model,
    history,
    config: {
      systemInstruction
    }
  });

  const aiResponse = await chat.sendMessage({ message });

  history = chat.getHistory();

  res.json({ aiResponse: aiResponse.text });
};

const createChat = async (req, res) => {
  const { message, chatId } = req.body;

  let currentChat = await Chat.findById(chatId);
  if (!currentChat) {
    currentChat = await Chat.create({});
  }

  const chat = ai.chats.create({
    model,
    // stringifying and then parsing is like using .lean(). It will turn currentChat into a plain JavaScript Object
    // We don't use .lean(), because we later need to .save()
    history: JSON.parse(JSON.stringify(currentChat.history)),
    config: {
      systemInstruction
    }
  });
  const aiResponse = await chat.sendMessage({ message });

  currentChat.history = chat.getHistory();

  await currentChat.save();

  res.json({ aiResponse: aiResponse.text, chatId: currentChat._id });
};

export { createSimpleChat, createChat };

# OpenAI Proxy API

This project provides a proxy for OpenAI API requests, allowing you to manage API requests and responses in development and production modes.

## Installation

- Fork and Clone this project

- Install dependencies:

```bash
npm install
```

- Create `.env` file at the root of the project with a variable `GEMINI_API_KEY` with the value of your Gemini secret key
- Add a second variable `MONGO_URI` and set it to your MongoDB Connection string
- Run

```bash
npm run dev
```

## Endpoints

Currently, this API supports

- Simple Chat: `POST` `/chat/simple`
  - A basic implementation, holds the chat history in memory
- Chat: `POST` `/chat`
  - Chat history is stored in a MongoDB database

## Sample request

### Body

```json
{
  "message": "How do I save to local storage?",
  "chatId": "6849725aa34cc4996b4ea6ee" // not available on simple chat, optional on chat
}
```

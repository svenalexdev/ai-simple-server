import { Router } from 'express';
import { createSimpleChat, createChat } from '../controllers/chats.js';

const chatRouter = Router();

chatRouter.post('/simple', createSimpleChat);
chatRouter.post('/', createChat);

export default chatRouter;

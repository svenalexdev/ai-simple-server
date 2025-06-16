import { z } from 'zod/v4';

export const userMessageSchema = z.object({
  message: z.string().min(1, 'Must have a message'),
  chatId: z.string().length(24).optional()
});

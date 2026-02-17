import { Router } from 'express';
import ChatController from '@/controllers/chat.controller.js';
import { authenticate } from '@/middlewares/jwt.middleware.js';

const route = Router();

/* ---------------------------------------------------------- */
/*                      Authentication                        */
/* ---------------------------------------------------------- */
route.use(authenticate);

// POST: /conversations: - Start a direct conversation
route.post('/conversations', ChatController.startConversation);

export default route;

import { Router } from 'express';
import ChatController from '@/controllers/chat.controller.js';
import { authenticate } from '@/middlewares/jwt.middleware.js';

const route = Router();

/* ---------------------------------------------------------- */
/*                      Authentication                        */
/* ---------------------------------------------------------- */
route.use(authenticate);

// GET: /conversations: - Get user conversations
route.get('/conversations', ChatController.getConversations);

// GET: /conversations/:conversationId/messages: - Get messages in a conversation  
route.get('/conversations/:conversationId/messages', ChatController.getMessages);

// GET: /users/search: - Search users
route.get('/users/search', ChatController.searchUsers);

// GET: /users/online: - Get online users
route.get('/users/online', ChatController.getOnlineUsers);

export default route;

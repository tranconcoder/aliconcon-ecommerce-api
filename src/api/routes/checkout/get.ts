import { Router } from 'express';
import CheckoutController from '@/controllers/checkout.controller.js';
import catchError from '@/middlewares/catchError.middleware.js';
import { authenticate } from '@/middlewares/jwt.middleware.js';

const route = Router();

route.use(authenticate);

// GET: /: - Get user's checkout data
route.get('/', catchError(CheckoutController.getCheckout));

export default route;

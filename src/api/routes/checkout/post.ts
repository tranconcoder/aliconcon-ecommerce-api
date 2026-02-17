import { Router } from 'express';
import CheckoutController from '@/controllers/checkout.controller.js';
import catchError from '@/middlewares/catchError.middleware.js';
import { authenticate } from '@/middlewares/jwt.middleware.js';
import { validateCheckout } from '@/validations/zod/checkout.zod.js';

const route = Router();

route.use(authenticate);

// POST: /: - Create/Update checkout
route.post('/', validateCheckout, catchError(CheckoutController.checkout));

export default route;

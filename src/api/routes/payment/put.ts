import { Router } from 'express';
import paymentController from '@/controllers/payment.controller.js';
import catchError from '@/middlewares/catchError.middleware.js';
import { authenticate } from '@/middlewares/jwt.middleware.js';

const route = Router();

route.use(authenticate);

// PUT: /refund/status: - Update refund status
route.put(
    '/refund/status',
    catchError(paymentController.updateRefundStatus)
);

export default route;

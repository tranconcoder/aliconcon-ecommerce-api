import { Router } from 'express';
import paymentController from '@/controllers/payment.controller.js';
import catchError from '@/middlewares/catchError.middleware.js';
import { authenticate } from '@/middlewares/jwt.middleware.js';
import {
    validateCreateVNPayPayment,
    validatePaymentQuery
} from '@/validations/zod/payment.zod.js';

const route = Router();

/* ---------------------------------------------------------- */
/*                      Validated routes                      */
/* ---------------------------------------------------------- */
route.use(authenticate);

// POST: /vnpay/create: - Create VNPay payment URL
route.post(
    '/vnpay/create',
    validateCreateVNPayPayment,
    catchError(paymentController.createVNPayPayment)
);

// POST: /update-status: - Update payment status by payment ID
route.post(
    '/update-status',
    catchError(paymentController.updatePaymentStatus)
);

// POST: /refund/create: - Create a refund for a payment
route.post(
    '/refund/create',
    catchError(paymentController.createRefund)
);

// POST: /refund/vnpay/process: - Process VNPay refund
route.post(
    '/refund/vnpay/process',
    catchError(paymentController.processVNPayRefund)
);

export default route;

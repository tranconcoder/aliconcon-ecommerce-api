import { Router } from 'express';
import paymentController from '@/controllers/payment.controller.js';
import catchError from '@/middlewares/catchError.middleware.js';
import {
    validateVNPayReturn,
    validatePaymentQuery
} from '@/validations/zod/payment.zod.js';
import { authenticate } from '@/middlewares/jwt.middleware.js';

const route = Router();

// GET: /vnpay/return: - VNPay return URL (public)
route.get(
    '/vnpay/return',
    validateVNPayReturn,
    catchError(paymentController.handleVNPayReturn as any)
);

// GET: /vnpay-ipn: - VNPay IPN URL (public)
route.get(
    '/vnpay-ipn',
    validateVNPayReturn,
    catchError(paymentController.handleVNPayIPN as any)
);

/* ---------------------------------------------------------- */
/*                      Validated routes                      */
/* ---------------------------------------------------------- */
const authenticatedRoute = Router();
authenticatedRoute.use(authenticate);
route.use(authenticatedRoute)

// GET: /txn/:txnRef: - Get payment by transaction reference
authenticatedRoute.get(
    '/txn/:txnRef',
    catchError(paymentController.getPaymentByTxnRef)
);

// GET: /order/:orderId: - Get payments by order ID
authenticatedRoute.get(
    '/order/:orderId',
    catchError(paymentController.getPaymentsByOrderId)
);

// GET: /: - Get payments with filters
authenticatedRoute.get(
    '/',
    validatePaymentQuery,
    catchError(paymentController.getPayments)
);

// GET: /:paymentId/refunds: - Get refund history for a payment
authenticatedRoute.get(
    '/:paymentId/refunds',
    catchError(paymentController.getRefundHistory)
);

// GET: /refunds/status/:status: - Get refunds by status
authenticatedRoute.get(
    '/refunds/status/:status',
    catchError(paymentController.getRefundsByStatus)
);

export default route;

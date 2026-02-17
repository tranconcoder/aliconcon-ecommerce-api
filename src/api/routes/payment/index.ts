import { Router } from 'express';
import getRoute from './get.js';
import postRoute from './post.js';
import putRoute from './put.js';
import paymentController from '@/controllers/payment.controller.js';
import catchError from '@/middlewares/catchError.middleware.js';

const paymentRoute = Router();

/* ------------------------------------------------------ */
/*                         GET                            */
/* ------------------------------------------------------ */
paymentRoute.use('/', getRoute);

/* ------------------------------------------------------ */
/*                         POST                           */
/* ------------------------------------------------------ */
// Special case for IPN which can be POST/GET and is Public
paymentRoute.post(
    '/vnpay-ipn',
    catchError(paymentController.handleVNPayIPN as any)
);

paymentRoute.use('/', postRoute);

/* ------------------------------------------------------ */
/*                         PUT                            */
/* ------------------------------------------------------ */
paymentRoute.use('/', putRoute);

export default paymentRoute;
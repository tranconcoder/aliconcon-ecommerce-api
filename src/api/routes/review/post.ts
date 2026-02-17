import { Router } from 'express';
import reviewController from '@/controllers/review.controller.js';
import catchError from '@/middlewares/catchError.middleware.js';
import { authenticate } from '@/middlewares/jwt.middleware.js';
import { validateCreateReview } from '@/validations/zod/review.zod.js';

const route = Router();

route.use(authenticate);

/* ----------------------- Create review ----------------------- */
// POST: /create: - Create review
route.post(
    '/create',
    validateCreateReview,
    catchError(reviewController.createReview)
);

export default route;

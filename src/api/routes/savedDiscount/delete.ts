import { Router } from 'express';
import SavedDiscountController from '@/controllers/savedDiscount.controller.js';
import catchError from '@/middlewares/catchError.middleware.js';
import { authenticate } from '@/middlewares/jwt.middleware.js';
import { validateParamsId } from '@/configs/joi.config.js';

const route = Router();

route.use(authenticate);

// DELETE: /:discountId: - Unsave a discount
route.delete(
    '/:discountId',
    validateParamsId('discountId'),
    catchError(SavedDiscountController.unsaveDiscount)
);

export default route;

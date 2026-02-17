import { Router } from 'express';
import SavedDiscountController from '@/controllers/savedDiscount.controller.js';
import catchError from '@/middlewares/catchError.middleware.js';
import { authenticate } from '@/middlewares/jwt.middleware.js';
import { validateParamsId, validatePagination } from '@/configs/joi.config.js';

const route = Router();

route.use(authenticate);

// GET: /: - Get all saved discounts for user
route.get(
    '/',
    validatePagination,
    catchError(SavedDiscountController.getUserSavedDiscounts)
);

// GET: /ids: - Get user saved discount IDs
route.get(
    '/ids',
    catchError(SavedDiscountController.getUserSavedDiscountIds)
);

// GET: /check/:discountId: - Check if a discount is saved
route.get(
    '/check/:discountId',
    validateParamsId('discountId'),
    catchError(SavedDiscountController.isDiscountSaved)
);

export default route;

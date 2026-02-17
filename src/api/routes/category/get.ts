import { Router } from 'express';
import { validateGetAllCategories } from '@/validations/zod/category.zod.js';
import catchError from '@/middlewares/catchError.middleware.js';
import categoryController from '@/controllers/category.controller.js';

const route = Router();

// GET: /: - Get all categories
route.get(
    '/',
    validateGetAllCategories,
    catchError(categoryController.getAlLCategories)
);

export default route;

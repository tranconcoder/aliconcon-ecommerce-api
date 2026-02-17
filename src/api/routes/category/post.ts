import { Router } from 'express';
import { Resources } from '@/enums/rbac.enum.js';
import { authorization } from '@/middlewares/authorization.middleware.js';
import { cleanUpMediaOnError, uploadSingleMedia } from '@/middlewares/media.middleware.js';
import { uploadCategory } from '@/middlewares/multer.middleware.js';
import { validateCreateCategory } from '@/validations/zod/category.zod.js';
import catchError from '@/middlewares/catchError.middleware.js';
import categoryController from '@/controllers/category.controller.js';
import { authenticate } from '@/middlewares/jwt.middleware.js';

const route = Router();

// POST: /create: - Create category
route.post(
    '/create',
    authenticate,
    authorization('createAny', Resources.CATEGORY),
    uploadSingleMedia('category_icon', uploadCategory, 'Category icon'),
    validateCreateCategory,
    catchError(categoryController.createCategory),
    cleanUpMediaOnError
);

export default route;

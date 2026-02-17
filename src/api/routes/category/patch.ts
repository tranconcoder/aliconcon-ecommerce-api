import { Router } from 'express';
import { Resources } from '@/enums/rbac.enum.js';
import { authorization } from '@/middlewares/authorization.middleware.js';
import { cleanUpMediaOnError, uploadSingleMedia } from '@/middlewares/media.middleware.js';
import { uploadCategory } from '@/middlewares/multer.middleware.js';
import { validateUpdateCategory } from '@/validations/zod/category.zod.js';
import catchError from '@/middlewares/catchError.middleware.js';
import categoryController from '@/controllers/category.controller.js';
import { authenticate } from '@/middlewares/jwt.middleware.js';
import { validateParamsId } from '@/configs/joi.config.js';

const route = Router();

// PATCH: /:_id: - Update category
route.patch(
    '/:_id',
    authenticate,
    authorization('updateAny', Resources.CATEGORY),
    uploadSingleMedia('category_icon', uploadCategory, 'Category icon', false),
    validateParamsId('_id'),
    validateUpdateCategory,
    catchError(categoryController.updateCategory),
    cleanUpMediaOnError
);

export default route;

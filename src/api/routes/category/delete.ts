import { Router } from 'express';
import { Resources } from '@/enums/rbac.enum.js';
import { authorization } from '@/middlewares/authorization.middleware.js';
import catchError from '@/middlewares/catchError.middleware.js';
import categoryController from '@/controllers/category.controller.js';
import { authenticate } from '@/middlewares/jwt.middleware.js';
import { validateParamsId } from '@/configs/joi.config.js';

const route = Router();

/* ---------------------------------------------------------- */
/*                           Delete                           */
/* ---------------------------------------------------------- */

// DELETE: /:_id: - Soft delete category
route.delete(
    '/:_id',
    authenticate,
    authorization('deleteAny', Resources.CATEGORY),
    validateParamsId('_id'),
    catchError(categoryController.deleteCategory)
);

export default route;

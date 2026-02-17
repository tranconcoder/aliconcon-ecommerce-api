import { Router } from 'express';
import shopController from '@/controllers/shop.controller.js';
import { Authorization } from '@/enums/authorization.enum.js';
import { Resources } from '@/enums/rbac.enum.js';
import { authorization } from '@/middlewares/authorization.middleware.js';
import catchError from '@/middlewares/catchError.middleware.js';
import { authenticate } from '@/middlewares/jwt.middleware.js';
import { validatePagination } from '@/configs/joi.config.js';

const route = Router();

route.use(authenticate);

// GET: /pending: - Get all pending shop
route.get(
    '/pending',
    authorization(Authorization.READ_ANY, Resources.SHOP),
    validatePagination,
    catchError(shopController.getAllPendingShop)
);

export default route;

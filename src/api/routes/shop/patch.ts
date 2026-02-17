import { Router } from 'express';
import shopController from '@/controllers/shop.controller.js';
import { Authorization } from '@/enums/authorization.enum.js';
import { Resources } from '@/enums/rbac.enum.js';
import { authorization } from '@/middlewares/authorization.middleware.js';
import catchError from '@/middlewares/catchError.middleware.js';
import { authenticate } from '@/middlewares/jwt.middleware.js';
import { validateParamsId } from '@/configs/joi.config.js';

const route = Router();

route.use(authenticate);
route.use(authorization(Authorization.UPDATE_ANY, Resources.SHOP));

// PATCH: /approve/:shopId: - Approve shop
route.patch(
    '/approve/:shopId',
    validateParamsId('shopId'),
    catchError(shopController.approveShop)
);

// PATCH: /reject/:shopId: - Reject shop
route.patch(
    '/reject/:shopId',
    validateParamsId('shopId'),
    catchError(shopController.rejectShop)
);

export default route;

import { Router } from 'express';
import catchError from '@/middlewares/catchError.middleware.js';
import { authenticate } from '@/middlewares/jwt.middleware.js';
import { updateCart, validateUpdateCart } from '@/validations/zod/cart.zod.js';
import { generateValidateWithParamsId } from '@/middlewares/zod.middleware.js';
import cartController from '@/controllers/cart.controller.js';

const patchRouter = Router();
const patchRouterValidated = Router();

/* ---------------------------------------------------------- */
/*                      Validated routes                      */
/* ---------------------------------------------------------- */
patchRouter.use(authenticate, patchRouterValidated);

// PATCH: /update: - Update cart
patchRouterValidated.patch(
    '/update',
    validateUpdateCart,
    catchError(cartController.updateCart)
);

// PATCH: /increase/:skuId: - Increase cart quantity
patchRouterValidated.patch(
    '/increase/:skuId',
    generateValidateWithParamsId('skuId'),
    catchError(cartController.increaseCartQuantity)
);

// PATCH: /decrease/:skuId: - Decrease cart quantity
patchRouterValidated.patch(
    '/decrease/:skuId',
    generateValidateWithParamsId('skuId'),
    catchError(cartController.decreaseCartQuantity)
);

export default patchRouter;

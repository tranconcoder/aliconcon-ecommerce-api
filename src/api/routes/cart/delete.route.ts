import { Router } from 'express';

import catchError from '@/middlewares/catchError.middleware.js';
import { authenticate } from '@/middlewares/jwt.middleware.js';
import cartController from '@/controllers/cart.controller.js';
import { generateValidateWithParamsId } from '@/middlewares/zod.middleware.js';

const deleteRouter = Router();
const deleteRouterValidated = Router();

/* ---------------------------------------------------------- */
/*                      Route validated                       */
/* ---------------------------------------------------------- */
deleteRouter.use(authenticate, deleteRouterValidated);

// DELETE: /product/:skuId: - Delete product from cart
deleteRouterValidated.delete(
    '/product/:skuId',
    generateValidateWithParamsId('skuId'),
    catchError(cartController.deleteProductFromCart)
);

export default deleteRouter;

import { Router } from 'express';
import reviewController from '@/controllers/review.controller.js';
import catchError from '@/middlewares/catchError.middleware.js';
import { authenticate } from '@/middlewares/jwt.middleware.js';
import { validateParamsId } from '@/configs/joi.config.js';

const route = Router();

/* ------------------ Get reviews by SKU ------------------ */

// GET: /sku/:skuId: - Get last review by SKU
route.get(
    '/sku/:skuId',
    validateParamsId('skuId'),
    catchError(reviewController.getLastReviewBySkuId)
);

// GET: /sku/:skuId/all: - Get all reviews by SKU
route.get(
    '/sku/:skuId/all',
    validateParamsId('skuId'),
    catchError(reviewController.getReviewsBySkuId)
);

/* ------------------ Get reviews by shop ID -------------- */

// GET: /shop/:shopId: - Get reviews by shop ID
route.get(
    '/shop/:shopId',
    validateParamsId('shopId'),
    catchError(reviewController.getReviewsByShopId)
);

/* ---------------------------------------------------------- */
/*                      Validated routes                      */
/* ---------------------------------------------------------- */
const authenticatedRoute = Router();
authenticatedRoute.use(authenticate);
route.use(authenticatedRoute);

/* ------------------ Get reviews by order ------------------ */

// GET: /order/:orderId: - Get reviews by order
authenticatedRoute.get(
    '/order/:orderId',
    validateParamsId('orderId'),
    catchError(reviewController.getReviewsByOrderId)
);

/* ------------------ Get reviews by shop ------------------ */

// GET: /shop/own: - Get reviews by shop
authenticatedRoute.get(
    '/shop/own',
    catchError(reviewController.getReviewsByShop)
);

export default route;

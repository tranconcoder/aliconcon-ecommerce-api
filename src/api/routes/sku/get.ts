import { Router } from 'express';
import skuController from '@/controllers/sku.controller.js';
import catchError from '@/middlewares/catchError.middleware.js';
import { validateGetAllSKUQuery } from '@/validations/zod/sku.zod.js';
import {
    validatePagination,
    validateParamsId
} from '@/configs/joi.config.js';

const route = Router();

// GET: /popular: - Get popular SKU
route.get('/popular', validatePagination, catchError(skuController.getPopularSKUByAll));

// GET: /id/:skuId: - Get SKU by ID
route.get('/id/:skuId', validateParamsId('skuId'), catchError(skuController.getSKUById));

// GET: /shop/:shopId: - Get all SKU by shop
route.get(
    '/shop/:shopId',
    validateParamsId('shopId'),
    validatePagination,
    catchError(skuController.getAllSKUShopByAll)
);

// GET: /: - Get all SKU by all
route.get('/', validateGetAllSKUQuery, catchError(skuController.getAllSKUByAll));

export default route;

import { Router } from 'express';
import warehousesController from '@/controllers/warehouses.controller.js';
import { Resources } from '@/enums/rbac.enum.js';
import { authorization } from '@/middlewares/authorization.middleware.js';
import catchError from '@/middlewares/catchError.middleware.js';
import { authenticate } from '@/middlewares/jwt.middleware.js';
import {
    validateUpdateWarehouse,
    validateWarehouseParams
} from '@/validations/zod/warehouse.zod.js';

const route = Router();

route.use(authenticate);

// PATCH: /:warehouseId: - Update warehouse
route.patch(
    '/:warehouseId',
    validateWarehouseParams,
    authorization('updateOwn', Resources.WAREHOUSES),
    validateUpdateWarehouse,
    catchError(warehousesController.update)
);

export default route;

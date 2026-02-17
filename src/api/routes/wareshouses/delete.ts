import { Router } from 'express';
import warehousesController from '@/controllers/warehouses.controller.js';
import { Resources } from '@/enums/rbac.enum.js';
import { authorization } from '@/middlewares/authorization.middleware.js';
import catchError from '@/middlewares/catchError.middleware.js';
import { authenticate } from '@/middlewares/jwt.middleware.js';
import { validateWarehouseParams } from '@/validations/zod/warehouse.zod.js';

const route = Router();

route.use(authenticate);

// DELETE: /:warehouseId: - Delete warehouse
route.delete(
    '/:warehouseId',
    authorization('deleteOwn', Resources.WAREHOUSES),
    validateWarehouseParams,
    catchError(warehousesController.delete)
);

export default route;

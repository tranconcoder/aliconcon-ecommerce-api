import { Router } from 'express';
import warehousesController from '@/controllers/warehouses.controller.js';
import { Resources } from '@/enums/rbac.enum.js';
import { authorization } from '@/middlewares/authorization.middleware.js';
import catchError from '@/middlewares/catchError.middleware.js';
import { authenticate } from '@/middlewares/jwt.middleware.js';
import { validateCreateWarehouse } from '@/validations/zod/warehouse.zod.js';

const route = Router();

route.use(authenticate);

// POST: /create: - Create warehouse
route.post(
    '/create',
    authorization('createOwn', Resources.WAREHOUSES),
    validateCreateWarehouse,
    catchError(warehousesController.create)
);

export default route;

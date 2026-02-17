import { Router } from 'express';
import warehousesController from '@/controllers/warehouses.controller.js';
import { Resources } from '@/enums/rbac.enum.js';
import { authorization } from '@/middlewares/authorization.middleware.js';
import catchError from '@/middlewares/catchError.middleware.js';
import { authenticate } from '@/middlewares/jwt.middleware.js';

const route = Router();

route.use(authenticate);

// GET: /: - Get all warehouses
route.get(
    '/',
    authorization('readOwn', Resources.WAREHOUSES),
    catchError(warehousesController.getAll)
);

export default route;

import { validateParamsId } from '@/configs/joi.config.js';
import userController from '@/controllers/user.controller.js';
import catchError from '@/middlewares/catchError.middleware.js';
import { authenticate } from '@/middlewares/jwt.middleware.js';
import { Router } from 'express';

const getRoute = Router();
const getRouteValidated = Router();

// GET: /shop/:shopId: - Get shop info
getRoute.get('/shop/:shopId', validateParamsId('shopId'), catchError(userController.getShop));

/* ---------------------------------------------------------- */
/*                        Authenticate                        */
/* ---------------------------------------------------------- */
getRoute.use(getRouteValidated);
getRouteValidated.use(authenticate);

// GET: /profile: - Get user profile
getRouteValidated.get('/profile', catchError(userController.getProfile));

export default getRoute;

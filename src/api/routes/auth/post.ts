import { Router } from 'express';
import AuthController from '@/controllers/auth.controller.js';
import {
    validateLogin,
    validateNewToken,
    validateSignUp,
    validateSignUpShop
} from '@/validations/zod/auth.zod.js';
import catchError from '@/middlewares/catchError.middleware.js';
import { authenticate } from '@/middlewares/jwt.middleware.js';
import { AvatarFields } from '@/enums/media.enum.js';
import { checkCustomerAccountToRegisterShop } from '@/middlewares/auth.middleware.js';
import { cleanUpMediaOnError, uploadSingleMedia } from '@/middlewares/media.middleware.js';
import { uploadAvatar } from '@/middlewares/multer.middleware.js';

const route = Router();

// POST: /sign-up: - Sign up
route.post('/sign-up', validateSignUp, catchError(AuthController.signUp));

// POST: /sign-up-shop: - Sign up shop
route.post(
    '/sign-up-shop',
    uploadSingleMedia(AvatarFields.SHOP_LOGO, uploadAvatar, 'Shop logo'),
    validateSignUpShop,
    catchError(checkCustomerAccountToRegisterShop),
    catchError(AuthController.signUpShop),
    cleanUpMediaOnError
);

// POST: /login: - Login
route.post('/login', validateLogin, catchError(AuthController.login));

// POST: /new-token: - Refresh token
route.post('/new-token', validateNewToken, catchError(AuthController.newToken));

// POST: /logout: - Logout
route.post('/logout', authenticate, catchError(AuthController.logout));

export default route;

import { Router } from 'express';
import AuthController from '@/controllers/auth.controller.js';
import { validateForgotPassword } from '@/validations/zod/auth.zod.js';
import catchError from '@/middlewares/catchError.middleware.js';
import { authenticate } from '@/middlewares/jwt.middleware.js';

const route = Router();

// PATCH: /forgot-password: - Forgot password
route.patch(
    '/forgot-password',
    authenticate,
    validateForgotPassword,
    catchError(AuthController.forgotPassword)
);

export default route;

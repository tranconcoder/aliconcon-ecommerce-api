import { Router } from 'express';
import passport from 'passport';
import AuthController from '@/controllers/auth.controller.js';
import catchError from '@/middlewares/catchError.middleware.js';

const route = Router();

// GET: /google: - Google Auth
route.get('/google', passport.authenticate('google', {
    scope: [
        'profile',
        'email',
        'https://www.googleapis.com/auth/user.birthday.read',
        'https://www.googleapis.com/auth/user.gender.read',
        'https://www.googleapis.com/auth/user.phonenumbers.read'
    ]
}));

// GET: /google/callback: - Google Auth Callback
route.get(
    '/google/callback',
    passport.authenticate('google', { session: false }),
    AuthController.loginWithGoogleCallback
);

// GET: /test-account: - Get Test Account
route.get('/test-account', catchError(AuthController.getTestAccount));

export default route;

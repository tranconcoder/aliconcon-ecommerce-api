import { Router } from 'express';
import otpController from '@/controllers/otp.controller.js';
import catchError from '@/middlewares/catchError.middleware.js';
import { validateSendOTP, validateVerifyOTP } from '@/validations/zod/otp.zod.js';

const route = Router();

// POST: /send: - Send OTP
route.post('/send', validateSendOTP, catchError(otpController.sendOTP));

// POST: /verify: - Verify OTP
route.post('/verify', validateVerifyOTP, catchError(otpController.verifyOTP));

export default route;

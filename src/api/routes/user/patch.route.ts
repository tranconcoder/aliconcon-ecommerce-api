import { Router } from "express";

// Middlewares
import { authenticate } from "@/middlewares/jwt.middleware.js";
import catchError from "@/middlewares/catchError.middleware.js";

// Validations
import { validateUpdateProfile } from "@/validations/zod/user.zod.js";

// Controller
import userController from "@/controllers/user.controller.js";

const patchRoute = Router();
const patchRouteValidated = Router();

patchRoute.use(patchRouteValidated);
patchRouteValidated.use(authenticate);

// PATCH: /profile: - Update user profile
patchRouteValidated.patch(
    "/profile",
    validateUpdateProfile,
    catchError(userController.updateProfile));

export default patchRoute;
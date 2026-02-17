import { Router } from 'express';
import wishlistController from "@/controllers/wishlist.controller.js";
import catchError from "@/middlewares/catchError.middleware.js";
import { authenticate } from "@/middlewares/jwt.middleware.js";

const route = Router();

route.use(authenticate);

// GET: /: - Get wishlist
route.get("/", catchError(wishlistController.getWishlist));

export default route;

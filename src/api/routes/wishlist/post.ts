import { Router } from 'express';
import wishlistController from "@/controllers/wishlist.controller.js";
import catchError from "@/middlewares/catchError.middleware.js";
import { authenticate } from "@/middlewares/jwt.middleware.js";

const route = Router();

route.use(authenticate);

// POST: /add/:productId: - Add product to wishlist
route.post("/add/:productId", catchError(wishlistController.addProductToWishlist));

export default route;

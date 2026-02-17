import { Router } from 'express';
import wishlistController from "@/controllers/wishlist.controller.js";
import catchError from "@/middlewares/catchError.middleware.js";
import { authenticate } from "@/middlewares/jwt.middleware.js";

const route = Router();

route.use(authenticate);

// DELETE: /remove/:productId: - Remove product from wishlist
route.delete("/remove/:productId", catchError(wishlistController.removeProductFromWishlist));

export default route;

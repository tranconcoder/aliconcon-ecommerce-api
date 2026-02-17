import { Router } from 'express';
import AnalyticsController from '@/controllers/analytics.controller.js';
import { authenticate } from '@/middlewares/jwt.middleware.js';
import { authorization } from '@/middlewares/authorization.middleware.js';
import { Resources } from '@/enums/rbac.enum.js';

const router = Router();

// All routes require authentication
router.use(authenticate);

// GET: /dashboard: - Admin dashboard stats
router.get('/dashboard',
    authorization('readAny', Resources.ORDER), // Admin can read any order data for analytics
    AnalyticsController.getDashboardStats
);

// GET: /shop/dashboard: - Shop dashboard stats  
router.get('/shop/dashboard',
    authorization('readOwn', Resources.SHOP_ANALYTICS), // Shop can read own analytics
    AnalyticsController.getShopDashboardStats
);

export default router; 

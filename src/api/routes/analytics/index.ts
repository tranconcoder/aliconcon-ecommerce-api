import { Router } from 'express';
import getRoute from './get.js';

const router = Router();

/* ------------------------------------------------------ */
/*                         GET                            */
/* ------------------------------------------------------ */
router.use('/', getRoute);

export default router; 
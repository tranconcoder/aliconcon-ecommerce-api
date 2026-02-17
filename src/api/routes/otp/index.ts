import { Router } from 'express';
import postRoute from './post.js';

const router = Router();

/* ------------------------------------------------------ */
/*                         POST                           */
/* ------------------------------------------------------ */
router.use('/', postRoute);

export default router;

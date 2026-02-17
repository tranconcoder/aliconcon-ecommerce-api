import { Router } from 'express';
import getRoutes from './get.js';
import postRoutes from './post.js';
import patchRoutes from './patch.js';

const authRoute = Router();

/* ------------------------------------------------------ */
/*                         GET                            */
/* ------------------------------------------------------ */
authRoute.use('/', getRoutes);

/* ------------------------------------------------------ */
/*                         POST                           */
/* ------------------------------------------------------ */
authRoute.use('/', postRoutes);

/* ------------------------------------------------------ */
/*                        PATCH                           */
/* ------------------------------------------------------ */
authRoute.use('/', patchRoutes);

export default authRoute;

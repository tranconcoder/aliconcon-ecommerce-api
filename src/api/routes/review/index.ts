import { Router } from 'express';
import getRoute from './get.js';
import postRoute from './post.js';

const reviewRoute = Router();

/* ------------------------------------------------------ */
/*                         GET                            */
/* ------------------------------------------------------ */
reviewRoute.use('/', getRoute);

/* ------------------------------------------------------ */
/*                         POST                           */
/* ------------------------------------------------------ */
reviewRoute.use('/', postRoute);

export default reviewRoute;
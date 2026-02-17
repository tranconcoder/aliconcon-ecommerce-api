import { Router } from 'express';
import getRoute from './get.js';
import postRoute from './post.js';

const checkoutRoute = Router();

/* ------------------------------------------------------ */
/*                         GET                            */
/* ------------------------------------------------------ */
checkoutRoute.use('/', getRoute);

/* ------------------------------------------------------ */
/*                         POST                           */
/* ------------------------------------------------------ */
checkoutRoute.use('/', postRoute);

export default checkoutRoute;
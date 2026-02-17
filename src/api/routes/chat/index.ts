import { Router } from 'express';
import getRoute from './get.js';
import postRoute from './post.js';

const chatRoute = Router();

/* ------------------------------------------------------ */
/*                         GET                            */
/* ------------------------------------------------------ */
chatRoute.use('/', getRoute);

/* ------------------------------------------------------ */
/*                         POST                           */
/* ------------------------------------------------------ */
chatRoute.use('/', postRoute);

export default chatRoute;
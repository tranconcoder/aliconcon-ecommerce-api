import { Router } from 'express';
import getRoute from './get.js';
import postRoute from './post.js';
import deleteRoute from './delete.js';

const wishListRouter = Router();

/* ------------------------------------------------------ */
/*                         GET                            */
/* ------------------------------------------------------ */
wishListRouter.use('/', getRoute);

/* ------------------------------------------------------ */
/*                         POST                           */
/* ------------------------------------------------------ */
wishListRouter.use('/', postRoute);

/* ------------------------------------------------------ */
/*                        DELETE                          */
/* ------------------------------------------------------ */
wishListRouter.use('/', deleteRoute);

export default wishListRouter;
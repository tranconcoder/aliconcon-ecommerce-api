import { Router } from 'express';
import getRoute from './get.js';
import postRoute from './post.js';
import deleteRoute from './delete.js';

const savedDiscountRoute = Router();

/* ------------------------------------------------------ */
/*                         GET                            */
/* ------------------------------------------------------ */
savedDiscountRoute.use('/', getRoute);

/* ------------------------------------------------------ */
/*                         POST                           */
/* ------------------------------------------------------ */
savedDiscountRoute.use('/', postRoute);

/* ------------------------------------------------------ */
/*                        DELETE                          */
/* ------------------------------------------------------ */
savedDiscountRoute.use('/', deleteRoute);

export default savedDiscountRoute; 
import { Router } from 'express';
import getRoute from './get.js';
import postRoute from './post.js';
import patchRoute from './patch.js';
import deleteRoute from './delete.js';

const categoryRoute = Router();

/* ------------------------------------------------------ */
/*                         GET                            */
/* ------------------------------------------------------ */
categoryRoute.use('/', getRoute);

/* ------------------------------------------------------ */
/*                         POST                           */
/* ------------------------------------------------------ */
categoryRoute.use('/', postRoute);

/* ------------------------------------------------------ */
/*                        PATCH                           */
/* ------------------------------------------------------ */
categoryRoute.use('/', patchRoute);

/* ------------------------------------------------------ */
/*                        DELETE                          */
/* ------------------------------------------------------ */
categoryRoute.use('/', deleteRoute);

export default categoryRoute;

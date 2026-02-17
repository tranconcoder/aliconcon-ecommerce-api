import { Router } from 'express';
import getRoute from './get.js';
import postRoute from './post.js';
import patchRoute from './patch.js';
import deleteRoute from './delete.js';

const warehousesRouter = Router();

/* ------------------------------------------------------ */
/*                         GET                            */
/* ------------------------------------------------------ */
warehousesRouter.use('/', getRoute);

/* ------------------------------------------------------ */
/*                         POST                           */
/* ------------------------------------------------------ */
warehousesRouter.use('/', postRoute);

/* ------------------------------------------------------ */
/*                        PATCH                           */
/* ------------------------------------------------------ */
warehousesRouter.use('/', patchRoute);

/* ------------------------------------------------------ */
/*                        DELETE                          */
/* ------------------------------------------------------ */
warehousesRouter.use('/', deleteRoute);

export default warehousesRouter;

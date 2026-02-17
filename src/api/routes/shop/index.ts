import { Router } from 'express';
import getRoute from './get.js';
import patchRoute from './patch.js';

const shopRoute = Router();

/* ------------------------------------------------------ */
/*                         GET                            */
/* ------------------------------------------------------ */
shopRoute.use('/', getRoute);

/* ------------------------------------------------------ */
/*                        PATCH                           */
/* ------------------------------------------------------ */
shopRoute.use('/', patchRoute);

export default shopRoute;

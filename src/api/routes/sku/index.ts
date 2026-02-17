import { Router } from 'express';
import getRoute from './get.js';

const skuRouter = Router();

/* ------------------------------------------------------ */
/*                         GET                            */
/* ------------------------------------------------------ */
skuRouter.use('/', getRoute);

export default skuRouter;

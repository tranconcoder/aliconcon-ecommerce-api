import { Router } from 'express';
import getRoute from './get';

const mediaRoute = Router();

/* ------------------------------------------------------ */
/*                         GET                            */
/* ------------------------------------------------------ */
mediaRoute.use('/', getRoute);

export default mediaRoute;

import { Router } from 'express';
import getRoute from './get.route.js';
import patchRoute from './patch.route.js';
import productDeleteRoute from './delete.route.js';
import spuPostRoute from './post.route.js';
import { authenticate } from '@/middlewares/jwt.middleware.js';

const spuRoute = Router();
const spuRouteValidate = Router();

/* ------------------------------------------------------ */
/*                         GET                            */
/* ------------------------------------------------------ */
spuRoute.use('/', getRoute);

/* ---------------------------------------------------------- */
/*                      Validated routes                      */
/* ---------------------------------------------------------- */
spuRoute.use(authenticate, spuRouteValidate);

/* ------------------------------------------------------ */
/*                         POST                           */
/* ------------------------------------------------------ */
spuRouteValidate.use('/', spuPostRoute);

/* ------------------------------------------------------ */
/*                        PATCH                           */
/* ------------------------------------------------------ */
spuRouteValidate.use('/', patchRoute);

/* ------------------------------------------------------ */
/*                        DELETE                          */
/* ------------------------------------------------------ */
spuRouteValidate.use('/', productDeleteRoute);

export default spuRoute; 

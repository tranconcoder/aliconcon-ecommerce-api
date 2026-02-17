import { Router } from 'express';
import mediaController from '@/controllers/media.controller.js';
import catchError from '@/middlewares/catchError.middleware.js';
import { generateValidateWithParamsId } from '@/middlewares/zod.middleware.js';

const getRoute = Router();

// GET: /:id: - Get media file
getRoute.get(
    '/:id',
    generateValidateWithParamsId('id'),
    catchError(mediaController.getMediaFile)
);

export default getRoute;

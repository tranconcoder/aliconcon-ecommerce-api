import { Router } from 'express';
import catchError from '@/middlewares/catchError.middleware.js';
import locationController from '@/controllers/location.controller.js';
import { authenticate } from '@/middlewares/jwt.middleware.js';
import { validateParamsId } from '@/configs/joi.config.js';

const router = Router();
const routerValidated = Router();

/* ---------------------------------------------------------- */
/*                           Common                           */
/* ---------------------------------------------------------- */

// GET: /location/:locationId: - Get location by ID
router.get(
    '/location/:locationId',
    validateParamsId('locationId'),
    catchError(locationController.getLocationById)
);

/* ---------------------------------------------------------- */
/*                          Province                          */
/* ---------------------------------------------------------- */

// GET: /province: - Get all provinces
router.get('/province', catchError(locationController.getAllProvince));

// GET: /province/:id: - Get province by ID
router.get('/province/:id', catchError(locationController.getProvinceById));

// GET: /province/name/:name: - Get province by name
router.get('/province/name/:name', catchError(locationController.getProvinceByName));

// GET: /province/district/:district: - Get province by district
router.get('/province/district/:district', catchError(locationController.getProvinceWithDistrict));

// GET: /province/ward/:ward: - Get province by ward
router.get('/province/ward/:ward', catchError(locationController.getProvinceWithWard));

/* ---------------------------------------------------------- */
/*                            District                            */
/* ---------------------------------------------------------- */

// GET: /district: - Get all districts
router.get('/district', catchError(locationController.getAllDistrict));

// GET: /district/:id: - Get district by ID
router.get('/district/:id', catchError(locationController.getDistrictById));

// GET: /district/name/:name: - Get district by name
router.get('/district/name/:name', catchError(locationController.getDistrictByName));

// GET: /district/ward/:ward: - Get district by ward
router.get('/district/ward/:ward', catchError(locationController.getDistrictWithWard));

// GET: /district/province/:province: - Get all districts in province
router.get(
    '/district/province/:province',
    catchError(locationController.getAllDistrictsInProvince)
);

/* ---------------------------------------------------------- */
/*                          Ward                          */
/* ---------------------------------------------------------- */

// GET: /ward: - Get all wards
router.get('/ward', catchError(locationController.getAllWard));

// GET: /ward/:id: - Get ward by ID
router.get('/ward/:id', catchError(locationController.getWardById));

// GET: /ward/name/:name: - Get ward by name
router.get('/ward/name/:name', catchError(locationController.getWardByName));

// GET: /ward/district/:district: - Get all wards in district
router.get('/ward/district/:district', catchError(locationController.getAllWardsInDistrict));

// GET: /ward/province/:province: - Get all wards in province
router.get('/ward/province/:province', catchError(locationController.getAllWardsInProvince));

/* ---------------------------------------------------------- */
/*                       Authenticated                        */
/* ---------------------------------------------------------- */
router.use(routerValidated);
routerValidated.use(authenticate);

export default router;

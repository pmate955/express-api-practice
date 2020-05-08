import { Router } from 'express';
import * as locationController from '../controllers/location'

export const router:Router = Router({mergeParams: true});
router.get('/', locationController.index);
router.get('/:woeid', locationController.show);
router.post('/', locationController.create);
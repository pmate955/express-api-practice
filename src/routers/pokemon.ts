import { Router } from 'express';
import * as pokemonControler from '../controllers/pokemon';

export const router: Router = Router({mergeParams: true});
router.get('/', pokemonControler.index);
router.get('/:name', pokemonControler.show);
import { Router } from 'express';
import { router as pokemonRouter } from './pokemon';
import { router as locationRouter } from './location';

export const router: Router = Router({mergeParams: true});
router.use('/pokemon', pokemonRouter);
router.use('/location', locationRouter);
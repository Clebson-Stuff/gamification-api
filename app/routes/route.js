import { Router } from 'express';
import scoreController from '../controller/score.controller.js'

const router = Router();

router.get('/', (req, res) => res.status(200).json({ message: 'Gamification api' }));

router.get('/ranking',scoreController.getRanking);

router.post('/ranking',scoreController.create);

router.get('/ranking/:userId',scoreController.getRankingIndex);

router.get('/score/:userId',scoreController.getScore);

router.post('/score/:userId/:scoreIncrement', scoreController.incrementScore);

export default router;
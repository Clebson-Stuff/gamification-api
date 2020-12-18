import { Router } from 'express';
import ScoreController from '../controller/score.controller.js'
import QuestionController from '../controller/question.controller.js' 

const router = Router();

router.get('/', (req, res) => res.status(200).json({ message: 'Gamification api' }));

router.get('/ranking',ScoreController.getRanking);

router.post('/ranking',ScoreController.create);

router.get('/ranking/:userId',ScoreController.getRankingIndex);

router.get('/score/:userId',ScoreController.getScore);

router.post('/score/:userId/:scoreIncrement', ScoreController.incrementScore);

router.post('/question', QuestionController.create);

router.post('/question/validate/:id', QuestionController.validate);


export default router;
import QuestionService from '../service/question.service.js';

class QuestionController {
    create(req,res, next){
        const {title,alternatives, question_score,alternative_correct} = req.body;
        QuestionService.createQuestion(title, alternatives,question_score, alternative_correct).then(data=>{
            res.json(data);
        }).catch(err=>{
            res.json(err);
        });
    }

    validate(req,res, next){
        const id = req.params.id;
        const choice = req.body.choice;
        QuestionService.validate(id,choice).then(data=>{
            res.json(data);
        }).catch(err=>{
            res.json(err);
        });

    }

}

export default new QuestionController();
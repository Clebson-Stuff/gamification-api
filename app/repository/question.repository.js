import Question from '../models/question.model.js';

class QuestionRepository {

    save(questionData){
        return Question.create(questionData).then(data => {
            return data;
        });
    }

    getQuestion(id){
        return Question.findOne({_id:id}).then(data => {
            return data;
        });
    }

}

export default new QuestionRepository();
import QuestionRepository from '../repository/question.repository.js';

class QuestionService{

    async createQuestion(title,alternatives, question_score,alternative_correct){
        return await QuestionRepository.save({title, alternatives,question_score, alternative_correct});
    }

    async validate(id, choice){
        const question = await QuestionRepository.getQuestion(id);
        if(question.alternative_correct === choice){
            return {win: true}
        } else{
            return {win: false}
        }
    }

}

export default new QuestionService();
import ScoreRepository from '../repository/score.repository.js';

class ScoreService {

    async createScore(score, userIdInput){
        return await ScoreRepository.save({score, userId:userIdInput});
    }

    async incrementScore(userIdInput, valueToIncrement){
        return await ScoreRepository.increment(userIdInput,valueToIncrement);
    }

    async userRankingInfo(userIdInput){
        return await ScoreRepository.findByUserId(userIdInput);
    }

    async getRanking(){
        return await ScoreRepository.findAll();

    }

}

export default new ScoreService();
import ScoreService from '../service/score.service.js';

class ScoreController {

    create(req,res, next) {
        const {userId, score} = req.body;
        ScoreService.createScore(score, userId).then(data =>  res.json(data)).catch(err =>  res.json(err));
    } 

    getScore(req, res, next ){
        const userId = req.params.userId;
        ScoreService.userRankingInfo(userId).then(data => {
            res.json({score: data[0].score});
        }).catch(err => res.json(err));
    }

    incrementScore(req, res, next){
        const {userId, scoreIncrement} = req.params;
        ScoreService.incrementScore(userId,scoreIncrement).then(data => res.json(data)).catch(err => res.json(err));
    }

    getRanking(req,res,next){
        ScoreService.getRanking().then(data => res.json(data)).catch(err => res.json(err));
    }

    getRankingIndex(req,res,next){
        var val = req.params.userId;
        ScoreService.getRanking().then(data => {
            var index = -1;
            data.some(function(item, i){
                index = i;
                return item.userId === val;
              });
            res.json({positionRanking: index+1, rankingLength: data.length});
        }).catch(err => {
            res.json(err);
            return;
        });
      
    }
 
}

export default new ScoreController();
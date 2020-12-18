import scoreService from '../service/scoreService.js';

class scoreController {

    create(req,res, next) {
        const {userId, score} = req.body;
        console.log('create');
        scoreService.createScore(score, userId).then(data =>  res.json(data)).catch(err =>  res.json(err));
    } 

    getScore(req, res, next ){
        const userId = req.params.userId;
        scoreService.userRankingInfo(userId).then(data => res.json({score: data.score})).catch(err => res.json(err));
    }

    incrementScore(req, res, next){
        const {userId, scoreIncrement} = req.params;
        scoreService.incrementScore(userId,scoreIncrement).then(data => res.json(data)).catch(err => res.json(err));
    }

    getRanking(req,res,next){
        scoreService.getRanking().then(data => res.json(data)).catch(err => res.json(err));
    }

    getRankingIndex(req,res,next){
        var val = req.params.userId;
        scoreService.getRanking().then(data => {
            var index = -1;
            data.some(function(item, i){
                index = i;
                return item.userId === val;
              });
            res.json({positionRanking: index, rankingLength: data.length});
        }).catch(err => {
            res.json(err);
            return;
        });
      
    }
 
}

export default new scoreController();
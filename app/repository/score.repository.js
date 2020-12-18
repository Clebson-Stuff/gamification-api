import Score from '../models/score.model.js'

class ScoreRepository{
    
    save(user){
        return Score.create(user).then((data)=> {
            return data;
        });
    }

    increment(userIdInput, valueToIncrement){
        let conditions = {userId:userIdInput};
        let update = {$inc: {score: valueToIncrement }};
        return Score.update(conditions,update).then((data)=> {
            return data;
        });
    }

    findAll(){
        return Score.find({}).sort({score: "descending"}).then((data)=> {
            return data;
        });
    }

    findByUserId(id){
        return Score.find({userId: id}).then((data)=> {
            return data;
        });
    }
}

export default new ScoreRepository();
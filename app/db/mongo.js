import Mongoose from 'mongoose';
import {environment} from '../config/environment.js';

class Mongo {

    connect(){
        Mongoose.connect(environment.db.url , {
            useMongoclient: true,
        });
    };

}

export default new Mongo();
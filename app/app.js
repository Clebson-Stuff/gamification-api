import express from 'express';
import Mongo from './db/mongo.js';
import route from './routes/route.js'
const app = express();



Mongo.connect();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(route);


export default app;
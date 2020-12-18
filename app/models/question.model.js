import mongoose from 'mongoose';

const QuestionSchema = new mongoose.Schema({
    title: String,
    alternatives: [
        {
            text: {
                type: String,
                required: true
            }
        }
    ],
    question_score: Number,
    alternative_correct: String
})

export default  mongoose.model('Question', QuestionSchema);
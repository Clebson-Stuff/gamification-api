import mongoose from 'mongoose';

const Schema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
        unique: true
    },
    score: {
        type: Number,
        required: true,
    },
});

export default mongoose.model("Score", Schema);
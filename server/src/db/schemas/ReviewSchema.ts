import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
    body: {
        type: String,
        required: true,
    },
    user: mongoose.Types.ObjectId,
    movie: mongoose.Types.ObjectId,
});

const Review = mongoose.model("Review", ReviewSchema);

export default Review;

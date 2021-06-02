import mongoose from "mongoose";
import User from "./UserSchema";

const Schema = mongoose.Schema;

const MovieSchema = new Schema({
    imdbId: {
        type: String,
        required: true,
    },
    title: {
        type: String,
    },
    released: {
        type: String,
    },
    runtime: {
        type: String,
    },
    poster: {
        type: String,
    },
    genre: {
        type: String,
    },
    rating: {
        type: String,
    },
    plot: {
        type: String,
    },
    actors: {
        type: String,
    },
    users: [
        {
            type: mongoose.Types.ObjectId,
            ref: "User",
        },
    ],
});

export const Movie = mongoose.model("Movie", MovieSchema);

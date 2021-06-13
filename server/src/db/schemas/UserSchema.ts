import mongoose from "mongoose";
// import Movie from "./MovieSchema";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        default:
            "images/default.png",
    },
    watchlist: [
        {
            type: mongoose.Types.ObjectId,
            ref: "Movie",
        },
    ],
});

const User = mongoose.model("User", UserSchema);

export default User;

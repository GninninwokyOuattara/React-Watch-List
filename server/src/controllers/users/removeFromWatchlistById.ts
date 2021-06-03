import { RequestHandler } from "express";
import mongoose from "mongoose";

import Movie from "../../db/schemas/MovieSchema";
import User from "../../db/schemas/UserSchema";

const removeFromWatchlistById: RequestHandler = async (req, res) => {
    const { userid, movieid } = req.params;

    let user;
    // Check user existence
    try {
        user = await User.findOne({ _id: userid });
        if (!user) {
            throw new Error("User not found");
        }
    } catch (error) {
        return res.json({ message: error.message });
    }

    // Check for presence of the movie id inside user watchlist
    if (!user.watchlist.includes(movieid)) {
        return res.status(404).json({ message: "Movie not in watchlist" });
    }

    // fetch movie data
    let movie;
    try {
        movie = await Movie.findOne({ _id: movieid });
        if (!movie) {
            throw new Error("Movie not found");
        }
    } catch (error) {
        return res.json({ message: error.message });
    }

    try {
        const session = await mongoose.startSession();
        session.startTransaction();
        user.watchlist.pull(movie._id);
        await user.save({ session });
        movie.users.pull(user._id);
        await movie.save({ session });
        session.commitTransaction();
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

    return res.json({
        message: "Movie successfully removed from your watchlist",
        user,
    });
};

export default removeFromWatchlistById;

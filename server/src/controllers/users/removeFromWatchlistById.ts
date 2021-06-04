import { RequestHandler } from "express";
import mongoose from "mongoose";
import ErrorWithStatusCode from "./../../utils/customError";

import Movie from "../../db/schemas/MovieSchema";
import User from "../../db/schemas/UserSchema";

const removeFromWatchlistById: RequestHandler = async (req, res, next) => {
    const { userid, movieid } = req.params;

    let user;
    // Check user existence
    try {
        user = await User.findOne({ _id: userid });
        if (!user) {
            throw new ErrorWithStatusCode("User Not Found", 404);
        }
    } catch (error) {
        return next(error);
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
            throw new ErrorWithStatusCode("Movie Not Found", 404);
        }
    } catch (error) {
        return next(error);
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
        return next(error);
    }

    return res.json({
        message: "Movie successfully removed from your watchlist",
        user,
    });
};

export default removeFromWatchlistById;

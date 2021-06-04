import { RequestHandler } from "express";
import mongoose from "mongoose";

import Movie from "../../db/schemas/MovieSchema";
import User from "../../db/schemas/UserSchema";

import { RequestWithUser } from "../middleware/authentification";

const addToWatchlist: RequestHandler = async (
    req: RequestWithUser,
    res,
    next
) => {
    let { user } = req;

    // Looking for user

    // With auth middle user, should already be found by now.

    // try {
    //     user = await User.findOne({ _id: req.params.userid });
    //     if (!user) {
    //         return res.status(404).json({ message: "No user found" });
    //     }
    // } catch (error) {
    //     return res.status(404).json({ message: error.message });
    // }

    // Look movie up, check if it already is inside the database
    let movie;
    try {
        movie = await Movie.findOne({ imdbId: req.body.imdbId });

        if (!movie) {
            // Creating the movie if not already existing
            movie = new Movie({ ...req.body });
        } else {
            let userWatchlist: Array<string> = user!.watchlist;

            // In case where the movie is already in user watchlist
            if (userWatchlist.includes(movie._id)) {
                return res.json({ message: "Already in watchlist" });
            }
        }
    } catch (error) {
        return next(error);
    }

    // Addind movie to user wathclist and user to movie
    try {
        const session = await mongoose.startSession();
        session.startTransaction();
        movie.users.push(user!._id);
        movie = await movie.save({ session: session });
        console.log(movie);
        req.user!.watchlist.push(movie._id);
        user = await user!.save({ session });
        session.commitTransaction();
    } catch (error) {
        return next(error);
    }
    return res.json({
        message: "Movie added successfully to your watchlist",
        user,
        movie,
    });
};

export default addToWatchlist;

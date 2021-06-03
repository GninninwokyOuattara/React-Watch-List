import { RequestHandler } from "express";
import mongoose from "mongoose";

import Movie from "../../db/schemas/MovieSchema";
import User from "../../db/schemas/UserSchema";

const addToWatchlist: RequestHandler = async (req, res) => {
    console.log("userid :", req.params.userid);
    console.log(req.body);
    let user;

    // Looking for user
    try {
        user = await User.findOne({ _id: req.params.userid });
        if (!user) {
            return res.status(404).json({ message: "No user found" });
        }
    } catch (error) {
        return res.status(404).json({ message: error.message });
    }

    // Look movie up, check if it already is inside the database
    let movie;
    try {
        movie = await Movie.findOne({ imdbId: req.body.imdbId });

        if (!movie) {
            // Creating the movie if not already existing
            movie = new Movie({ ...req.body });
        } else {
            let userWatchlist: Array<string> = user.watchlist;

            // In case where the movie is already in user watchlist
            if (userWatchlist.includes(movie._id)) {
                return res.json({ message: "Already in watchlist" });
            }
        }
    } catch (error) {
        // throw new Error(error.message);
        console.log(error.message);
        return res
            .status(500)
            .json({ message: "Coud not complete operation, please try again" });
    }

    // Addind movie to user wathclist and user to movie
    try {
        const session = await mongoose.startSession();
        session.startTransaction();
        movie.users.push(user._id);
        movie = await movie.save({ session: session });
        console.log(movie);
        user.watchlist.push(movie._id);
        user = await user.save({ session });
        session.commitTransaction();
    } catch (error) {
        // throw new Error(error.message);
        console.log(error.message);
        return res
            .status(500)
            .json({ message: "Coud not complete operation, please try again" });
    }
    return res.json({
        message: "Movie added successfully to your watchlist",
        user,
        movie,
    });
};

export default addToWatchlist;

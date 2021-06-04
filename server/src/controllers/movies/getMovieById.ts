import { RequestHandler } from "express";
import mongoose from "mongoose";
import ErrorWithStatusCode from "./../../utils/customError";
import Movie from "../../db/schemas/MovieSchema";

const getMovieById: RequestHandler = async (req, res, next) => {
    let movie;
    try {
        movie = await Movie.findOne({ _id: req.params.movieid }).populate(
            "users"
        );

        if (!movie) {
            throw new ErrorWithStatusCode("Movie not found", 404);
        }
    } catch (error) {
        return next(error);
    }

    return res.json(movie);
};

export default getMovieById;

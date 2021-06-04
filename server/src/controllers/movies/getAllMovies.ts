import ErrorWithStatusCode from "./../../utils/customError";

import { RequestHandler } from "express";
import mongoose from "mongoose";

import Movie from "../../db/schemas/MovieSchema";

const getAllMovies: RequestHandler = async (req, res, next) => {
    let movies;
    try {
        movies = await Movie.find({});
        if (!movies) {
            throw new ErrorWithStatusCode("No movies found", 404);
        }
    } catch (error) {
        return next(error);
    }

    return res.json(movies);
};

export default getAllMovies;

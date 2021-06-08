import { RequestHandler } from "express";
import mongoose from "mongoose";
import ErrorWithStatusCode from "./../../utils/customError";

import Movie from "../../db/schemas/MovieSchema";
import User from "../../db/schemas/UserSchema";

interface userData {
    _id: string;
    name: string;
    email: string;
    image: string;
    password?: string;
    watchlist: string[];
}

const getUserById: RequestHandler = async (req, res, next) => {
    let user: userData;
    try {
        user = await User.findOne({ _id: req.params.userid }).populate(
            "watchlist"
        );
        if (!user) {
            throw new ErrorWithStatusCode("No user found with this id", 404);
        } else {
            user = {
                _id: user._id,
                name: user.name,
                email: user.email,
                image: user.image,
                watchlist: user.watchlist,
            };
        }
    } catch (error) {
        return next(error);
    }

    return res.json(user);
};

export default getUserById;

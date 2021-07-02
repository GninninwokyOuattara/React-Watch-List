import { RequestHandler } from "express";
import mongoose from "mongoose";
import ErrorWithStatusCode from "./../../utils/customError";

import Movie from "../../db/schemas/MovieSchema";
import User from "../../db/schemas/UserSchema";

interface userData {
    _id: string;
    name: string;
    image: string;
    email: string;
    image: string;
    password?: string;
    watchlist: string[];
}

const getAllUsers: RequestHandler = async (req, res, next) => {
    let users: userData[] = [];
    try {
        let allUsers: userData[] = await User.find({});
        if (!allUsers) {
            throw new ErrorWithStatusCode("Users Not Found", 404);
        } else {
            allUsers.forEach((user) => {
                users = [
                    ...users,
                    {
                        _id: user._id,
                        name: user.name,
                        image: user.image,
                        email: user.email,
                        image: user.image,
                        watchlist: user.watchlist,
                    },
                ];
            });
        }
    } catch (error) {
        return next(error);
    }

    return res.json(users);
};

export default getAllUsers;

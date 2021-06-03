import { RequestHandler } from "express";
import mongoose from "mongoose";

import Movie from "../../db/schemas/MovieSchema";
import User from "../../db/schemas/UserSchema";

interface userData {
    _id: string;
    name: string;
    email: string;
    password?: string;
    watchlist: string[];
}

const getUserById: RequestHandler = async (req, res) => {
    let user: userData;
    try {
        user = await User.findOne({ _id: req.params.userid }).populate(
            "watchlist"
        );
        if (!user) {
            throw new Error("No user found");
        } else {
            user = {
                _id: user._id,
                name: user.name,
                email: user.email,
                watchlist: user.watchlist,
            };
        }
    } catch (error) {
        return res.json({ message: error.message });
    }

    return res.json(user);
};

export default getUserById;

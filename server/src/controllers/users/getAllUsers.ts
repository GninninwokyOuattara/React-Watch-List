import { RequestHandler } from "express";
import mongoose from "mongoose";

import Movie from "../../db/schemas/MovieSchema";
import User from "../../db/schemas/UserSchema";

interface userData {
    name: string;
    email: string;
    password?: string;
    watchlist: string[];
}

const getAllUsers: RequestHandler = async (req, res) => {
    let users: userData[] = [];
    try {
        let allUsers: userData[] = await User.find({});
        if (!allUsers) {
            throw new Error("No users found");
        } else {
            allUsers.forEach((user) => {
                users = [
                    ...users,
                    {
                        name: user.name,
                        email: user.email,
                        watchlist: user.watchlist,
                    },
                ];
            });
        }
    } catch (error) {
        return res.json({ message: error.message });
    }

    return res.json({ users });
};

export default getAllUsers;

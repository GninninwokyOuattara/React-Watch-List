import User from "../../db/schemas/UserSchema";
import bcrypt from "bcryptjs";
import { RequestHandler } from "express";
import jwt from "jsonwebtoken";

const signUp: RequestHandler = async (req, res, next) => {
    console.log(req.body);
    const password = await bcrypt.hashSync(req.body.password, 10);
    let user;
    try {
        user = await User.create({
            ...req.body,
            password,
        });
    } catch (error) {
        next(error);
    }

    let token = jwt.sign({ ...user }, process.env.SECRET as string);
    res.json({ user, token });
};

export default signUp;

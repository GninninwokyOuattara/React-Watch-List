import User from "../../db/schemas/UserSchema";
import bcrypt from "bcryptjs";
import { RequestHandler } from "express";
import jwt from "jsonwebtoken";

const signUp: RequestHandler = async (req, res, next) => {
    const { email } = req.body;
    let user;
    // Check for email availability
    try {
        user = await User.findOne({ email });
        if (user) {
            return res.json({
                message: "Email already in use, please change it.",
            });
        }
    } catch (error) {
        next(new Error(error.message));
    }

    // Password hashing
    const password = await bcrypt.hashSync(req.body.password, 10);

    // Account creation
    try {
        user = await User.create({
            ...req.body,
            password,
        });
    } catch (error) {
        next(error);
    }
    // Token generation
    let token = jwt.sign({ ...user }, process.env.SECRET as string, {
        expiresIn: "1d",
    });

    return res.json({ user, token });
};

export default signUp;

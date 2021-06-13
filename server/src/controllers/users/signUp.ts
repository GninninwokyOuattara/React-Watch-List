import User from "../../db/schemas/UserSchema";
import bcrypt from "bcryptjs";
import { RequestHandler } from "express";
import jwt from "jsonwebtoken";
import CustomError from "../../utils/customError";

const signUp: RequestHandler = async (req, res, next) => {
    const { email } = req.body;
    let user;
    // Check for email availability
    try {
        user = await User.findOne({ email });
        if (user) {
            throw new Error("Email already in use, please change it.");
        }
    } catch (error) {
        return next(new CustomError(error.message, 500));
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
        return next(new CustomError(error.message, 500));
    }
    // Token generation
    let token = jwt.sign(
        { _id: user._id, email: user.email, name: user.name },
        process.env.SECRET as string,
        {
            expiresIn: "1d",
        }
    );

    user = user.toObject();
    delete user.password;
    return res.json({
        user,
        message: "Connected",
    });
};

export default signUp;

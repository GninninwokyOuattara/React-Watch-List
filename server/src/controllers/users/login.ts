import User from "../../db/schemas/UserSchema";
import bcrypt from "bcryptjs";
import { RequestHandler } from "express";
import jwt from "jsonwebtoken";

const login: RequestHandler = async (req, res, next) => {
    let user;
    const { email, password } = req.body;
    try {
        user = await User.findOne({ email });
        if (user) {
            let isValidPassword = await bcrypt.compare(password, user.password);
            if (isValidPassword) {
                let token = jwt.sign(
                    { _id: user._id, email: user.email, name: user.name },
                    process.env.SECRET as string,
                    { expiresIn: "1d" }
                );
                user = user.toObject();
                delete user.password;
                res.json({
                    message: "Connected",
                    user,
                });
            } else {
                res.status(401).json({ message: "Invalid Password" });
            }
        } else {
            res.status(404).json({ message: "No account found" });
        }
    } catch (error) {
        next(new Error(error.message));
    }
};

export default login;

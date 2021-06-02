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
                let token = jwt.sign({ ...user }, process.env.SECRET as string);
                res.json({
                    message: "Connected",
                    user: {
                        id: user._id,
                        email: user.email,
                        token,
                    },
                });
            } else {
                res.status(500).json({ message: "Invalid Password" });
            }
        } else {
            res.status(500).json({ message: "No account found" });
        }
    } catch (error) {
        next(new Error(error.message));
    }
};

export default login;

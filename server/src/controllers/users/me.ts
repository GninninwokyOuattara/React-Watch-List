import { RequestHandler } from "express";
import { RequestWithUser } from "../middleware/authentification";
import User from "../../db/schemas/UserSchema";
import ErrorWithStatusCode from "../../utils/customError";

const getUser: RequestHandler = async (req: RequestWithUser, res, next) => {
    let { user } = req as { user: any };
    try {
        user = await User.findOne({ _id: user!._id }).populate("watchlist");
        if (!user) {
            throw new ErrorWithStatusCode("User not found", 404);
        }
    } catch (error) {
        return next(error);
    }
    user = user.toObject();
    delete user.password;
    return res.json(user);
};

export default getUser;

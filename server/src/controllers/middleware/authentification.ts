import { RequestHandler, Request } from "express";
import jwt from "jsonwebtoken";

import User from "../../db/schemas/UserSchema";
import ErrorWithStatusCode from "./../../utils/customError";

interface userData {
    save(arg0: {
        session: import("mongodb").ClientSession;
    }): userData | PromiseLike<userData | undefined> | undefined;
    watchlist: any;
    _id: string;
    name: string;
    email: string;
}

export interface RequestWithUser extends Request {
    user?: userData;
}

const authentification: RequestHandler = async (
    req: RequestWithUser,
    res,
    next
) => {
    const token = req.headers.authorization?.replace("Bearer ", "");
    let userData: userData;
    try {
        userData = jwt.verify(
            token as string,
            process.env.SECRET as string
        ) as userData;
    } catch (error) {
        return next(new ErrorWithStatusCode("Unexpected Error", 500));
    }

    let user;
    try {
        if (typeof userData == "object") {
            user = await User.findOne({
                _id: userData._id,
                email: userData.email,
            });

            if (!user) {
                throw new ErrorWithStatusCode(
                    "Acces Denied, please authentificate.",
                    403
                );
            }

            req.user = user;
        }
    } catch (error) {
        return next(error);
    }
    next();
};

export default authentification;

import Router from "express";
import signUp from "../controllers/users/signUp";
import login from "../controllers/users/login";
import addToWatchlist from "../controllers/users/add";
import removeFromWatchlistById from "../controllers/users/removeFromWatchlistById";

const router = Router();

router.post("/signup", signUp);
router.post("/login", login);
router.post("/:userid/add", addToWatchlist);
router.delete("/:userid/:movieid", removeFromWatchlistById);

export default router;

import Router from "express";
import signUp from "../controllers/users/signUp";
import login from "../controllers/users/login";
import addToWatchlist from "../controllers/users/add";

const router = Router();

router.post("/signup", signUp);
router.post("/login", login);
router.post("/:userid/add", addToWatchlist);
router.post("/:userid/delete");

export default router;

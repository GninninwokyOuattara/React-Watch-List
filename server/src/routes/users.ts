import Router from "express";
import signUp from "../controllers/users/signUp";
import login from "../controllers/users/login";

const router = Router();

router.post("/signup", signUp);
router.post("/login", login);

export default router;

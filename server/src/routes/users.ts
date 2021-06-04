import Router from "express";

import authentification from "../controllers/middleware/authentification";

import signUp from "../controllers/users/signUp";
import login from "../controllers/users/login";
import addToWatchlist from "../controllers/users/add";
import getAllUsers from "../controllers/users/getAllUsers";
import getUserById from "../controllers/users/getUserById";
import removeFromWatchlistById from "../controllers/users/removeFromWatchlistById";

const router = Router();

// Signup user
router.post("/signup", signUp);

// User login
router.post("/login", login);

// Fetch all users
router.get("/", getAllUsers);

// Fetch user data including his wathclist using the user id
router.get("/:userid", getUserById);

router.use(authentification);

// User adding a movie to his watchlist
router.post("/add/:userid", addToWatchlist);

// User removing a movie from his wathclist using the id
router.delete("/:userid/:movieid", removeFromWatchlistById);

export default router;

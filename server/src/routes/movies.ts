import Router from "express";

import getAllMovies from "../controllers/movies/getAllMovies";
import getMovieById from "../controllers/movies/getMovieById";

const router = Router();

// Get all movies
router.get("/", getAllMovies);

// Get a particular movie data by its id
router.get("/:movieid", getMovieById);

export default router;

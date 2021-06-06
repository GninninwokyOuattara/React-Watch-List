import express, { Express } from "express";
import cors from "cors";
import path from "path";

// Database connection
import "./db/mongoose";

// Routers
import usersRouter from "./routes/users";
import MoviesRouter from "./routes/movies";

const app: Express = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use("/images", express.static(path.join(__dirname, "images")));

app.use("/api/users/", usersRouter);
app.use("/api/movies/", MoviesRouter);

// Error catcher middleware
app.use(
    (
        error: any,
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) => {
        if (res.headersSent) {
            return next(error);
        }

        res.status(error.status || 500);
        res.json({ message: error.message || "Unexpected Error" });
    }
);

app.get("/", (req, res) => {
    res.json({
        message: "Congrats, you reached here !",
    });
});

app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
});

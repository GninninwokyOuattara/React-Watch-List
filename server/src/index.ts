import express, { Express } from "express";
import cors from "cors";
import path from "path";

// Database connection
import "./db/mongoose";

// Routers
import userRouter from "./routes/users";

const app: Express = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use("/images", express.static(path.join(__dirname, "images")));

app.use("/api/users/", userRouter);

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

        res.status(error.code || 500);
        res.json({ message: "Unexpected Error" });
    }
);

app.get("/", (req, res) => {
    res.json({
        message: "Congrats, you reached here !",
    });
});

app.listen(3000, () => {
    console.log("Listening on port 3000");
});

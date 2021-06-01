import express, { Express } from "express";

const app: Express = express();

app.get("/", (req, res) => {
    res.json({
        message: "Congrats, you reached here !",
    });
});

app.listen(3000, () => {
    console.log("Listening on port 3000");
});

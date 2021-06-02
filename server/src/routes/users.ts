import Router from "express";

const router = Router();

router.post("/signup", (req, res, next) => {
    console.log(req.body);
    res.json(req.body);
});

export default router;

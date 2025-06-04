
import express from "express"
import path from "path";
 

const router = express.Router();
// Define your routes here
router.get("/", (req, res) => {
    res.sendFile(path.resolve("src/frontend/index.html"));
});


export default router;

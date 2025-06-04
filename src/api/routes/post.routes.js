
import postController from "../controllers/post.controller.js";
import express from "express"
 

const router = express.Router();
// Define your routes here
router.get("/get/:id", postController.getById);
router.delete("/delete/:id", postController.delete);    
router.get("/get-all", postController.getAll);
router.post("/create", postController.create);

export default router;

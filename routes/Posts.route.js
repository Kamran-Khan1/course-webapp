import express from "express";
import {
  getAllData,
  getDataById,
  postData,
  updateData,
  daleteData,
} from "../controllers/Post.controller.js";
const router = express.Router();

//getting all the data
router.get("/posts", getAllData);

//getting data by specific ID
router.get("/posts/:id", getDataById);
//posting data
router.post("/posts", postData);
//Updating posts
router.put("/posts/:id", updateData);
//daleting data
router.delete("/posts/:id", daleteData);

export default router;

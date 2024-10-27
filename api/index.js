import express from "express";
import bodyParser from "body-parser";
import postRouter from "../routes/Posts.route.js";
import { configDotenv } from "dotenv";

configDotenv({
  path: "./.env",
});
//Constants
const app = express();
const PORT = process.env.PORT1 || 4000;
//using middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Routes

app.use("/api", postRouter); // http://localhost:4000/api/posts

app.listen(PORT, () => {
  console.log(`API is running at PORT: ${PORT}`);
});

import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
import { configDotenv } from "dotenv";

configDotenv({
  path: ".env",
});
//constants
const app = express();
const PORT = process.env.PORT2;
const URL = process.env.URL;
//using middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));

//Routes

//getting data
app.get("/lectures", async (req, res) => {
  try {
    const response = await axios.get(`${URL}/api/posts`);
    //   console.log(response.data);
    res.render("home.ejs", { posts: response.data });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

//getting data by specific id
app.get("/lectures/:id", async (req, res) => {
  try {
    const response = await axios.get(`${URL}/api/posts/${req.params.id}`);
    //   console.log(response.data);

    res.render("homepreview.ejs", { postData: response.data });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

//getting the post page
app.get("/postdata", (req, res) => {
  try {
    res.render("publish.ejs");
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

//Posting data
app.post("/new/post", async (req, res) => {
  try {
    await axios.post(`${URL}/api/posts`, req.body);
    res.redirect("/lectures");
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

app.listen(PORT, (req, res) => {
  console.log(`App is running at PORT: ${PORT}`);
});

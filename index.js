import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import route from "./routes/userRoutes.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGOURL = process.env.MONGO_URL;

app.use(bodyParser.json());

mongoose
  .connect(MONGOURL)
  .then(() => {
    console.log("Database connected successful");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/api/user", route);

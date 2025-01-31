import express from "express";
import {
  fetch,
  create,
  update,
  deleteData,
} from "../controller/userController.js";

const route = express.Router();

route.get("/getAllUsers", fetch);
route.post("/create", create);
route.put("/update/:id", update);
route.delete("/delete/:id", deleteData);

export default route;

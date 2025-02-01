import express from "express";
import {
  fetch,
  create,
  update,
  deleteData,
  register,
  login,
} from "../controller/userController.js";

const route = express.Router();

route.get("/getAllUsers", fetch);
route.post("/create", create);
route.put("/update/:id", update);
route.delete("/delete/:id", deleteData);

route.post("/register", register);
route.post("/login", login);

export default route;

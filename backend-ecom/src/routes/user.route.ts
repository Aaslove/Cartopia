import express from "express";

// importing controllers
import {
  newUser,
  getAllUsers,
  getUser,
  deleteUser,
} from "../controllers/user.controller";
import { adminOnly } from "../middlewares/auth";

const app = express.Router();

app.post("/new", newUser); // route api/v1/user/new
app.get("/all", adminOnly, getAllUsers); // route api/v1/user/all
app.route("/:id").get(getUser).delete(adminOnly, deleteUser); // route api/v1/user/all

export default app;

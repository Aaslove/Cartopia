import express from "express";


// importing controllers
import {newUser} from "../controllers/user.controller";

const app = express.Router();

app.post("/new", newUser);


export default app;
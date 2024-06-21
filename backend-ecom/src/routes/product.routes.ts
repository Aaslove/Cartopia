import express from "express";

const app = express.Router();

// importing product controllers
import { newProduct } from "../controllers/product.controller";

// importing middleware
app.post("/new", newProduct);

export default app;

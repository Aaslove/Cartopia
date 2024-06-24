import express from "express";

const app = express.Router();

// importing product controllers
import { newProduct } from "../controllers/product.controller";
import { upload } from "../middlewares/multer";

// importing middleware
app.post("/new", upload, newProduct);

export default app;

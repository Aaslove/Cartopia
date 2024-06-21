import express from "express";
import { connectDb } from "./db";

// importing routes
import userRoute from "./routes/user.route";
import productRoute from "./routes/product.routes";

// importing middlewares
import { errorMiddleware } from "./middlewares/error";

connectDb();
const port = 8000;

const app = express();

app.use(express.json());

// testing route (to check server is working fine)
app.get("/", (req, res) => res.send("route is working healthy"));

// route api/v1/user
app.use("/api/v1/user", userRoute);

// route api/v1/product
app.use("/api/v1/product", productRoute);

app.use("/uploads", express.static("uploads"));
app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`Server is working on http://localhost:${port}`);
});

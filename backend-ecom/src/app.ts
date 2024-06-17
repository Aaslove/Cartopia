import express from "express";

// importing routes
import userRoute from "./routes/user.route";
import { connectDb } from "./db";
import { errorMiddleware } from "./middlewares/error";

connectDb();
const port = 8000;
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("route is working healthy");
});

// route api/v1/user
app.use("/api/v1/user", userRoute);

app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`Server is working on http://localhost:${port}`);
});

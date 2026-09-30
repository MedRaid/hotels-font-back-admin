import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDb from "./config/mangodb.js";
import connectCloudinary from "./config/cloudinary.js";
import hotelRoutes from "./routes/hotelRoutes.js";
import reservationRouter from "./routes/reservationRoutes.js";
import userRouter from "./routes/userRoutes.js";

const app = express();

const port = process.env.PORT || 4000;

connectDb();
connectCloudinary();

app.use(cors());

app.use(express.json());

app.use("/api/hotel", hotelRoutes);
app.use("/api/reservation", reservationRouter);
app.use("/api/user", userRouter);

app.get("/", (req, res) => {
  res.send("API OK");
});

app.listen(port, () => console.log("Server started on Port : " + port));

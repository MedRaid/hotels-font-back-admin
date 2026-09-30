import express from "express";
import {
  addHotel,
  listHotels,
  removeHotel,
  singleHotel,
} from "../controllers/hotelController.js";
import upload from "../middleware/multer.js";

const hotelRoutes = express.Router();

hotelRoutes.post("/add", upload.single("image"), addHotel);
hotelRoutes.get("/list", listHotels);
hotelRoutes.delete("/remove", removeHotel);
hotelRoutes.get("/room/:id", singleHotel);

export default hotelRoutes;

import express from "express";
import {
  createReservation,
  deleteReservation,
  getAllReservations,
} from "../controllers/reservationController.js";

export {
  createReservation,
  getAllReservations,
  deleteReservation,
} from "../controllers/reservationController.js";

const reservationRouter = express.Router();

reservationRouter.post("/create", createReservation);
reservationRouter.get("/get", getAllReservations);
reservationRouter.delete("/delete/:id", deleteReservation);

export default reservationRouter;

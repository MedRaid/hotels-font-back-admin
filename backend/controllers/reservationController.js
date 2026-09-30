import reservationModel from "../models/reservationModel.js";

// @ts-ignore
const createReservation = async (req, res) => {
  try {
    const { name, email, phone, checkin, checkout, guests, roomName, roomId } =
      req.body;

    if (
      !name ||
      !email ||
      !phone ||
      !checkin ||
      !checkout ||
      !guests ||
      !roomName ||
      !roomId
    ) {
      return res.json({ message: "All fields are required" });
    }

    const newReservation = new reservationModel({
      name,
      email,
      phone,
      checkin,
      checkout,
      guests,
      roomName,
      roomId,
    });

    await newReservation.save();
    res.json({
      message: "Reservation created successfully",
      reservation: newReservation,
    });
  } catch (error) {
    res.json({ message: "Error creating reservation" });
  }
};

// @ts-ignore
const getAllReservations = async (req, res) => {
  try {
    const reservations = await reservationModel.find();
    res.json({ message: "success", reservations: reservations });
  } catch (error) {
    console.log(error);
    res.json({ message: "Error getting reservations !" });
  }
};
// @ts-ignore
const deleteReservation = async (req, res) => {
  try {
    const { id } = req.params;

    await reservationModel.findByIdAndDelete(id);
    res.json({ message: "Reservation deleted successfully" });
  } catch (error) {
    console.log(error);
    res.json({ message: "Error deleting reservation" });
  }
};

export { createReservation, getAllReservations, deleteReservation };

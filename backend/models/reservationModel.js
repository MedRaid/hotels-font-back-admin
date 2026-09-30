import mongoose from "mongoose";

const reservationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  checkin: { type: String, required: true },
  checkout: { type: String, required: true },
  guests: { type: String, required: true },
  roomName: { type: String, required: true },
  roomId: { type: String, required: true },
});

// {
//   "name":"mamado sako",
//   "email":"sako@gmail.com",
//   "phone":"0111111",
//   "checkin":"01/10/2026",
//   "checkout":"04/10/2026",
//   "guests":"2",
//   "roomName":"Testing Room",
//   "roomId":"6ab64cc08594abec6059be94"
// }

export default mongoose.model("Reservation", reservationSchema);

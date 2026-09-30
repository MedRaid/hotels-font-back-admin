import { v2 as cloudinary } from "cloudinary";
import hotelModel from "../models/hotelModel.js";

// @ts-ignore
const addHotel = async (req, res) => {
  try {
    const { name, price, description } = req.body;
    const image = req.file;
    let imageUrl = "";

    if (image) {
      let result = await cloudinary.uploader.upload(image.path, {
        resource_type: "image",
      });
      imageUrl = result.secure_url;
    } else {
      imageUrl = "https://via.placeholder.com/150";
    }

    const hotelData = {
      name,
      description,
      price: Number(price),
      image: imageUrl,
      date: Date.now(),
    };
    const hotel = new hotelModel(hotelData);
    await hotel.save();
    res.json({ success: true, message: "Hotel romm added successfully" });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ success: false, message: "Error adding hotel room" });
  }
};

// @ts-ignore
const listHotels = async (req, res) => {
  try {
    const hotels = await hotelModel.find();
    res.json({ success: true, message: hotels });
  } catch (error) {
    res.json({ success: false, message: "Error fetching hotels" });
  }

  res.json({ success: true, message: "Hotel romms listed here" });
};

// @ts-ignore
const removeHotel = async (req, res) => {
  try {
    await hotelModel.findByIdAndDelete(req.body._id);
    res.json({ success: true, message: "Room deleted successefully" });
  } catch (error) {
    res.json({ success: false, message: "Error deleting Room" });
  }

  res.json({ success: true, message: "Hotel romm deleted" });
};

// @ts-ignore
const singleHotel = async (req, res) => {
  try {
    const roomDetails = await hotelModel.findById(req.params.id);
    if (!roomDetails) {
      res.json({ message: "Error retreiving Room" });
    }
    res.json({ message: roomDetails });
  } catch (error) {
    res.json({ success: false, message: "Error retreiving Room" });
  }
};

export { addHotel, listHotels, removeHotel, singleHotel };

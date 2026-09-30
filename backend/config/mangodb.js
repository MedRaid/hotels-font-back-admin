import mongoose from "mongoose";

const connectDb = async () => {
  mongoose.connection.on("connected", () => {
    console.log("Connection established");
  });
  await mongoose.connect(`${process.env.MONGODB_URI}/hotel`);
};

export default connectDb;

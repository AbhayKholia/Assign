import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const Dbconnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log(" MongoDB connected");
  } catch (err) {
    console.error(" MongoDB connection error:", err);
  }
};

export default Dbconnection;

import mongoose from "mongoose";

export const connectDB = async () => {
  const uri = process.env.MONGODB_URI as string;

  try {
    await mongoose.connect(uri);

    console.log(":MongoDB connected");
  } catch (error: any) {
    console.error("MngoDB connection error", error.message);
  }
};

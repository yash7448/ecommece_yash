import mongoose from "mongoose";

const otpSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    otp: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("otpmodel", otpSchema);

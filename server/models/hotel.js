import mongoose from "mongoose";

const { Schema } = mongoose;
const { ObjectId } = mongoose.Schema;

const hotelSchema = new Schema(
  {
    title: {
      type: String,
      required: "Title is required",
    },
    content: {
      type: String,
      required: "Content is required",
      maxlength: 10000,
    },
    location: {
      type: String,
    },
    price: {
      type: Number,
      required: "Price is required",
      trim: true,
    },
    postedBy: {
      type: ObjectId, //user's object id. This object id will refer to the model named "User"
      ref: "User",
    },
    image: {
      data: Buffer,
      contentType: String,
    },
    from: {
      type: Date,
    },
    to: {
      type: Date,
    },
    bed: {
      type: Number,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Hotel", hotelSchema); //our model name is Hotel

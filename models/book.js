import mongoose from "mongoose";
const { Schema } = mongoose;

const bookSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  author: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    minLength: 18,
    maxLength: 150,
    required: true,
  },
  pageCount: {
    type: Number,
  },
  categories: {
    type: Array,
    required: true,
  },
  uploadedBy: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

export default mongoose.model("Book", bookSchema);

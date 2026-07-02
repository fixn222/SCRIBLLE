import mongoose, { Schema } from "mongoose";

const noteSchema = new Schema(
  {
    tittle: {
      type: String,
      required: true,
      mexlenghth: 100,
    },

    content: {
      type: String,
      required: true,
    },

    isPinned: {
      type: Boolean,
      default: true,
    },

    tags: {
      type: [String],
      default: [],
    },
  },
  { timestamps: true },
);

export const Note = mongoose.model("Note", noteSchema);

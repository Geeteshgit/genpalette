import mongoose from "mongoose";

const PaletteSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    colors: [String],
    likes: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

export const Palette =
  mongoose.models.Palette || mongoose.model("Palette", PaletteSchema);

import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users", // Asegúrate que tu modelo de usuarios se llame "users"
    required: true,
  },

  score: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },

  comments: {
    type: String,
    required: true,
    maxlength: 500,
    trim: true, // limpia espacios al inicio y fin
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Exportar el modelo
export const review = mongoose.model("reviews", reviewSchema);


import mongoose from "mongoose";
const bidSchema = new mongoose.Schema({


  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "products",
    
  },


  bidder: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    
  },

  amount: {
    type: Number,
    required: true
  },
  
  date: {
    type: Date,
    default: Date.now
  }
});

export const bidModel = mongoose.model("bids",bidSchema);
const bidSchema = new mongoose.Schema({


  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "products",
    required: true
  },


  bidder: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true
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
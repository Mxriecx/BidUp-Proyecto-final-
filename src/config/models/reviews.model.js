import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({

    user :{
        type : String
    },

    score : {
        type : Number,
        required : true
    },

    comments : {
        type : String,
        required: true
    },
})

export const reviewModel = mongoose.model("reviews",reviewSchema);

import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({

    user :{
        type : mongoose.Schema,Types,ObjectId,ref:"users",
        required: true
    },

    score : {
        type : Number,
        required : true,
        min:1,
        max:5
    },

    comments : {
        type : String,
        required: true,
        maxlenght:500
    },
})

export const reviewModel = mongoose.model("reviews",reviewSchema);

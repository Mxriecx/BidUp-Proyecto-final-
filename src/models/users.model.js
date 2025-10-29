import mongoose from "mongoose";

const userSchema = new mongoose.Schema({


   

    tenure: {
        type: Number
    },

    biography: {

        job: { type: String },
        funFact: { type: String },
        hobbie: { type: String }

    }



})

export const userModel = mongoose.model("users", userSchema);

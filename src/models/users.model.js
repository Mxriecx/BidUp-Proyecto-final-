import mongoose from "mongoose";

const userSchema = new mongoose.Schema({


    image: {
        type: String,

    },
    name: {
        type: String,
        required: true
    },

    age: {
        type: Number,
        required: true

    },

    email: {
        type: String,
        required: true

    },

    username: {
        type: String,
        required: true
    },

    nickname: {
        type: String

    },

    password: {
        type: String,
        required: true
    },

    role: {
        type: String,
        enum: ["admin","user"],
        required: true
    },

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

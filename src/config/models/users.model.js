import mongoose from "mongoose";

const userSchema = new mongoose.Schema({


    image: {
        type: String,
        required: true
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
        Required: true
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
        enum: ["admin", "vendedor", "comprador"],
        required: true
    },

    tenure: {
        type: Number
    },

    biography: {
        "job": "string",
        "fun fact": "string",
        "hobbie": "string",        
         required: false
    }



})

export const userModel = mongoose.model("users", userSchema);

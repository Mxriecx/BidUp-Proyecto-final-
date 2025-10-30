import mongoose from "mongoose";


//construir la plantilla del modelo

const productSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true

    },

    initialPrice: {
        type: Number,
        required: true
    },

    finalPrice: {
        type: Number
    },

    state: {
        type: String,
        enum: ["Por Subastar", "en subasta", "vendido"]

    },

     category: {
        type: String,
        enum: ["Tecnologia", "Arte", "Hogar","Electrodomesticos"],
        required :true

    },

    seller:{
        type:mongoose.Schema.Types.ObjectId,ref:"users",
    },

    date :{
        type : Date,
        default: Date.now
    }
   
});

export const productModel = mongoose.model("products", productSchema)


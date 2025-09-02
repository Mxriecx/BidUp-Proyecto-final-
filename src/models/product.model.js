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

     Categories: {
        type: String,
        enum: ["tecnologia", "ropa y accesorios", "hogar","electrodomesticos","deportes"]

    },

    seller:{
        type:mongoose.Scheema.Types.ObjectId,ref:"users",
        required:true
    },

    date :{
        type : Date,
        default:date.now,
    }
   
});

export const productModel = mongoose.model("products", productSchema)


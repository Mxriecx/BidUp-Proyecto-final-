import { bidModel } from "../models/bidders.models.js";

//definir las acciones que van a realizar - CRUD

// 1. metodo para crear un producto -> Post

export const postBidder = async (request, response) => {

    try {
        await bidModel.create(request.body);
        return response.status(201).json({ "mensaje": "Apuesta creada correctamente" });

    } catch (error) {
        return response.status(400).json({
            "mensaje": "ocurrio un error",
            "error": error.message || error
        })
    }

}

export const getBidder = async (request, response) => {

    try {
        const allBidders = await bidModel.find()
        .populate("users", "name email")   
        .populate("products", "title price image"); 

        return response.status(200).json({
            "mensaje": "se encontraron todas las apuestas",
            "data": allBidders
        })

    } catch (error) {
        return response.status(500).json({
            "mensaje": "ocurrio un error al mostrar las apuestas",
            "error": error.message || error
        })
    }

}

export const putBidderById = async (request, response) => {

    try {
        const idForUpdate = request.params._id;
        const dataForUpdate = request.body;

        await bidModel.findByIdAndUpdate(idForUpdate, dataForUpdate);
        return response.status(200).json({
            "mensaje": "apuesta actualizada exitosamente"
        })

        } catch (error) {
            return response.status(500).json({
                "mensaje":"ocurrio un error  al actualizar la apuesta",
                "error": error.message || error
            })
        }

}

export const deleteBidderById = async(request, response) => {

    try{
   
      const idForDelete = request.params._id;
      await bidModel.findByIdAndDelete(idForDelete);
      return response.status(200).json({
      "mensaje": "apuesta eliminado exitosamente"})

  }catch (error) {
    return response.status(500).json({
        "mensaje":"ocurrio un error al borrar la apuesta",
        "error":error.message || error
    })
  
  }
  
} 
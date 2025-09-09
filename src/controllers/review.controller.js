import { review } from "../models/reviews.model.js";

 export const postReview = async (req,res) => {

    try {
        await review.create(req.body);

        return res.status(201).json({
            "mensaje": "Review creada correctamente"
        });

    } catch (error) {
        return res.status(400).json({
            "mensaje": "Ocurrió un error al crear tu review",
            "error": error.message || error //alt + 124 o  alt gr + 1
        })
    }
}

 export const getReview = async (req,res) => {       try {
         const allReviews = await review.find();

         return res.status(200).json({
             "mensaje": "Todas las reviews",
             "data": allReviews
         })

     } catch (error) {
         return response.status(500).json({
             "mensaje": "Ocurrió un error al mostrar las reviews",
             "error": error.message || error
         })
     }
 }

 export const updateReview = async (request, response) => {
     try {
         const idForUpdate = request.params;
         const dataForUpdate = request.body;

        await review.findByIdAndUpdate(idForUpdate, dataForUpdate);

        return response.status(200).json({
            "mensaje":"Review actualizado correctamente"
         });

     } catch (error) {
        return response.status(500).json({
            "mensaje": "Ocurrió un error al actualizar tu review",
             "error": error.message || error
        })
     }
 }



 export const deleteReview = async (request, response) => {
     try {
         const idForDelete = request.params;
         await review.findByIdAndDelete(idForDelete);

         return response.status(200).json({
             "mensaje": "Review eliminada exitosamente"
         });

     } catch (error) {
         return response.status(500).json({
             "mensaje": "Ocurrió un error al eliminar tu review",
             "error": error.message || error
         })
     }
 }

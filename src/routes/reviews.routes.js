import express from "express";
import {
  postReview,
  getReview,
  updateReview,
  deleteReview
 
} from "../controllers/review.controller.js";



export const reviewRouter = express.Router();


// Rutas CRUD
reviewRouter.post("/crear", postReview);       // Crear review
reviewRouter.get("/mostrar", getReview);       // Mostrar
reviewRouter.put("/actualizar/:_id", updateReview);       // actualizar
reviewRouter.delete("/borrar/:_id", deleteReview);       // borrar




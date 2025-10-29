import express from "express";
import { postProduct, getAllProducts, getProductByCategorie, putProductById, deleteProductById } from "../controllers/products.controller.js";
import {upload} from "../config/multer.js"
import { auth }  from "../middleware/auth.js"

// 2. Configurar las rutas
export const productRouter = express.Router();

// Ruta para el POST
productRouter.post("/crear",upload.single("image"), postProduct);

// Ruta para el GET
productRouter.get("/mostrar", getAllProducts);

productRouter.get("/category/:category", getProductByCategorie);


// Ruta para el PUT
productRouter.put("/actualizar/:id",putProductById);

// Ruta para el DELETE
productRouter.delete("/eliminar/:id",  deleteProductById);
import express from "express";
import { postUser, getUser, putUserById, deleteUserById } from "../controllers/users.controller.js";
import { upload } from "../config/multer.js"
import { auth } from "../middleware/auth.js"
//2.configurar las rutas:

export const userRouter = express.Router();

//3. ruta para el post 
userRouter.post("/crear", postUser);

// ruta para el get
userRouter.get("/mostrar", auth("admin"), getUser);

//ruta para el put
userRouter.put("/actualizar/:_id", putUserById);

//ruta para el delete
userRouter.delete("/borrar/:_id", deleteUserById);
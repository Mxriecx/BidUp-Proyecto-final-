import { userModel } from "../models/users.model.js";
import bcryptjs from "bcryptjs";

export const postUser = async (request,response) => {

     try{
         // deestructuracion se hace para procesar la informacion del usuario antes de guardarla 

        const {name,age,username,password,role,email,nickname,tenure,image}=request.body;

        const codedPassword = await bcryptjs.hash(password,8);

        await userModel.create({
            name,
            age,
            username,
            password:codedPassword,
            role
        });

        return response.status(201).json({
            "mensaje":"usuario creado correctamente"
        })

    }catch (error){
        return response.status(500).json({
            "mensaje":"Error al crear el usuario",
            "error": error.message || error            

        })

    }

}

//2. metodo para mostrar todos los productos -> GET 

export const getUser = async (request,response) => {
    try{
        const allUsers =await userModel.find();

        return response.status(200).json({
            "mensaje":"se encontraron todos los usuarios",
            "data": allUsers
        })
    }catch(error){
        return response.status(500).json({
        "mensaje":"ocurrio un error al mostrar usuarios",
        "error":error.message || error

    })
}
}


//3. metodo para actualizar  un producto -> PUT

export const putUserById = async (request,response) => {
    try{

        const idForUserUpdate = request.params._id;
        const dataForUserUpdate = request.body;

         if (dataForUserUpdate.password) {
            dataForUserUpdate.password = await bcryptjs.hash(dataForUserUpdate.password,8);
        }

        await userModel.findByIdAndUpdate (idForUserUpdate,dataForUserUpdate);
        return response.status(200).json({
            "mensaje" :"Usuario actualizado correctamente"
        });

    }catch(error){
         return response.status(500).json({
        "mensaje":"ocurrio un error al actualizar el usuario",
        "error":error.message || error
    })
}
}


//4. metodo para Eliminar un producto -> DELETE

export const deleteUserById =async (request,response)=>{
    try{

        const idForDelete = request.params._id;      

        await userModel.findByIdAndDelete (idForDelete);
        return response.status(200).json({
            "mensaje" :"Usuario eliminado correctamente"
        });

    }catch(error){
         return response.status(500).json({
        "mensaje":"ocurrio un error al  eliminar el usuario",
        "error":error.message || error
    })
}
} 
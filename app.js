

import express from "express";
import dotenv from "dotenv";
import { dbConnect } from "./src/config/database.js";
import { productRouter } from "./src/routes/products.routes.js";

const app = express();
dotenv.config();
const port = process.env.PORT;
dbConnect()

app.get("/",(req,res)=>
res.send("Server is Working!")
)

app.use(express.json());
app.use("/products", productRouter);


app.listen(port,()=>{
    console.log(`Server is being executed on http://localhost:${port}`)
});


import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { dbConnect } from "./src/config/database.js";
import { productRouter } from "./src/routes/products.routes.js";
import { reviewRouter } from "./src/routes/reviews.routes.js";
import { userRouter } from "./src/routes/users.routes.js";
import { bidRouter } from "./src/routes/bidders.routes.js";
import { loginRouter } from "./src/routes/login.routes.js";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
dotenv.config();
const port = process.env.PORT;
dbConnect();
const _filename = fileURLToPath(import.meta.url);// identifica el archivo en el que estamos
const _dirname = path.dirname(_filename); // identifica la carpeta en la que estamos


app.get("/",(req,res)=>
res.send("Server is Working!")
)

app.use(cors()); //habilita CORS
app.use(express.json());
app.use("/products", productRouter);
app.use("/reviews", reviewRouter)
app.use("/users",userRouter);
app.use("/bids",bidRouter);
app.use("/login",loginRouter);
app.use("/uploads", express.static(path.join(_dirname, "src/uploads")));


app.listen(port,()=>{
    console.log(`Server is being executed on http://localhost:${port}`)
});

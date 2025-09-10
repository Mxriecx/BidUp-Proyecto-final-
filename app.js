

import express from "express";
import dotenv from "dotenv";
import { dbConnect } from "./src/config/database.js";
import { userRouter } from "./src/routes/users.routes.js";
import { bidRouter } from "./src/routes/bidders.routes.js";
const app = express();
dotenv.config();
const port = process.env.PORT;
dbConnect()

app.get("/",(req,res)=>
res.send("Server is Working!")
)

app.use(express.json());
app.use("/users",userRouter);
app.use("/bids",bidRouter);

app.listen(port,()=>{
    console.log(`Server is being executed on http://localhost:${port}`)
});

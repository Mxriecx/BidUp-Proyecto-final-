import express from "express"

import { postBidder,getBidder,putBidderById,deleteBidderById } from "../controllers/bidders.controller.js"
import { auth }  from "../middleware/auth.js"
export const bidRouter = express.Router();

bidRouter.post("/crear",postBidder);
bidRouter.get("/mostrar",getBidder);
bidRouter.put("/actualizar/:_id",putBidderById);
bidRouter.delete("/borrar/:_id",deleteBidderById);
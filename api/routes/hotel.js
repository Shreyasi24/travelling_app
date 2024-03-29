import express from "express";
import Hotel from "../models/Hotel.js"
import { createHotel, updateHotel, deleteHotel, getHotel, getAllHotels, countByCity, countByType } from "../controllers/hotel.js"
import { createError } from "../utils/error.js";
import { verifyAdmin } from "../utils/verifyToken.js";


const router = express.Router();
//create
router.post("/", verifyAdmin, createHotel)

//update
router.put("/:id", verifyAdmin, updateHotel)

//delete
router.delete("/:id", verifyAdmin, deleteHotel)

//get
router.get("/find/:id", getHotel)

//get all
router.get("/", getAllHotels)
router.get("/countByCity", countByCity)
router.get("/countByType", countByType)

export default router;
import express from "express";
import dotenv from "dotenv";
import mongoose from 'mongoose';
import authRoute from "./routes/auth.js"
import usersRoute from "./routes/users.js"
import hotelRoute from "./routes/hotel.js"
import roomRoute from "./routes/room.js"
import cookieParser from "cookie-parser"
import cors from "cors"

const app = express();
dotenv.config();

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO)
        console.log("connected to mongoDB")
    } catch (error) {
        throw error;
    }
};
mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected!!")
})
mongoose.connection.on("connected", () => {
    console.log("mongoDB connected!!")
})
app.get("/", (req, res) => {
    res.send("hello first request!")
})

app.use(cookieParser())
app.use(express.json())
app.use(cors())
//middleware
app.use("/auth", authRoute)
app.use("/users", usersRoute)
app.use("/hotel", hotelRoute)
app.use("/room", roomRoute)


// app.use((err, req, res, next) => {
//     return res.json(500).json("hello error handler!")
// })

app.listen(8800, () => {
    connect();
    console.log("connected to backend.")
})
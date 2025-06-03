import express from "express"
import env from "dotenv"
import cookieParser from "cookie-parser"
import cors from "cors"
import http from "http"
import { Server as socketIO } from "socket.io"

import "./configs/db.js"

import authRoutes from "./routes/authRoutes.js"
import userRoutes from "./routes/userRoutes.js"

env.config()

const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: process.env.ORIGIN,
    credentials: true
}))
const server = http.createServer(app)
const io = new socketIO(server, {
    cors: {
        origin: process.env.ORIGIN,
        credentials: true
    }
})

io.on("connection", (socket) => {
    console.log("socket is connected")
})

app.use("/api/auth", authRoutes)
app.use("/api/user", userRoutes)

server.listen(process.env.PORT, () => console.log("listening on port " + process.env.PORT))
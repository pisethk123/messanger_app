import express from "express"
import env from "dotenv"
import cookieParser from "cookie-parser"
import cors from "cors"
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

app.use("/api/auth", authRoutes)
app.use("/api/user", userRoutes)

app.listen(process.env.PORT, () => console.log("listening on port " + process.env.PORT))
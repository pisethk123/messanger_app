import express from "express"
import { isLoggedin, logOut, signIn, signUp } from "../controllers/authControllers.js"
import isAuthenticated from "../middlewares/isAuthenticated.js"

const router = express.Router()

router
.post("/signup", signUp)
.post("/signin", signIn)
.get("/isloggedin", isAuthenticated, isLoggedin)
.get("/logout", logOut)

export default router
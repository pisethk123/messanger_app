import express from "express"
import isAuthenticated from "../middlewares/isAuthenticated.js"
import { getUserProfile, updateUserProfileImage } from "../controllers/userControllers.js"
import upload from "../utils/multer.js"

const router = express.Router()

router
.get("/getuserprofile", isAuthenticated, getUserProfile)
.put("/updateuserprofileimage", isAuthenticated, upload.single("file"), updateUserProfileImage)

export default router
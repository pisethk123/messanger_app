import User from "../models/User.js"
import fs from "fs"
import cloudinary from "../configs/cloudinary.js"

// get user profile
export const getUserProfile = async (req, res) => {
    try {
        const user = await User.findOne({_id: req.userId}).select("-password")
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({message: "server down"})
    }
}

// update user profile image
export const updateUserProfileImage = async (req, res) => {
    try {
        if(!req.file.mimetype.startsWith("image/")) {
            res.status(400).json({message: "please select an image file"})
        }
         
        const user = await User.findOne({_id: req.userId})
        if(user.avatar) {
            const fileName = user.avatar.split("/")[7]
            const fileNameWithoutExt = fileName.split(".")[0]
            await cloudinary.uploader.destroy(fileNameWithoutExt)
        }
        const { secure_url } = await cloudinary.uploader.upload(req.file.path)
        fs.unlink(req.file.path, (err) => console.log(err))
        
        user.avatar = secure_url
        await user.save()

        res.status(200).json({message: "profile image upload successfully"})
    } catch (error) {
        res.status(500).json({message: "server down"})
    }
}
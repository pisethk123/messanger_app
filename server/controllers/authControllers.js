import User from "../models/User.js"
import setCookie from "../utils/setCookie.js"

// sign up
export const signUp = async (req, res) => {
    try {
        const { fullName, username, password, confirmPassword } = req.body
        if (!fullName || !username || !password || !confirmPassword) {
            return res.status(401).json({message: "all fields are required!"})
        }

        if(password !== confirmPassword) {
            return res.status(401).json({message: "password does not match!"})
        }

        const user = await User.findOne({username})
        if(user) {
            return res.status(401).json({message: "username already exist!"})
        }

        const newUser = await User({fullName, username, password}).save()

        setCookie(newUser._id, res)
        res.status(201).json({message: "user created"})
    } catch (error) {
        res.status(500).json({message: 'server down'})
    }
}

// sign in
export const signIn = async (req, res) => {
    try {
        const { username, password } = req.body
        if ( !username || !password ) {
            return res.status(401).json({message: "all fields are required!"})
        }

        const user = await User.findOne({username})
        if(!user) {
            return res.status(401).json({message: "invalid username!"})
        }

        const verifiedPassword = await user.comparePassword(password)

        if(!verifiedPassword) {
            return res.status(401).json({message: "invalid password!"})
        }

        setCookie(user._id, res)
        res.status(200).json({message: "user logged in"})
    } catch (error) {
        res.status(500).json({message: 'server down'})
    }
}

// is loggedin
export const isLoggedin = async (req, res) => {
    try {
        const userId = req.userId
        const user = await User.findOne({_id: userId}).select("_id fullName username")
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({message: 'server down'})
    }
}

// log out
export const logOut = async (req, res) => {
    try {
        res.cookie("messenger_app", "", {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: new Date(0),
            sameSite: "strict"
        })

        res.status(200).json({})
    } catch (error) {
        res.status(500).json({message: 'server down'})
    }
}
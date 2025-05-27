import jwt from "jsonwebtoken"

const setCookie = (userId, res) => {
    const token = jwt.sign({userId}, process.env.JWT_SECRET, { expiresIn: "30d"})

    res.cookie("messenger_app", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 30 * 24 * 60 * 60 * 1000,
        sameSite: "strict"
    })
}

export default setCookie
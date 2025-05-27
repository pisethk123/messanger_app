import jwt from "jsonwebtoken"

const isAuthenticated = async (req, res, next) => {
    try {
        const token = req.cookies.messenger_app
        if(!token) {
            return res.status(401).json({message: "Unauthorized, no token"})
        }

        const verifiedToken = jwt.verify(token, process.env.JWT_SECRET)
        if(!verifiedToken) {
            return res.status(401).json({message: "Unauthorized, invalid token"})
        }
        
        req.userId = verifiedToken.userId
        next()
    } catch (error) {
        return res.status(401).json({message: "Invalid or expired token"})
    }
}

export default isAuthenticated
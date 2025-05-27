import mongoose from "mongoose";
import env from "dotenv"

env.config()

mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log("database is connected"))
.catch((error) => console.log(error))
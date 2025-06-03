import mongoose from "mongoose";

const roomSchema = mongoose.Schema({
    type: {
        type: String,
        enum: ["private", "group"]
    },
    paticipants: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }]
}, {timestamps: true})

const Room = mongoose.model("Room", roomSchema)

export default Room
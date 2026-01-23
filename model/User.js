import mongoose  from "mongoose";

const UserSchrma = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true
    },
    location:{
        type: String,
    }
}, {timestamps: true})

export const User = mongoose.model("User", UserSchrma);
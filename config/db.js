import mongoose from "mongoose";

export const database = async () =>{
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/day3DB")
        console.log("Database connected..")
    }catch(error){
        console.log("Database failed..")
    }
}
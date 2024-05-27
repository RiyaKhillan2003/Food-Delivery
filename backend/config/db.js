import mongoose from "mongoose";

export const connectDB = async ()=>{
    await mongoose.connect('mongodb+srv://Riya1185:RiyaKhillan@cluster0.p2fteth.mongodb.net/fooddel').then(()=>{
        console.log("DB CONNECTED");
    })
}

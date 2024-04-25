import mongoose from "mongoose";

const userDetailsSchema  = new mongoose.Schema({
    name:{
        type:String,
    },
    number:{
        type:Number,
    },   
    subject :{
        type:String,
    },
    message :{
        type:String,
    }
})

export default userDetailsSchema;
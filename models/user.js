import mongoose from "mongoose";

const userSechmea = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
     email:{
        type:String,
        require:true,
        unique:true
    },
    role:{
        type:String,
        enum:["admin" , "user"],
        default:"user"
    },
     password:{
        type:String,
        require:true,
        unique:true,

    },


},{timestamps:true})

const UserModel = mongoose.model('user', userSechmea)

export default UserModel 
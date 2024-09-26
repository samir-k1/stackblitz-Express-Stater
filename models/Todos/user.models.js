import mongoose from "mongoose"

const userSchema=new mongoose.Schema({
  username:{
    type:String,
    required:true,
    unique:true,
    lowerCase:true,
  isActive: Boolean
},

  email:{
    type:String,
    required:true,
    uniquer:true,
    lowercase: true

  },
  password:{
    type:String,
    required:true,
    uniquer:true,
    lowercase: true 
    
  }
  
  



},
{
  timestamps:true
})
export const User=mongoose.model("USer",userSchema) 
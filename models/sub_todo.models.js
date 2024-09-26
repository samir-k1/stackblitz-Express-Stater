import { Timestamp } from "bson"
import mongoose from "mongoose"


const subTodoSchema=new mongoose.Schema({},{Timestamp:true})

export const SubTodo= mongoose.model("SubTodo",subTodoSchema)


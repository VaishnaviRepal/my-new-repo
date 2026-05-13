
//Read file 'notes 'for more details about mongoose / CodeNotes
import mongoose from "mongoose";

//Define the schema -> the blue print
// 1. User Schema (userId as Primary Key)   
const usersSchema = new mongoose.Schema({
    // By naming it _id, Mongoose treats this as the unique Primary Key
    _id : {
        type : mongoose.Types.ObjectId,
        auto : true //automatically gets generated
    },
    username : String,
    password : String
})

const todosSchema = new mongoose.Schema({
    todoId : {
        type :mongoose.Types.ObjectId,
        //required : true //required field
        auto : true
    },

    task : String,
    description : String,
    // This acts as the Foreign Key referencing the 'User' model
    userId : {
        type : mongoose.Types.ObjectId,
        ref : "User" //must match the name of the mongo db model 
    }
})

//Models -> bringing the blueprint into existence | models are always created as a plural User-> Users
export const Users = mongoose.model("Users" , usersSchema);
export const Todos = mongoose.model("Todos" , todosSchema);


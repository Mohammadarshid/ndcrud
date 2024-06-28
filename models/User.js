import mongoose from "mongoose";


const UserSchema = new mongoose.Schema({
    Name: {
          type:"string"
    },
    FatherName: {
         type:"string"
    },
    Email: {
        type:"String"
    }, Phone: {
        type:"String"
    }

}, { timestamps: true })

const UserModels = mongoose.model('Jesus', UserSchema)


export default UserModels
import mongoose from "mongoose";

const usuariosSchema=new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String, 
            unique: true, 
            required: true
        }, 
        role: {
            type: String, 
            default: "user"
        }, 
        password: String, 
        age: Number
    },
    {
        timestamps: true,
        // strict: false,
        // collection: "usuarios2007"
    }
)

export const usuariosModelo=mongoose.model(
    "usuarios", 
    usuariosSchema
)

// usuariosModelo.create({name:"Francisco"})
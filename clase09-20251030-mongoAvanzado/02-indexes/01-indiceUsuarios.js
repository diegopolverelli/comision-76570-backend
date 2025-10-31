import mongoose from 'mongoose';
import { mongourl } from './utils.js';

const usuariosEsquema = new mongoose.Schema(
    {
        first_name: String, 
        last_name: String,
        email: String, 
        gender: String, 
        code: Number
    },
    { 
        collection: 'bigUsers' 
    }
)

const usuariosModelo = mongoose.model('usuarios', usuariosEsquema)

const entorno=async()=>{
    try {
        await mongoose.connect(mongourl)
        console.log(`Conexión a DB establecida`)



        process.exit()
        
    } catch (error) {
        console.log(error.message)
    }
}

entorno()
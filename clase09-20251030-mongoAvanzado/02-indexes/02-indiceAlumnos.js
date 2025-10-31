import mongoose from 'mongoose';
import { mongourl } from './utils.js';

let alumnoEsquema=new mongoose.Schema({
    codigo: Number,
    nombre: String, 
    apellido: String,
    email: String,
    estudios: String,
    origen: String,
    promedio: Number
  }, {collection:'bigAlumnos'})





let alumnoModelo=mongoose.model('alumnos', alumnoEsquema)


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
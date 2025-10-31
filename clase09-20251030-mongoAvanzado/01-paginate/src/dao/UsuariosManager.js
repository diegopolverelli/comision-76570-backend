import { usuariosModelo } from "../models/usuariosModelo.js";

export class UsuariosManager{
    static async getUsuarios(page=1, limit=10){
        // return await usuariosModelo.find().lean()
        return await usuariosModelo.paginate({}, {limit, lean:true, page})
    }
}
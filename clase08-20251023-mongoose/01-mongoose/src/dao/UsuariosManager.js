import { usuariosModelo } from "./models/usuariosModelo.js";

export class UsuariosManager{
    static async getUsers(filtro={}){
        return await usuariosModelo.find().lean(filtro)
    }

    static async getUserBy(filtro={}){
        return await usuariosModelo.findOne(filtro).lean()   // {email:"juan@test.com"} o {_id:"asdfasdfadsf"} o {role:"admin", name:{$regex:/juan/i}}
    }

    static async createUser(user){
        let nuevoUsuario=await usuariosModelo.create(user)
        return nuevoUsuario.toJSON()
    }

    static async update(id, aModificar={}){
        // return await usuariosModelo.updateOne({_id: id}, aModificar)
        return await usuariosModelo.findByIdAndUpdate(id, aModificar, {new: true}).lean()
    }

    static async delete(id){
        // return await usuariosModelo.deleteOne({_id: id})
        return await usuariosModelo.findByIdAndDelete(id, {new: true}).lean()
    }
}
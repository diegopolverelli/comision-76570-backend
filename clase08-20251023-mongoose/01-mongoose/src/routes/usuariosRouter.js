import { Router } from 'express';
import { usuariosModelo } from '../dao/models/usuariosModelo.js';
import { UsuariosManager } from '../dao/UsuariosManager.js';
import { isValidObjectId } from 'mongoose';
import { responseError } from '../utils.js';

import crypto from "crypto"
import { config } from '../config/config.js';

export const router=Router()

router.get('/',async(req,res)=>{

    try {
        // let usuarios="usuarios"
        // let usuarios=await usuariosModelo.find()
        let usuarios=await UsuariosManager.getUsers()

        console.log(usuarios)
        if(usuarios.length>0){
            let propiedades=Object.keys(usuarios[0])
            console.log(propiedades)
        }
    
        res.setHeader('Content-Type','application/json')
        res.status(200).json({usuarios})
    } catch (error) {
        responseError(error, res)
    }
})

router.get("/:id", async(req, res)=>{
    let {id}=req.params

    if(!isValidObjectId(id)){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Inserte un id valido de mongoDb`})
    }

    try {
        let usuario=await UsuariosManager.getUserBy({_id:id})

        res.setHeader('Content-Type','application/json');
        return res.status(200).json({usuario});
    } catch (error) {
        responseError(error, res)
    }
})

router.post("/", async(req, res)=>{
    let {name, email, age, role, password}=req.body
    if(!name || !email){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`name | email son requeridos`})
    }

    // validaciones pertinentes...

    try {
        let existe=await UsuariosManager.getUserBy({email})
        if(existe){
            res.setHeader('Content-Type','application/json');
            return res.status(400).json({error:`Ya existe otro usuario con email ${email}: ${existe.name}`})
        }

        if(password){
            password=crypto.createHmac("sha256", config.SECRET).update(password).digest("hex")
        }

        let nuevoUsuario=await UsuariosManager.createUser({name, role, age, password, email })

        res.setHeader('Content-Type','application/json');
        return res.status(201).json({payload:`Usuario creado con éxito...!!!`, nuevoUsuario});
    } catch (error) {
        responseError(error, res)
    }
})

router.put("/:id", async(req, res)=>{
    let {id}=req.params

    if(!isValidObjectId(id)){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Inserte un id valido de mongoDb`})
    }

    let aModificar=req.body

    // validaciones varias... pertinentes
    if(aModificar._id){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`No se puede modificar la property _id`})
    }

    try {
        if(aModificar.email){
            let existe=await UsuariosManager.getUserBy({email: aModificar.email, _id:{$ne:id}})
            // console.log(existe)
            if(existe){
                res.setHeader('Content-Type','application/json');
                return res.status(400).json({error:`Ya existe otro usuario con email ${aModificar.email}: ${existe.name}`})
            }
        }

        let existe=await UsuariosManager.getUserBy({_id:id})
        if(!existe){
            res.setHeader('Content-Type','application/json');
            return res.status(404).json({error:`No existen usuarios con id ${id}`})
        }
        let usuarioModificado=await UsuariosManager.update(id, aModificar)

        res.setHeader('Content-Type','application/json');
        return res.status(200).json({payload:"Usuario modificado con éxito...!!!", usuarioModificado});
    } catch (error) {
        responseError(error, res)
    }
})


router.delete("/:id", async(req, res)=>{
    let {id}=req.params

    if(!isValidObjectId(id)){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Inserte un id valido de mongoDb`})
    }

    // validaciones extra... 
    try {
        let existe=await UsuariosManager.getUserBy({_id:id})
        if(!existe){
            res.setHeader('Content-Type','application/json');
            return res.status(404).json({error:`No existen usuarios con id ${id}`})
        }
        
        let usuarioEliminado=await UsuariosManager.delete(id)

        res.setHeader('Content-Type','application/json');
        return res.status(200).json({payload:`Usuario eliminado...!!!`, usuarioEliminado});
    } catch (error) {
        responseError(error, res)
    }
})
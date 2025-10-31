import { Router } from 'express';
import { UsuariosManager } from '../dao/UsuariosManager.js';
export const router=Router()

router.get('/',async(req,res)=>{

    let {page, limit} =req.query
    if(!page) page=1
    if(!limit) limit=10

    try {
        let {
            docs: usuarios, 
            hasNextPage, 
            hasPrevPage, 
            nextPage, 
            prevPage, 
            totalPages
        }=await UsuariosManager.getUsuarios(page, limit)

        res.setHeader('Content-Type','application/json')
        res.status(200).json({
            usuarios,
            hasNextPage, 
            hasPrevPage, 
            nextPage, 
            prevPage, 
            totalPages
        })
    } catch (error) {
        res.setHeader('Content-Type','application/json');
        return res.status(500).json({error:`Error`})
    }

})
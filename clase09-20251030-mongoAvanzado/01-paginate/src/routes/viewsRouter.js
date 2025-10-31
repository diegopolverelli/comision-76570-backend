import { Router } from 'express';
import { UsuariosManager } from '../dao/UsuariosManager.js';
export const router=Router()

router.get('/usuarios',async(req,res)=>{

    let {page, limit} =req.query
    if(!page) page=1
    if(!limit) limit=10

    try {
        // let {docs: usuarios}=await UsuariosManager.getUsuarios()
        let resultado=await UsuariosManager.getUsuarios(page, limit)
        let usuarios=resultado.docs

        let {hasPrevPage, hasNextPage, prevPage, nextPage, totalPages} =resultado


        // console.log(JSON.stringify(usuarios, null, 5))



        res.render("usuarios", {
            usuarios, 
            hasPrevPage, 
            prevPage, 
            hasNextPage, 
            nextPage, 
            totalPages
        })
    } catch (error) {
        res.setHeader('Content-Type','application/json');
        return res.status(500).json({error:`Error... `})
    }
    

})
const { VillanosManager } = require('../dao/VillanosManager.js');

const Router=require('express').Router;
const router=Router()

router.get('/',async(req,res)=>{

    let villanos=await VillanosManager.getVillanos()

    res.setHeader('Content-Type','application/json')
    res.status(200).json({villanos})
})

router.get('/:id',async(req,res)=>{

    let villanos=await VillanosManager.getVillanos()
    let villano=villanos.find(v=>v.id==req.params.id)
    if(!villano){
        res.setHeader('Content-Type','application/json');
        return res.status(400).send({error:`No existen villanos con id ${req.params.id}`})
    }
    res.setHeader('Content-Type','application/json')
    res.status(200).json({villano})
})


module.exports=router
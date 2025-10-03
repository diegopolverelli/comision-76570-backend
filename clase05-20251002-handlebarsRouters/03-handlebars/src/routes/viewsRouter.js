const { VillanosManager } = require('../dao/VillanosManager.js');

const Router=require('express').Router;
const router=Router()

router.get('/',(req,res)=>{


    let {nombre}=req.query
    if(!nombre) nombre=`bienvenido...!!!`
    
    let edad=24
    let email="diego@test.com"

    res.render("home", {
        nombre, 
        edad, 
        email
    })
})

router.get("/villanos", async(req, res)=>{

    let {cantidad}=req.query
    try {
        let villanos=await VillanosManager.getVillanos()

        if(cantidad){
            villanos=villanos.slice(0, cantidad)
        }

        res.render("villanos", {
            villanos
        })
    } catch (error) {
        res.setHeader('Content-Type','application/json');
        return res.status(500).json({error:`Internal server error`})        
    }
})


module.exports=router
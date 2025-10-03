const {Router}=require("express")

// const Router=require("express").Router

// const express=require("express")
// const router=express.Router()


const router=Router()

let nombres=["Juan", "Mariana", "Patricia"]

router.get("/", (req, res)=>{

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({nombres});
})

router.get("/:pos", (req, res)=>{

    let {pos}=req.params

    if(pos<1 || pos>nombres.length){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Pos debe estar entre 1 y ${nombres.length}`})
    } 

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({nombre:nombres[pos-1]});
})

router.post("/", (req, res)=>{
    let {nombre}=req.body

    // validaciones...!!!! simpre en handler o controller
    if(!nombre){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`nombre es requerido`})
    }

    nombres.push(nombre)
    res.setHeader('Content-Type','application/json');
    return res.status(200).json({payload:`Se insertó ${nombre}`, nombres});

})

router.put("/:pos", (req, res)=>{

    let {pos}=req.params
    
    if(pos<1 || pos>nombres.length){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Pos debe estar entre 1 y ${nombres.length}`})
    } 

    let{nombre}=req.body
    if(!nombre){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`nombre es requerido`})
    }

    let nombreAnterior=nombres[pos-1]
    nombres[pos-1]=nombre

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({nombreAnterior, nombreNuevo:nombre, nombres});
})

router.get("/filtrar/:filtro", (req, res)=>{

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({payload:"Filtro nombre...!!!"});
})

router.delete("/:pos", (req, res)=>{

    let {pos}=req.params

    if(pos<1 || pos>nombres.length){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Pos debe estar entre 1 y ${nombres.length}`})
    } 

    let nombreBorrado=nombres[pos-1]
    nombres.splice(pos-1, 1)

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({nombreBorrado, nombres});
})



module.exports={router}
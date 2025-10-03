const {Router} =require("express")
const PetsManager = require("../dao/PetsManager.js")
const { resError } = require("../utils.js")

const router=Router()

router.get("/", async(req, res)=>{

    try {
        let pets=await PetsManager.getPets()
        res.setHeader('Content-Type','application/json');
        return res.status(200).json({payload:pets});
    } catch (error) {
        resError(res, error)
    }

})

router.get("/:id", async(req, res)=>{

    let {id}=req.params

    try {
        let pets=await PetsManager.getPets()
        let pet=pets.find(p=>p.id==+id)
        if(!pet){
            res.setHeader('Content-Type','application/json');
            return res.status(400).json({error:`No existen mascotas con id ${id}`})
        }
        res.setHeader('Content-Type','application/json');
        return res.status(200).json({pet});
    } catch (error) {
        resError(res, error)
    }

})


module.exports={router}
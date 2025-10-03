const express=require("express")
const { UsersManager } = require("./dao/UsersManager.js")

UsersManager.path="./src/data/usuarios.json"

const PORT=3000

const app=express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get("/", (req, res)=>{


    res.send("Home Page")
})

app.get("/api/usuarios", async(req, res)=>{
    try {
        let usuarios=await UsersManager.getUsers()
    
        res.send(usuarios)
    } catch (error) {
        console.log(error)

        res.setHeader('Content-Type','application/json');
        return res.status(500).json({error:`Internal server error`})
    }

})

app.get("/api/usuarios/:id", async(req, res)=>{

    try {
        
        let {id} =req.params
    
        // let dato=req.params.id
    
        let usuarios=await UsersManager.getUsers()

        console.log(`ruta /api/usuarios/:id`)

        let usuario=usuarios.find(u=>u.id==+id)
        if(!usuario){
            res.setHeader('Content-Type','application/json');
            return res.status(400).json({error:`No existen usuarios con id ${id}`})
        }

    
        res.send(usuario)
    } catch (error) {
        console.log(error)

        res.setHeader('Content-Type','application/json');
        return res.status(500).json({error:`Internal server error`})
        
    }

})


app.get("/api/usuarios/:nombre", async(req, res)=>{

    console.log(`ruta /api/usuarios/:nombre`)


    try {
        
        let nombre=req.params.nombre
   
        res.send(`Usuario ${nombre}`)
    } catch (error) {
        console.log(error)

        res.setHeader('Content-Type','application/json');
        return res.status(500).json({error:`Internal server error`})
        
    }

})

app.get("/api/usuarios/filtrarpor/:nombre", async(req, res)=>{

    console.log(`ruta /api/usuarios/:nombre`)


    try {
        
        let nombre=req.params.nombre
   
        res.send(`Usuario ${nombre}`)
    } catch (error) {
        console.log(error)

        res.setHeader('Content-Type','application/json');
        return res.status(500).json({error:`Internal server error`})
        
    }

})


app.get("/api/usuarios/:id/comprar/:idProducto", async(req, res)=>{

    try {
        
        let {id, idProducto} =req.params
    
        // let dato=req.params.id
    
        // let usuarios=await UsersManager.getUsers()
    
        res.send(`El usuario con id ${id} compro el producto ${idProducto}`)
    } catch (error) {
        console.log(error)

        res.setHeader('Content-Type','application/json');
        return res.status(500).json({error:`Internal server error`})
        
    }

})

const server=app.listen(PORT, ()=>{
    console.log(`Server online en puerto ${PORT}`)
})
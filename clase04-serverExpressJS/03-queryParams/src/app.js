const express=require("express")
const { UsersManager } = require("./dao/UsersManager.js")

// const {promises:fs} = require("fs")
// fs.writeFile()

// const um=require("./dao/UsersManager.js")
// um.UsersManager.getUsers()

const PORT=3000

const app=express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

UsersManager.path="./src/data/usuarios.json"

app.get("/", (req, res)=>{

    let homeHtml=`
    <h1>Home Page</h1>
    <hr>
    <p>Prueba Query Params</p>
    `

    res.send(homeHtml)
    // res.render()
    // res.json()
})

app.get("/usuarios", async(req, res)=>{

    let {cantidad}=req.query

    try {
        let usuarios=await UsersManager.getUsers()
        if(cantidad){
            usuarios=usuarios.slice(0, cantidad)
            if(isNaN(Number(cantidad)) || Number(cantidad)>usuarios.length ){
                res.send(`Error en la cantidad (no numércia o supera la cantidad de usuarios, igual a ${usuarios.length})`)
                return 
            }  
        }
    
        res.send(usuarios)
    } catch (error) {
        res.send(`Error...`)
    }
})



const server=app.listen(PORT, ()=>{
    console.log(`Server online in port ${PORT}`)
})
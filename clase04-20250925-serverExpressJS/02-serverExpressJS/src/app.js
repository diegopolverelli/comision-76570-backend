const express=require("express")

const PORT=3000
 
const app=express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get("/", (req, res)=>{


    res.send(`Server con ExpressJS (ya sin el módulo HTTP...)`)
})

app.get("/productos", (req, res)=>{
    let productos=[
        { id: 1, code: 'PROD001', title: 'Camiseta Negra', stock: 20, price: 19.99, descrip: 'Camiseta de algodón', status: true },
        { id: 2, code: 'PROD002', title: 'Pantalón Jeans', stock: 15, price: 39.99, descrip: 'Jeans clásico', status: true },
        { id: 3, code: 'PROD003', title: 'Camisa Verde manga corta', stock: 12, price: 28.99, descrip: 'Camisa manga corta', status: true },
        { id: 4, code: 'PROD004', title: 'Pantalón Verde', stock: 32, price: 39.99, descrip: 'Jeans clásico color', status: true },
        { id: 5, code: 'PROD005', title: 'Camisa Negra manga corta', stock: 20, price: 28.99, descrip: 'Camisa manga corta', status: false },
        { id: 6, code: 'PROD006', title: 'Pantalón Corto', stock: 14, price: 39.99, descrip: 'Pantalon deportivo corto', status: true },
        { id: 7, code: 'PROD007', title: 'Camiseta Roja', stock: 20, price: 19.99, descrip: 'Camiseta de algodón', status: true },
        { id: 8, code: 'PROD008', title: 'Camisa Blanca', stock: 21, price: 32.99, descrip: 'Camisa de vestir', status: true },
        { id: 9, code: 'PROD009', title: 'Camiseta Celeste', stock: 32, price: 19.99, descrip: 'Camiseta de algodón', status: false },
        { id: 10, code: 'PROD010', title: 'Camisa Blanca manga corta', stock: 7, price: 28.99, descrip: 'Camisa manga corta', status: true },
    ]

    console.log(req.url)
    console.log(req.query)
    
    let respuesta=productos
    
    let {cantidad}=req.query
    if(cantidad){
        respuesta=productos.slice(0, cantidad)
    }

    res.send(respuesta)
})

app.get("/contactos", (req, res)=>{

    res.send(`Contact Page`)
})

const server=app.listen(PORT, ()=>{
    console.log(`Server escuchando el puerto ${PORT}`)
})
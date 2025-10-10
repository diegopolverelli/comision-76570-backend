const express=require("express")
const {Server}=require("socket.io")
const heroesRouter=require("./routes/heroesRouter.js")

const PORT=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("./src/public"))

// app.use('/api/heroes', heroesRouter)
app.use(
    '/api/heroes', 
    (req, res, next)=>{
        req.socket=serverSockets
        next()
    },
    heroesRouter
)

app.get('/',(req,res)=>{

    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

app.get("/oferta", (req, res)=>{

    let {oferta}=req.query
    if(!oferta){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Complete la oferta...!!!`})
    }

    serverSockets.emit("oferta", {oferta, tiempo:3})

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({payload:`Oferta enviada...!!!`});
})

const serverHTTP=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});

const serverSockets=new Server(serverHTTP)    // const io


serverSockets.on("connection", socket=>{
    console.log(`Se ha conectado un cliente con id ${socket.id}`)

    socket.emit("saludo", `Bienvenido! identificate...!!!`)

    socket.on("nombre", nombre=>{
        console.log(`El cliente con id ${socket.id} se llama ${nombre}`)
        socket.broadcast.emit("nuevoUsuario", nombre)
    })


    socket.on("nuevoMensaje", (mensaje, nombre)=>{
        serverSockets.emit("mensaje", mensaje, nombre)
    })

})

let temperatura=0
setInterval(() => {
    temperatura=Math.floor(Math.random()*(7)+27)      // Math.floor(Math.random()*(cantNrosAGenerar)+aPartirDelNro)
    serverSockets.emit("nuevaTemperatura", temperatura)
    
}, 1000);






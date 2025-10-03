const express=require('express');
const {engine}=require("express-handlebars")
const villanosRouter=require("./routes/villanos.router.js")
const vistasRouter=require("./routes/viewsRouter.js")
const PORT=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.engine("hbs", engine({extname:"hbs", }))
app.set("view engine", "hbs")
app.set("views", "./src/views")


app.use("/api/villanos", villanosRouter)
app.use("/", vistasRouter)

// app.get('/',(req,res)=>{
    
//     console.log(`prueba...!!!`)

//     let {nombre}=req.query
//     if(!nombre) nombre=""

//     let content=`<h2>Bienvenido ${nombre}...!!!</h2>`

//     res.setHeader('Content-Type','text/html');
//     res.status(200).send(content);
// })



const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});

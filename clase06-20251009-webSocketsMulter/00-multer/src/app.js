const express=require('express');
const { uploader } = require('./utils.js');
const fs=require("fs")


const PORT=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("./src/public"))

app.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

app.post("/usuario", uploader.single("archivo"), (req, res)=>{

    let {name}=req.body
    // validaciones...

    let {mimetype, path, filename}=req.file

    let tipoArchivo=mimetype.split("/")[0]
    if(tipoArchivo!="image"){

        fs.unlinkSync(path)

        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Solo se admiten imagenes`})
    }

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({
        body: req.body, 
        archivo: req.file, 
        aDB: {
            name, mimetype, path, filename
        }
    });
})

app.use((error, req, res, next)=>{

    res.setHeader('Content-Type','application/json');
    return res.status(500).json({error:`Internal Server Error`, detalle: error.message})
})

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});

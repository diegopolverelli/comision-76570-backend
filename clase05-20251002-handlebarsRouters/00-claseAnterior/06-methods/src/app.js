const express=require('express');
const PORT=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

let nombres=["Juan", "Mariana", "Patricia"]

app.get("/nombres", (req, res)=>{

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({nombres});
})

app.get("/nombres/:pos", (req, res)=>{

    let {pos}=req.params

    if(pos<1 || pos>nombres.length){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Pos debe estar entre 1 y ${nombres.length}`})
    } 

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({nombre:nombres[pos-1]});
})

app.post("/nombres/", (req, res)=>{
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

app.put("/nombres/:pos", (req, res)=>{

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

app.delete("/nombres/:pos", (req, res)=>{

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

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});

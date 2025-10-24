import express from 'express';
import { connDB } from './config/db.js';
import { config } from './config/config.js';

import { router as usuariosRouter } from './routes/usuariosRouter.js';
const PORT=config.PORT;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/api/usuarios", usuariosRouter)

app.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});


// connDB(
//     "mongodb+srv://coder:codercoder@cluster0.qqn4qqk.mongodb.net/?appName=Cluster0",
//     "escuela"
// )
connDB(
    config.database.MONGO_URL,
    config.database.DB_NAME
)
const fs = require("fs")


let rutaArchivo = "./archivos/archivoPromesas.txt"
let texto3 = `
“Debe trabajar el hombre
Para ganarse su pan;
Pues la miseria, en su afán
De perseguir de mil modos,
Llama a la puerta de todos
Y entra en la del haragán”.

“Muchas cosas pierde el hombre
Que a veces la vuelve a hallar;
Pero los debo enseñar,
Y es güeno que lo recuerden:
Si la vergüenza se pierde,
Jamás se la vuelve a encontrar”.

José Hernandez - fragmento del Martin Fierro`



// Utilizando fs con métodos asíncronos / promesas:
// 1) crear un archivo, 
// 2) leer el archivo y mostrar contenido en pantall
// 3) agregar al final del archivo un renglon en blanco y luego 
//    el texto "Editorial Planeta"
// 4) eliminar el archivo


// fs.promises.writeFile(rutaArchivo, texto3, {encoding:"utf-8"})
// fs.promises.writeFile(rutaArchivo, texto3)
//     .then(() => {
//         console.log(`Archivo generado...!!!`)

//         fs.promises.readFile(rutaArchivo, "utf-8")
//             .then(textoLeido => {
//                 console.log(textoLeido)
//                 // append
//             })
//             .catch(e => console.log(e.message))
//     })
//     .catch(e => console.log(e.message))


// fs.promises.writeFile(rutaArchivo, texto3)
//     .then(() => {
//         console.log(`Archivo generado...!!!`)
//         return fs.promises.readFile(rutaArchivo, "utf-8")
//     })
//     .then(datoLeido=>{
//         console.log(datoLeido)
//         // return fs.promises.appendFile(...)
//     })
//     .catch(e => console.log(e.message))


const archivos=async()=>{
    try {
        await fs.promises.writeFile(rutaArchivo, texto3)
        console.log(`Archivo generado`)
        let datoLeido=await fs.promises.readFile(rutaArchivo, "utf-8")
        console.log(datoLeido)
        await fs.promises.appendFile(rutaArchivo, `\n\nEditorial Planeta`)
        console.log(`Editorial añadida!`)
        await fs.promises.unlink(rutaArchivo)
        console.log(`Archivo eliminado!`)
    } catch (error) {
        console.log(`Error: ${error.message}`)
    }
}


archivos()

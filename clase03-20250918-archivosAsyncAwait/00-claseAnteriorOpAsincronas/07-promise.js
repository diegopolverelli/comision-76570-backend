const suma=(a, b)=>{
    return new Promise((res, rej)=>{  //resolve y reject
        if(typeof a!="number" || typeof b!="number"){
            // throw new Error("Solo se admiten valores numéricos")
            rej("Solo se admiten valores numéricos")
        }

        res(a+b)
    })
}

const multiplica=(a, b)=>{
    return new Promise((res, rej)=>{  //resolve y reject
        if(typeof a!="number" || typeof b!="number"){
            // throw new Error("Solo se admiten valores numéricos")
            rej("Solo se admiten valores numéricos")
        }

        res(a*b)
    })
}

// 5x6=30
suma(5, 5)
    .then(res1=>{
        suma(res1, 5)
            .then(res2=>{
                suma(res2, 5)
                    .then(res3=>{
                        suma(res3, 5)
                            .then(res4=>{
                                console.log(`el res1 tiene ${res1}`)
                                suma(res4, 5)
                                    .then(resFinal=>console.log(`Promises Hell 5x6: ${resFinal}`))
                            })
                    })
            })
    })

suma(4, 6)
    .then((res)=>{
        throw new Error("error prueba")
        return `el resultado es ${res}`
    })
    .then(texto=>{
        // codigo...
        return texto.toUpperCase()
    })
    .then(textUpper=>{
        console.log(textUpper)
    })
    .catch(e=>{
        console.log(e.message)
    })


// 5x5
suma(5, 5)
    .then(res=>{
        return suma(res, 5)
    })
    .then(res=>{
        return suma(res, 5)
    })    
    .then(res=>{
        return suma(res, 5)
    })
    .then(res=>{
        return suma(res, 5)
    })
    .then(resFinal=>{
        console.log(`5 x 6 con encadenamiento: ${resFinal}`)
    })
    .catch(e=>console.log(e))

// 5x4 + 3x2 =26
let auxiliar1
multiplica(5, 4)
    .then(res1=>{
        auxiliar1=res1
        return multiplica(3, 2)
    })
    .then(res2=>{
        // return suma(res1, res2)
        return suma(auxiliar1, res2)
    })
    .then(resFinal=>console.log(`Operacion: ${resFinal}`))

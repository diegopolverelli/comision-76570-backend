const suma=(a, b)=>{
    return new Promise((res, rej)=>{  //resolve y reject
        if(typeof a!="number" || typeof b!="number"){
            // throw new Error("Solo se admiten valores numéricos")
            rej("Solo se admiten valores numéricos")
        }

        res(a+b)
    })
}

// console.log(suma(5, 4))
// console.log(suma(5, 4)+10)
// console.log(suma(5, 4)*2)

suma(5, 4).then(resultado=>console.log(resultado)).catch(e=>console.log(e))
suma(5, 4).then(resultado=>console.log(resultado+10)).catch(e=>console.log(e))
suma(5, 4).then(resultado=>console.log(resultado*2)).catch(e=>console.log(e))
suma(5, false).then(resultado=>console.log(resultado*2)).catch(e=>console.log(e))

suma(5, 4)
    .then(resultado=>console.log(resultado*2))
    .catch(e=>console.log(e))


suma(5, 4)
    .then(resultado=>console.log(resultado*2))
    .catch(e=>console.log(e))
    .finally(()=>{
        console.log(`Esto ejecutará siempre`)
    })
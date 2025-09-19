// let boton=document.getElementById("idBtn01")

// boton.addEventListener("click", e=>{
//     e.preventDefault()
//     //...
// })

const operar=(a, b, cb)=>{  // el callback tiene que tener esta estructura: (error, a, b)
    if(typeof a!="number" || typeof b!="number"){
        // throw new Error("Solo se admiten valores numéricos")
        return cb(new Error("Solo se admiten valores numéricos"))
    }
    return cb(null, a, b)
}

console.log(operar(5, 4, (e, a, b)=>a+b))
console.log(operar(5, 4, (e, a, b)=>a-b))
console.log(operar(5, 4, (e, a, b)=>a*b))
console.log(operar(5, 4, (e, a, b)=>a/b))
console.log(operar(5, 4, (e, a)=>a**2))


console.log(operar(5, false, (e, a)=>{
    if(e){
        // console.log(e.message)
        return e.message
    }
    
    return a**2
}))

console.log(operar(5, 4, (e)=>{
    return "hola"
}))
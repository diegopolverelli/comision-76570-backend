function suma(a, b){
    if(typeof a!="number" || typeof b!="number"){
        console.log(`Solo se admiten valores numéricos`)
        return 
    }

    console.log(a+b)
}



// suma="la acción de sumar 2 números"

const suma2=function(a, b){
    return a+b
}

// suma2="la accion..."

console.log(suma2(8, 8))
console.log(suma2(8, 8))
console.log(suma2(8, 8))
console.log(suma2(8, 8))


suma(3, 2)
suma(3, 20)
suma(-1, 42)
suma(300, 200)
suma("Patricia", 200)
suma(100, 500)

// const sumaFlecha=(a,b)=>{
//     return a+b
// }
const sumaFlecha=(a,b)=>a+b


console.log(sumaFlecha(5,5))
let resultado=sumaFlecha(4, 1000)
console.log(resultado)

// this

// let cuadrado=(a)=>a*a
const cuadrado=a=>a*a
console.log(cuadrado(9))

const saludo=()=>{
    console.log("hola...!!!")

    // return undefined
}

let resultado1=saludo()
console.log(resultado1)





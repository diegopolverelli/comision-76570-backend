// includes
let nombres=["Juan", "Mariana", "Carlos", "Sabrina", "Veronica"]
console.log(nombres.includes("Sandra"))
console.log(nombres.includes("Juan"))
console.log(Array.isArray("pedro"))
console.log(Array.isArray(nombres))


// operador potencia
console.log(Math.pow(9,2))
console.log(9**2)



// métodos Object
let usuarios=[
    {id:1, nombre:"Luciana", email:"luciana@test.com", password:"123", rol:"user"},
    {id:2, nombre:"Juan", email:"juan@test.com", password:"123", rol:"user"},
    {id:3, nombre:"Romina", email:"romina@test.com", password:"123", rol:"admin"},
]

console.log(Object.keys(usuarios[0]))
console.log(Object.values(usuarios[0]))



// operador spread / operador rest   ...
let usuarioRequest={nombre: "Diana", apellido: "Rojas", email: "drojas@test.com", edad:29}
let idAsignado=100
let nuevoUsuario={
    idAsignado, 
    // nombre: usuarioRequest.nombre, 
    // apellido: usuarioRequest.apellido,
    ...usuarioRequest
}

console.log(nuevoUsuario)



let numeros1=[1,2,3,4]
let numeros2=[5,6,7,8]
let todosLosNumeros=[...numeros1, ...numeros2]
console.log(todosLosNumeros)


const suma=(a, b, ...otrosValores)=>{
    console.log({a, b, otrosValores})
}

suma(3, 3)
suma(3, 3, 5)
suma(0, 0, numeros2)
suma(0, 0, ...numeros2)
suma(3, 3, 5, 6, false, "juan")
suma()

const sumaOK=(...sumandos)=>{  // ... son acá op. rest
    let resultado=0
    sumandos.forEach(n=>{
        resultado+=n
    })
    return resultado
}

console.log(sumaOK(3, 4))
console.log(sumaOK(3, 4, 100, 100))
console.log(sumaOK(3, 4, 100, 100, -1000))
console.log(sumaOK())

console.log(sumaOK(...numeros2))  // los ... son aquí el op spread
// console.log(sumaOK(5,6,7,8))  // los ... son aquí el op 


// operador nulish ??

let temperatura=undefined
// let respuesta=`La temperatura es de ${temperatura || "error de lectura del sensor"}`
let respuesta=`La temperatura es de ${temperatura ?? "error de lectura del sensor"}`
console.log(respuesta)



// array.flat()
let arrayAnidado=[1,2,3,[4,5,6],7,8,[9],10,11,12]
console.log(arrayAnidado.flat())


arrayAnidado=[1,2,3,[4,5,6],7,8,[9,[10,11,12],13,14,[15,[16,17,18]]],19,20]
console.log(arrayAnidado.flat())
console.log(arrayAnidado.flat(5))







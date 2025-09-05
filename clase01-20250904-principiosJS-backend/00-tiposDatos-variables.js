console.log("Juan", typeof "Juan")
console.log(90, typeof 90)
console.log(false, typeof false)
console.log(4n, typeof 4n)
console.log([false, 1, "hola...!!!"], typeof [false, 1, "hola...!!!"])
console.log({nombre:"Mariana", edad:32}, typeof {nombre:"Mariana", edad:32})

// Number
// Object
// Array


const prueba=()=>{
    throw new Error("Error de muestra...!!!")
}

console.log(Array.isArray(100))
console.log(Array.isArray([1, 2, 4, "a", "b", "c"]))

console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MIN_SAFE_INTEGER)

// prueba()

console.log(Object.keys({nombre:"Mariana", edad:32, mail:"marian23@gmail.com", colorPelo: "negro"}))
console.log(Object.values({nombre:"Mariana", edad:32, mail:"marian23@gmail.com", colorPelo: "negro"}))
console.log(Object.entries({nombre:"Mariana", edad:32, mail:"marian23@gmail.com", colorPelo: "negro"}))

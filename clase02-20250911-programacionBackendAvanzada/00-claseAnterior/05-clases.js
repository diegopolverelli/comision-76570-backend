class Alumno{
    #nombre
    #email
    static #ultLegajo=0

    constructor(nombre, email){
        Alumno.#ultLegajo+=1
        this.#nombre=nombre
        this.#email=email
        this.legajo=Alumno.#ultLegajo
        this.notaPromedio
        this.cursos=[]
    }

    static verUltNro(){
        return this.#ultLegajo
    }

    saludar(){
        return `Hola, me llamo ${this.#nombre}`
    }

    cambiarNombre(nuevoNombre){
        // validaciones
        if(typeof nuevoNombre!="string" || nuevoNombre.length<3){
            return `Error... indique un nombre válido`
        }
        this.#nombre=nuevoNombre
        return`Nombre modificado!`
    }

}


let alumno01=new Alumno("Mariana", "marian@test.com")
let alumno02=new Alumno("Ernesto", "esnesto@test.com")
let alumno03=new Alumno("Viviana", "vivi2024@test.com")

alumno02.cursos.push("Historia")

console.log(alumno01)
console.log(alumno02)
console.log(alumno03)

// console.log(alumno02.nombre)
console.log(alumno02.saludar())

console.log(alumno01.saludar())
// alumno01.nombre="Ezequiel"
console.log(alumno01.cambiarNombre(false))
console.log(alumno01.cambiarNombre("Pablo"))

console.log(alumno01.saludar())

console.log(`Alumnos generados hasta el momento: ${Alumno.verUltNro()}`)


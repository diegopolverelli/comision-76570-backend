const fs=require("fs")


class UsersManager{

    // constructor(){

    // }

    static path="./users.json"

    static async addUser(nombre, email){
        // validaciones
        if(!nombre || !email){
            throw new Error(`nombre | email son requeridos`)
        }

        let usuarios=await this.getUsers()
        let existe=usuarios.find(u=>u.email.toLowerCase()==email.toLowerCase())
        if(existe){
            throw new Error(`Ya existe un usuario con email ${email}: es ${existe.nombre}`)  
        }

        let id=1
        if(usuarios.length>0){
            id=Math.max(...usuarios.map(d=>d.id))+1
        }

        let nuevoUser={
            id, 
            nombre, 
            email
        }

        usuarios.push(nuevoUser)

        await fs.promises.writeFile(this.path, JSON.stringify(usuarios, null, 5))

        return nuevoUser
    }

    static async getUsers(){
        if(fs.existsSync(this.path)){
            let usuarios=JSON.parse(await fs.promises.readFile(this.path, "utf-8"))
            return usuarios
        }else{
            return []
        }
    }

    // consultarUsers(){}
}

// UsersManager.addUser()

const appUsers=async()=>{
    UsersManager.path="./data/usuarios.json"
    // UsersManager.path="c:\\users"
    try {
        let usuarios=await UsersManager.getUsers()
        console.log(usuarios)
        // console.log(usuarios[1].nombre)
        
        console.log(await UsersManager.addUser("Mariana", "marian@test.com"))
        console.log(await UsersManager.addUser("Pedro", "pedro@test.com"))
        console.log(await UsersManager.addUser("Laura", "Laura@test.com"))
        console.log(await UsersManager.addUser("Mateo", "Mateo@test.com"))
        
        usuarios=await UsersManager.getUsers()
        console.log(usuarios)
        console.log(`Programa finalizado!`)
        
    } catch (error) {
        console.log(error)
        console.log(`Error: ${error.message}`)
    }
}

appUsers()

// let um=new UsersManager()
// um.consultarUsers()

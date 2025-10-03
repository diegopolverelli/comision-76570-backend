const fs=require("fs")


class UsersManager{

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
            usuarios=usuarios.map(u=>{
                return {
                    ...u, 
                    nombre: u.nombre.toUpperCase()
                }
            })
            return usuarios
        }else{
            return []
        }
    }


}

// const numeros=[1, 2, 3]

// module.exports={UsersManager, numeros}
module.exports={UsersManager}
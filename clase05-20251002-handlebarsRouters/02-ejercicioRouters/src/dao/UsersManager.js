const fs=require("fs")
class UsersManager{
    static path="./src/data/users.json"

    static async getUsers(){
        if(fs.existsSync(this.path)){
            return JSON.parse(await fs.promises.readFile(this.path, "utf-8"))
        }else{
            return []
        }
    }
}

module.exports=UsersManager
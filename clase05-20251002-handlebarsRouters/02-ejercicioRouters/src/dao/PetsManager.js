const fs=require("fs")
class PetsManager{
    static path="./src/data/pets.json"

    static async getPets(){
        if(fs.existsSync(this.path)){
            return JSON.parse(await fs.promises.readFile(this.path, "utf-8"))
        }else{
            return []
        }
    }
}

module.exports=PetsManager
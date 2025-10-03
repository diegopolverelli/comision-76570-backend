const fs=require("fs")

class VillanosManager{
    static path="./src/data/villanos.json"

    static async getVillanos(){
        if(fs.existsSync(this.path)){
            return JSON.parse(await fs.promises.readFile(this.path, "utf-8"))
        }else{
            return []
        }
    }
}

module.exports={VillanosManager}
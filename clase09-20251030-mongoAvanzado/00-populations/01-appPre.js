import mongoose from "mongoose";

try {
    await mongoose.connect(
        // "mongodb+srv://coderhouse:codercoder2023@cluster0.wpxpupc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0&dbName=comisPruebas",
        "mongodb+srv://coderhouse:codercoder2023@cluster0.wpxpupc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
        {
            dbName: "comisPruebas",
        }
    )
    console.log(`Conexión establecida...!!!`)

    let cursosModelo= mongoose.model(
        "cursos", 
        new mongoose.Schema(
            {
                nombre: String, 
                horas: Number, 
                docente: String
            }, 
            {
                timestamps: true
            }
        )
    )

    const alumnoSchema=new mongoose.Schema(
        {
            nombre: String,
            email: {
                type: String,
                unique: true
            },
            cursando: {   // products
                type: [
                    {
                        cursoID: {   // product  | no llamar nunca a estar property así: _id 
                            type: mongoose.Types.ObjectId,
                            ref: "cursos"   // "products"
                        },
                        promedio: Number   // quantity
                    }
                ]
            }, 
            // cursadas: {

            // }
        },
        {
            timestamps: true
        }
    )

    alumnoSchema.pre("findOne", function(){
        this.populate("cursando.cursoID").lean()
    })

    alumnoSchema.pre("find", function(){
        this.populate("cursando.cursoID").lean()
    })

    let alumnoModelo = mongoose.model(
        "alumnos",
        alumnoSchema
    )


                                                                                             // "products.product"   
    // let alumno01=await alumnoModelo.findOne({email: "jlmansilla@test.com"}).lean().populate("cursando.cursoID")
    let alumno01=await alumnoModelo.findOne({email: "jlmansilla@test.com"})

    console.log(JSON.stringify(alumno01, null, 5))

    process.exit()
} catch (error) {
    console.log(`Error al conectar a DB: ${error.message}`)
}
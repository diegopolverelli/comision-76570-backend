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

    let alumnoModelo = mongoose.model(
        "alumnos",
        new mongoose.Schema(
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
    )

    // let curso01=await cursosModelo.create(
    //     {
    //         nombre: "JavaScript II", 
    //         horas: 4, 
    //         docente: "Javier Lopez"
    //     }
    // )

    // let curso02=await cursosModelo.create(
    //     {
    //         nombre: "Python Avanzado", 
    //         horas: 6, 
    //         docente: "Carolina Beltran"
    //     }
    // )

    // let alumno01=await alumnoModelo.create(
    //     {
    //         nombre: "Jose Luis Mansilla", 
    //         email: "jlmansilla@test.com", 
    //         cursando: [
    //             {
    //                 cursoID: curso01._id,
    //                 promedio: 7
    //             }, 
    //             {
    //                 cursoID: curso02._id, 
    //                 promedio: 8
    //             }
    //         ]
    //     }
    // )

    // console.log(alumno01)
    // console.log(curso01)
    // console.log(curso02)
                                                                                             // "products.product"   
    let alumno01=await alumnoModelo.findOne({email: "jlmansilla@test.com"}).lean().populate("cursando.cursoID")
    // console.log(JSON.stringify(alumno01, null, 5))
    console.log(JSON.stringify(alumno01, null, 5))

    alumno01=await alumnoModelo.findOne({email: "jlmansilla@test.com"}).lean()
                            .populate({
                                path: "cursando.cursoID", 
                                // populate: {
                                //     path: "docente"
                                // }
                            })
                            // .populate({
                            //     path: "cursadas.cursoID", 
                            //     // populate: {
                            //     //     path: "docente"
                            //     // }
                            // })
                            // .populate("pais")

    console.log(JSON.stringify(alumno01, null, 5))

    process.exit()
} catch (error) {
    console.log(`Error al conectar a DB: ${error.message}`)
}
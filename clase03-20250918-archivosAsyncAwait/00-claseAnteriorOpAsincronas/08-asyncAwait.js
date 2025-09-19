const suma=(a, b)=>{
    return new Promise((res, rej)=>{  //resolve y reject
        if(typeof a!="number" || typeof b!="number"){
            // throw new Error("Solo se admiten valores numéricos")
            rej("Solo se admiten valores numéricos")
        }

        res(a+b)
    })
}

const multiplica=(a, b)=>{
    return new Promise((res, rej)=>{  //resolve y reject
        if(typeof a!="number" || typeof b!="number"){
            // throw new Error("Solo se admiten valores numéricos")
            rej("Solo se admiten valores numéricos")
        }

        res(a*b)
    })
}


// 5x4 + 3x2 =26
const cuenta=async()=>{
    let res1=await multiplica(5, 4)
    let res2=await multiplica(3, 2)
    let resFinal=await suma(res1, res2)
    // console.log(`Resultado: ${resFinal}`)
    return resFinal
}

// console.log(cuenta())
// cuenta()
//     .then(res=>console.log(`Resultado: ${res}`))
//     .catch(e=>console.log(e))

const app=async()=>{
    let resultado=await cuenta()
    console.log(`Resultado: ${resultado}`)
}

app()


const leeApi=async(url)=>{
    let response= await fetch(url)
    let data=await response.json()

    return data
}


const controllerRutaGetPersonajes=async()=>{
    try {
        let data=await leeApi("https://swapi.info/api/people/4")
        console.log(data)
        
    } catch (error) {
        console.log(`Error: ${error.message}`)
    }
}

controllerRutaGetPersonajes()
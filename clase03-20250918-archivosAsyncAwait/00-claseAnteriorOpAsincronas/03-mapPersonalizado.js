let numeros=[1,2,3,4,5]
console.log(numeros)
console.log(numeros.map(n=>n+100))

function suma100(a){
    return a+100
}

console.log(numeros.map(suma100))

const miMap=(datoArray=[], fn)=>{
    let resultado=[]

    for(let i=0; i<datoArray.length; i++){
        let dato=fn(datoArray[i])
        resultado.push(dato)
    }    

    return resultado
}

console.log(miMap(numeros, suma100))
console.log(miMap(numeros, a=>a+100))
console.log(miMap(numeros, a=>a**3))


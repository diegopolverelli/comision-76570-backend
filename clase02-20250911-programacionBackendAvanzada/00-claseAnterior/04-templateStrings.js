let nombre="Juan"
nombre='Mariana'
let importe=9400

let response="Hola, "+nombre+"...!!! tu compra se ha concretado con éxito.\n\n"
response+="Detalle de compra:"
response+="\n\t- producto 1"
response+="\n\t- producto 2"
response+="\n\t- producto 3"
response+="\n\nTotal: $"+importe

console.log(response)

response=`


Hola, ${nombre}...!!! tu compra se ha realizado
Detalle:
    - producto 1... 
    
Total a pagar: $ ${importe}`

console.log(response)
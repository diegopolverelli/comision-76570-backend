// alert("hola")
const socket=io()
const nombre=prompt("Ingrese su nombre")
document.title=nombre

const inputMensaje=document.getElementById("mensaje")
const divMensajes=document.getElementById("mensajes")
const btnEnviar=document.getElementById("btnEnviar")

btnEnviar.addEventListener("click", e=>{
    if(inputMensaje.value.trim().length>0){
        socket.emit("nuevoMensaje", inputMensaje.value.trim(), nombre)
        inputMensaje.value=""
        inputMensaje.focus()
    }
})

socket.on("mensaje", (mensaje, nombre)=>{
    divMensajes.innerHTML+=`<br><strong>${nombre}</strong> dice <i>${mensaje}</i>`
})


const divTemperatura=document.getElementById("temperatura")


socket.on("saludo", (texto)=>{
    console.log(`El server dice: ${texto}`)

    if(nombre){
        socket.emit("nombre", nombre)
    }
})

socket.on("nuevaTemperatura", dato=>{
    divTemperatura.textContent=`La temperatura del robot es de ${dato}°`
})

socket.on("oferta", datos=>{
    alert(`Oferta del día: ${datos.oferta}. Valida por ${datos.tiempo} horas`)
})


socket.on("nuevoUsuario", nombre=>{
    alert(`${nombre} se ha unido al server...!!!`)
})


socket.on("nuevoHeroe", heroe=>{
    alert(`Se ha creado a ${heroe.name}`)
})
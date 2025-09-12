// Crear una clase llamada ProductManager que gestione un conjunto de 
// productos.
// Aspectos a Incluir:
// La clase debe crearse desde su constructor con el elemento products, 
// el cual será un arreglo vacío.

// Cada producto gestionado debe contar con las siguientes propiedades:
// - title (nombre del producto)
// - description (descripción del producto)
// - price (precio)
// - thumbnail (ruta de imagen)
// - code (código identificador)
// - stock (número de piezas disponibles)

// Métodos a Implementar
// addProduct: Este método debe agregar un producto al arreglo de productos
// inicial.
// Debe validar que no se repita el campo code y que todos los campos sean 
// obligatorios.
// Al agregar un producto, debe crearse con un id autoincrementable.

// getProducts: Este método debe devolver el arreglo con todos los 
// productos creados hasta el momento.

// getProductById: Este método debe buscar en el arreglo el producto que 
// coincida con el id.
// En caso de no encontrar ningún id coincidente, debe mostrar en consola 
// el error "Not found".

class ProductManager{
    #productos
    constructor(){
        this.#productos=[]   // [{id:1, title:"campera"},{id:2, title:"campera 2"},{id:3, title:"pantalon"},]
    }

    #generaId(){
        // hace algo
    }

    addProduct(code, title, price){
        // this.#generaId()
        // validaciones
        if(!code || !title || !price || price<0){
            console.log(`Complete code title y price, y price debe ser positivo`)
            return
        }

        let existe=this.#productos.find(p=>p.code==code)
        if(existe){
            console.log(`Error: ya existe un producto con code ${code}: ${existe.title}`)
            return
        }

        let id=1
        if(this.#productos.length>0){
            id=this.#productos[this.#productos.length-1].id + 1
        }

        let nuevoProducto={
            id, 
            title, 
            price, 
            code
        }
        
        this.#productos.push(nuevoProducto)
        console.log(`Nuevo producto generado: id ${id}`)
    }



    getProducts(){
        return this.#productos
    }

    getProductById(id){
        // validaciones varias... 
        let producto=this.#productos.find(p=>p.id==id)
        if(!producto){
            return `No existen productos con id ${id}`
        }

        return producto
    }

}

const productManager=new ProductManager()


console.log(productManager.getProducts())

productManager.addProduct("0001", "remera", 100)
productManager.addProduct("0001", "pantalon", 100)
productManager.addProduct("0002", "pantalon 2", 100)
productManager.addProduct("0003", "sweter", 400)
productManager.addProduct("0003", "sweter II")
productManager.addProduct("0005", "sweter II", -4)


console.log(productManager.getProducts())

console.log(productManager.getProductById(100))
console.log(productManager.getProductById())
console.log(productManager.getProductById(2))
console.log(productManager.getProductById(3))


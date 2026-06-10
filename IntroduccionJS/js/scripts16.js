class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }

    formatearProducto() {
        return `El producto ${this.nombre} tiene un precio de : ${this.precio} dolares`
    }

}

const producto = new Producto('Monitor curvo', 200)
const producto2 = new Producto('Laptop', 500)

class Libro extends Producto {
    constructor(nombre, precio, ibsn) {
        super(nombre, precio);
        this.ibsn = ibsn
    }
    formatearProducto() {
        return `${super.formatearProducto()} con codigo ${this.ibsn}`
    }

}

const libro = new Libro('PPragmatico', 20, 1234)
const libro2 = new Libro('PythonTutoril', 25, 1433)

console.log(libro.formatearProducto());
console.log(libro2.formatearProducto());
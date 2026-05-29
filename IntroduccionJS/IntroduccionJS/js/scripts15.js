//poo


//objeto puro
const producto = {
    nombre: 'Tablet',
    precio: 300,
    precio2: 3000
}

Producto.prototype.formatearProducto = function () {
    return `El producto ${this.nombre} tiene un precio de: ${this.precio2}`
}

//constructor de objetos

function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
}

const producto2 = new Producto('Monitor 23p', 100);

function formatearProducto(producto) {
    return `El producto ${producto.nombre} tiene un precio de: ${producto.precio2}`
}

console.log(producto2)
console.log(formatearProducto(producto))



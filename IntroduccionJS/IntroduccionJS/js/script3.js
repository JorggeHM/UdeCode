
const producto = {
    nombreProducto: "Monitor xido",
    precio: 300, 
    disponible: true
}

Object.freeze(producto);

producto.imagen = 'imagen.jpg;';

console.log(producto);

const carrito = ['Telcado','Mouse','Monitor','Cable HDMI', 'Gabinete'];
console.log(carrito[2]);
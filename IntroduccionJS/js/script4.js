const productos = ['Enero', 'Febrero', 'Marzo', 'Abril'];

const carrito = [
    {nombre: 'Monitor 20 pulgadas', precio: 500},
    {nombre: 'Teclado Mecanico', precio: 100},
    {nombre: 'Mouse Inalambrico', precio: 80},
    {nombre: 'Bocinas Ster', precio: 50},
    {nombre: 'Adaptador de Red', precio: 40},
    {nombre: 'Procesador AMD Ryzen 7', precio: 140},
    {nombre: 'Celular OPPO', precio: 100}
]

//for ecah

productos.forEach(function(producto){
    if(producto == 'Abril'){
        console.log("El mes es: " + producto);
    }
});


//includes
let res = productos.includes('Diciembre');


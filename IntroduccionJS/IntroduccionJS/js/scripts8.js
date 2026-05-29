
// const sumar2nums =  (num1, num2) =>  
// console.log(num1 + num2);

// sumar2nums(12, 2);

// const aprendiento = (tecnologia) => console.log('Aprendiendo: ', tecnologia );

// aprendiento('Javascript');

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril'];

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
let resultado;



meses.forEach( producto => {
    if(producto == 'Abril'){
        console.log("El mes es: " + producto);
    }
});

resultado = carrito.reduce( (total, producto ) => producto.precio, 0);

console.log(resultado)


//includes
let res = meses.includes('Diciembre');
//for
// for(let i = 1; i <= 10 ; i++ ){
//     console.log('El numero es:', i);
// }


// for(let i = 1; i <= 100 ; i++ ){
//     if(i%2 ==0){
//         console.log('El numero ', i, 'es par')
//     }
//     else{
//         console.log('El numero ', i, 'es impar par')
//     }
// }

const carrito = [
    {nombre: 'Monitor 20 pulgadas', precio: 500},
    {nombre: 'Teclado Mecanico', precio: 100},
    {nombre: 'Mouse Inalambrico', precio: 80},
    {nombre: 'Bocinas Ster', precio: 50},
    {nombre: 'Adaptador de Red', precio: 40},
    {nombre: 'Procesador AMD Ryzen 7', precio: 140},
    {nombre: 'Celular OPPO', precio: 100}
]

for(let i = 0; i < carrito.length;i++){
    console.log(carrito[i].nombre)
    console.log(carrito[i].precio)
}

console.log('sopas')

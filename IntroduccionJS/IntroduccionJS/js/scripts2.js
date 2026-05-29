// /*let nombre = 'Jorje';
// let correo = '@gmail.com';

// console.log("Tu correo es: " + nombre + correo + ", Verdad?")
// console.log('Tu correo es: ${nombre} ${correo}, Verdad?')
// */
// //INTRODUCICON A LOS OBJETOS

// //Declaracion simple de variables
const nombreProducto = "Monitor 23 plg"
const precio = 300
const disponible = true

const producto = {
    nombreProducto: "Monitor xido",
    precio: 300, 
    disponible: true
}

console.log("Impresion del objeto completo")
console.log(producto)
console.log("Impresion del objeto individual")
console.log("Precio: " + producto.precio)
console.log("Nombre: " + producto.nombreProducto)

//Destrucura de obeto
const {} = producto
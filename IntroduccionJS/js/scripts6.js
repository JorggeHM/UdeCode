// function sumar (n1, n2){
//     return n1 + n2;
// }

// const res = sumar(1, 2)

// console.log(res);

let total = 0;


function agregarCarrito (precio){
    return total += precio;
}

function impuesto(impuesto){
    return 1.5 * total;
}

total = agregarCarrito(200);
total = agregarCarrito(100);
total = agregarCarrito(500);

console.log(total);

const totalAPagar = impuesto(total);

console.log("INcluyendo impuestos", totalAPagar);
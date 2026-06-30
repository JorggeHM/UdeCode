<?php include 'includes/header.php';

$carrito = ['Tablet', 'TV', 'Computaora', 12, 12.2];
//Para contenidos de array
echo ($carrito[2]);

//agregar con indice
$carrito[3] = 'Nuevo ejemplo';

//Agrega al final
array_push($carrito, 'Ejemploo');
//Agrega al inicio
array_unshift($carrito, 'Ejemploo2');


echo "<pre>";
var_dump($carrito);
echo "<pre>";

include 'includes/footer.php';
<?php include 'includes/header.php';

//Conetcar a db

$db = new mysqli('localhost', 'root', 'root', 'bienesraices_crud');


$query = "SELECT titulo, wc FROM propiedades";
$stmt = $db->prepare($query);



$stmt->execute();
$stmt->bind_result($titulo, $wc);
$stmt->fetch();
var_dump($titulo, $wc);


//Para una sola linea
// var_dump($stmt->fetch_assoc());

// //Para varios resultados
// while ($row = $stmt->fetch_assoc()):

//     var_dump($row);

// endwhile;

include 'includes/footer.php';

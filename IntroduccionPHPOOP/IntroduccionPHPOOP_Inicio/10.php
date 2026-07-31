<?php include 'includes/header.php';
//Conectar a la bd

$db = new PDO('mysql:host=localhost; dbname=bienesraices_crud', 'root', 'root');
$query = "SELECT titulo FROM propiedades";

$stmt = $db->prepare($query);   
$stmt->execute();

$resultado = $stmt->fetchAll(PDO::FETCH_ASSOC);

foreach($resultado AS $propiedad):
echo $propiedad['titulo'];

endforeach;



// echo "<pre>";
// var_dump($resultado);
// echo "</pre>";
// $propiedades = $db->query($query)->fetch();
// var_dump($propiedades);


include 'includes/footer.php';
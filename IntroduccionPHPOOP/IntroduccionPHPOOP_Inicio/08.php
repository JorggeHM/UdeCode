<?php
include 'includes/header.php';

// require 'clases/Clientes.php';
// require 'clases/Detalles.php';


use App\Clientes;
function mi_autoload($clase)
{
    $partes = explode('\\', $clase);
    echo $partes[1];
    

    require __DIR__ . "/clases/" . $partes[1] . ".php";
}

spl_autoload_register("mi_autoload");

$detalles = new App\Detalles();
$clientes = new Clientes();

include 'includes/footer.php';

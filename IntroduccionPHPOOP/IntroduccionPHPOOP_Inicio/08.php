<?php
include 'includes/header.php';

require 'vendor/autoload.php';
// require 'clases/Detalles.php';


use App\Clientes;


$detalles = new App\Detalles();
$clientes = new Clientes();

include 'includes/footer.php';

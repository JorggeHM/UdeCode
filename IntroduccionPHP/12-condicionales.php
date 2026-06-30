<?php include 'includes/header.php';

    $autenticado = false;
    $admin = false;

    if($autenticado || $admin){
        echo 'El usuario esta autenticado';
    }else{
        echo 'Inicia sesion par autenticarte';
    }

$cliente = [
    'nombre' => 'Juan',
    'saldo' => 110,
    'informacion' => [
        'tipo' => 'Premium'
    ]
];
echo "<br>";
if( !empty($cliente)){
    echo 'El arreglo del cliente tiene info';
    echo "<br>";

    if($cliente['saldo'] > 0 ){
        echo 'El saldo disponible es de: ' . $cliente['saldo'];
        echo "<br>";
    }else{
        echo 'Sin saldo';
    }
}


$tecnologia = 'react';
switch ($tecnologia){
    case 'PHP':
        echo 'php es una buena opcion';
        break;
    case 'react':
        echo 'react es una buena opcion';
        break;
    default:
        echo 'No se selecciono ninguna tecnologia';
        break;
    }

include 'includes/footer.php';
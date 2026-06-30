<?php include 'includes/header.php';

    $clientes = array('Pedro', 'Juan', 'Karen');

    var_dump(in_array('Pedro', $clientes));

    $numeros = array(1,3,4,6,4,8,7,8);
    sort ($numeros);
    rsort($numeros);
    
    echo "<pre>";
    var_dump($numeros);
    echo "<pre>";



include 'includes/footer.php';

<?php include 'includes/header.php';

    $i = 0;

    while( $i < 10){
        echo $i . ' ';
        $i++;
    }

    for($i = 0; $i < 20; $i++){
        if( $i % 15 === 0){
            echo $i . '- Fizz Buzz';
        }
        if( $i % 3 === 0){
            echo $i . '- Fizz';
        }
    }

    //foreach

    $clientes = array('Jorge', 'Mota', 'Hernandez');

    foreach($clientes as $cliente){
        echo $cliente . '<br>';
    }
include 'includes/footer.php';
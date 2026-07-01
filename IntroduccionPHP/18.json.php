<?php include 'includes/header.php';

    $productos = [
        [
            'nombre' => 'tablet',
            'precio' => 200,
            'disponible' => true
        ],
        [
            'nombre' => 'celular',
            'precio' => 300,
            'disponible' => false
        ],
        [
            'nombre' => 'PC',
            'precio' => 500,
            'disponible' => true
        ]
    ];

    echo '<pre>';
    var_dump($productos);

    $json = json_encode($productos, JSON_UNESCAPED_UNICODE);
    
    $json_array = json_decode($json);
    
    var_dump($json);
    var_dump($json_array);
    echo '</pre>';




include 'includes/footer.php';
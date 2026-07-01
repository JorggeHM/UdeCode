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
     
    // foreach($productos as $producto){
    //      echo "<li>";
    //      var_dump($producto);
    //      echo "</li>";
    //  }

    foreach($productos as $producto){?>
    <li>
        <p>Producto: <?php echo $producto['nombre']; ?> </p>
        <p>precio: <?php echo '$' . $producto['precio']; ?> </p>
        <p><?php echo ($producto['disponible']) ?  'Disponible': 'No Disponible'; ?> </p>
    </li>
    <?php
    }
include 'includes/footer.php';
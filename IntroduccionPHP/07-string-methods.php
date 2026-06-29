<?php include 'includes/header.php';
//Conocer ectension de uin string
     $nombre = '   Jorge Hdz   ';
     echo strlen($nombre);
     //Elimina los espacios en blanco al contar caracteres
     $texto = trim($nombre);
     echo strlen($texto);

     $mail1 = 'JOrge123@gmail.com';
     $mail2 = 'jorge123@gmail.com';
    //converitr a lower
     var_dump(strtolower($mail1) === strtolower($mail2));
    //remplazar contrenido
     echo str_replace('Jorge', 'INgeniero', $nombre );

     echo strpos($nombre, "Hdz");

     $tipoCliente = "Premium";
        echo "<br>";
     echo "El cliente " . $nombre . " es de rango " . $tipoCliente;
include 'includes/footer.php';
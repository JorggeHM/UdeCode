<?php

$db =  mysqli_connect('localhost', 'root', 'root', 'example01');
// echo '<pre>';
// var_dump($db);
// echo'</pre>';

if(!$db){
    echo 'Hubo un error en la conexion con la Base de Datos';
    exit;
}else{
    echo 'Conexion establecida';
}
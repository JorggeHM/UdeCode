<?php

function obtener_servicios( ){
    try{
        //Importar credenciales
        require 'database.php';
        //Crear la consulta
        $sql = "SELECT * FROM servicios";
        //Relizar consulta
        $consulta = mysqli_query($db, $sql);
        //Acceder a los resultados
        //Cerrar la conexion
        //retornar consulta
        return $consulta;
    }catch(\Throwable $th){
        var_dump($th);
    }
}
obtener_servicios();
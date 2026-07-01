<?php
declare(strict_types=1);
include 'includes/header.php';


function usuarioAutenticado(bool $auth) :string{
    // echo 'El Usuaio ' . $user . ' sta autenticado';
    if($auth){
        return 'El usuario esta atutenticado';
    }else{
        return 'El usuario no esta autenticado';
    }
}
$usuario = usuarioAutenticado(false);
echo $usuario;
include 'includes/footer.php';
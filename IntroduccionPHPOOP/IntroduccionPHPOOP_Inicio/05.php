<?php include 'includes/header.php';

abstract class Trtansporte
{
    public function __construct(protected int $ruedas, protected int $capacidad) {}

    public function getInfo(): string
    {
        return " El transporte tiene " . $this->ruedas . " ruedas y una capacidad de " . $this->capacidad . " De personas. ";
    }
}

class Bicicleta extends Trtansporte {}
class Automovil extends Trtansporte
{
    public function __construct(protected int $ruedas, protected int $capacidad, protected string $transmision) {}
}


$bicicleta = new Bicicleta(2, 2);
echo $bicicleta->getInfo();
$auto = new Bicicleta(4, 5);
echo $auto->getInfo();


echo "<pre>";
var_dump($bicicleta);
echo "</pre>";
include 'includes/footer.php';

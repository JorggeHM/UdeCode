<?php include 'includes/header.php';

interface TransporteInterfaz
{
    public function getInfo(): string;
    public function getRuedas(): int;
}

class Trtansporte
{
    public function __construct(protected int $ruedas, protected int $capacidad) {}

    public function getInfo(): string
    {
        return " El transporte tiene " . $this->ruedas . " ruedas y una capacidad de " . $this->capacidad . " De personas. ";
    }

    public function getRuedas(): int
    {
        return $this->ruedas;
    }
}

class Autobus extends Trtansporte implements TransporteInterfaz
{
    public function __construct(protected int $ruedas, protected int $capacidad, protected string $color) {}
    public function getInfo(): string
    {
        return " El transporte Autobus tiene " . $this->ruedas . " ruedas y una capacidad de " . $this->capacidad . " De personas. "
         . " Con un color " . $this->color;
    }
}

$autobus = new Autobus(8, 30, 'verde');
echo $autobus->getInfo();


echo "<pre>";
var_dump($autobus);
echo "</pre>";
include 'includes/footer.php';

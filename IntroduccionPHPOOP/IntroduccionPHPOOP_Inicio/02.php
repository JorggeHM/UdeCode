<?php include 'includes/header.php';


class Producto
{


    public function __construct(public string $nombre, public int $precio, public bool $disponible) {}

    public function mostrarProducto()
    {
        echo 'El producto es: ' . $this->nombre . ' Y el precio es de: ' . $this->precio;
    }
}




$producto = new Producto('Telefono', 200, true);
$producto->mostrarProducto();
$producto2 = new Producto('PC', 3300, false);
$producto2->mostrarProducto();

// $producto2 = new Producto();
// $producto2 ->nombre = 'tablet';
// $producto2 ->precio = 200;
// $producto2 ->disponible = false;


echo "<pre>";
var_dump($producto);
echo "</pre>";
echo "<pre>";
var_dump($producto2);
echo "</pre>";

include 'includes/footer.php';

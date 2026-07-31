<?php include 'includes/header.php';


class Producto
{

    public $imagen;
    public static $imagenPlaceholder = "Imagen.jpg";

    public function __construct(protected string $nombre, public int $precio, public bool $disponible, string $imagen)
    {
        // $this->imagen = $imagen;
        if ($imagen) {
            self::$imagenPlaceholder = $imagen;
        }
    }


    public static function obtenerImagenProducto()
    {
        return self::$imagenPlaceholder;
    }
    public function mostrarProducto(): void
    {
        echo 'El producto es: ' . $this->nombre . ' Y el precio es de: ' . $this->precio;
    }

    public function getNombre(): string
    {
        return $this->nombre;
    }

    public function setNombre(string $nombre)
    {
        $this->nombre = $nombre;
    }
}


echo Producto::obtenerImagenProducto();

$producto = new Producto('Telefono', 200, true, '');

// echo $producto->getNombre();
// $producto->setNombre('Modificado');
$producto->obtenerImagenProducto();

$producto2 = new Producto('PC', 3300, false, 'pC');
$producto2->obtenerImagenProducto();


echo "<pre>";
var_dump($producto);
echo "</pre>";
echo "<pre>";
var_dump($producto2);
echo "</pre>";

include 'includes/footer.php';

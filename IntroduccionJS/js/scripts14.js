const compra = {
    nombre: 'Juan',
    apellido: 'Hdz',
    cantidad: 9000,
    pagado: false,
    info: function(){
        console.log(`El cliente ${this.nombre} compro ${this.cantidad} en bitcoin`)
    }
}

compra.info();
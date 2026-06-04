function consultarDB() {
    const archivo = 'empleados.json';

    // fetch(archivo)
    //     .then(res => res.json())
    //     .then(datos => {

    //         const { empleados } = datos;

    //         empleados.forEach( empleado => {
    //             console.log(empleado.id)

    //             document.querySelector('.contenido').textContent = empleado.nombre
    //         })
    //     })

    
    const resultado = await fetch(archivo);
    const datos = await resultado.json();
    console.log(datos);
}
consultarDB();
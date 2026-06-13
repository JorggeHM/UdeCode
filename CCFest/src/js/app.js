document.addEventListener('DOMContentLoaded', function () {
    crearGaleria()
})

function crearGaleria() {
    const galeria = document.querySelector('.galeria-imagenes')

    for (let i = 1; i <= 16; i++) {
        const imagen = document.createElement('img')
        imagen.src = `src/img/gallery/full/${i}.jpg`
        imagen.alt = 'ImagenEjemplo'

        //Eventhandler

        imagen.onclick = function(){
            mostrarImagen()
        }

        galeria.appendChild(imagen)
    }
}

function mostrarImagen(i){
    //Genera vista previa de img
    const modal = document.createElement('DIV')
    modal.classList.add('modal')
    modal.onclick = cerrarModal    //Agrega al html
    const body = document.querySelector('body')
    body.appendChild(modal)
}

function cerrarModal(){
    const modal = document.querySelector('.modal')
    modal?.remove()
}

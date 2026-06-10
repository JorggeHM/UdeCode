// uso de queryselector


const heading = document.querySelector('a')
heading.textContent = 'Modificado'
console.log(heading)

const enlaces = document.querySelectorAll('.navegacion a')
console.log(enlaces[0])

// // enlaces[0].textContent = 'Nurvo texto'
// // enlaces[2].textContent = 'Modificaiocn'
// // // enlaces[2].classList.add = 'nueva__clase'
// // // enlaces[0].classList.remove = 'navegacion__enlace'

// // // const heading2 = document.getElementById('heading')
// // // console.log(heading2)

// //generar enlace en sj
// const nuevoEnlace = document.createElement('A')

// //AGREGFAR HREF
// nuevoEnlace.href = 'nuevo-enlace.html'
// //AGREGARLO AL DOCMUENTO

// nuevoEnlace.classList.add('navegacion__enlace')
// nuevoEnlace.textContent = 'Un nuevo enlace'

// const navegacion = document.querySelector('.navegacion')
// navegacion.appendChild(nuevoEnlace)


// console.log(nuevoEnlace)


// //manejo de eventos
// console.log(1)
// window.addEventListener('load', function() {
//     console.log(2)
// })


// document.addEventListener('DOMContentLoaded', function() {
//     console.log(23)// Solo espara por el html PERO NO LAS IMAGESNES
// })

// console.log(3)

// window.onscroll = function() {
//     console.log('scrolling...')
// }


//Variables
const nombre = document.querySelector('#nombre')
const email = document.querySelector('#email')
const mensaje = document.querySelector('#mensaje')
const formulario = document.querySelector('.formulario')
const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}



// eventos
formulario.addEventListener('submit', function (evento) {
    evento.preventDefault()
    //validacion de form
    const { nombre, email, mensaje } = datos

    if (nombre === '' || email === '' || mensaje === '') {
        mostrarAlerta('Todos los campos son obligatorios')
        console.log('sopas')
        return;
    }

    mostrarAlerta('Se enviaron los datos correctamente')
    console.log('enviando form')
})

function leerTexto(e) {
    // console.log(e.target.value)
    dato[e.target.id] = e.target.value
    console.log(dato)
}

function mostrarAlerta(mensaje, error = null) {
    const alerta = document.createElement('P')
    alerta.textContent = mensaje

    if (error) {
        alerta.classList.add('error')
    } else {
        alerta.classList.add('correcto')
    }

    formulario.appendChild(alerta)
    setTimeout(() => {
        alerta.remove();
    }, 5000);

}




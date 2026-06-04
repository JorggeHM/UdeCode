//queryselector

const { DatabaseFilled } = require("@ant-design/icons")

const heading = document.querySelector('a')
heading.textContent = 'Modificado'
console.log(heading)

//qurtyselectiorall
// const enlaces = document.querySelectorAll('.navegacion a')
// console.log(enlaces[0])

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


//Evento de ssubmit para enviar info a formuilarios



// Seleccionar elementos
const dato ={
    nombre: '',
    email: '',
    mensaje: ''
}


const btnEnviar = document.querySelector('.boton--primario')
btnEnviar.addEventListener('click', function(evento) { 
    console.log(evento)
    evento.preventDefault()
    console.log('enviando fomulario')
})

const nombre = document.querySelector('#nombre')
const email = document.querySelector('#email')
const mensaje = document.querySelector('#mensaje')

function leerTexto(e){
    // console.log(e.target.value)
    dato[e.target.id] = e.target.value
    console.log(dato)

}

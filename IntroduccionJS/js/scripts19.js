const { notification } = require("antd");
const { icons } = require("antd/es/image/PreviewGroup");

const boton = document.querySelector('#boton');

boton.addEventListener('click', () =>{
    Notification.requestPermission()
    .then(resultado => console.log('El resultado es: ',resultado ))
})

if(Notification.permission == 'granted'){
    new Notification('Aceptaste las notificaciones', {
        icon: './cat1.png',
        body: 'Mota code'
    })
}


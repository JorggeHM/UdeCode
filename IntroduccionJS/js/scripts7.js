
//Metodos de propiedad
const reproductor = {
    reproducir: function(id){
        console.log('Reproducioendo cancion con id: ', id);
    },
    pausar: function(){
        console.log('Pausando..');
    },
    crearPlaylist: function(nombre){
        console.log('Se agrego a la fila: ', nombre);
    },
    reproducirPlaylist: function(nombre){
        console.log('Se esta reproduciendo la playlist: ', nombre);
    }
}

reproductor.borrar = function(id){
    console.log('Borrando la cancion: ', id);
}

console.log(reproductor)

reproductor.reproducir(123);
reproductor.pausar();
reproductor.borrar(123);
reproductor.crearPlaylist('WWW');
reproductor.crearPlaylist('Hola mo');
//Async await


function descargarNuevosClientes() {
    return new Promise(resolve => {
        console.log('Descargando clientes...');

        setTimeout ( () => {
            resolve('Descarga completada');
        }, 3000);
    })
}

async function app (){
    try{
        const resultado = await descargarNuevosClientes();
        console.log(resultado);
    }catch(error){
        console.log(error);
    }
}

app();
console.log('Este code no se bloquea');
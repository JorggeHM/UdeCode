
const ususrioAutentiado = new Promise( (resolve, reject) =>{
    const auth = true;

    if(auth){
        resolve(); //Se cumple
        console.log('Usuario autenticado')
    }else{
        reject();//No se cumple la promesa
        console.log('Usuario no encontrado')
    }
});

ususrioAutentiado
    .then( resultado => console.log(resultado))
    .catch( error =>  console.log(error))



//3 valores importantes en los promise
//Pending es cuando no e cumple pero no se rechaza
//Fullfilled yase cumplio
//Rejected se rechaza o no se pudo cumplir
//Esperan a que algo se cumplan para poder seguir ejecutando el proceso
let cuadradoPromise = (valor,callback) =>{
    if(typeof valor !== 'number') 
        return Promise.reject('Error el valor ingresado no es un numero.');
        
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            resolve({
                valor,
                result : valor * valor
            });
        },0 | Math.random() * 1000)
    });
    
}
//PAra indicar asincronismo usamos async
//LA funcion cuadrado al tener un timeOut este no sera esperado por ser async
//Para que sea esperado usamos await
async function funcionAsincronaDeclarada(){
    //PAra errores aca conviene usar try catch
    try{

        console.log('Inicio Async FUnction');
        let obj = await cuadradoPromise(32);
        console.log(`Async function : ${obj.valor}, ${obj.result}`);

        obj = await cuadradoPromise(3);
        console.log(`Async function : ${obj.valor}, ${obj.result}`);

        console.log('Fin asyncFUnction');
    }catch(err){
        console.error(err);
    }
}
funcionAsincronaDeclarada();

//Para hacer async expresadas seria
//const miFuncion = async () =>{ }
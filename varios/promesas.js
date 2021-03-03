//Para evitar los callbackhell podemos usar promesas
//Permite hacer un manejo de errores mas bonito

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
//Una vez se cumpla la inicial se ejecuta lo de then
cuadradoPromise(1)
.then((obj) => {
    console.log('Inicia promise');
    console.log(`${obj.valor} resultado : ${obj.result}`)
    return cuadradoPromise(2);
})
.then(obj =>{ //Asi vas concatenando los then 
    console.log('Inicia promise');
    console.log(`${obj.valor} resultado : ${obj.result}`)
    return cuadradoPromise(3);
})
.then(obj =>{ //Asi vas concatenando los then 
    console.log('Inicia promise');
    console.log(`${obj.valor} resultado : ${obj.result}`)
    return cuadradoPromise(4);
})
.then(obj =>{ //Asi vas concatenando los then 
    console.log('Inicia promise');
    console.log(`${obj.valor} resultado : ${obj.result}`)
    console.log('Fin promise');
})
.catch(err => console.error(err));//Then agarra un error de cualquier then
//Catch agarra el error en caso de error
//Las promesas convienen cuando hya concatenacion de procesos asincronos

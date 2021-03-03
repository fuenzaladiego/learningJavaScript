//Es una funcion que se ejecuta despues de que otra lo haga

let cuadradoCallback = (valor,callback) => {
    setTimeout(()=>{
        callback(valor, valor * valor);
    }, 0 | Math.random()*100 );
};

cuadradoCallback(0,(valor,resultado) =>{
    console.log('Inicia callback');
    console.log(`Callback : ${valor}, ${resultado}`);
})
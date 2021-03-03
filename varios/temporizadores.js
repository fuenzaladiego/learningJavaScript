console.log('inicio');

/*setTimeout(() =>{
    console.log('Ejecutando un setTimeOut(), esto solo se ejecuta una vez');
}, 3000); */
//10 son los milisegundos que pasaran antes de que se ejecute lo de adentros
//Solo se ejecuta una vez

//Si quieres ejecutar varias veces en base a un intervalo tienes
let tiempo =setTimeout(() => {
    console.log('Paso un segundo');
}, 1000);

let segundos = setInterval(() =>{
    console.log(new Date().toLocaleTimeString());
},1000);

//Funciones que cancelan timeout y intervalos 
//Para usarlas debemos guardar en una vaariable el setTimeAlgo
clearTimeout(tiempo);
console.log('Despues del clear');

clearInterval(segundos);
console.log('No se cuentan los segundos');
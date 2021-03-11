//Es como una funcion que permite trabjar de forma mas amigable con los iteratores

//Para que sepa que sera un generador se agrega * a function*
function* iterable(){
    //Se usa yield
    yield 'hola';
    console.log('Hola consola');
    yield 'hola2';
    console.log('Seguimos con mas instrucciones de codigo');
    yield 'hola3';
    yield 'hola4';
    //Yield es lo que devuelve por cada next, es como si se congelara en el primer yield y luego siguiera
};

const iterador = iterable();
//Como es un generador podemos acceder a la interfaz inmediatamente
/*
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
*/
//Lo mismo de forma automatica
for (let i of iterador ){
    console.log(i);
};
//Guardando los yield en un arreglo
const arr = [...iterable()];
console.log(arr);

function cuadrado(valor){
    
    setTimeout(() =>{
        return console.log({valor,resultado : valor*valor});
    },Math.random() * 1000);

    
}

function* generador() {
    console.log('Inicia Generator');
    yield cuadrado(1);
    yield cuadrado(2);
    yield cuadrado(3);
    yield cuadrado(4);
    yield cuadrado(5);
    console.log('Termina Generator');
};

let gen = generador();
for(let y of gen){
    console.log(y);
}

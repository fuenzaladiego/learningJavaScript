//Gran forma de definir funciones anonimas


//Funcion expresada (a variable se le da una funcion anonima)
const saludo = function (){
    console.log('Hola');
}
//Esto es una arrow function
//Si solo tiene una linea de instruccion se pueden omitir las llaves
const saludoh = () => console.log('Hola');


//Una arrow function con parametros
//Si recibe un solo parametro se pueden omitir los parentesis
const despido = nombre => console.log(`Adios ${nombre}`);
//Eso es un return implicito
//No hay que escribir return en una linea
despido('Diego');



const sumar = (a,b) => a+b;
console.log(sumar(5,6));

const funcionMuchasLineas = () =>{
    console.log('Uno');
    console.log('Dos');
    console.log('Tres');
    return 'Adios';
}
console.log(funcionMuchasLineas());

//Se usa mucho en javascript ejemplo y es buena practica

const numeros = [1,2,3,4];

numeros.forEach((el,index) => console.log(`${el} esta en la posicion ${index}`));



//Scopes en arrowFUnctions
//Capturan el this del ontexto en el que esten
//This en una funcion flecha es parte del scope global
//Se saltan el contexto del en que estan, agarran el contexto del cual sea parte su contexto
//No es buena practica en un objeto literal usar arrow functions

// puedes retornar otra funcion
//se pueden pasar como argumentos
//se pueden guardar en variables
//Las funciones son objetos en javaScript


//Funcion Declarada

function estaFuncion(){
    console.log('Uno');
    console.log('Dos');
    console.log('Tres');
}
function funcionQueRetorna(){
    console.log('Uno');
    console.log('Dos');
    console.log('Tres');
    return 'La funcion ha retornado una cadena de texto';

}


estaFuncion();
let valor = funcionQueRetorna();

console.log(valor);

//Puedes asignar valores por defectos en los parametros de funciones 
function saludo(nombre = 'nada',edad = 0){

    console.log(`Hola ${nombre}, tienes ${edad} años`);
}

saludo();
saludo('Diego',21);


//Funciones declaradas vs funciones expresadas
function funcionDeclarada(){

    console.log('Esto es una funcion declarada puede invocarse en cualquier parte de nuestro codigo, incluso antes de que la funcion sea declarada');
}

//Basicamente puedo usar las funciones en el codigo antes de declararlas


//Funcion anonima

const funcionExpresada = function(){
    console.log('Esto es una funcion expresada, es decir, una funcion que se le ha asignado su valor a una variable, si invocamos esta funcion antes de su definicion JS nos dira : que la funcion no puede ser accesada antes de su inicializacion');
    //Basicamente no la puedes usar antes de declarar la variable que la contiene
}
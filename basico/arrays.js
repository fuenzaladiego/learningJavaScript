
[]; //Eso es considerado un arreglo

//Como declarar un arreglo

//Lo puedes declarar con let o const

//declaracion de unu arreglo
let a = [];//Arreglo vacio
console.log(a);
//Puedes gaurdar distintos tipos de datos
let b = [1,true,'hola',['a','b','c']];
console.log(b);
//Se cuenta desde 0 a adelante

//Total de elmenetos
console.log(b.length);

//para acceder a referencia
console.log(b[2]);


//otras formas de crear arreglos
const c= Array.of('x','g','z','9',8,7);
console.log(c);

//Inicializar arreglo con valor constante
let d = Array(100).fill('Nada');
console.log(d);

//Metodos de arrays

let colores = ['Rojo','Verde','Azul'];
//agregar elemento
colores.push('Negro');

//quitar el ultimo elemento
colores.pop();
console.log(colores);

//este metodo nos permite ejecutar una funcion por cada elemento del arreglo
colores.forEach((el,index) =>{
    console.log(`<li id=${index}>${el}</li>`);
});
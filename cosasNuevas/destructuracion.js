let numeros = [1,2,3];

/*
SIN DESTRUCTURACION
let uno = numeros[0],
    dos = numeros[1],
    tres = numeros[2];
*/
//CON DESTRUCTURACION

const [uno,dos,tres] = numeros;
//A cada una de las pociciones le asigno los valores del array
console.log(uno, dos , tres);

let persona= {
    nombre: 'Diego',
    apellido: 'Fuenzalida',
    edad: 21
};

//Para que la destructuracion funcione en objetos, las variables creadas se deben llamar igual que en el objeto
//Tambien las variables creadas deben estar encerradas en llavaes
let {nombre,apellido,edad} = persona;
console.log(nombre,apellido,edad);
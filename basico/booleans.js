let verdadero = true;
let falso = false;
//Otra forma de hacerlo
let a = Boolean(true);

console.log(verdadero,falso);



//Hay valores ni verdaderos ni falsos pero q tienen a ser o verdaderos o falsos

console.log(Boolean(0));//0 tiende a falso
console.log(Boolean(-7));//Tiende a verdadero un negativo
console.log(Boolean(''));//Cadena vacia tiende a falso
console.log(Boolean(' '));//Cadena con al menos un caracter tiende a verdadero

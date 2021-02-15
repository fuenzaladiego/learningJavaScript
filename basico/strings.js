

let nombre = 'Diego';
//otra forma de declarar una cadena

let saludo = new String('Diego');
console.log(nombre,saludo);


console.log('El largo de la cadena nombre es : ',nombre.length);


console.log('Mi nombre en minuscula es : ',nombre.toLocaleLowerCase());
console.log('Mi nombre en mayusucula es : ',nombre.toUpperCase());
let oracion = '      Hola ,soy ,diego ,y t,engo 21 ,años';

console.log('La palabra Hola soy se encuentra en oracion? : ',oracion.includes('Hola soy'))

console.log(oracion)
//trim como q saca las cositas q sobrans
console.log(oracion.trim())
//la funcion split nos separa un string por el separador indicado y me lo devuelve como un arreglo
console.log(oracion.split(','))
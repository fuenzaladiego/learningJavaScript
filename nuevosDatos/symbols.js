//Es un dato primitivo
//Su valor se mantendra privado y para uso interno
//No podemos usar el operador new para crear un symbolo
//Permiten crear identificadores unicos (de referencia)


//Ejemplo de identificador unico

let id2 = 'Hola';
let id1 = 'Hola';
console.log(id1 === id2 ,'Tienden a true');
let id = Symbol();
let id3 = Symbol();
console.log(id === id3, 'Tiende a falso');

//LEs podemos pasar una cadena de texto para identificar al tipo de dato symbol
id = Symbol('Diego');
id1 = Symbol('Hola');
console.log(id, id1);

//La buena practica dice que se creen con constante 
let edad = 21

const NAME = Symbol();
const persona = {
    //PARA DECLARAR UN SYMBOLO EN UN OBJETO
    [NAME]: 'Diego',
    edad
};

console.log(persona);
//Sie escribimos algo en el symbolo
persona.NAME = 'Diego Diaz';
//Se cera la propiedad NOMBRE pero el Symbolo no se reemplaza
console.log(persona.NAME);
console.log(persona[NAME]);
//Para acceder al symbolo usamos los corchetes sin el punto

const SALUDAR = Symbol('saludar');
//Guardando un symbolo en un objeto ya creado
persona[SALUDAR] = () => console.log('Hola me llamo diego');
console.log(persona);
//Para llamar al metodo usamos corchetes
persona[SALUDAR]();

//Que pasa si recorro las propiedades del objeto

for(let propiedad in persona){
    console.log(propiedad);
    console.log(persona[propiedad]);
}
//Si quiero listar los symbols de un objeto usamos 
console.log(Object.getOwnPropertySymbols(persona));

//Solo pueden almacenar referencias debiles
//Al ser una referencia debil, al momento de que sea nulificada, sera borrada por el proceso limpiador del navegador
//Estos no son elementos iterables, no se pueden recorrer con for , no se pueden borrar todos los elementos de una y no podemos saber su tamaño

//Como se declran
//const ws = new Set(['Esto','Es','Un','Arreglo']);
const ws = new WeakSet();
//Se deben agregar los datos de uno por uno
//ws.add(1); Solo podemos guardar objetos
let valor1 = {'Valor1':1};
let valor2 = {'Valor1':2};
let valor3 = {'Valor1':3};
ws.add(valor1);
ws.add(valor2);
ws.add(valor3);
//Accedineod a ws
console.log(ws);
//Para ver si algo esta
console.log(ws.has(valor1));
console.log(ws.has('valor4'));
//Para eliminar 
ws.delete(valor1);

//Recorrido por un weak set
let hola = setInterval(() =>console.log(ws),1000);

setTimeout(()=>{
    valor1 = null;
    valor2 = null;
    valor3 = null;
},5000);
clearInterval(hola,10000);


//Ahora los weakMaps

/*
const mapa = new WeakMap([
    ['nombre','Diego'],
    [edad,21],
    [raza, humano]
]);
*/

const mapa = new WeakMap();
let llave1 = {};
let llave2 = {};
let llave3 = {};

mapa.set(llave1,1);
mapa.set(llave2,2);
mapa.set(llave3,3);
//Podemos usar has
//Para los valores usamos get mapa.get(llave1)
console.log(mapa.get(llave1));

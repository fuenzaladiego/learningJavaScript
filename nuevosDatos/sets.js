
//Valores unico de datos primitivos(No se repiten)

const arreglo = new Set([1,2,3,4,5,true,false]);

console.log(arreglo);
//El tamaño de un set es
console.log(`Tamaño de arreglo : ${arreglo.size}`);
const set2 = new Set([]);
set2.add(1);
set2.add(false);
set2.add('Diego');
set2.add(23123);
set2.add({
    nombre:'Diego',
    edad:21
});
console.log(set2);
//Recorrido de set
console.log('Corriendo set2\n');
for (item of set2){
    console.log(item);
}
console.log('Corriendo set2\n');
set2.forEach(item => console.log(item));

//Para acceder a un dato le hacemos
//Creamos un arreglo con el set
let arr = Array.from(set2);
console.log(arr[0]);
//envolvemos la referencia en Array.from
//Borrar elemento de set
console.log(`Size de set2 antes de borrar : ${set2.size}`);
set2.delete(23123);
console.log(`Size de set2 despues de borrar : ${set2.size}`);

//Para saber si un elemento existe en un set 
console.log(set2.has('Diego'));

//Para limpiar un set usamos
console.log(`Size de arreglo antes de borrar : ${arreglo.size}`);
arreglo.clear();
console.log(`Size de arreglo antes de borrar : ${arreglo.size}`);
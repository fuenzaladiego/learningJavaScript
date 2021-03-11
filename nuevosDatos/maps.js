
const mapa = new Map();
//ES una coleccion de datos como un objeto primitivo
//Para agregar valores hay 2 formas

mapa.set('nombre','Diego');
mapa.set('Apellido','Fuenzalida');
mapa.set('Edad',21);
console.log(mapa);
console.log(`EL mapa tiene en total ${mapa.size} datos`);
//Para ver si una llave existe 
console.log(mapa.has('correo'));
//Para obtener algo
console.log(mapa.get('nombre'));
//Para cambiar un elemento del mapa
mapa.set('nombre','Diego Matias Diaz Fuenzalida');
console.log(mapa.get('nombre'));
//Eliminar elementos del mapa
mapa.delete('Apellido');
console.log(mapa);

//Recorrido de un mapa


//Para un mapa puedes usar como llaves cosas varas (null, false, NaN, etc)
mapa.set(19,'Un Numero');
mapa.set(false,'Falso');
mapa.set({},{});


//Recorrido de un mapa
//Los mapas son elementos iterables
for(let [key, value]/* <--- Destructuracion*/  of mapa ){
    console.log(`Llave : ${key}\nValor : ${value}`);
};
//Otra forma de inicializar los valores
const mapa2 = new Map([
    ['Nombre','BB'],
    ['Edad',25],
    ['Likes','Master']
]);
console.log(mapa2);
//Se pueden guardar en arreglos las keys y llaves por separado

const llavesMapa2 = [...mapa2.keys()];
const valoresMapa2 = [...mapa2.values()];
console.log(llavesMapa2);
console.log(valoresMapa2);
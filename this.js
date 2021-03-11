//Para crear una variable al objeto global susamos
globalThis.nombre = 'Diego';
console.log(window);
console.log(globalThis === window);

globalThis.nombre = 'Contexto Global'
function imprimir(){
    console.log(globalThis.nombre);
}
imprimir();


const obj = {
    nombre: 'Contexto Objeto',
    imprimir : function(){
        console.log(this.nombre);
    }
}

obj.imprimir();
 
const obj2 = {
    nombre : 'COntexto objeto 2',
    imprimir
}
obj2.imprimir();
//Las arrow Functiona no generan un scope

function Persona (nombre){
    this.nombre = nombre;
    //console.log(this.nombre);
    //Clausula devolver en una funcoin ota funcion
    /*
    return function(){
        //Al tener su propio scope no tiene nombre, por lo que leera el contexto global∫
        console.log(this.nombre);
    }
    */
    //Para evitar eso lo hago en arrow function (las arrow no crean scope)
    return () => console.log(this.nombre,2);

}

let diego = new Persona('Diego');
diego();
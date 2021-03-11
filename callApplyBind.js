globalThis.lugar = 'Contexto Global';

function saludar(){
    console.log(`${globalThis.lugar}`);
}
saludar();

const obj = {
    lugar :'Contexto Objeto',

}

//Usando call usaremos el this del contexto pasado 
//Si necesitamos pasar parametros a la funcion los pasamos normab el call y en un arreglo para apply
saludar.call(obj,/*Parametros, uno,dos */);
saludar.apply(obj/*,[parametro1,parametro2]*/);
//Usaran el contexto de la funcion evitando el global
//Si usas null en call o apply como primer parametro (saludar.apply(null);) usara el contexto global
console.log(this);


const persona = {
    nombre:'Diego',
    saludar:function() {
        console.log(`Hola ${this.nombre}`);
    }
}

persona.saludar();
const otraPersona = {
    saludar : persona.saludar.bind(persona)
}
otraPersona.saludar();
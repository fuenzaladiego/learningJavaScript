function animal(nombre,genero){
    this.nombre = nombre;
    this.genero = genero;

}
animal.prototype.saludar = function (){
    console.log(`Hola me llamo ${this.nombre}`);
}

function perro(nombre,genero, raza){

    this.super = animal;
    this.super(nombre,genero);
    this.raza = raza;
}
//hay que hacer eso para que no pase lo mismo que antes con los metodos
//Perro esta heredando de animal
perro.prototype = new animal();
perro.prototype.constructor = perro;
//Sobrescritura de metodos del prototipo padre ne el hijo
perro.prototype.saludar = function (){
    console.log(`Soy un perro y mi sonido es un ladrido`);
}
perro.prototype.ladrad = function(){
    console.log('Gua guau guau');
}

const anuki = new perro('Anuk','Hembra','Golden');
anuki.saludar();
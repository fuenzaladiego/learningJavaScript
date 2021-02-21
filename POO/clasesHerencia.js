
//Javascript transforma las clases en prototipos
//Las clases son una forma mas sencilla de crear los prototipos
class Animal{
    constructor(nombre, genero){
        this.nombre = nombre;
        this.genero = genero;
    }

    saludar(){
        console.log(`Mi nombre es ${this.nombre} y soy ${this.genero}`);
    }

}

//Herencia
class Perro extends Animal{
    constructor(nombre,genero,raza){
        super(nombre,genero);
        this.raza = raza;
    }
    //Sobrescritura
    sonar(){
        console.log('So un perro y mi sonido es un ladrido');

    }
    ladrar(){
        console.log('Guau guau');
    }
}
const anuki = new Perro('Anuk','Hembra','Golden');
anuki.ladrar();
anuki.sonar();
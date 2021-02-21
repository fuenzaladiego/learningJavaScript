//En js no hay clases privadas ni publicas
//Se puede decir que todas las clases son publicas



class Animal{
    constructor(nombre, genero){
        this.nombre = nombre;
        this.genero = genero;
    }

    saludar(){
        console.log(`Mi nombre es ${this.nombre} y soy ${this.genero}`);
    }

}


class Perro extends Animal{
    constructor(nombre,genero,raza){
        super(nombre,genero);
        this.raza = raza;
    }
//Aca los getters y los setters
    //Hay que especificar que es un getter con get
    get getRaza(){
        return this.raza;
    }
    //Para setters usamos set
    set setRaza(raza){
        this.raza = raza;
    }

    //Sobrescritura
    sonar(){
        console.log('So un perro y mi sonido es un ladrido');

    }
    ladrar(){
        console.log('Guau guau');
    }


//Un metodo estatico se puede ejecutar sin la necesidad de instanciar la clase
    static queEres(){
        console.log('Los perros somos animales mamiferos que pertenecemos a la familia de los caninos. Somos considerados los mejores amigos del hombre');
    }
}

Perro.queEres();
//Los getters se usan como atributos
anuki = new Perro('Anuk','Hembra','Golden');
console.log('\n\n'+anuki.getRaza);
//Los setters tambien funcionan asi
anuki.setRaza = 'Rotweiler';
console.log(anuki.getRaza);
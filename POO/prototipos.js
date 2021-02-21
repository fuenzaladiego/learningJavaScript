//Un objeto es una instancia de una clase

function Animal(nombre,genero){

    this.nombre = nombre;
    this.genero = genero;

    /*
    this.sonar = function(){
        console.log('Hago sonidos porq estoy vivo');
    }
    */
}

//En este caso lo mejor es dejar los metodos fuera y agregarlos a la funcion
Animal.prototype.sonar = function(){
    console.log('Hago sonidos porq estoy vivo');
};
//De esta forma se ha guardado el metodo a Animal

naruto = new Animal('Naruto','Macho');
naruto.sonar();

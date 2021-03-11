//Te deja crear objetos a partir de objetos literales


//Persona es nuestro objeto base
const persona = {
    nombre:'',
    edad: 0,
    nacion: ''
};
const manejador = {
    //En el set hago todas las validaciones
    set(obj,prop,valor){
        if(Object.keys(obj).indexOf(prop) === -1){//Validamos que en el objeto original exista la propiedad
            return console.error(`La propiedad ${prop} no existe en el objeto persona`);

        }
        
        obj[prop] = valor;
    }
};


const diego = new Proxy(persona, manejador /*set es el handler */ );
//Para que esto funcione tenemos que tener el manejador con el set
diego.nombre = 'Diego';
diego.edad = 21;
diego.nacion= 'Chile';
diego.twitter = '@Gran'

//Persona y diego tendran las mismas cosas ya que proxie crea una vinculacion entre el objeto(persona) y la copia (diego)
//Para evitar que al objeto literal se le agreguen cosas lo validamos en el manejador
console.log(diego);
console.log(persona);


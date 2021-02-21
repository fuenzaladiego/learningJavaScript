let nombre = 'naruto';
let edad = 1;

const gato = {
    nombre : nombre,
    edad : edad,

    maullar:function (){
        console.log('Miauu miauu')
    }
}

console.log(gato);
gato.maullar()

//Puedes guardar propiedades con variables usando el mismo nombre
//En este caso se usa la variable nombre para guardarla en la propiedad nombre de cat

//Se puede hacer con metodos tambien
const cat = {
    nombre,
    edad,
    raza : "domestico",
    //Para hacer funciones es 
    hablar(){
        console.log('Miauu')
    }
};
cat.hablar();
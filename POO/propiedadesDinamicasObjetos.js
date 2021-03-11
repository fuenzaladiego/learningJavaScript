//Crear nombres para las propiedades dinamicamente
let numeroApi = Math.round().Math.random() * 100 + 5;
const objUsuarios = {
    //Para indicar que una propiedad puede ser dinamica usamos corchetes
    [`id_${numeroApi}`]: 'Valor aleatorio'
}
const usuarios = ['Diego','Yukikaze','Rinko','BB','Scatha','Qiyana'];

//Por cada usuario se creara una propiedad en objUsuarios
usuarios.forEach((usuario,index) => objUsuarios[`id_${index}`] = usuario);

console.log(objUsuarios);
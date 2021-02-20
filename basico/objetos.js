
//Cuando usamos objetos es bueno usar const
const a = {
    nombre : 'Diego',
    edad : 21,
    nacimiento : '30/11/1999',
    contacot :{
        email : 'fuenzaladiego@gmail.com',
        fono : '+56976437750'
    },
    saludar : ()=>{
        console.log(`Hola mi nombre es ${a.nombre}`)
    }
};

console.log(a.edad);
a.saludar();
//otra forma de acceder
console.log(a['edad']);
console.log(a.contacot.email);
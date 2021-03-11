//Javascripit object notation
//Un formato ligero de intercambio de datos

//Este es un ejemplo de json
//Json debe tener comillas dobles en todo incluso booleanos y numeros
const json = {
    cadena:'Diego',
    numero:21,
    booleano:true,
    arreglo:['Hola','Qeu','tal'],
    objeto:{
        twitter:'@grannh',
        ig:'tailed_zaid'
    }
}
//JSON tiene 2 metodos parse e stringify
//PArse convertira el json a un tipo de dato que javascript valide
console.log(JSON);
//ESTAS DOS SON CADENAS PERO SI ESTOS LOS ENVUELVO en JSON.parse() para javascript pasara a ser un objeto
/*
console.log('{}');
console.log("[1,2,3]");
*/
console.log(JSON.parse('{}'));
console.log(JSON.parse('true'));
console.log(JSON.parse('[1,2,3]'));
console.log(JSON.parse("null"));

//El metodo JSON.stringify convierte una variable valida de js y la transforma a cadena
console.log('\nStringify')
console.log(JSON.stringify({}));
console.log(JSON.stringify([1,2,3,]));
console.log(JSON.stringify({
    y:2,
    x:5
}));
console.log(JSON.stringify(json));

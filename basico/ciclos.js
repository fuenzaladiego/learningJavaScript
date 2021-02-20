let contador = 0;

while(contador < 35){
    console.log(contador);
    contador++;
}
contador = 0;
console.log('CMABIOSSADASDASDSADSA')
do{
    console.log(contador);
    contador++;
}while(contador < 35);

//Estos anteriores se usan menos el que mas se usa es for
console.log('\n\n\n\n');
for(let i = 0; i < 20; i++){
    console.log(i);
}


let numeros = [10,20,30,40,50,60,70,80,90];
console.log('\n\n\n');
//For each hace que por cada elemnto de un array se haga algo
numeros.forEach((numero) =>{
    console.log(numero * 10);
})

const diego = {
    nombre :'Diego',
    apellido : 'Diaz',
    edad : 21
};


//Es un for para cada elemento de un objeto
//En un for in no sierve accedear al valor con el . hay que usar los corchetes
for (const key in diego) {
    console.log(`Key : ${key} - Valor : ${diego[key]}`);
    
}

//for of permite recorrer todos los elementos iterables de un objeto

for (const elemento of numeros) {
    console.log(elemento);
}
//Mientras sea iterable se puede usar
let cadena = 'Hola mundo';
for (const elemento of cadena) {
    console.log(elemento + ' ');
}
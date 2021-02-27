//Es un objeto estatico
//Siempre se usa Math.funcion()

//Valor de pi
console.log(Math.PI);

//Metodos importantes de entender
//Math.abs(-5); da el valor absoluto
console.log(Math.abs(-20));
//Para redondear hay 3 metodos
console.log(Math.ceil(7.2));//Aproxima al numero proximo
//Math.floor(); al de abajo
console.log(Math.floor(7.999));
//Si queremos que sea imparcial usamos round
console.log(Math.round(7.2));
//Raiz cuadrado con sqrt
console.log(Math.sqrt(81));
//Elevar potencias con pow(base,potencia);
console.log(Math.pow(2,5));
//Para saber si es positivo negativo o 0 sign
//Devuelve -1 0 1
console.log(Math.sign(-7.8));
//Nuero aleatorio
console.log(Math.round(Math.random() * 10000));
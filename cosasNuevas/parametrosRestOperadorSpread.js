//PARAMETROS REST AGREGA PARAMETROS INFIFNITOS
//Se ponen puntos suspensivos para esos valores


function sumar(a,b, ...c){
    let resultado = a+b;

    c.forEach(function (n){
        resultado += n;
    });


    return resultado;
}

console.log(sumar(1,2,3,4,5));

//Operador de propagacion (Spread operation)

//Permite que cuando una expresion se deba expandir para multiples argumentos se pueda hacer

const arr1 = [1,2,3,4,6];
const arr2 = [6,7,8,9,0];

//const arr3 = [arr1,arr2];
//Eso crearia un arreglo con 2 posiciones, cada posicion con un arreglo
const arr3  =[...arr1,...arr2];
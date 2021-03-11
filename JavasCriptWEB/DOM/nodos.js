//Hayy distintos tipos de nodoos los comentarios, los textos, las etiquetas son ejemplos de nodos
//En html nos interesan los nodos de tipo Elemento y Texto

//Para seleccionar todos los elementos con cierta etiqueta
console.log(document.getElementsByTagName('li'));//Asi seleccionaria todos los li
//Para atraparlos por clase
console.log(document.getElementsByClassName("cards"));
//Detectando el nombre de forms
console.log(document.getElementsByName('nombre'));
//Para agarrar nodos singulares por id
console.log(document.getElementById('que-es'))

/*
console.log(document.getElementsByTagName('li'));
console.log(document.getElementsByClassName("cards"));
console.log(document.getElementsByName('nombre')); 
Estos tres han sido reemplazados por querySelector
*/
//Para seleccionar un id tenemos que usar #
console.log(document.querySelector('#menu'));
//getElementById es mas eficiente que querySelector para agarrar algo con id
//Query selector solo te engtregara el primer elemento que encuentra
console.log(document.querySelector('a'));
//si quisiera todos los selectores de un tipo usamos
console.log(document.querySelectorAll('a'));
console.log(document.querySelectorAll('a').length);
//Devuelven una coleccion de html

//Puedes usar forEach en html

document.querySelectorAll('a').forEach((el, i) => console.log(el, i));

console.log(document.querySelectorAll('.cards'));
console.log(document.querySelectorAll('.cards')[3]);
console.log(document.querySelectorAll('#menu li'));
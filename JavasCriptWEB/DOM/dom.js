console.log(window.document);

//Puedes obtener solo el head o el body

console.log(document.head);
console.log(document.body);
//Para obtener la etiqueta html usamos 
console.log(document.documentElement);
//Esplica que tipo de documento es
console.log(document.doctype);
//Como acceder al jeuego de caracteres del documento
console.log(document.characterSet);
//al titulo
console.log(document.title);
//Puedes acceder a los enlaces
console.log(document.links);
//para ver cuantas imagenes
console.log(document.images);
//Una coleccion con los formularios del documento
console.log(document.forms);
//para ver las css
console.log(document.styleSheets);
//Para ver cuantos scripts hay
console.log(document.scripts);
//Lo que tengo subrallado con getSelection
setTimeout(() =>{
    console.log(document.getSelection().toString());
},3000);
//Este es mala practica
document.write(`<h2>Hola mundo desde el DOM </h2>`)
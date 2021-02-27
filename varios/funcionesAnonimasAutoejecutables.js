//cuerpot de una funcion seria
//(function (){})(Este ejecuta la funcion)

(function (nombre){

    console.log('Funcion autoEjecutable');
    console.log(`Nombre : ${nombre}`);
})('Diego');

//ACA SI Q HAY Q PONER PUNTO Y COMA PARA Q FUNCIONE BIEN

(function (c){
    c.log('Segunda funcion anonima');
    c.log('Hola')
})(console);

//d seria document w window y c console;

//Formatos para funciones anonimas

//Clasica
(function (){
    console.log('Version clasica');
}());

//Crocford
((function (){
    console.log('Version crockford');
})());

//Unaria
+function(){
    console.log('Unaria');
}();

//Facebook

!function(){
    console.log('De facebook');
}();
//Solo funcionas en navegadores cuelga del objeto window


//Window.alert('MSG'); Envia una alerta en el navegador
//window.confirm('Es para aceptar o cancelar');
//Dependiendo de lo que se pulse valida a verdadero o falso;
//window.prompt('Hola esto es un prompt y le permite al usuario ingresar un valor');
//No es necesario usar el objeto window.
let alerta = window.alert('Hola');
let respuesta = window.confirm('Verdadero o falso :O');
//Si se cancela devuelve null
let edad = window.prompt('Ingresa');
console.log(alerta);
console.log(respuesta);
console.log(edad);
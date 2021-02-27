//El cortocircuito or , cuando el valor de la izquiera pueda validar a true, es el valor que se cargara por defecto

//Cortocircuito AND , cuando el valor de la izquierda de la expresion siempre pueda validar a false, es el valor que se cargara por defecto


//EJEMPLO OR
saludar = nombre  => {
    nombre = nombre || 'Desconocido';
//Si se pasa un nombre se usa nombre si no desconocido
    console.log(`Hola ${nombre}`);
}

saludar('Diego');
saludar();
console.log('cadena'||'Valor de la derecha');
console.log(19||'Valor de la derecha');
console.log(true||'Valor de la derecha');
//Estos tienden a falso
console.log(false||'Valor de la derecha');
console.log(null||'Valor de la derecha');
console.log(0||'Valor de la derecha');


//CON AND
console.log('CON AND');
console.log('cadena'&&'Valor de la derecha');
console.log(0&&'Valor de la derecha');
console.log(true&&'Valor de la derecha');
console.log(false && 'Valor de la derecha');
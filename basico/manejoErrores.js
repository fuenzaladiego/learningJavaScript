try{
    console.log('Codigo a evaluar');
    a
    console.log('Este mensaje no se enviara');
}catch(error){
    console.log('Catch captura errores surgidos o lanzados en el try');
    //console.log(error);
}finally{
    console.log('El bloque finally se ejecutara siempre al final de un try catch');
}

//Lanzar errores
console.log('\n\n\n\n\n\n');



try{
    let numero = asd;
    if(isNaN(numero)){
        throw new Error('Se esperana un numero');
    }else{
        console.log('No problemos');
    }


}catch(error){
    console.log('Se produjo el siguiente error : '+ error);
}
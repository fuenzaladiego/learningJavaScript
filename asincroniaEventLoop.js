//Js es single thread

//Codigo sincrono bloqueante
(() =>{
    console.log('COdigo Sincron');
    console.log('Inicio');
    function dos(){
        console.log('Dos');
    }
    function uno(){
        console.log('uno');
        dos();
        console.log('tres');
    }
    uno();
    console.log('Fin');

})();

console.log('-------------------');
//Codigo asincrono no bloqueante
(() =>{
    console.log('Codigo asincrono');
    console.log('Inici');
    function dos(){
        setTimeout(function(){
            console.log('Dos');
        },1000);


    }
    function uno(){
        setTimeout(function(){
            console.log('Uno');
        },0);
        dos();
        console.log('Tres');
    }
    uno();
    console.log('Fin');
    
})();
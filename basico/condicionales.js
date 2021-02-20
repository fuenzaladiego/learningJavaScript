let edad = 190;

if(edad > 17 && edad <= 99){
    console.log('Eres mayor de edad.');

}else if(edad <18 ){

    console.log('Eres menor de edad');
}else{

    console.log('Eres muy viejo');
}



let dia = 20;

switch (dia){
    case 0:
        console.log('Domingo');
        break;
    case 1: 
        console.log('Lunes');
        break;
    case 2:
        console.log('Martes');
        break;
    case 3:
        console.log('Miercoles');
        break;
    case 4:
        console.log('Jueves');
        break;
    case 5:
        console.log('Viernes');
        break;
    case 6:
        console.log('Sabado');
        break;
    default:
        console.log('Cuekc')
}
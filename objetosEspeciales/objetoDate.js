

//Lo mejor es guardarlod entro de una variable

let fecha = new Date();
console.log(fecha);
//Si quiero usar el dia del mese uso .getDate()
console.log(fecha.getDate());
//Dias de la semana, 0 es domingo 6 es sabado
console.log(fecha.getDay());
//Para obtener el mes getMonth()
//Comienza contando desde el 0
console.log(fecha.getMonth());
//Para conseguir el año tenemos dos metodos
//Este no funciona mucho porq cuenta desde el año 1900
console.log(fecha.getYear());
//Para conseguir el año mejor usamos getFullYear()
console.log(fecha.getFullYear());
//Para hora minutos y segundos tenemos
//Las horas se cuentan hasta el 23
console.log(fecha.getHours());
console.log(fecha.getMinutes());
console.log(fecha.getSeconds());
console.log(fecha.getMilliseconds());
//Algunos metodos nos dejan obtener la fecha de una forma humanamente entendible
console.log(fecha.toString());
//De esa puedo sacar solo la fecha por ehemplo
console.log(fecha.toDateString());
console.log('\n'+fecha.toLocaleString());
//La fecha
console.log(fecha.toLocaleDateString());
console.log(fecha.toLocaleTimeString());
//Nos da la region geografica
console.log(fecha.getTimezoneOffset());

//Date.now nos da cuando tiempo ha pasado desde 1 de enero de 1970
console.log(Date.now());

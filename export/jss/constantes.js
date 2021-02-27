export const PI = Math.PI;//Para exportar esto
console.log(PI);
export let usuario = 'Jon';
let password = 'difundos13';
let saludar = () => console.log('Hola Modulos +ES6');

//Export default importara automaticamente desde el archivo
//Solo puede haber un default
export default saludar;
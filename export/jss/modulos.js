import saludar, {PI, usuario} from './constantes.js';
//Importamos aritmetica con el alias calculos
import {aritmetica as calculos} from './aritmetica.js';

console.clear();

console.log(PI,usuario);
//Importante que en la etiqueta script usemos <script src='asd.js' type='module'>
console.log(calculos.sumar(2,5));

saludar();


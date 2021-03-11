 //se pueden iterar cosass del dom

 const iterable = [1,2,3,4,5];

 //Asi es el iterador del iterable
 const iterador = iterable[Symbol.iterator]();
 console.log(iterable); 
 console.log(iterador);
 //.next() devuelve un arreglo con el valor y un boolean
 //El boolean s llama done y dice true si es el ultimo elemento
 /*
 console.log(iterador.next());
 console.log(iterador.next());
 console.log(iterador.next());
 console.log(iterador.next());
 console.log(iterador.next());
 console.log(`Elemento pasado ${iterador.next()}`);
 */
 //La forma ams optima es con un ciclo
 let next = iterador.next();
 while(!next.done){
     console.log(next.value);
     //Aca esta avanzando en el arreglo 
     next = iterador.next();
 }
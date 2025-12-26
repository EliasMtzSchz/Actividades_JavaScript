alert('Hola Ejercicio Práctico 1');

// 1. Crea un ciclo while que cuente del 10 al 1 y lo imprima en la consola.

let contador = 10;

/*
console.log('Números del 10 al 1:');

while(contador>0){
    console.log(contador);
    contador--;
}
*/

// 2. Modifica el ciclo para que imprima solo los números pares.

console.log('Números pares del 10 al 1:');

while(contador>0){
    if(contador % 2 === 0){
        console.log(contador);
    }
    contador--;
}

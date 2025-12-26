alert('Hola Ejercicio 9');

// 9. Crear un array vacío, luego generar 10 números al azar y guardarlos en un array. Mostrar en consola el resultado del array.

let numeroAzar = Math.random();

let numeros = [];

for(i=0;i<10;i++){
    numeros.push(numeroAzar);
    numeroAzar = Math.random();
}
console.log(numeros);
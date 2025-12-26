alert('Hola Ejercicio Extra 2');

// 2. Crea un programa que solicite al usuario 2 números entre 1 y 50. Posteriormente mostrar en consola los números del 1 hasta el 50, pero añadir el mensaje “¡Lotería!” solo al mostrar los números indicados por el usuario.

let numero1 = Number(prompt("Ingrese el número 1: "));
let numero2 = Number(prompt("Ingrese el número 2: "));

let i = 1;

while (i<=50){
    if (numero1===i || numero2===i){
        console.log('¡Lotería!');
    }else{
        console.log(i);
    }
    i+=1;
}
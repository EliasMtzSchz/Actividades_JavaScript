alert('Hola Ejercicio 5');

// 5. Solicitar al usuario que ingrese dos números y mostrar cuál de los dos es menor. No considerar el caso en que ambos números son iguales.

let numero1 = Number(prompt('Introduce el primer número:'));
let numero2 = Number(prompt('Introduce el segundo número:'));

if(numero1 < numero2){
    console.log('El número ' + numero1 + ' es menor que ' + numero2 + '.');
}else if(numero1 > numero2){
    console.log('El número ' + numero2 + ' es menor que ' + numero1 + '.');
}else{
    
}
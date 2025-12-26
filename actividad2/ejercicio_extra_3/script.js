alert('Hola Ejercicio 3');

// 3. Crear un programa que determine si un número introducido en un Prompt es par o no, la respuesta será mostrada en un Alert.

let numero = Number(prompt('Introduce un número:'));

if(numero%2 == 0){
    alert('El número ' + numero + ' es par.');
}else{
    alert('El número ' + numero + ' es impar.');
}
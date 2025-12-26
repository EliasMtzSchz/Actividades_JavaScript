alert('Hola Ejercicio Extra 1');

// 1. Crea un programa que pregunte al usuario un número. Mostrar los números que son múltiplos de 5 desde 1 hasta el número introducido por el usuario.

let valor = Number(prompt('Ingrese un número: '));

let multiplo = 5;

let inicial = 1;

if (valor>1){
    console.log(inicial);
    while(valor>=multiplo){
        console.log(multiplo);
        multiplo+=5;
    }
}else if (valor=1){
    console.log(inicial);
}else{
    console.log('Ingrese un número positivo.')
}
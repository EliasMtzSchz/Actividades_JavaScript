alert('Hola Ejercicio 11');

/*
    11. Realizar un programa que ayude a calcular el total a pagar de acuerdo a la distancia recorrida por un vehículo con cargo extra por los litros consumidos, tomando en consideración lo siguiente:
        Si el vehículo es “coche”, el precio kilometro ha de ser 0.20, si es “moto” ha de ser 0.10 y si es “autobús” 0.5.
        Si la distancia recorrida está entre 0 y 100 se ha de añadir 5 al costo total, si es mayor la distancia recorrida se ha de añadir 10 al total. Considere qué:
            total a pagar = (precio kilometro x kms recorridos) + extra por distancia recorrida.
*/

let tipoVehiculo = String(prompt('¿Qué vehículo se empleó? \n1. Coche \n2. Moto \n3. Autobús')).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

let distanciaRecorrida = Number(prompt('¿Cuántos kilómetros se recorrieron?'));

let precioCoche = 0.20;
let precioMoto = 0.10;
let precioAutobus = 0.50;

if(tipoVehiculo === 'coche'){
    let costoTotal = precioCoche * distanciaRecorrida;
    if(distanciaRecorrida >0 && distanciaRecorrida <= 100){
        costoTotal += 5;
    } else {
        costoTotal += 10;
    }
    console.log(`El total a pagar es: $${costoTotal.toFixed(2)} MXN.`);
}else if(tipoVehiculo === 'moto'){
    let costoTotal = precioMoto * distanciaRecorrida;
    if(distanciaRecorrida >0 && distanciaRecorrida <= 100){
        costoTotal += 5;
    } else {
        costoTotal += 10;
    }
    console.log(`El total a pagar es: $${costoTotal.toFixed(2)} MXN.`);
}else if(tipoVehiculo === 'autobus'){
    let costoTotal = precioAutobus * distanciaRecorrida;
    if(distanciaRecorrida >0 && distanciaRecorrida <= 100){
        costoTotal += 5;
    } else {
        costoTotal += 10;
    }
    console.log(`El total a pagar es: $${costoTotal.toFixed(2)} MXN.`);
}else{
    console.log('Tipo de vehículo no reconocido.');
}
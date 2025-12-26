alert('Hola Ejercicio 7');

// 7. Requerir al usuario que ingrese un día de la semana e imprimir un mensaje si es lunes, otro mensaje diferente si es viernes, otro mensaje diferente si es sábado o domingo. Si el día ingresado no es ninguno de esos, imprimir otro mensaje.

let diaSemana = String(prompt('Ingrese un día de la semana:')).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

if(diaSemana == 'lunes'){
    console.log('¡Hay que empezar la semana con tada la actitud!');
}else if(diaSemana == 'viernes'){
    console.log('Ya falta poco para el fin de semana, ¡trabaja duro!');
}else if(diaSemana == 'sabado' || diaSemana == 'domingo'){
    console.log('¡Disfruta tu fin de semana!');
}else{
    console.log('¡La constancia es la clave del éxito, sigue adelante!');
}
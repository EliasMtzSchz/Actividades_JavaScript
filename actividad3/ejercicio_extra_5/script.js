alert('Hola Ejercicio Extra 5');

// 5. Crea un programa que solicite al usuario un día de la semana (ej: lunes, jueves, domingo, etc). El programa mostrará un mensaje personalizado para cada día de la semana por medio de un alert. Y seguirá pidiendo al usuario introducir otro día. En caso de que el día introducido sea domingo mostrar al usuario el mensaje “Ve a descansar” y terminar la captura de información.

let diaSemana = prompt("Ingrese un día de la semana: ").toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

while(diaSemana !== "domingo"){
    if (diaSemana === "lunes"){
        alert('Comienza con toda la actitud.');
    }else if (diaSemana === "martes"){
        alert('Un paso más hacia el éxito.');
    }else if (diaSemana === "miercoles"){
        alert('No te rindas, ya estás a mitas de camino.');
    }else if (diaSemana === "jueves"){
        alert('Hoy es un buen día para comer tacos.');
    }else if (diaSemana === "viernes"){
        alert('Dalo todo y acaba todos tus pendientes.');
    }else{
        alert('¡Felicidades!, haz completado la misión.');
    }
    diaSemana = prompt("Ingrese otro día de la semana: ").toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

alert('Ve a descansar.');
let nota = Number(prompt("Ingrese la nota del alumno (0-100):")); //Escribir una nota entre 0 y 100
if (nota > 0) {
    if (nota >= 90) {
        console.log("Nota: " + nota + " - Excelente");
    }else if (nota >= 75 && nota <= 89) {
        console.log("Nota: " + nota + " - Bien");
    } else if (nota >= 60 && nota <= 74) {
        console.log("Nota: " + nota + " - Suficiente");
    } else {
        console.log("Nota: " + nota + " - No aprueba");
    }
}else if ( nota<0 || nota>100 ) {
    console.log("Nota: " + nota + " - No es una nota válida");
}else {
    console.log("Nota: " + nota + " - No curso");
}
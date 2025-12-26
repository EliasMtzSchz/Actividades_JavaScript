alert('Hola Ejercicio 1')

// 1. Solicitar al usuario que responda a la pregunta (“¿Eres bellisimo/a?”), en caso de contestar sí, responder “Ciertamente”, en caso de contestar no, responder: “No te creo”.

let usuario = String(prompt("Ingrese su nombre:"));
let belleza = String(prompt('¿ ' + usuario + ' es bellísim@?'));

if(belleza == 'Si'|| belleza == 'Sí' || belleza == 'si' || belleza == 'sí' || belleza == 'SI' || belleza == 'SÍ'){
    console.log("Ciertamente")
}else{
    console.log("No te creo")
}
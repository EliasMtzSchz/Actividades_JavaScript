alert('Hola Ejercicio Extra 4');

// 4. Crea un programa que solicite al usuario letras o palabras, si es así guardar el resultado. Para terminar de capturar el usuario no debe escribir valor alguno. Al terminar de capturar, mostrar en pantalla la concatenación de todas las palabras capturadas.

let palabra = prompt("Ingrese una letra o palabra: ").toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

let concatenacion = ""

while(palabra !== null && palabra.trim()!==""){
  if(isNaN(palabra)){
    concatenacion+=palabra;
  }else{
    alert('No válido, por favor, ingrese una letra o una palabra.');
  }
  palabra = prompt("Ingrese otra letra o palabra: ");
}

console.log(concatenacion);
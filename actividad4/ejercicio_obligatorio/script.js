alert('Hola Seguimiento de Libros');

let librosLeidos = [];

function agregarLibro(libro) {
    librosLeidos.push(libro);
}

function mostrarLibros() {
    console.log('Libros leídos: ' + librosLeidos.join(', '));
}


console.log(agregarLibro('Cien Años de Soledad'));

console.log(agregarLibro('Ladrona de Libros'));

console.log(agregarLibro('El Príncipe'));

mostrarLibros();


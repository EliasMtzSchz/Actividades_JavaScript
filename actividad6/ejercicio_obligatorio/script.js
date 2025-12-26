// Referencias a elementos del DOM
const form = document.getElementById('form-comentarios');
const comentarioInput = document.getElementById('comentario');
const comentarioSection = document.getElementById('comentariosRecientes');
const deleteButton = document.querySelector('button[type="button"]');

// Evento para enviar comentario
form.addEventListener('submit', function (event) {
  event.preventDefault();

  const textoComentario = comentarioInput.value.trim();
  if (textoComentario === "") return;

  // Fecha y hora actual
  const fecha = new Date();
  const fechaFormateada = fecha.toLocaleString('es-MX', {
    dateStyle: 'full',
    timeStyle: 'short'
  });

  // Crear contenedor del comentario
  const nuevoComentario = document.createElement('div');
  nuevoComentario.classList.add('comentario');

  // Texto del comentario
  const texto = document.createElement('p');
  texto.textContent = textoComentario;

  // Fecha y hora
  const fechaSpan = document.createElement('span');
  fechaSpan.textContent = fechaFormateada;

  // Insertar elementos
  nuevoComentario.appendChild(texto);
  nuevoComentario.appendChild(fechaSpan);
  comentarioSection.appendChild(nuevoComentario);

  // Limpiar textarea
  comentarioInput.value = "";
});

// Evento para eliminar todos los comentarios
deleteButton.addEventListener('click', function () {
  comentarioSection.innerHTML = "";
});
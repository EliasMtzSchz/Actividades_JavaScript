alert('Hola Ciclo de Triángulo');

let simbolo = '#';

for (let i=0; i < 7; i++) {
    let linea = '';
    for (let j = 0; j <= i; j++) {
        linea += simbolo;
    }
    console.log(linea);
}


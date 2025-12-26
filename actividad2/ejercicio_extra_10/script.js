alert('Hola Ejercicio 10');

/*
    10. Un conocido portal de educación en tecnología está ofreciendo programas para aprender a desarrollar aplicaciones. Escribe un programa que le indique a la persona interesada cuánto deberá pagar mensualmente de acuerdo a la opción elegida.
        El programa educativo contempla 3 diferentes niveles, cada uno con su costo mensual: 
            Course: $4999 MXN
            Carrera $3999 MXN
            Master: $2999 MXN
        Adicionalmente preguntar si cuenta con alguna beca y aplicar el descuento correspondiente al precio final.
            Beca Facebook: 20% de descuento.
            Beca Google: 15% de descuento.
            Beca Jesua: 50% de descuento.
        Finalmente, además del precio mensual con descuento, indicar al usuario cuánto gastaría en total por el curso elegido, tomando en cuenta las siguientes duraciones:
            Course: 2 meses
            Carrera 6 meses
            Master: 12 meses
*/

let eleccionPrograma = Number(prompt('Elige el programa al que deseas inscribirte (introduce un número): \n1. Course \n2. Carrera \n3. Master'));

let costoCourse = 4999;
let costoCarrera = 3999;
let costoMaster = 2999;

if(eleccionPrograma === 1){
    let beca = Number(prompt('¿Tienes alguna beca? (introduce un número): \n1. Beca Facebook \n2. Beca Google \n3. Beca Jesua \n4. No tengo beca'));
    if(beca === 1){
        let duracion = Number(prompt('Elige la duración del curso (introduce un número): \n1. 2 meses \n2. 6 meses \n3. 12 meses'));
        if (duracion === 1){
            let descuento = costoCourse * 0.20;
            let precioFinal = costoCourse - descuento;
            let total = precioFinal * 2;
            console.log(`El precio mensual con descuento es: $${precioFinal} MXN. \nEl total por 2 meses es: $${total} MXN.`);
        } else if (duracion === 2){
            let descuento = costoCourse * 0.20;
            let precioFinal = costoCourse - descuento;
            let total = precioFinal * 6;
            console.log(`El precio mensual con descuento es: $${precioFinal} MXN. \nEl total por 6 meses es: $${total} MXN.`);
        } else if (duracion === 3){
            let descuento = costoCourse * 0.20;
            let precioFinal = costoCourse - descuento;
            let total = precioFinal * 12;
            console.log(`El precio mensual con descuento es: $${precioFinal} MXN. \nEl total por 12 meses es: $${total} MXN.`);
        }else {
            console.log('Duración no válida.');
        }
    }else if(beca === 2){
        let duracion = Number(prompt('Elige la duración del curso (introduce un número): \n1. 2 meses \n2. 6 meses \n3. 12 meses'));
        if (duracion === 1){
            let descuento = costoCourse * 0.15;
            let precioFinal = costoCourse - descuento;
            let total = precioFinal * 2;
            console.log(`El precio mensual con descuento es: $${precioFinal} MXN. \nEl total por 2 meses es: $${total} MXN.`);
        } else if (duracion === 2){
            let descuento = costoCourse * 0.15;
            let precioFinal = costoCourse - descuento;
            let total = precioFinal * 6;
            console.log(`El precio mensual con descuento es: $${precioFinal} MXN. \nEl total por 6 meses es: $${total} MXN.`);
        } else if (duracion === 3){
            let descuento = costoCourse * 0.15;
            let precioFinal = costoCourse - descuento;
            let total = precioFinal * 12;
            console.log(`El precio mensual con descuento es: $${precioFinal} MXN. \nEl total por 12 meses es: $${total} MXN.`);
        }else {
            console.log('Duración no válida.');
        }
    }else if(beca === 3){
        let duracion = Number(prompt('Elige la duración del curso (introduce un número): \n1. 2 meses \n2. 6 meses \n3. 12 meses'));
        if (duracion === 1){
            let descuento = costoCourse * 0.50;
            let precioFinal = costoCourse - descuento;
            let total = precioFinal * 2;
            console.log(`El precio mensual con descuento es: $${precioFinal} MXN. \nEl total por 2 meses es: $${total} MXN.`);
        } else if (duracion === 2){
            let descuento = costoCourse * 0.50;
            let precioFinal = costoCourse - descuento;
            let total = precioFinal * 6;
            console.log(`El precio mensual con descuento es: $${precioFinal} MXN. \nEl total por 6 meses es: $${total} MXN.`);
        } else if (duracion === 3){
            let descuento = costoCourse * 0.50;
            let precioFinal = costoCourse - descuento;
            let total = precioFinal * 12;
            console.log(`El precio mensual con descuento es: $${precioFinal} MXN. \nEl total por 12 meses es: $${total} MXN.`);
        }else {
            console.log('Duración no válida.');
        }
    }else{
        console.log('No tienes beca, el precio mensual es: $4999 MXN.');
        let duracion = Number(prompt('Elige la duración del curso (introduce un número): \n1. 2 meses \n2. 6 meses \n3. 12 meses'));
        if (duracion === 1){
            let total = costoCourse * 2;
            console.log(`El total por 2 meses es: $${total} MXN.`);
        } else if (duracion === 2){
            let total = costoCourse * 6;
            console.log(`El total por 6 meses es: $${total} MXN.`);
        } else if (duracion === 3){
            let total = costoCourse * 12;
            console.log(`El total por 12 meses es: $${total} MXN.`);
        }else {
            console.log('Duración no válida.');
        }
    }
}else if(eleccionPrograma === 2){
     let beca = Number(prompt('¿Tienes alguna beca? (introduce un número): \n1. Beca Facebook \n2. Beca Google \n3. Beca Jesua \n4. No tengo beca'));
    if(beca === 1){
        let duracion = Number(prompt('Elige la duración del curso (introduce un número): \n1. 2 meses \n2. 6 meses \n3. 12 meses'));
        if (duracion === 1){
            let descuento = costoCarrera * 0.20;
            let precioFinal = costoCarrera - descuento;
            let total = precioFinal * 2;
            console.log(`El precio mensual con descuento es: $${precioFinal} MXN. \nEl total por 2 meses es: $${total} MXN.`);
        } else if (duracion === 2){
            let descuento = costoCarrera * 0.20;
            let precioFinal = costoCarrera - descuento;
            let total = precioFinal * 6;
            console.log(`El precio mensual con descuento es: $${precioFinal} MXN. \nEl total por 6 meses es: $${total} MXN.`);
        } else if (duracion === 3){
            let descuento = costoCarrera * 0.20;
            let precioFinal = costoCarrera - descuento;
            let total = precioFinal * 12;
            console.log(`El precio mensual con descuento es: $${precioFinal} MXN. \nEl total por 12 meses es: $${total} MXN.`);
        }else {
            console.log('Duración no válida.');
        }
    }else if(beca === 2){
        let duracion = Number(prompt('Elige la duración del curso (introduce un número): \n1. 2 meses \n2. 6 meses \n3. 12 meses'));
        if (duracion === 1){
            let descuento = costoCarrera * 0.15;
            let precioFinal = costoCarrera - descuento;
            let total = precioFinal * 2;
            console.log(`El precio mensual con descuento es: $${precioFinal} MXN. \nEl total por 2 meses es: $${total} MXN.`);
        } else if (duracion === 2){
            let descuento = costoCarrera * 0.15;
            let precioFinal = costoCarrera - descuento;
            let total = precioFinal * 6;
            console.log(`El precio mensual con descuento es: $${precioFinal} MXN. \nEl total por 6 meses es: $${total} MXN.`);
        } else if (duracion === 3){
            let descuento = costoCarrera * 0.15;
            let precioFinal = costoCarrera - descuento;
            let total = precioFinal * 12;
            console.log(`El precio mensual con descuento es: $${precioFinal} MXN. \nEl total por 12 meses es: $${total} MXN.`);
        }else {
            console.log('Duración no válida.');
        }
    }else if(beca === 3){
        let duracion = Number(prompt('Elige la duración del curso (introduce un número): \n1. 2 meses \n2. 6 meses \n3. 12 meses'));
        if (duracion === 1){
            let descuento = costoCarrera * 0.50;
            let precioFinal = costoCarrera - descuento;
            let total = precioFinal * 2;
            console.log(`El precio mensual con descuento es: $${precioFinal} MXN. \nEl total por 2 meses es: $${total} MXN.`);
        } else if (duracion === 2){
            let descuento = costoCarrera * 0.50;
            let precioFinal = costoCarrera - descuento;
            let total = precioFinal * 6;
            console.log(`El precio mensual con descuento es: $${precioFinal} MXN. \nEl total por 6 meses es: $${total} MXN.`);
        } else if (duracion === 3){
            let descuento = costoCarrera * 0.50;
            let precioFinal = costoCarrera - descuento;
            let total = precioFinal * 12;
            console.log(`El precio mensual con descuento es: $${precioFinal} MXN. \nEl total por 12 meses es: $${total} MXN.`);
        }else {
            console.log('Duración no válida.');
        }
    }else{
        console.log('No tienes beca, el precio mensual es: $4999 MXN.');
        let duracion = Number(prompt('Elige la duración del curso (introduce un número): \n1. 2 meses \n2. 6 meses \n3. 12 meses'));
        if (duracion === 1){
            let total = costoCarrera * 2;
            console.log(`El total por 2 meses es: $${total} MXN.`);
        } else if (duracion === 2){
            let total = costoCarrera * 6;
            console.log(`El total por 6 meses es: $${total} MXN.`);
        } else if (duracion === 3){
            let total = costoCarrera * 12;
            console.log(`El total por 12 meses es: $${total} MXN.`);
        }else {
            console.log('Duración no válida.');
        }
    }
}else if(eleccionPrograma === 3){
    let beca = Number(prompt('¿Tienes alguna beca? (introduce un número): \n1. Beca Facebook \n2. Beca Google \n3. Beca Jesua \n4. No tengo beca'));
    if(beca === 1){
        let duracion = Number(prompt('Elige la duración del curso (introduce un número): \n1. 2 meses \n2. 6 meses \n3. 12 meses'));
        if (duracion === 1){
            let descuento = costoMaster * 0.20;
            let precioFinal = costoMaster - descuento;
            let total = precioFinal * 2;
            console.log(`El precio mensual con descuento es: $${precioFinal} MXN. \nEl total por 2 meses es: $${total} MXN.`);
        } else if (duracion === 2){
            let descuento = costoMaster * 0.20;
            let precioFinal = costoMaster - descuento;
            let total = precioFinal * 6;
            console.log(`El precio mensual con descuento es: $${precioFinal} MXN. \nEl total por 6 meses es: $${total} MXN.`);
        } else if (duracion === 3){
            let descuento = costoMaster * 0.20;
            let precioFinal = costoMaster - descuento;
            let total = precioFinal * 12;
            console.log(`El precio mensual con descuento es: $${precioFinal} MXN. \nEl total por 12 meses es: $${total} MXN.`);
        }else {
            console.log('Duración no válida.');
        }
    }else if(beca === 2){
        let duracion = Number(prompt('Elige la duración del curso (introduce un número): \n1. 2 meses \n2. 6 meses \n3. 12 meses'));
        if (duracion === 1){
            let descuento = costoMaster * 0.15;
            let precioFinal = costoMaster - descuento;
            let total = precioFinal * 2;
            console.log(`El precio mensual con descuento es: $${precioFinal} MXN. \nEl total por 2 meses es: $${total} MXN.`);
        } else if (duracion === 2){
            let descuento = costoMaster * 0.15;
            let precioFinal = costoMaster - descuento;
            let total = precioFinal * 6;
            console.log(`El precio mensual con descuento es: $${precioFinal} MXN. \nEl total por 6 meses es: $${total} MXN.`);
        } else if (duracion === 3){
            let descuento = costoMaster * 0.15;
            let precioFinal = costoMaster - descuento;
            let total = precioFinal * 12;
            console.log(`El precio mensual con descuento es: $${precioFinal} MXN. \nEl total por 12 meses es: $${total} MXN.`);
        }else {
            console.log('Duración no válida.');
        }
    }else if(beca === 3){
        let duracion = Number(prompt('Elige la duración del curso (introduce un número): \n1. 2 meses \n2. 6 meses \n3. 12 meses'));
        if (duracion === 1){
            let descuento = costoMaster * 0.50;
            let precioFinal = costoMaster - descuento;
            let total = precioFinal * 2;
            console.log(`El precio mensual con descuento es: $${precioFinal} MXN. \nEl total por 2 meses es: $${total} MXN.`);
        } else if (duracion === 2){
            let descuento = costoMaster * 0.50;
            let precioFinal = costoMaster - descuento;
            let total = precioFinal * 6;
            console.log(`El precio mensual con descuento es: $${precioFinal} MXN. \nEl total por 6 meses es: $${total} MXN.`);
        } else if (duracion === 3){
            let descuento = costoMaster * 0.50;
            let precioFinal = costoMaster - descuento;
            let total = precioFinal * 12;
            console.log(`El precio mensual con descuento es: $${precioFinal} MXN. \nEl total por 12 meses es: $${total} MXN.`);
        }else {
            console.log('Duración no válida.');
        }
    }else{
        console.log('No tienes beca, el precio mensual es: $4999 MXN.');
        let duracion = Number(prompt('Elige la duración del curso (introduce un número): \n1. 2 meses \n2. 6 meses \n3. 12 meses'));
        if (duracion === 1){
            let total = costoMaster * 2;
            console.log(`El total por 2 meses es: $${total} MXN.`);
        } else if (duracion === 2){
            let total = costoMaster * 6;
            console.log(`El total por 6 meses es: $${total} MXN.`);
        } else if (duracion === 3){
            let total = costoMaster * 12;
            console.log(`El total por 12 meses es: $${total} MXN.`);
        }else {
            console.log('Duración no válida.');
        }
    }
}else{
    console.log('Opción no válida. Por favor, elige un programa válido.');
}
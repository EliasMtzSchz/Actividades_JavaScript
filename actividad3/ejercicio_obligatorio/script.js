alert('Hola Clasificación de Frutas');

let frutasConTipo = [
    { nombre: "Naranja", tipo: "Cítrico"},
    { nombre: "Manzana", tipo: "Pomácea"},
    { nombre: "Plátano", tipo: "Tropical"},
    { nombre: "Uva", tipo: "Baya"},
    { nombre: "Fresa", tipo: "Baya"},
    { nombre: "Piña", tipo: "Tropical"},
    { nombre: "Mango", tipo: "Tropical"},
    { nombre: "Cereza", tipo: "Drupa"},
    { nombre: "Pera", tipo: "Pomácea"},
    { nombre: "Sandía", tipo: "Curcubitácea"},
    { nombre: "Melón", tipo: "Curcubitácea"},
    { nombre: "Durazno", tipo: "Drupa"},
    { nombre: "Coco", tipo: "Drupa"},
    { nombre: "Kiwi", tipo: "Baya"},
    { nombre: "Limón", tipo: "Cítrico"}
];

let citricos = [];
let pomaceas = [];
let tropicales = [];
let drupas = [];
let curcubitaceas = [];
let bayas = [];

/*
for (let i = 0; i < frutasConTipo.length; i++){
    if (frutasConTipo[i].tipo==='Cítrico'){
        citricos.push(frutasConTipo[i].nombre);
    }else if(frutasConTipo[i].tipo==='Pomácea'){
        pomaceas.push(frutasConTipo[i].nombre);
    }else if(frutasConTipo[i].tipo==='Tropical'){
        tropicales.push(frutasConTipo[i].nombre);
    }else if(frutasConTipo[i].tipo==='Curcubitácea'){
        curcubitaceas.push(frutasConTipo[i].nombre);
    }else if(frutasConTipo[i].tipo==='Drupa'){
        drupas.push(frutasConTipo[i].nombre);
    }else{
        bayas.push(frutasConTipo[i].nombre);
    }
}

console.log('El número de cítricos es: ' + citricos.length);
console.log('El número de pomáceas es: ' + pomaceas.length);
console.log('El número de tropicales es: ' + tropicales.length);
console.log('El número de drupas es: ' + drupas.length);
console.log('El número de curcubitáceas es: ' + curcubitaceas.length);
console.log('El número de bayas es: ' + bayas.length);
*/

i = 0;

while(i < frutasConTipo.length){
    if (frutasConTipo[i].tipo==='Cítrico'){
        citricos.push(frutasConTipo[i].nombre);
    }else if(frutasConTipo[i].tipo==='Pomácea'){
        pomaceas.push(frutasConTipo[i].nombre);
    }else if(frutasConTipo[i].tipo==='Tropical'){
        tropicales.push(frutasConTipo[i].nombre);
    }else if(frutasConTipo[i].tipo==='Curcubitácea'){
        curcubitaceas.push(frutasConTipo[i].nombre);
    }else if(frutasConTipo[i].tipo==='Drupa'){
        drupas.push(frutasConTipo[i].nombre);
    }else{
        bayas.push(frutasConTipo[i].nombre);
    }
    i++;
}

console.log('El número de cítricos es: ' + citricos.length);
console.log('El número de pomáceas es: ' + pomaceas.length);
console.log('El número de tropicales es: ' + tropicales.length);
console.log('El número de drupas es: ' + drupas.length);
console.log('El número de curcubitáceas es: ' + curcubitaceas.length);
console.log('El número de bayas es: ' + bayas.length);
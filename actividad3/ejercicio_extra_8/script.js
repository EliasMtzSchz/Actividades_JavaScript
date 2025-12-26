alert('Hola Ejercicio Extra 8');

// 8. Crea un programa que recorra el arreglo [4,”dos”,8,”tres”,5,9,1,”cero”] y muestre en consola solo los elementos que son tipo número.

let arreglo = [4,'dos',8,'tres',5,9,1,'cero'];

for(let i = 0; i<arreglo.length;i++){
    if (!isNaN(arreglo[i])){
        console.log(arreglo[i]);
    }else{
        
    }
    
}
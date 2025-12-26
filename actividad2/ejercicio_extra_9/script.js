alert('Hola Ejercicio 9');

/*
    9. Escribe un programa que responda a un usuario que quiere comprar un helado en una conocida marca de comida rápida cuánto le costará en función del topping que elija.
        El helado sin topping cuesta 50 MXN.
        El topping de oreo cuesta 10 MXN.
        El topping de KitKat cuesta 15 MXN.
        El topping de brownie cuesta 20 MXN.
    En caso de no disponer del topping solicitado por el usuario, el programa le indicará “no tenemos este topping, lo sentimos.” y a continuación le informará el precio del helado sin ningún topping.
*/

let toppingHelado = String(prompt('Ingrese la marca de helado (base, oreo, kitkat, brownie):')).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

if(toppingHelado == 'base'){
    console.log('El helado sin topping cuesta 50 MXN.');
}else if(toppingHelado == 'oreo'){
    consolelog('El helado con topping de oreo cuesta 60 MXN.'); 
}else if(toppingHelado == 'kitkat'){
    console.log('El helado con topping de KitKat cuesta 65 MXN.');
}else if(toppingHelado == 'brownie'){
    console.log('El helado con topping de brownie cuesta 70 MXN.');
}else{
    console.log('No tenemos este topping, lo sentimos. El helado sin topping cuesta 50 MXN.');
}


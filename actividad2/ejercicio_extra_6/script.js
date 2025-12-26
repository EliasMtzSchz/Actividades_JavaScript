alert('Hola Ejercicio 6');

// 6. Solicitar al usuario que ingrese tres números y mostrar cuál de los tres es el número mayor. Considerar el caso en que 2 números sean iguales.

let numero1 = Number(prompt('Ingrese el primer número:'));
let numero2 = Number(prompt('Ingrese el segundo número:'));
let numero3 = Number(prompt('Ingrese el tercer número:'));

if(numero1 > numero2){
    if(numero2 > numero3){
        console.log('El número mayor es: ' + numero1);
    }else{
        if(numero2 == numero3){
            console.log('El número mayor es: ' + numero1 + ' (los números ' + numero2 + ' y ' + numero3 + ' son iguales)');
        }else{
            if(numero3 > numero1){
                console.log('El número mayor es: ' + numero3);
            }else{
                if(numero1 == numero3){
                    console.log('Los números: ' + numero1 + ' y ' + numero3 + ' son mayores e iguales entre sí');
                 }else{
                    console.log('El número mayor es: ' + numero1);
                 } 
            }
        }
    }
}else{
    if(numero1 == numero2){
        if(numero1 == numero3){
            console.log('Los números: ' + numero1 + ', ' + numero2 + ' y ' + numero3 + ' son iguales');
        }else{
            if(numero3>numero1){
                console.log('El número mayor es: ' + numero3 + ' (los números ' + numero1 + ' y ' + numero2 + ' son iguales)');
            }else{
                console.log('Los números: ' + numero1 + ' y ' + numero2 + ' son mayores e iguales entre sí');
            }
        }
    }else{
        if(numero1>numero3){
            console.log('El número mayor es: ' + numero2);
        }else{
            if(numero1==numero3){
                console.log('El número mayor es: ' + numero2 + ' (los números ' + numero1 + ' y ' + numero3 + ' son iguales)');
            }else{
                if(numero2>numero3){
                    console.log('El número mayor es: ' + numero2);
                }else{
                    if(numero2==numero3){
                        console.log('Los números: ' + numero2 + ' y ' + numero3 + ' son mayores e iguales entre sí');
                    }else{
                        console.log('El número mayor es: ' + numero3);
                    }
                }
            }
        }
    }
}
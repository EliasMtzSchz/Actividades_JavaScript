alert('Hola FizzBuzz');

// let numero =0;

/*
while ( numero<100){
    numero++;
    console.log(numero);
}
*/

/*
for(numero =1; numero<=100;numero++){
    if(numero%3===0){
        console.log('Fizz');
    }else if(numero%5===0){
        console.log('Buzz');
    }else{
        console.log(numero);
    }
}
*/

for(let numero = 1; numero <= 100; numero++){
    switch(true){
        case numero%3===0 && numero%5===0:
            console.log('FizzBuzz');
            break;
        case numero%3===0:
            console.log('Fizz');
            break;
        case numero%5===0:
            console.log('Buzz');
            break;
        default:
            console.log(numero);
    }
}
console.log('__EXERCISE 6: FUNCTIONS');

/* a. Crear una función suma que reciba dos valores numéricos y retorne el resultado.
Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha variable
en la consola del navegador. */
console.log('-Exercise 6-a:');

function sum (a,b){
    return a + b;
}
var result = sum(10,16);
console.log(result);

/* b. A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros
no es un número; de no ser un número, mostrar una alerta aclarando que uno de los parámetros tiene error
y retornar el valor NaN como resultado. */
console.log('-Exercise 6-b:');

function validateNum (a,b){
    if(isNaN(a) || isNaN(b)){
        alert('One is not a number');
        return NaN;
    }else{
        return a + b;
    }
}
console.log(validateNum(3,2));

/* c. Aparte, crear una función validate Integer que reciba un número como parámetro y devuelva
verdadero si es un número entero. */
console.log('-Exercise 6-c:');

function validateInteger(num){
    return Number.isInteger(num);
}

/* d. A la función suma del ejercicio 6b) agregarle una llamada a la función del ejercicio 6c.
y que valide que los números sean enteros. En caso que haya decimales mostrar un alerta con el error
y retornar el número convertido a entero (redondeado). */
console.log('-Exercise 6-d:');

function validateNumbers (a,b){
    if(typeof a === 'number' && typeof b === 'number'){
        if(!validateInteger(a)){
            a = Math.round(a);
            console.log(a);
        }
        if(!validateInteger(b)){
            alert('Is not a entire number');
            b = Math.round(b);
        }
        return a + b;
    }else{
        alert('Error, must be numbers');
        return NaN;
    }
} 
console.log(validateNumbers(3.6 , 50));


/* e. Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro
de la función suma probando que todo siga funcionando igual. */
console.log('-Exercise 6-e:');

function validateNumbersTwo (a){
    if(typeof a !== 'number'){
        alert('Error, must be numbers');
        return NaN;
    } else if(!validateInteger(a)){
        alert('In not round');
        return Math.round(a);
    }
    return a;
}
function newSum (a,b){
    a = validateNumbersTwo(a);
    b = validateNumbersTwo(b);
    return a + b;
}
console.log(newSum(4.3 , 11));
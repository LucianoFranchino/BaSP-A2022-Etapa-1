console.log('__EXERCISE 1: VARIABLES AND OPERATORS');

/* a. Crear dos variables numéricas y utilizar el operador suma para guardar el valor de la suma de ambos 
números en una 3er variable.*/
console.log('-Exercise 1-a:')

var a = 5;
var b = 15;
var sum = a+b;

console.log('Sum: ' + sum);

/* b. Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable. */
console.log('-Exercise 1-b:')

var firstName = 'Luciano ';
var lastName = 'Franchino';
var nameLastName = firstName + lastName;

console.log('Complete Name: ', nameLastName);

/* c. Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string) 
guardando el resultado de la suma en una 3er variable (utilizar length). */
console.log('-Exercise 1-c:')

var word_1 = 'hello'; 
var word_2 = 'godbye';
var text = word_1.length + word_2.length;

console.log('Number of  letters: ', text);

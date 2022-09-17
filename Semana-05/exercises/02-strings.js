console.log('__EXERCISE 2: STRINGS');

/* a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo
el texto en mayúscula (utilizar toUpperCase).*/
console.log('-Exercise 2-a:')

var tenCharacters = 'text whit ten caracters';
console.log(tenCharacters.toUpperCase());

/* b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros
5 caracteres guardando el resultado en una nueva variable (utilizar substring).*/
console.log('-Exercise 2-b:')

var newWord = 'javascript';
var fiveCharacters;
console.log(fiveCharacters = newWord.substring(0,5));

/* c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string
con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring). */
console.log('-Exercise 2-c:')

var varStrinWhitTenCharacter = 'Trackgenix';
var threeCharacters;
console.log(threeCharacters = varStrinWhitTenCharacter.substring(7,10));

/* d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string
con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva
variable (utilizar substring, toUpperCase, toLowerCase y el operador +). */ 
console.log('-Exercise 2-d:')

var stringOne = 'administration';
var stringTwo = stringOne.substring(0,1).toUpperCase() + stringOne.substring(1,14).toLowerCase();

console.log(stringTwo);

/* e.Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco.
Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).*/
console.log('-Exercise 2-e:')

var spaceBlack = 'enterprise work';
var spaceBlankTwo = spaceBlack.indexOf(' ');
console.log(spaceBlankTwo);

/* f.Crear una variable de tipo string con al menos 2 palabras largas
(10 caracteres y algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para
generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás letras
en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).*/
console.log('-Exercise 2-f:')

var longWords = 'costumer service';
var capitalLetter = longWords.indexOf(' ') + 1;
var longWordsTwo = longWords.toUpperCase().substring(0,1) + longWords.toLowerCase().substring(1,capitalLetter) + 
longWords.toUpperCase().substring(capitalLetter, capitalLetter +1) + longWords.toLowerCase().substring(10,17);

console.log(longWordsTwo);

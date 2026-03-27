/* 

// 5. Declare a string password = "securePass". Log the length of password.
const password = 'securePass';
const passwordLength = password.length;
console.log('Password length is: ', passwordLength, ''.length);

// 6. Convert the string "hello world" to uppercase and log it.
let message = 'hello world';
console.log(message.toUpperCase());
message = 'Bye Bye';
console.log(message, message.toLowerCase());

// 7. Concatenate "Hello" and "World" with a space in between and log the result.

const myGreeting = 'Hello' + ' ' + 'World' ;
const greeting = 'Hello'.concat(' ', 'World');

const word1 = 'Hello';
const word2 = 'Turkiye';
const otherGreeting = `${word1} ${word2}`;

console.log('exp. 7:', myGreeting, greeting, otherGreeting);

// 8. Check the type of a variable, e.g., let x = 42. Log the type using typeof.
let x = 42;
let name = 'Gökay';
let list = [1,2,3];

console.log(x, typeof x, name, typeof name, list, typeof list, Array.isArray(list));

// 9. Convert the number 100 to a string and log the result.

const number=100;
const stringNumber=number.toString();

console.log(stringNumber); 
console.log(typeof stringNumber);

// 10. Convert the string "50" to a number and log its type to confirm the conversion.
const string='50';
const num=Number(string);
console.log(string);
console.log(num);
console.log(typeof num);

// 11. Generate a random integer between 0 and 10 and log it.
let randomNumber=(Math.floor(Math.random()*11));
console.log(randomNumber);

// 12. Round the number 3.7 down using Math.floor and 3.2 up using Math.ceil, log both.
const firstNumber=(Math.floor(3.7));
const secondNumber=(Math.ceil(3.2));

console.log(firstNumber);
console.log(secondNumber);

// 13. Declare a boolean variable isStudent = true. Log it.
const isStudent=true;
console.log(isStudent);

// 14. Initialize counter = 0, then increment it by 1 using counter++ and log it.

let counter=0;
counter++;
// counter=counter+1 , counter +=1 ve counter ++ aynı.
console.log(counter);

// 15. Initialize points = 10, add 5 to it using points += 5, then log points.
let point=10;
point+=5;
console.log(point);

// 16. Declare name="Alice", age=30, city="Paris". Log "Alice (30) lives in Paris" using template literals.
const name='Alice';
const age=30;
const city='Paris';
console.log (`${name} (${age}) lives in Paris`);

// 17. Declare variables x=5, y=10, z=15. Log their total sum.
const x=5;
const y=10;
const z=15;

const sum= x+y+z;
console.log(`The total sum is: ${x+y+z}`);


// 19. Declare firstName and lastName. Create fullName by concatenating them with a space and log it.
const firstName= 'Yasemin';
const lastName='Altun';

const fullName=`${firstName} ${lastName}`;
console.log(fullName);


// 20. Declare firstFactor=7 and secondFactor=2. Log the product.
const firstFactor=7;
const secondFactor=2;
const product=firstFactor * secondFactor;
console.log(product);


// 22. Declare counter=0. Increment it using three different methods (e.g., counter++, counter+=1, counter=counter+1) and log the result each time.

let counter=0;
counter++;
counter+=1;
counter=counter+1;
console.log(counter);


// 23. Declare initialTemperature=20. Increase it by 5 and log the result.
let initialTemperature=20;
initialTemperature+=5;
console.log(initialTemperature);


// 24. Declare numberEx9=6. Increment it using the prefix ++ operator and log both the variable and the incremented value.
let numberEx9=6;
console.log('Incremented value:', ++numberEx9);

console.log('newValue:', numberEx9);


// 26. Declare numberEx11=-3. Increment it by 1 using prefix ++, then multiply the result by 2 and log the final value.
let numberEx11=-3;
console.log('Final value is:', ++numberEx11*2);

*/

 //27.Declare a=2 and b=3. Increment a using the prefix ++ operator, then add b to the result and log it.
 let a=2;
 let b=3;


 let result = ++a +b;
 console.log(result);
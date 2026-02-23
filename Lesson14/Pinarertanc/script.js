/* 
Topic: JavaScript Basics

Focus: Variables, data types, arithmetic, strings, random numbers, template literals, increments
*/

// Instructions: Complete each exercise below by writing your code where indicated.

// 1. Declare variables firstNumber=5 and secondNumber=3 and log their sum.
const firstNumber = 5;
const secondNumber = 3;

console.log('Ex. 1. Result is:', firstNumber + secondNumber);

// 2. Declare variables userName and userAge. Log a greeting: "Hello! I am (userName) and I am (userAge) years old."
let userName = 'Elit';
const userAge = 32;
console.log("Hello! I'm " + userName + ' and I am ' + userAge + ' years old.');

console.log(
  'Hello ' + userName + 'https://meet.google.com/tqk-gpor-hbf?pli=1&authuser=0',
);

// 3. Declare variables a=10 and b=4. Log the result of a-b, a*b, and a/b.
let a = 10;
let b = 4;
console.log('Ex. 3');
console.log(a - b);
console.log(a * b);
console.log(a / b);

console.log(a - b, a * b, a / b);

console.log('------');

// 4. Use template literals to log: "My name is (userName). I like JS."

console.log(`Fifteen is ${a + b} and not ${2 * a + b}.`);
userName = 'Pınar';
console.log(`My name is ${userName}. I like JS.`);

// 5. Declare a string password = "securePass". Log the length of password.
const password = 'securePass';
const passwordLength = password.length;
console.log('Password length is: ', passwordLength, ''.length);

// 6. Convert the string "hello world" to uppercase and log it.
let message = 'hello world';
console.log(message.toUpperCase());

message = 'insan';

console.log(message, message.toUpperCase(), message.toLocaleUpperCase('tr-TR'));

// 7. Concatenate "Hello" and "World" with a space in between and log the result.

const myGreeting = 'hello' + ' ' + 'world';

const greeting = 'hello'.concat(' ', 'world');

console.log('Ex. 7', myGreeting, greeting);

// 8. Check the type of a variable, e.g., let x = 42. Log the type using typeof.
 let x = 42;
 let name = 'Gökay'; 
 let list =[1,2,3];

 function greet () {
  console.log('Hi');
 }

 console.log(x, typeof x , name, typeof name, list, typeof list, Array.isArray(list), greet, typeof greet);

// 9. Convert the number 100 to a string and log the result.

const number = 100;
const result = number.toString();
console.log('Ex. 9. Result is:', result);

// 10. Convert the string "50" to a number and log its type to confirm the conversion.

const string = "50";
const result2 = Number(string)
console.log('Ex. 10. Result is:', result2 , typeof result2);

// 11. Generate a random integer between 0 and 10 and log it.

console.log('Ex. 11. Result is:', Math.floor(Math.random() * 10));

// 12. Round the number 3.7 down using Math.floor and 3.2 up using Math.ceil, log both.

console.log('Ex. 12. Result is:', Math.floor(3.7), Math.ceil(3.2));

// 13. Declare a boolean variable isStudent = true. Log it.

isStudent = 'true';
console.log(`Ex. 13. Result is: ${isStudent}`);

// 14. Initialize counter = 0, then increment it by 1 using counter++ and log it.

let counter = 0;
counter++;

console.log(`Ex. 14. Result is:`, counter);

// 15. Initialize points = 10, add 5 to it using points += 5, then log points.

let points = 10;
points += 5;

console.log(`Ex. 15. Result is:`, points)

// 16. Declare name="Alice", age=30, city="Paris". Log "Alice (30) lives in Paris" using template literals.
const name3 = "Alice";
const age = 30;
const city = "Paris"

console.log(`Ex. 16. Result is:`,  `${name3}` + " (" + `${age}` + ") " + "lives in " + `${city}`   )
// 17. Declare variables x=5, y=10, z=15. Log their total sum.

const h = 5;
y = 10;
z = 15;
sum = h + y + z;
console.log( `Ex. 17. Result is: ${sum}`);

// 18. Declare dividend=10 and divisor=3. Log the quotient (divisionResult) and difference (differenceResult).

const dividen = 10;
const divisor = 3;
const divisionResult = dividen / divisor;
const differenceResult = dividen - divisor;
console.log(`Ex. 18. Result is:`, divisionResult , differenceResult)    

// 19. Declare firstName and lastName. Create fullName by concatenating them with a space and log it.

const firstName = "Pinar";
const lastName = "Ertanc";
const fullName = firstName + " " + lastName
console.log(`Ex. 19. Result is:` , fullName)

// 20. Declare firstFactor=7 and secondFactor=2. Log the product.

const firstFactor = 7;
const secondFactor = 2;
const product = firstFactor * secondFactor;
console.log(`Ex. 20. Result is:`, product)

// 21. Log the value of Math.PI.

console.log(`Ex. 21. Result is:`, Math.PI)

// 22. Declare counter=0. Increment it using three different methods (e.g., counter++, counter+=1, counter=counter+1) and log the result each time.

let counter1 = 0;
counter1++;
counter1 += 1;
counter1 = counter1+1;
console.log(`Ex. 22. Result is:`, counter1)

// 23. Declare initialTemperature=20. Increase it by 5 and log the result.

let initialTemperature = 20;
initialTemperature += 5;
console.log(`Ex. 23. Result is:`, initialTemperature)

// 24. Declare numberEx9=6. Increment it using the prefix ++ operator and log both the variable and the incremented value.

let numberEx9 = 6;
console.log(`Ex. 24. Result is:` , ++numberEx9, numberEx9 )


// 25. Declare numberEx10=8. Increment it using the postfix ++ operator and log both the original variable and the incremented value.

let numberEx10 = 8;
console.log(`Ex. 25. Result is:`, numberEx10++ , numberEx10)

// 26. Declare numberEx11=-3. Increment it by 1 using prefix ++, then multiply the result by 2 and log the final value.

let numberEx11 = -3;
++numberEx11;
console.log(`Ex. 25. Result is:`, numberEx11*2)

// 27. Declare a=2 and b=3. Increment a using the prefix ++ operator, then add b to the result and log it.

let d = 2;
let f = 3;
console.log(`Ex. 25. Result is:`,(++d)+f)
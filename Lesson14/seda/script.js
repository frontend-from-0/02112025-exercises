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
const a = 10;
const b = 4;
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

const numericValue100 = 100;
const stringFromNumber = String(numericValue100);
console.log(stringFromNumber);

// 10. Convert the string "50" to a number and log its type to confirm the conversion.

const stringNumber50 = "50";
const numberFromString = Number(stringNumber50);
console.log(typeof numberFromString);

// 11. Generate a random integer between 0 and 10 and log it.

const randomIntZeroToTen = Math.floor(Math.random() * 11);
console.log(randomIntZeroToTen);

// 12. Round the number 3.7 down using Math.floor and 3.2 up using Math.ceil, log both.

const floorResult = Math.floor(3.7);
const ceilResult = Math.ceil(3.2);

console.log(floorResult);
console.log(ceilResult);

// 13. Declare a boolean variable isStudent = true. Log it.

const isStudentStatus = true;
console.log(isStudentStatus);

// 14. Initialize counter = 0, then increment it by 1 using counter++ and log it.

let simpleCounter = 0;
simpleCounter++;
console.log(simpleCounter);

// 15. Initialize points = 10, add 5 to it using points += 5, then log points.

let totalPoints = 10;
totalPoints += 5;
console.log(totalPoints);

// 16. Declare name="Alice", age=30, city="Paris". Log "Alice (30) lives in Paris" using template literals.

const personName = "Alice";
const personAge = 30;
const personCity = "Paris";

console.log(`${personName} (${personAge}) lives in ${personCity}`);

// 17. Declare variables x=5, y=10, z=15. Log their total sum.

const valueX = 5;
const valueY = 10;
const valueZ = 15;

const totalSumXYZ = valueX + valueY + valueZ;
console.log(totalSumXYZ);

// 18. Declare dividend=10 and divisor=3. Log the quotient (divisionResult) and difference (differenceResult).

const dividendValue = 10;
const divisorValue = 3;

const divisionResult = dividendValue / divisorValue;
const differenceResult = dividendValue - divisorValue;

console.log(divisionResult);
console.log(differenceResult);


// 19. Declare firstName and lastName. Create fullName by concatenating them with a space and log it.

const firstNameValue = "Seda";
const lastNameValue = "OZ";

const fullNameValue = firstNameValue + " " + lastNameValue;
console.log(fullNameValue);


// 20. Declare firstFactor=7 and secondFactor=2. Log the product.

const firstFactorValue = 7;
const secondFactorValue = 2;

const productResult = firstFactorValue * secondFactorValue;
console.log(productResult);

// 21. Log the value of Math.PI.

console.log(Math.PI);

// 22. Declare counter=0. Increment it using three different methods (e.g., counter++, counter+=1, counter=counter+1) and log the result each time.
 let multiIncrementCounter = 0;

multiIncrementCounter++;
console.log(multiIncrementCounter);

multiIncrementCounter += 1;
console.log(multiIncrementCounter);

multiIncrementCounter = multiIncrementCounter + 1;
console.log(multiIncrementCounter);

// 23. Declare initialTemperature=20. Increase it by 5 and log the result.

let initialTemperatureValue = 20;
initialTemperatureValue += 5;
console.log(initialTemperatureValue);

// 24. Declare numberEx9=6. Increment it using the prefix ++ operator and log both the variable and the incremented value.

let prefixExampleValue = 6;
const prefixIncrementedValue = ++prefixExampleValue;

console.log(prefixExampleValue);
console.log(prefixIncrementedValue);

// 25. Declare numberEx10=8. Increment it using the postfix ++ operator and log both the original variable and the incremented value.

let postfixExampleValue = 8;
const postfixOriginalValue = postfixExampleValue++;

console.log(postfixOriginalValue);
console.log(postfixExampleValue);

// 26. Declare numberEx11=-3. Increment it by 1 using prefix ++, then multiply the result by 2 and log the final value.

let negativeNumberValue = -3;
const finalCalculatedValue = ++negativeNumberValue * 2;

console.log(finalCalculatedValue);

 // 27. Declare a=2 and b=3. Increment a using the prefix ++ operator, then add b to the result and log it.

 let valueA = 2;
const valueB = 3;

const finalSumResult = ++valueA + valueB;
console.log(finalSumResult);
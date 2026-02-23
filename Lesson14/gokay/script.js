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
let number9 = 100;
let string9 = String(number9); // Or number9.toString()
console.log('Ex. 9:', string9, typeof string9); 
// Explanation: The String() function converts the value into a string type.

// 10. Convert the string "50" to a number and log its type to confirm the conversion.
let string10 = "50";
let number10 = Number(string10);
console.log('Ex. 10:', number10, typeof number10); 
// Explanation: Number() converts the numeric value inside a string to a number type.

// 11. Generate a random integer between 0 and 10 and log it.
let randomInt = Math.floor(Math.random() * 11);
console.log('Ex. 11: Random number (0-10):', randomInt);
// Explanation: Math.random() produces a number between 0-1. Multiplying by 11 and using Math.floor gives an integer from 0 to 10.

// 12. Round the number 3.7 down using Math.floor and 3.2 up using Math.ceil.
console.log('Ex. 12: Floor (3.7) ->', Math.floor(3.7)); // 3
console.log('Ex. 12: Ceil (3.2) ->', Math.ceil(3.2));   // 4

// 13. Declare a boolean variable isStudent = true and log it.
let isStudent = true;
console.log('Ex. 13: Is student?', isStudent);

// 14. Initialize counter = 0, then increment it by 1 using counter++ and log it.
// Initialize counter = 0, then increment it by 1 using counter++ and log it.
let counter = 0;
counter++; 
console.log('Ex. 14: Counter:', counter);

// 15. Initialize points = 10, add 5 to it using points += 5, then log points.
let points = 10;
points += 5; 
console.log('Ex. 15: Points:', points);

// 16. Declare name="Alice", age=30, city="Paris" and log a sentence using template literals.
const nameAlice = "Alice";
const ageAlice = 30;
const cityAlice = "Paris";
console.log(`Ex. 16: ${nameAlice} (${ageAlice}) lives in ${cityAlice}.`);

// 17. Declare variables x=5, y=10, z=15 and log their total sum.
let xVal = 5, yVal = 10, zVal = 15;
console.log('Ex. 17: Total sum:', xVal + yVal + zVal);

// 18. Declare dividend=10 and divisor=3. Log the quotient and difference.
let dividend = 10;
let divisor = 3;
console.log('Ex. 18: Quotient:', dividend / divisor, 'Difference:', dividend - divisor);

// 19. Declare firstName and lastName and create fullName by concatenating them with a space.
let fName = "Ali";
let lName = "Yılmaz";
let fullName = fName + " " + lName;
console.log('Ex. 19:', fullName);

// 20. Declare firstFactor=7 and secondFactor=2. Log the product.
let firstFactor = 7, secondFactor = 2;
console.log('Ex. 20: Product:', firstFactor * secondFactor);

// 21. Log the value of Math.PI.
console.log('Ex. 21: Pi value:', Math.PI);

// 22. Declare counter=0. Increment it using three different methods and log each.
let c = 0;
c = c + 1;
console.log('Method 1:', c);
c += 1;
console.log('Method 2:', c);
c++;
console.log('Method 3:', c);

// 23. Declare initialTemperature=20. Increase it by 5 and log the result.
let initialTemperature = 20;
initialTemperature += 5;
console.log('Ex. 23: Temperature:', initialTemperature);

// 24. Prefix ++ (pre-increment) operator usage:
let numberEx9 = 6;
console.log('Ex. 24: Prefix increment:', ++numberEx9); // Increments first, then logs.
console.log('Ex. 24: Current value:', numberEx9);

// 25. Postfix ++ (post-increment) operator usage:
let numberEx10 = 8;
console.log('Ex. 25: Postfix increment:', numberEx10++); // Logs first (8), then increments in memory.
console.log('Ex. 25: Updated value:', numberEx10);    // Now shows as 9.

// 26. numberEx11=-3. Increment it by 1 using prefix ++, then multiply by 2.
let numberEx11 = -3;
let result26 = (++numberEx11) * 2; 
console.log('Ex. 26: Result:', result26); 
// Explanation: -3 becomes -2 first, then multiplied by 2 = -4.

// 27. a=2 and b=3. Increment a using prefix ++, then add b.
let ex27A = 2;
let ex27B = 3;
let result27 = (++ex27A) + ex27B; 
console.log('Ex. 27: Result:', result27); 
// Explanation: a becomes 3 first, then 3+3 = 6.
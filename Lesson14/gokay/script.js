/* Topic: JavaScript Basics
Focus: Variables, data types, arithmetic, strings, random numbers, template literals, increments
*/

// 1. Declare variables firstNumber=5 and secondNumber=3 and log their sum.
const firstNumber = 5;
const secondNumber = 3;
console.log('Ex. 1. Result is:', firstNumber + secondNumber);

// 2. Declare variables userName and userAge.
let userName = 'Elit'; // Değişeceği için let
const userAge = 32;
console.log(`Hello! I'm ${userName} and I am ${userAge} years old.`);

// 3. Declare variables a=10 and b=4. Log the result of a-b, a*b, and a/b.
const a = 10;
const b = 4;
console.log('Ex. 3 Results:', a - b, a * b, a / b);

// 4. Use template literals to log: "My name is (userName). I like JS."
userName = 'Pınar'; // Reassigned
console.log(`My name is ${userName}. I like JS.`);

// 5. Declare a string password = "securePass". Log the length of password.
const password = 'securePass';
console.log('Ex. 5 - Password length is:', password.length);

// 6. Convert the string "hello world" to uppercase and log it.
const message = 'hello world';
console.log('Ex. 6:', message.toUpperCase());

// 7. Concatenate "Hello" and "World" with a space in between and log the result.
const myGreeting = 'Hello' + ' ' + 'World';
console.log('Ex. 7:', myGreeting);

// 8. Check the type of a variable.
const x = 42;
const nameStr = 'Gökay'; 
const list = [1, 2, 3];
function greet() { console.log('Hi'); }

console.log('Ex. 8 Types:', typeof x, typeof nameStr, typeof list, typeof greet);

// 9. Convert the number 100 to a string and log the result.
const number9 = 100;
const string9 = String(number9);
console.log('Ex. 9:', string9, typeof string9); 

// 10. Convert the string "50" to a number and log its type.
const string10 = "50";
const number10 = Number(string10);
console.log('Ex. 10:', number10, typeof number10); 

// 11. Generate a random integer between 0 and 10 and log it.
const randomInt = Math.floor(Math.random() * 11);
console.log('Ex. 11 - Random number (0-10):', randomInt);

// 12. Round the number 3.7 down using Math.floor and 3.2 up using Math.ceil.
console.log('Ex. 12: Floor (3.7) ->', Math.floor(3.7), '| Ceil (3.2) ->', Math.ceil(3.2));

// 13. Declare a boolean variable isStudent = true and log it.
const isStudent = true;
console.log('Ex. 13: Is student?', isStudent);

// 14. Initialize counter = 0, then increment it by 1 using counter++.
let counter = 0; // Value changes, so let
counter++; 
console.log('Ex. 14: Counter:', counter);

// 15. Initialize points = 10, add 5 to it using points += 5.
let points = 10; // Value changes, so let
points += 5; 
console.log('Ex. 15: Points:', points);

// 16. Declare name="Alice", age=30, city="Paris" and log using template literals.
const nameAlice = "Alice";
const ageAlice = 30;
const cityAlice = "Paris";
console.log(`Ex. 16: ${nameAlice} (${ageAlice}) lives in ${cityAlice}.`);

// 17. Declare variables x=5, y=10, z=15 and log their total sum.
const xVal = 5;
const yVal = 10;
const zVal = 15;
console.log('Ex. 17: Total sum:', xVal + yVal + zVal);

// 18. Declare dividend=10 and divisor=3. Log the quotient and difference.
const dividend = 10;
const divisor = 3;
console.log('Ex. 18: Quotient:', dividend / divisor, 'Difference:', dividend - divisor);

// 19. Declare firstName and lastName and create fullName.
const fName = "Ali";
const lName = "Yılmaz";
const fullName = fName + " " + lName;
console.log('Ex. 19:', fullName);

// 20. Declare firstFactor=7 and secondFactor=2. Log the product.
const firstFactor = 7;
const secondFactor = 2;
console.log('Ex. 20: Product:', firstFactor * secondFactor);

// 21. Log the value of Math.PI.
console.log('Ex. 21: Pi value:', Math.PI);

// 22. Declare counter=0. Increment it using three different methods.
let c = 0; // Incremented, so let
c = c + 1;
c += 1;
c++;
console.log('Ex. 22 - Final c value:', c);

// 23. Declare initialTemperature=20. Increase it by 5.
let initialTemperature = 20; // Changed, so let
initialTemperature += 5;
console.log('Ex. 23: Temperature:', initialTemperature);

// 24. Prefix ++ (pre-increment) operator usage:
let numberEx24 = 6; // Changed, so let
console.log('Ex. 24: Prefix increment:', ++numberEx24);

// 25. Postfix ++ (post-increment) operator usage:
let numberEx25 = 8; // Changed, so let
console.log('Ex. 25: Postfix increment:', numberEx25++);
console.log('Ex. 25: Updated value:', numberEx25);

// 26. numberEx26=-3. Increment it by 1 using prefix ++, then multiply by 2.
let numberEx26 = -3; // Changed, so let
const result26 = (++numberEx26) * 2;
console.log('Ex. 26: Result:', result26);

// 27. a=2 and b=3. Increment a using prefix ++, then add b.
let ex27A = 2; // Changed, so let
const ex27B = 3;
const result27 = (++ex27A) + ex27B;
console.log('Ex. 27: Result:', result27);
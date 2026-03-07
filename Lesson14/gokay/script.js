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

// 3. Declare variables a=10 and b=4.
const a = 10;
const b = 4;
console.log('Ex. 3 - Results:', a - b, a * b, a / b);

// 4. Use template literals
userName = 'Pınar'; // Değer değişti
console.log(`My name is ${userName}. I like JS.`);

// 5. Password length
const password = 'securePass';
console.log('Password length is:', password.length);

// 6. Uppercase
const message = 'hello world';
console.log(message.toUpperCase());

// 7. Concatenation
const myGreeting = 'hello' + ' ' + 'world';
console.log('Ex. 7:', myGreeting);

// 8. Typeof
const x = 42;
const nameStr = 'Gökay'; 
const list = [1, 2, 3];
function greet() { console.log('Hi'); }
console.log(typeof x, typeof nameStr, typeof list, typeof greet);

// 9. Number to String
const number9 = 100;
const string9 = String(number9);
console.log('Ex. 9:', string9, typeof string9); 

// 10. String to Number
const string10 = "50";
const number10 = Number(string10);
console.log('Ex. 10:', number10, typeof number10); 

// 11. Random number (0-10)
const randomInt = Math.floor(Math.random() * 11);
console.log('Ex. 11:', randomInt);

// 12. Floor and Ceil
console.log('Ex. 12:', Math.floor(3.7), Math.ceil(3.2));

// 13. Boolean
const isStudent = true;
console.log('Ex. 13:', isStudent);

// 14. Increment
let counter = 0;
counter++; 
console.log('Ex. 14:', counter);

// 15. Points
let points = 10;
points += 5; 
console.log('Ex. 15:', points);

// 16. Template Literals Alice
const nameAlice = "Alice";
const ageAlice = 30;
const cityAlice = "Paris";
console.log(`Ex. 16: ${nameAlice} (${ageAlice}) lives in ${cityAlice}.`);

// 17. Total sum (Hatalı blok temizlendi, tek sefer tanımlandı)
const xVal = 5, yVal = 10, zVal = 15;
console.log('Ex. 17: Total sum:', xVal + yVal + zVal);

// 18. Quotient and Difference
const dividend = 10;
const divisor = 3;
console.log('Ex. 18: Quotient:', dividend / divisor, 'Difference:', dividend - divisor);

// 19. Full Name
const fName = "Ali";
const lName = "Yılmaz";
const fullName = `${fName} ${lName}`;
console.log('Ex. 19:', fullName);

// 20. Product
const firstFactor = 7;
const secondFactor = 2;
console.log('Ex. 20: Product:', firstFactor * secondFactor);

// 21. Math.PI
console.log('Ex. 21: Pi value:', Math.PI);

// 22. Multiple increments
let c = 0;
c = c + 1;
c += 1;
c++;
console.log('Ex. 22 final value:', c);

// 23. Temperature
let initialTemperature = 20;
initialTemperature += 5;
console.log('Ex. 23:', initialTemperature);

// 24. Prefix increment
let numberEx24 = 6;
console.log('Ex. 24 Prefix:', ++numberEx24);

// 25. Postfix increment
let numberEx25 = 8;
console.log('Ex. 25 Postfix:', numberEx25++);
console.log('Ex. 25 Updated:', numberEx25);

// 26. Calculation with prefix
let numberEx26 = -3;
const result26 = (++numberEx26) * 2;
console.log('Ex. 26:', result26); 

// 27. Calculation 2
let ex27A = 2;
const ex27B = 3;
const result27 = (++ex27A) + ex27B;
console.log('Ex. 27:', result27);
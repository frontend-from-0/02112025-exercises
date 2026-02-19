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

let numberx = 100; 
let stringx = String(numberx) ;
console.log(stringx);
console.log(typeof stringx);

// 10. Convert the string "50" to a number and log its type to confirm the conversion.

let stringy = "50";
let numbery = Number(stringy);
console.log(numbery);
console.log(typeof numbery);

// 11. Generate a random integer between 0 and 10 and log it.

let randomNumber = Math.floor(Math.random() * 10) + 1;
console.log(randomNumber);

// 12. Round the number 3.7 down using Math.floor and 3.2 up using Math.ceil, log both.
let number_one = Math.floor(3.7);
let number_two = Math.ceil(3.2);
console.log(`This is number one =   ${number_one} This is number two =  ${number_two}`);

// 13. Declare a boolean variable isStudent = true. Log it.
let isStudent = false;
console.log("Öğrenci mi ?",isStudent);
let isimx = prompt("Lütfen isminizi girin:  ");
if (isimx === "izzettin muhammed uludag") {
  isStudent = true;
  console.log ("Tebrikler Giriş başarili.")
} 
else if(isimx === "izzettinm muhammed") {
  console.log ("Lütfen soysiminizi girin")
} else {
  isStudent = false
  console.log("Girilen isim  doğru degil lütfen tekrar deneyin")
}

// 14. Initialize counter = 0, then increment it by 1 using counter++ and log it.
let counter = 0;
//counter += 1;
counter++; // eğer "++" yı bu şekilde yazsaydık "++counter" önce sayıyı 1 artır sonra bu yeni sayıyı artmış haliyle istediğin gibi kullan demiş oluyoruz. Benim bildiğim kadarıyla :))))
console.log(counter);

// 15. Initialize points = 10, add 5 to it using points += 5, then log points.
let points = 10;
points += 5;
console.log (points);
// 16. Declare name="Alice", age=30, city="Paris". Log "Alice (30) lives in Paris" using template literals.
let name_A = "Alice";
let age_A = 30;
let city_A = "Paris";
console.log(`${name_A}  (${age_A})  lives in  ${city_A}`);


// 17. Declare variables x=5, y=10, z=15. Log their total sum.
let x_17 = 5;
let y_17 = 10;
let z_17 = 15;
let xyz = x_17 + y_17 + z_17;
console.log(xyz);


// 18. Declare dividend=10 and divisor=3. Log the quotient (divisionResult) and difference (differenceResult) ?????????? :))))).
let dividend = 10;
let divisor = 3;
let divisionResult = dividend/divisor;
let differenceResult = dividend - divisor ;
let remainderResult = dividend % divisor;
console.log(`Bölümü = ${divisionResult} Fark = ${differenceResult} Kalan = ${remainderResult}`);


// 19. Declare firstName and lastName. Create fullName by concatenating them with a space and log it.
let firstName = "izzettin";
let lastName = "uludag"; 
let fullName = `${firstName} ${lastName}`;
console.log(fullName);

// 20. Declare firstFactor=7 and secondFactor=2. Log the product.
let firstFactor = 7;
let secondFactor = 2;
let product = firstFactor * secondFactor;
console.log(product);

// 21. Log the value of Math.PI.
console.log (Math.PI);

// 22. Declare counter=0. Increment it using three different methods (e.g., counter++, counter+=1, counter=counter+1) and log the result each time.
// Bu şekilde aklıma geldi :)))
let counter_22 = 0;
let first_counter_22 = counter_22++;
console.log(first_counter_22);
let second_counter_22 = counter_22 += 1;
console.log(second_counter_22);
let third_counter_22 = counter_22 = counter_22+1;
console.log(third_counter_22);
// ayrıca bu yöntemde aklıma geldi kısa yolu 
// let counter_22 = 0;
counter_22++; 
console.log("1. Yöntem Sonucu:", counter_22);
counter_22 += 1; 
console.log("2. Yöntem Sonucu:", counter_22);
counter_22 = counter_22 + 1; 
console.log("3. Yöntem Sonucu:", counter_22);

// 23. Declare initialTemperature=20. Increase it by 5 and log the result.
let initialTemperature = 20;
initialTemperature +=5;
console.log(`Result = ${initialTemperature}`);

// 24. Declare numberEx9=6. Increment it using the prefix ++ operator and log both the variable and the incremented value.
let numberEx9 = 6;
let numberUp = ++numberEx9;
console.log(`Değişken ${numberEx9}`);
console.log(`Artirilmiş deger ${numberUp}`);

// 25. Declare numberEx10=8. Increment it using the postfix ++ operator and log both the original variable and the incremented value.
let numberEx10 = 8;
console.log(`Original value: ${numberEx10}`);
console.log(`After increment (postfix ++): ${numberEx10++}`);
console.log(`Value now: ${numberEx10}`);

// 26. Declare numberEx11=-3. Increment it by 1 using prefix ++, then multiply the result by 2 and log the final value.
let numberEx11 = -3;
let number_26 = (++numberEx11) * 2;
console.log(number_26); 

// 27. Declare a=2 and b=3. Increment a using the prefix ++ operator, then add b to the result and log it.
let a_27 = 2;
let b_27 = 3;
let sonuc_27 = (++a_27) + b_27;
console.log(sonuc_27); 
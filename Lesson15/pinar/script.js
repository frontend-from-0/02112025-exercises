/*
1. Check Password Length
   - Define a function `checkPassword(password)` that checks if `password` length
     is at least 8 characters.
   - If >= 8, log: "Password length is sufficient."
   - Otherwise, log: "Password is too short."
   - Call the function with different passwords and log the result.
*/

console.log('Ex. 1 --------');

function checkPassword(password) {
  if (password.length >= 8) {
    console.log('Password length is sufficient.');
  } else {
    console.log('Password is too short.');
  }
}

checkPassword('  password 112312   ');
checkPassword('pas');

/*
2. Uppercase Name
   - Define a function `uppercaseName(name)` that converts a given name to uppercase.
   - Log the uppercase result to the console.
   - Example: "John Doe" -> "JOHN DOE"
*/
function logUppercaseName(name) {
  const uppercaseName = name.toUpperCase();
  console.log(uppercaseName);
}

console.log('Ex. 2 --------');
logUppercaseName('name');
logUppercaseName('john');

/*
3. Lowercase Email
   - Define a function `normalizeEmail(email)` that returns a lowercased version of the email.
   - Log the normalized email to the console.
   - Example: "USER@Example.COM" -> "user@example.com"
*/
function normalizeEmail(email) {
  const normalizeEmail = email.toLowerCase();
  console.log(normalizeEmail)
}

console.log('Ex. 3 --------');
normalizeEmail('PiNAR@gmail.COM');

/*
4. Extract Domain
   - Define a function `getDomain(email)` that uses `slice` or `substring` to
     extract everything after '@'.
   - Log the domain to the console.
   - Example: "user@example.com" -> "example.com"
*/
console.log('Ex. 4 --------');
function getDomain(email) {
  const emailArray = email.split('@');
  // user@example.com -> ['user', 'example.com'];

  console.log(emailArray[1]); // second element in the array
}
getDomain('mesut.ozdemir@gmail.com');

/*
5. Check Substring
   - Define a function `containsWord(sentence, word)` that checks if the `sentence`
     includes `word` (use the .includes() method).
   - If true, log: "<word> found in sentence."
   - Else, log: "<word> not found in sentence."
*/

console.log('Ex. 5 --------');

function containsWord(sentence, word) {
  // if (sentence.toLowerCase().includes(word.toLowerCase())) {
  if (sentence.includes(word)) {
    console.log(`${word} found in sentence`);
  } else {
    console.log(`${word} not found in sentence`);
  }
}
containsWord(
  'Define a function `checkFileExtension(filename)` that checks if the filename',
  'word',
);
containsWord('Bugün hava yagmurlu', 'Hava');

/*
6. File Extension Check
   - Define a function `checkFileExtension(filename)` that checks if the filename
     ends with ".pdf" using .endsWith().
   - If it does, log: "This is a PDF file."
   - Otherwise, log: "Not a PDF file."
*/
console.log('Ex. 6 --------');

function checkFileExtension(filename) {
  if (filename.toLowerCase().endsWith('.pdf')) {
    // if (filename.toUpperCase().endsWith('.PDF')) {
    console.log('This is a PDF file.');
  } else {
    console.log('Not a PDF file.');
  }
}
checkFileExtension('myfile.pdf');
checkFileExtension('myfile.PDF');
checkFileExtension('myfile.exel');

/*
7. Compare Numbers (if-else)
   - Define a function `compareNumbers(a, b)` that:
     - Logs "a is bigger" if a > b
     - Logs "b is bigger" if b > a
     - Logs "Numbers are equal" if they are the same
*/

console.log('Ex. 7 --------');

function compareNumber(a, b) {
  if ( a > b ){
    console.log('a is bigger');
  } else if (b > a) {
    console.log('b is bigger');
  } else if (a = b) {
    console.log('Numbers are equal')
  }

}

compareNumber(3, 8);
compareNumber(8,3);
compareNumber(3, 3);

/*
8. Palindrome Check
   - Define a function `isPalindrome(str)` that checks if `str` is the same
     forwards and backwards.
   - If it is, log: "<str> is a palindrome"
   - Otherwise, log: "<str> is not a palindrome"
*/
console.log('Ex. 8 --------');

function isPalindrome(str) {
  if ( str === str.split('').reverse().join('')){
     console.log('<str> is a palindrome')
  } else {console.log('<str> is not a palindrome')}
}

isPalindrome('ada');
isPalindrome('adak');

/*
9. String Truncation
   - Define a function `truncateString(text, maxLength)` that uses slice() to
     cut the string to `maxLength` characters, then appends "..." if it was too long.
   - Log the final truncated string.
*/
console.log('Ex. 9 --------');

function truncateString(text, maxLength){
  const truncated = text.slice(maxLength);
  console.log(truncated);
}
 truncateString('This is very very very very soo very upuzun very text', 16);
/*
10. Check Even or Odd (if-else)
   - Define a function `evenOrOdd(number)` that:
     - Logs "Even" if the number is even
     - Logs "Odd" if the number is odd
*/
console.log('Ex. 10 --------');

function evenOrOdd(number) {
  if (number %2 == 0){
    console.log('Even')
  } if (number %2 == 1){
    console.log('Odd')
  }
}

evenOrOdd(7);
evenOrOdd(8);

/*
11. URL Protocol Checker
   - Define a function `checkProtocol(url)` that converts the URL to lowercase
     and checks if it starts with "https" using .startsWith().
   - Log "Secure connection" if true, otherwise "Unsecure connection".
*/
console.log('Ex. 11 --------');

function checkProtocol(url) {
  if(url.startsWith('https')){
    console.log('Secure connection')
  } else { console.log('Unsecure connection')}
}

checkProtocol('www.followmysteps.com.tr')
checkProtocol('https/www.followmysteps.com.tr')

/*
12. Switch: Day of the Week
   - Define a function `getDayOfWeek(num)` that uses a switch statement:
     1 -> "Monday"
     2 -> "Tuesday"
     ...
     7 -> "Sunday"
     - Log the matched day or "Invalid day" if out of range.
*/
console.log('Ex. 12 --------');
function getDayofWeek(number) {
  switch (number) {
    case 1:
      console.log('Monday');
      break;
    case 2:
      console.log('Tuesday');
      break;
    case 3:
      console.log('Wednesday');
      break;
    case 4:
      console.log('Thursday');
      break;
    case 5:
      console.log('Friday');
      break;
    case 6:
      console.log('Saturday');
      break;
    case 7:
      console.log('Sunday');
      break;
    default:
      console.log('Unknow day');
      break;
  }
}
getDayofWeek(9);
getDayofWeek(1);
getDayofWeek('4');

// == value equality (non-strict check); !=
// === value & type equality (strict check); !==  


/*
13. Repeat a String;
   - Define a function `repeatWord(word, times)` that uses the .repeat() method
     to repeat `word` `times` times.
   - Log the repeated result.
*/
console.log('Ex. 13 --------');

function repeatWord(word, times) {
 const result = word.repeat(times);
 console.log(result);
}

repeatWord('JS is Hard',3);
/*
14. Replace Substring
   - Define a function `censorWord(sentence, target)` that replaces `target`
     with "****" (use .replaceAll() or multiple .replace()).
   - Log the censored sentence.
*/
console.log('Ex. 14 --------');

function censorWord(sentences, target){
let CensoredWord = sentences.replaceAll(target, "****")
console.log(CensoredWord)
}

censorWord('kötü bir kelime', 'kötü')

/*
15. Check First Character (if-else)
   - Define a function `startsWithA(str)` that checks if the string starts with 'A'
     (use .charAt(0) or [0]).
   - Log "Starts with A" or "Does not start with A".
*/
console.log('Ex. 15 --------');

function startsWith(str) {
  if (str.charAt(0) == 'A' ){
    console.log('Starts with A')
  } else {console.log('Does not starts with A')}
}

startsWith('Arkadaş');
startsWith('arkadaş');

/*
16. Slice Last N Characters
   - Define a function `sliceLastN(text, n)` that uses .slice(-n) to extract
     the last `n` characters of `text`.
   - Log the result.
*/
console.log('Ex. 16 --------');

function sliceLastN(text, n) {
 let result = text.slice(-n);
 console.log(result);

}

sliceLastN('susuzluk', 2);

/*
17. Switch: Grade Checker
   - Define a function `gradeChecker(score)` that uses a switch (or if-else chain):
     90+ -> "A"
     80-89 -> "B"
     70-79 -> "C"
     60-69 -> "D"
     below 60 -> "F"
   - Log the grade.
*/
console.log('Ex. 17 --------');

function gradeChecker(score) {

  switch (score){
    case 90 <= :
      console.log("A");
      break;
    case 80 <= score <= 89 :
      console.log("B");
      break;
    case 70 <= score <= 79 :
      console.log("C");
      break;
    case 60 <= score <= 69 :
      console.log("D");
      break;
    case score <= 60 :
      console.log("F");      
  }
}

gradeChecker(17);
gradeChecker(79);
gradeChecker(90);


/*
18. Character Replacement
   - Define a function `replaceCharacter(str, oldChar, newChar)` that uses .replaceAll()
     (or a loop) to swap all occurrences of oldChar with newChar.
   - Log the result.
*/

console.log('Ex. 18 --------');

function replaceCharacter(str, oldChar, newChar) {
 replacedString = str.replaceAll(oldChar, newChar);
console.log(replacedString);

}

replaceCharacter('Benim KüçüK Dünyam', 'ü', 'u');
/*
19. Title Case a Sentence
   - Define a function `titleCase(sentence)` that:
     - Splits the sentence by spaces
     - Uppercases the first letter of each word
     - Joins them back
   - Log the transformed string.
*/
console.log('Ex. 19 --------');


/*
20. Switch: Traffic Light
   - Define a function `trafficLight(color)` that uses a switch statement:
     - "red" -> log: "Stop"
     - "yellow" -> log: "Caution"
     - "green" -> log: "Go"
     - anything else -> "Invalid color"
*/
function trafficLight(color) {
  switch (color.toLowerCase()) {
    case 'red':
      console.log('stop');
      break;
    case 'yellow':
      console.log('caution');
      break;
    case 'green':
      console.log('go');
      break;
    default:
      console.log('Invalid Color');
  }
}

function trafficLightWithIf(color) {
  if (color.toLowerCase() === 'red') {
    console.log('stop');
  } else if (color.toLowerCase() === 'yellow') {
    console.log('caution');
  } else if (color.toLowerCase() === 'green') {
    console.log('go');
  } else {
    console.log('Invalid Color');
  }
}
trafficLight('red');
trafficLight('RED');
trafficLight('reD');

trafficLight('green');
trafficLight('orange');
trafficLight('black');

/*
21. Check String Length (if-else)
   - Define a function `isLongString(str)` that checks if the string length
     is more than 10.
   - Log "Long string" or "Short string".
*/
console.log('Ex. 21 --------');

function isLongString(str) {
  if (str.length > 10) {
    console.log('Long string');
  } else {
    console.log('Short string');
  }
}

isLongString("Cekostavakyalılaştıramadıklarımızdan");
isLongString("Cek");

/*
22. Convert to Lowercase Then Check
   - Define a function `isSpam(text)` that converts the text to lowercase
     and checks if it includes "spam".
   - If it does, log "This text is spam."
   - Otherwise, log "This text is not spam."
*/

console.log('Ex. 22 --------');

function isSpam(text){
  const loverCaseText = text.toLowerCase()
  if(loverCaseText.includes("spam")){
    console.log("This text is spam")
  } else { console.log("This text is not spam")}
   
}
isSpam("Bu bir spam mailidir.")
isSpam("Bu bir reklam mailidir.")

/*
23. Extract Initials
   - Define a function `getInitials(fullName)` that uses .split() to get each name part,
     then logs the capitalized first letter of each.
   - Example: "John Doe" -> "J.D."
*/
console.log('Ex. 23 --------');



/*
24. Switch: Month to Season
   - Define a function `getSeason(monthNum)` (1-12). Use switch or if-else:
     - 12, 1, 2  -> "Winter"
     - 3, 4, 5   -> "Spring"
     - 6, 7, 8   -> "Summer"
     - 9, 10, 11 -> "Autumn"
   - Log the season or "Invalid month" if out of range.
*/
console.log('Ex. 24 --------');


function getSeason(monthNum){
  switch (monthNum){
    case 12 :
    case 1 :
    case 2 : 
      console.log("Winter");
      break;
    case 3 :
    case 4 :
    case 5 :  
      console.log("Spring");
      break;
    case 6 :
    case 7 :
    case 8 : 
      console.log("Summer");
      break;
    case 9 :
    case 10 :
    case 11 : 
      console.log("Autumn") ;  
    break;
    default:
      console.log("Invalid month")      
  }
}

getSeason(3);
getSeason(11);
getSeason (6);

/*
25. Check If String Contains Number
   - Define a function `containsNumber(str)` that uses a loop or a method like
     .match() to check if there's any digit in the string.
   - Log "Contains number" or "No number found".
*/

console.log('Ex. 25 --------');

function containsNumber(str){
if (str.match(".*\\d.*")){
  console.log("Contain number")
} else {console.log("No number found")}

}
containsNumber("Pinar 36 yaşında ve 1 oğlu var.")
containsNumber("Pinar otuz altı yaşında.")


/*
26. Pad a String
   - Define a function `padString(str, maxLength)` that if str.length < maxLength,
     uses .padEnd() or .padStart() to make the string reach maxLength with '*'.
   - Log the padded string.
*/

console.log('Ex. 26 --------');

function padString(str, maxLength){
 let result = str.length<maxLength.padEnd(str, maxLength, "*");
 console.log(result);
}

console.log("12345", 9);

/*
27. If-Else: Voting Eligibility
   - Define a function `canVote(age)` that logs:
     - "Can vote" if age >= 18
     - "Too young to vote" otherwise
*/
console.log('Ex. 27 --------');

function canVote(age){
  if (age >= 18){
    console.log("Can vote")
  } else { console.log("Too young to vote")}
}
canVote(36);
canVote(14);
/*
28. Reverse Words in a Sentence
   - Define a function `reverseWords(sentence)` that:
     - Splits the sentence by spaces
     - Reverses each word individually
     - Joins them back
   - Log the result.
*/
console.log('Ex. 28 --------');

function reverseWords(sentence){
 let result = sentence.split('').reverse().join('');
 console.log(result);
}

reverseWords("Ben Antalya'ya geldim.");

/*
29. Check Substring Position
   - Define a function `findWordPosition(sentence, word)` that uses .indexOf(word)
     to find the starting index. If not found, return -1.
   - Log the index or log "Not found" if it's -1.
*/
console.log('Ex. 29 --------');

function findWordPosition(sentence, word){
 let result = sentence.indexOf(word)
 
  if (sentence.indexOf(word)){
  console.log(result)
} if (result == -1 ) {console.log("Not found")}
  }

findWordPosition("Bugün yağmurlu", "yağmurlu");
findWordPosition("Bugün yağmurlu", "sıcak");

/*
30. Switch: Simple Calculator
   - Define a function `calculate(a, operator, b)` that uses switch to handle:
     - "+" -> a + b
     - "-" -> a - b
     - "*" -> a * b
     - "/" -> a / b
     - Otherwise -> "Invalid operator"
   - Log the result.
*/
console.log('Ex. 30 --------');

function calculate(a, operator, b){
  switch (operator){
    case "+" :
      console.log(a+b);
    break;
    case "-" :
      console.log(a-b);
    break;
    case "/" :
      console.log(a/b);
    break;
    case "*" :
      console.log(a*b);      
  }

}

calculate(2, "+", 4);
calculate(2, "-", 4);
calculate(2, "*", 4);
calculate(2, "/", 4);

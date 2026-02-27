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

console.log('Ex. 3 --------');

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

/*
8. Palindrome Check
   - Define a function `isPalindrome(str)` that checks if `str` is the same
     forwards and backwards.
   - If it is, log: "<str> is a palindrome"
   - Otherwise, log: "<str> is not a palindrome"
*/

/*
9. String Truncation
   - Define a function `truncateString(text, maxLength)` that uses slice() to
     cut the string to `maxLength` characters, then appends "..." if it was too long.
   - Log the final truncated string.
*/

/*
10. Check Even or Odd (if-else)
   - Define a function `evenOrOdd(number)` that:
     - Logs "Even" if the number is even
     - Logs "Odd" if the number is odd
*/

/*
11. URL Protocol Checker
   - Define a function `checkProtocol(url)` that converts the URL to lowercase
     and checks if it starts with "https" using .startsWith().
   - Log "Secure connection" if true, otherwise "Unsecure connection".
*/

/*
12. Switch: Day of the Week
   - Define a function `getDayOfWeek(num)` that uses a switch statement:
     1 -> "Monday"
     2 -> "Tuesday"
     ...
     7 -> "Sunday"
     - Log the matched day or "Invalid day" if out of range.
*/

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
function repeatWord(word, times) {
  const result = word.repeat(times);
  console.log(result);
  return result;
}
repeatWord("Mesut",5);

/*
14. Replace Substring
   - Define a function `censorWord(sentence, target)` that replaces `target`
     with "****" (use .replaceAll() or multiple .replace()).
   - Log the censored sentence.
*/
function censorWord(sentence, target){
  const censorResult = sentence.replaceAll(target, "****");
  console.log(censorResult);
  return censorResult;
}
censorWord("My name is Mesut Ozdemir.","Ozdemir");
/*
15. Check First Character (if-else)
   - Define a function `startsWithA(str)` that checks if the string starts with 'A'
     (use .charAt(0) or [0]).
   - Log "Starts with A" or "Does not start with A".
*/
function startsWithA(str) {
  if (str.charAt(0) === 'A') {
    console.log("Starts with A");
  } else {
    console.log("Does not start with A");
  }
}
startsWithA("Arizona"); 
startsWithA("Norway");
/*
16. Slice Last N Characters
   - Define a function `sliceLastN(text, n)` that uses .slice(-n) to extract
     the last `n` characters of `text`.
   - Log the result.
*/
function sliceLastN(text, n) {
  const result = text.slice(-n);
  console.log(result);
  return result;
}
sliceLastN("JavaScript", 6);
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
function gradeChecker(score) {
  let grade;
  switch (true) {
    case (score >= 90):
      grade = "A";
      break;
    case (score >= 80):
      grade = "B";
      break;
    case (score >= 70):
      grade = "C";
      break;
    case (score >= 60):
      grade = "D";
      break;
    default:
      grade = "F";
  }

  console.log(grade);
  return grade;
}

gradeChecker(95);
gradeChecker(85);
gradeChecker(72);
gradeChecker(65);
gradeChecker(50);

/*
18. Character Replacement
   - Define a function `replaceCharacter(str, oldChar, newChar)` that uses .replaceAll()
     (or a loop) to swap all occurrences of oldChar with newChar.
   - Log the result.
*/
function replaceCharacter(str, oldChar, newChar) {
  const regex = new RegExp(oldChar, "g");
  const result = str.replace(regex, newChar);
  console.log(result);
  return result;
}replaceCharacter("banana", "a", "o");
replaceCharacter("hello world", "l", "x");
/*
19. Title Case a Sentence
   - Define a function `titleCase(sentence)` that:
     - Splits the sentence by spaces
     - Uppercases the first letter of each word
     - Joins them back
   - Log the transformed string.
*/
function titleCase(sentence) {
  const words = sentence.split(" ");
  const titleCasedWords = words.map(word => {
    if (word.length === 0) return word;
    return word[0].toUpperCase() + word.slice(1);
  });
  const result = titleCasedWords.join(" ");
  console.log(result);
  return result;
}
titleCase("hello world from javascript"); 

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
function isLongString(str) {
  if (str.length > 10) {
    console.log("Long string");
  } else {
    console.log("Short string");
  }
}

isLongString("Hello");
isLongString("Hello My World!");
/*
22. Convert to Lowercase Then Check
   - Define a function `isSpam(text)` that converts the text to lowercase
     and checks if it includes "spam".
   - If it does, log "This text is spam."
   - Otherwise, log "This text is not spam."
*/
function isSpam(text) {
  const lowerText = text.toLowerCase();
  if (lowerText.includes("spam")) {
    console.log("This text is spam.");
  } else {
    console.log("This text is not spam.");
  }
}

isSpam("Buy SPAM now!"); 
isSpam("Hello, what is your name?");
/*
23. Extract Initials
   - Define a function `getInitials(fullName)` that uses .split() to get each name part,
     then logs the capitalized first letter of each.
   - Example: "John Doe" -> "J.D."
*/
function getInitials(fullName) {
  const nameParts = fullName.split(" ");
  const initials = nameParts
    .map(part => part.charAt(0).toUpperCase())
    .join(".") + ".";
  console.log(initials);
  return initials;
}

getInitials("John Doe"); 
getInitials("mary jane watson");
/*
24. Switch: Month to Season
   - Define a function `getSeason(monthNum)` (1-12). Use switch or if-else:
     - 12, 1, 2  -> "Winter"
     - 3, 4, 5   -> "Spring"
     - 6, 7, 8   -> "Summer"
     - 9, 10, 11 -> "Autumn"
   - Log the season or "Invalid month" if out of range.
*/
function getSeason(monthNum) {
  let season;

  switch (monthNum) {
    case 12:
    case 1:
    case 2:
      season = "Winter";
      break;
    case 3:
    case 4:
    case 5:
      season = "Spring";
      break;
    case 6:
    case 7:
    case 8:
      season = "Summer";
      break;
    case 9:
    case 10:
    case 11:
      season = "Autumn";
      break;
    default:
      season = "Invalid Month";
  }

  console.log(season);
  return season;
}
getSeason(1);
getSeason(4);
getSeason(7);
getSeason(10);
getSeason(15);
/*
25. Check If String Contains Number
   - Define a function `containsNumber(str)` that uses a loop or a method like
     .match() to check if there's any digit in the string.
   - Log "Contains number" or "No number found".
*/
function containsNumber(str) {
  if (str.match(/\d/)) {
    console.log("Contains number");
  } else {
    console.log("No number found");
  }
}

containsNumber("Hello123");
containsNumber("Hello");
/*
26. Pad a String
   - Define a function `padString(str, maxLength)` that if str.length < maxLength,
     uses .padEnd() or .padStart() to make the string reach maxLength with '*'.
   - Log the padded string.
*/
function padString(str, maxLength) {
  let padded = str;
  if (str.length < maxLength) {
    padded = str.padEnd(maxLength, '*');
  }
  console.log(padded);
  return padded;
}

padString("Hello", 10);
padString("World", 5); 
/*
27. If-Else: Voting Eligibility
   - Define a function `canVote(age)` that logs:
     - "Can vote" if age >= 18
     - "Too young to vote" otherwise
*/
function canVote(age) {
  if (age >= 18) {
    console.log("Can vote");
  } else {
    console.log("Too young to vote");
  }
}

canVote(20);
canVote(16);
/*
28. Reverse Words in a Sentence
   - Define a function `reverseWords(sentence)` that:
     - Splits the sentence by spaces
     - Reverses each word individually
     - Joins them back
   - Log the result.
*/
function reverseWords(sentence) {
  const words = sentence.split(" ");
  const reversedWords = words.map(word => word.split("").reverse().join(""));
  const result = reversedWords.join(" ");
  console.log(result);
  return result;
}

reverseWords("Hello Javascript");
reverseWords("JavaScript is hard");
/*
29. Check Substring Position
   - Define a function `findWordPosition(sentence, word)` that uses .indexOf(word)
     to find the starting index. If not found, return -1.
   - Log the index or log "Not found" if it's -1.
*/
function findWordPosition(sentence, word) {
  const index = sentence.indexOf(word);
  if (index !== -1) {
    console.log(index);
  } else {
    console.log("Not found");
  }
  return index;
}

findWordPosition("The quick brown fox", "brown");
findWordPosition("The quick brown fox", "cat"); 
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
function calculate(a, operator, b) {
  let result;

  switch (operator) {
    case "+":
      result = a + b;
      break;
    case "-":
      result = a - b;
      break;
    case "*":
      result = a * b;
      break;
    case "/":
      result = a / b;
      break;
    default:
      result = "Invalid operator";
  }

  console.log(result);
  return result;
}

calculate(8, "+", 3);
calculate(15, "-", 4);
calculate(10, "*", 7);
calculate(55, "/", 5);
calculate(15, "%", 2);

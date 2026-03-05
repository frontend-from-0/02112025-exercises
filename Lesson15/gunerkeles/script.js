/*
1. Check Password Length
   - Define a function `checkPassword(password)` that checks if `password` length
     is at least 8 characters.
   - If >= 8, log: "Password length is sufficient."
   - Otherwise, log: "Password is too short."
   - Call the function with different passwords and log the result.
*/

console.log("Ex. 1 --------");

function checkPassword(password) {
  if (password.length >= 8) {
    console.log("Password length is sufficient.");
  } else {
    console.log("Password is too short.");
  }
}

checkPassword("  password 112312   ");
checkPassword("pas");

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

console.log("Ex. 2 --------");
logUppercaseName("name");
logUppercaseName("john");

/*
3. Lowercase Email
   - Define a function `normalizeEmail(email)` that returns a lowercased version of the email.
   - Log the normalized email to the console.
   - Example: "USER@Example.COM" -> "user@example.com"
*/

console.log("Ex. 3 --------");

/*
4. Extract Domain
   - Define a function `getDomain(email)` that uses `slice` or `substring` to
     extract everything after '@'.
   - Log the domain to the console.
   - Example: "user@example.com" -> "example.com"
*/
console.log("Ex. 4 --------");
function getDomain(email) {
  const emailArray = email.split("@");
  // user@example.com -> ['user', 'example.com'];

  console.log(emailArray[1]); // second element in the array
}
getDomain("mesut.ozdemir@gmail.com");

/*
5. Check Substring
   - Define a function `containsWord(sentence, word)` that checks if the `sentence`
     includes `word` (use the .includes() method).
   - If true, log: "<word> found in sentence."
   - Else, log: "<word> not found in sentence."
*/

console.log("Ex. 5 --------");

function containsWord(sentence, word) {
  // if (sentence.toLowerCase().includes(word.toLowerCase())) {
  if (sentence.includes(word)) {
    console.log(`${word} found in sentence`);
  } else {
    console.log(`${word} not found in sentence`);
  }
}
containsWord(
  "Define a function `checkFileExtension(filename)` that checks if the filename",
  "word",
);
containsWord("Bugün hava yagmurlu", "Hava");

/*
6. File Extension Check
   - Define a function `checkFileExtension(filename)` that checks if the filename
     ends with ".pdf" using .endsWith().
   - If it does, log: "This is a PDF file."
   - Otherwise, log: "Not a PDF file."
*/
console.log("Ex. 6 --------");

function checkFileExtension(filename) {
  if (filename.toLowerCase().endsWith(".pdf")) {
    // if (filename.toUpperCase().endsWith('.PDF')) {
    console.log("This is a PDF file.");
  } else {
    console.log("Not a PDF file.");
  }
}
checkFileExtension("myfile.pdf");
checkFileExtension("myfile.PDF");
checkFileExtension("myfile.exel");

/*
7. Compare Numbers (if-else)
   - Define a function `compareNumbers(a, b)` that:
     - Logs "a is bigger" if a > b
     - Logs "b is bigger" if b > a
     - Logs "Numbers are equal" if they are the same
*/
console.log("Ex. 7 --------");

function compareNumbers(a, b) {
  if (a > b) {
    console.log("a is bigger");
  } else if (b > a) {
    console.log("b is bigger");
  } else {
    console.log("Numbers are equal");
  }
}
compareNumbers(1, 1);

console.log("Ex. 7 - alternative");

function compareNumbers(a, b) {
  const result =
    a > b ? "a is bigger" : b > a ? "b is bigger" : "Numbers are equal";
  console.log(result);
}

compareNumbers(8, 3);

/*
8. Palindrome Check
   - Define a function `isPalindrome(str)` that checks if `str` is the same
     forwards and backwards.
   - If it is, log: "<str> is a palindrome"
   - Otherwise, log: "<str> is not a palindrome"
*/
console.log("Ex. 8 --------");

function isPalindrome(str) {
  const lowerStr = str.toLowerCase();
  const reversed = lowerStr.split("").reverse().join("");
  if (reversed === lowerStr) {
    console.log(`${lowerStr} is a palindrome`);
  } else {
    console.log(`${lowerStr} is not a palindrome`);
  }
}

isPalindrome("Madam");

console.log("Ex. 8 - alternative");
function isPalindrome(str) {
  const lowerStr = str.toLowerCase();
  const reversed = lowerStr.split("").reverse().join("");
  const result =
    lowerStr === reversed
      ? `${lowerStr} is a palindrome`
      : `${lowerStr} is not a palindrome`;
  console.log(result);
}

isPalindrome("Love");

/*
9. String Truncation
   - Define a function `truncateString(text, maxLength)` that uses slice() to
     cut the string to `maxLength` characters, then appends "..." if it was too long.
   - Log the final truncated string.
*/
console.log("Ex. 9 --------");

function truncateString(text, maxLength) {
  if (text.length > maxLength) {
    let shortText = text.slice(0, maxLength) + "...";
    console.log(shortText);
  } else {
    console.log(text);
  }
}
truncateString("I like coding!", 10);

/*
10. Check Even or Odd (if-else)
   - Define a function `evenOrOdd(number)` that:
     - Logs "Even" if the number is even
     - Logs "Odd" if the number is odd
*/
console.log("Ex. 10 --------");

function evenOrOdd(number) {
  let result = number % 2 === 0 ? "Even" : "Odd";
  console.log(result);
}

evenOrOdd(33);

/*
11. URL Protocol Checker
   - Define a function `checkProtocol(url)` that converts the URL to lowercase
     and checks if it starts with "https" using .startsWith().
   - Log "Secure connection" if true, otherwise "Unsecure connection".
*/

console.log("Ex. 11 --------");

function checkProtocol(url) {
  const lowerUrl = url.toLowerCase();
  if (lowerUrl.startsWith("https")) {
    console.log("Secure connection");
  } else {
    console.log("Unsecure connection");
  }
}

checkProtocol("https://www.google.com/");

console.log("Ex. 11 - alternative");

function checkProtocol(url) {
  const lowerUrl = url.toLowerCase();
  const result = lowerUrl.startsWith("https")
    ? "Secure connection"
    : "Unsecure connection";
  console.log(result);
}

checkProtocol("www.google.com");

/*
12. Switch: Day of the Week
   - Define a function `getDayOfWeek(num)` that uses a switch statement:
     1 -> "Monday"
     2 -> "Tuesday"
     ...
     7 -> "Sunday"
     - Log the matched day or "Invalid day" if out of range.
*/
console.log("Ex. 12 ---------");

function getDayofWeek(number) {
  switch (number) {
    case 1:
      console.log("Monday");
      break;
    case 2:
      console.log("Tuesday");
      break;
    case 3:
      console.log("Wednesday");
      break;
    case 4:
      console.log("Thursday");
      break;
    case 5:
      console.log("Friday");
      break;
    case 6:
      console.log("Saturday");
      break;
    case 7:
      console.log("Sunday");
      break;
    default:
      console.log("Unknow day");
      break;
  }
}
getDayofWeek(9);
getDayofWeek(1);
getDayofWeek("4");

// == value equality (non-strict check); !=
// === value & type equality (strict check); !==

/*
13. Repeat a String;
   - Define a function `repeatWord(word, times)` that uses the .repeat() method
     to repeat `word` `times` times.
   - Log the repeated result.
*/

console.log("Ex. 13 ---------");

function repeatWord(word, times) {
  const repeated = word.repeat(times);
  console.log(repeated);
}

repeatWord("lesson ", 5);

/*
14. Replace Substring
   - Define a function `censorWord(sentence, target)` that replaces `target`
     with "****" (use .replaceAll() or multiple .replace()).
   - Log the censored sentence.
*/

console.log("Ex. 14 ---------");

function censorWord(sentence, target) {
  const censoredWord = sentence.replaceAll(target, "****");
  console.log(censoredWord);
}
censorWord("This garden is a big garden", "garden");

/*
15. Check First Character (if-else)
   - Define a function `startsWithA(str)` that checks if the string starts with 'A'
     (use .charAt(0) or [0]).
   - Log "Starts with A" or "Does not start with A".
*/

console.log("Ex. 15 ---------");

function startsWithA(str) {
  if (str.toLowerCase().charAt(0).startsWith("a")) {
    console.log("Starts with A");
  } else {
    console.log("Does not start with A");
  }
}
startsWithA("alibaba");

console.log("Ex. 15 - alternative");

function startsWithA(str) {
  const result =
    str.toLowerCase().charAt(0) === "a"
      ? "Starts with A"
      : "Does not start with A";
  console.log(result);
}

startsWithA("Aruba");

/*
16. Slice Last N Characters
   - Define a function `sliceLastN(text, n)` that uses .slice(-n) to extract
     the last `n` characters of `text`.
   - Log the result.
*/

console.log("Ex. 16 ---------");

function sliceLastN(text, n) {
  const slicedWord = text.slice(-n);
  console.log(slicedWord);
}

sliceLastN("programming", 6);
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

console.log("Ex. 17 ---------");

function gradeChecker(score) {
  switch (true) {
    case score >= 90:
      console.log("A");
      break;
    case score >= 80 && score <= 89:
      console.log("B");
      break;
    case score >= 70 && score <= 79:
      console.log("C");
      break;
    case score >= 60 && score <= 69:
      console.log("D");
      break;
    case score < 60:
      console.log("F");
      break;
    default:
      console.log("Invalid Score");
  }
}
gradeChecker(71);

console.log("Ex. 17 - if-else chain");

function gradeChecker(score) {
  if (score >= 90) {
    console.log("A");
  } else if (score >= 80) {
    console.log("B");
  } else if (score >= 70) {
    console.log("C");
  } else if (score >= 60) {
    console.log("D");
  } else if (score < 60) {
    console.log("F");
  } else {
    console.log("Invalid Score");
  }
}

gradeChecker(32);

/*
18. Character Replacement
   - Define a function `replaceCharacter(str, oldChar, newChar)` that uses .replaceAll()
     (or a loop) to swap all occurrences of oldChar with newChar.
   - Log the result.
*/
console.log("Ex. 18 ---------");

function replaceCharacter(str, oldChar, newChar) {
  const newStr = str.replaceAll(oldChar, newChar);
  console.log(newStr);
}
replaceCharacter("Roma", "a", "e");

/*
19. Title Case a Sentence
   - Define a function `titleCase(sentence)` that:
     - Splits the sentence by spaces
     - Uppercases the first letter of each word
     - Joins them back
   - Log the transformed string.
*/

console.log("Ex. 19 ---------");

function titleCase(sentence) {
  let words = sentence.split(" ");
  let result = [];

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let capitalized = word.charAt(0).toUpperCase() + word.slice(1);
    result.push(capitalized);
  }
  console.log(result.join(" "));
}

titleCase("today is the first day of spring");

/*
20. Switch: Traffic Light
   - Define a function `trafficLight(color)` that uses a switch statement:
     - "red" -> log: "Stop"
     - "yellow" -> log: "Caution"
     - "green" -> log: "Go"
     - anything else -> "Invalid color"
*/

console.log("Ex. 20 ---------");

function trafficLight(color) {
  switch (color.toLowerCase()) {
    case "red":
      console.log("stop");
      break;
    case "yellow":
      console.log("caution");
      break;
    case "green":
      console.log("go");
      break;
    default:
      console.log("Invalid Color");
  }
}

function trafficLightWithIf(color) {
  if (color.toLowerCase() === "red") {
    console.log("stop");
  } else if (color.toLowerCase() === "yellow") {
    console.log("caution");
  } else if (color.toLowerCase() === "green") {
    console.log("go");
  } else {
    console.log("Invalid Color");
  }
}
trafficLight("red");
trafficLight("RED");
trafficLight("reD");

trafficLight("green");
trafficLight("orange");
trafficLight("black");

/*
21. Check String Length (if-else)
   - Define a function `isLongString(str)` that checks if the string length
     is more than 10.
   - Log "Long string" or "Short string".
*/

console.log("Ex. 21 ---------");

function isLongString(str) {
  let result = str.length > 10 ? "Long string" : "Short string";
  console.log(result);
}

isLongString("Today is a good day");
isLongString("Hello!");

/*
22. Convert to Lowercase Then Check
   - Define a function `isSpam(text)` that converts the text to lowercase
     and checks if it includes "spam".
   - If it does, log "This text is spam."
   - Otherwise, log "This text is not spam."
*/

console.log("Ex. 22 ---------");

function isSpam(text) {
  const lowerText = text.toLowerCase();
  if (lowerText.includes("spam")) {
    console.log("This text is spam.");
  } else {
    console.log("This text is not spam.");
  }
  console.log(lowerText);
}

isSpam("This mail Is A spam?");
isSpam("this mail is in the inbox");

console.log("Ex. 22 -alternative");

function isSpam(text) {
  const message = text.toLowerCase().includes("spam")
    ? "This text is spam."
    : "This text is not spam.";
  console.log(message);
}
isSpam("This mail Is A spam?");
isSpam("this mail is in the inbox");

/*
23. Extract Initials
   - Define a function `getInitials(fullName)` that uses .split() to get each name part,
     then logs the capitalized first letter of each.
   - Example: "John Doe" -> "J.D."
*/
console.log("Ex. 23 ---------");

function getInitials(fullName) {
  let nameParts = fullName.split(" ");
  let result = [];

  for (let i = 0; i < nameParts.length; i++) {
    let word = nameParts[i];
    let firstLetter = word.charAt(0).toUpperCase();
    result.push(firstLetter);
  }
  console.log(result.join(".") + ".");
}

getInitials("Guner Keles");

/*
24. Switch: Month to Season
   - Define a function `getSeason(monthNum)` (1-12). Use switch or if-else:
     - 12, 1, 2  -> "Winter"
     - 3, 4, 5   -> "Spring"
     - 6, 7, 8   -> "Summer"
     - 9, 10, 11 -> "Autumn"
   - Log the season or "Invalid month" if out of range.
*/

console.log("Ex. 24 ---------");

function getSeason(monthNum) {
  const month = Number(monthNum);

  switch (month) {
    case 12:
    case 1:
    case 2:
      console.log("Winter");
      break;
    case 3:
    case 4:
    case 5:
      console.log("Spring");
      break;
    case 6:
    case 7:
    case 8:
      console.log("Summer");
      break;
    case 9:
    case 10:
    case 11:
      console.log("Autumn");
      break;
    default:
      console.log("Invalid month");
      break;
  }
}

getSeason(6);

/*
25. Check If String Contains Number
   - Define a function `containsNumber(str)` that uses a loop or a method like
     .match() to check if there's any digit in the string.
   - Log "Contains number" or "No number found".
*/

console.log("Ex. 25 ---------");

function containsNumber(str) {
  const text = String(str);
  const textHasNumber = text.match(/\d/)
    ? "Contains number"
    : "No number found";

  console.log(textHasNumber);
}
containsNumber("check control");
containsNumber("control 21");

console.log("Ex. 25 -alternative with loop");

function containsNumber(str) {
  const text = String(str);
  let found = false;

  for (i = 0; i < text.length; i++) {
    if (text[i] >= "0" && text[i] <= "9") {
      found = true;
      break;
    }
  }
  if (found) {
    console.log("Contains number");
  } else {
    console.log("No number found");
  }
}
containsNumber("control 25");
containsNumber("control check");

/*
26. Pad a String
   - Define a function `padString(str, maxLength)` that if str.length < maxLength,
     uses .padEnd() or .padStart() to make the string reach maxLength with '*'.
   - Log the padded string.
*/
console.log("Ex. 26 ----------");

function padString(str, maxLength) {
  if (str.length < maxLength) {
    let longText = str.padEnd(maxLength, "*");
    console.log(longText);
  }
}
padString("Hello", 10);

console.log("Ex. 26 -alternative");

function padBoth(str, maxLength) {
  let halfway = Math.floor((maxLength + str.length) / 2);
  let res = str.padEnd(halfway, "*");
  let finalRes = res.padStart(maxLength, "*");
  console.log(finalRes);
}

padBoth("Example", 15);
/*
27. If-Else: Voting Eligibility
   - Define a function `canVote(age)` that logs:
     - "Can vote" if age >= 18
     - "Too young to vote" otherwise
*/

console.log("Ex. 27 --------");

function canVote(age) {
  if (age >= 18) {
    console.log("Can vote");
  } else {
    console.log("Too young to vote");
  }
}
canVote(14);
canVote(25);


console.log("Ex. 27 -OR");

function canVote(age) {
  const voter = age >= 18 ? "Can vote" : "Too young to vote";
  console.log(voter);
}

canVote(54);
canVote(8);

/*
28. Reverse Words in a Sentence
   - Define a function `reverseWords(sentence)` that:
     - Splits the sentence by spaces
     - Reverses each word individually
     - Joins them back
   - Log the result.
*/
console.log("Ex. 28 --------");

function reverseWords(sentence) {
  let texts = sentence.split(' ');
  let result = [];

  for (let i = 0; i < texts.length; i++) {
    let text = texts[i];
    let reversedWord = text.split('').reverse().join('');
    result.push(reversedWord);
  }
  console.log(result.join(' '));
}

reverseWords("This is not finishing");

/*
29. Check Substring Position
   - Define a function `findWordPosition(sentence, word)` that uses .indexOf(word)
     to find the starting index. If not found, return -1.
   - Log the index or log "Not found" if it's -1.
*/
console.log("Ex. 29 --------");

function findWordPosition(sentence, word) {
let index = sentence.indexOf(word);

if (index === -1) {
console.log('Not Found');
} else {
console.log(index);
}
}

findWordPosition('Hi my dear', 'dear');
findWordPosition('I like coding', 'code');


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

console.log("Ex. 30 ---------");

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
      console.log("Invalid operator");
      break;
  }
  console.log(result);
}

calculate(10, "+", 5); 
calculate(20, "/", 4); 
calculate(7, "x", 3);  

Resubmit
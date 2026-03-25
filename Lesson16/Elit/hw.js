/*
1. Sum Array Elements with a For Loop
   - Define a function `sumArray(numbers)` that uses a for loop
     to sum all elements in an array of numbers.
   - Log the final sum.
*/

function sumArray(numbers) {
  let result = 0;
  console.log("Finding sum of ", numbers, " array");

  // if (numbers.length === 0) {
  //   console.log('Array is empty');
  //   return;
  // }

  for (let i = 0; i < numbers.length; i++) {
    console.log("Current position", i, "current element", numbers[i]);
    result = result + numbers[i];
  }

  console.log("Final sum", result);
}

sumArray([3, 6, 9, 4]);
// sumArray([]);
// sumArray(['asda', 'asads']);

/*
2. Find Maximum Number in an Array
   - Define a function `findMax(numbers)` that uses a for loop to iterate
     through an array and find the largest value.
   - Log the largest value.
*/

function findMax(numbers) {
  let max = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (max < numbers[i]) {
      max = numbers[i];
    }
  }
  console.log("The maximum number of array", numbers, "is", max);
}

findMax([4, 9, 50, 10]);
findMax([4, 9, -50, 10]);

/*
3. Count Odd and Even Numbers
   - Define a function `countOddEven(numbers)` that loops through an array
     of numbers and counts how many are odd and how many are even.
   - Log the counts in the format: "Odd: X, Even: Y"
*/
function countOddEven(numbers) {
  let odd = 0;
  let even = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      even++;
    } else {
      odd++;
    }
  }
  console.log("Odd: ", odd, "Even numbers:", even);
}

countOddEven([1, 2, 3, 4, 5, 6]);

/*
4. Sum of Numbers in a Range (While Loop)
   - Define a function `sumRange(start, end)` that uses a while loop
     to sum all integers from `start` to `end` (inclusive).
   - Log the final sum.
*/
function sumRange(start, end) {
  let sum = 0;
  let current = start;
  while (current <= end) {
    sum = current + sum;
    current++;
  }
  console.log("the final sum is ", sum);
}
sumRange(1, 3);
/*
5. Reverse an Array
   - Define a function `reverseArray(arr)` that reverses the elements
     of an array manually using a for loop (without using .reverse()).
   - Log the reversed array.
*/
function reverseArray(arr) {
  let reversed = [];
  // let i=arr.length-1;  last number
  for (let i = arr.length - 1; i >= 0; i--) {
    const currentValue = arr[i];
    reversed.push(currentValue);
  }
  console.log("Reversed Array: ", reversed);
}
reverseArray([1, 2, 3, 4, 5]);

/*
6. Filter Out Negative Numbers
   - Define a function `filterNegative(numbers)` that loops through
     an array of numbers and creates a new array without any negative values.
   - Log the new array.
*/
function filterNegative(numbers) {
  positiveNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] >= 0) {
      positiveNumbers.push(numbers[i]);
    }
  }
  console.log(
    "Initial numbers array: ",
    numbers,
    "Positive numbers array: ",
    positiveNumbers,
  );
}
filterNegative([5, 4, 0, -4, -5]);
/*
7. Double the Values (For-of Loop)
   - Define a function `doubleValues(numbers)` that uses a for-of loop
     to multiply each number by 2, storing results in a new array.
   - Log the new array.
*/

function doubleValues(numbers) {
  const result = [];
  for (const number of numbers) {
    if (typeof number !== "number") {
      console.log(
        "Array contains elements other than numbers, please provide correct input.",
      );
      return;
    }
    result.push(number * 2);
  }
  console.log("Result is", result);
}
doubleValues([1, 4, 6]);
doubleValues([1, "asdas", 6]);

/*
8. Print Each Character of a String (For-of)
   - Define a function `printCharacters(str)` that uses a for-of loop
     to log each character in the string on a separate line.
*/
function printCharacters(str) {
  console.log("printing characters of the string", str);
  for (const char of str) {
    console.log(char);
  }
}
printCharacters("Lesson");

["a", "s", "e"][0]; // 'a'

"ase"[0]; // 'a'

/*
9. Sum All Values in an Object
   - Define a function `sumObjectValues(obj)` that iterates over the
     properties of an object (using a for-in loop) and sums all numeric values.
   - Log the sum.
   - Example: {a: 10, b: 20, c: 5} -> 35
*/
function sumObjectValues(obj) {
  let sum = 0;
  for (let key in obj) {
    if (typeof obj[key] === "number") {
      sum += obj[key];
    }
  }
  console.log("summary of object values: ", sum);
}
const example = { a: 10, b: 20, c: 5, d: "apple" };
sumObjectValues(example);

/*
10. Print Keys of an Object (For-in)
    - Define a function `printObjectKeys(obj)` that uses a for-in loop
      to log each key of the object.
    - Example: { name: "Alice", age: 25 } -> logs "name", then "age"
*/
function printObjectKeys(obj) {
  for (let key in obj) {
    console.log(key);
  }
}
const user = { name: "Alice", age: 25 };
printObjectKeys(user);

/*
11. Sum Array Using do-while Loop
    - Define a function `sumWithDoWhile(numbers)` that uses a do-while loop
      to sum all numbers in the array.
    - Log the total.
*/

function sumWithDoWhile(numbers) {
  let sum = 0;
  let i = 0;
  if (numbers.length === 0) return 0;
  do {
    sum += numbers[i];
    i++;
  } while (i < numbers.length);
  return sum;
}

const myNumbers = [10, 20, 30];
console.log("sum:", sumWithDoWhile(myNumbers));

/*
12. Remove Duplicates from an Array
    - Define a function `removeDuplicates(arr)` that loops through the array
      and creates a new array without duplicate elements.
    - Hint: you could check if the item is already in the new array before pushing.
    - Log the new array without duplicates.
*/
const original = [1, 2, 2, 3, 4, 4, 5];
function removeDuplicates(arr) {
  let uniqueArr = [];
  for (let item of arr) {
    if (!uniqueArr.includes(item)) {
      uniqueArr.push(item);
    }
  }
  console.log(uniqueArr);
}
removeDuplicates(original);
/*
13. Calculate Factorial (For Loop)
    - Define a function `factorial(n)` that calculates n! (n factorial)
      using a for loop.
    - Log the result. 
    - Example: factorial(5) -> 120
*/

function factoriel(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result = result * i;
  }
  return result;
}
console.log(factoriel(5));

/*
14. String -> Array -> String
    - Define a function `reverseWords(sentence)` that splits the sentence 
      into an array of words, reverses the array order, then joins it back into
      a string. Use loops or built-in methods as you like.
    - Log the reversed sentence.
*/
//Buılt-ın method
function reverseWords(sentence) {
  let word = sentence.split(" ");
  console.log("1.step: ", word);

  let reversedWords = word.reverse();
  console.log("2.step: ", reversedWords);

  let finalString = reversedWords.join(" ");
  console.log("3.step: ", finalString);
  return finalString;
}
reverseWords("Learning Javascript is fun");

/* shortly:
function reverseWords(sentence){
let reversed= sentence.split(' ').reverse().join(' ');
return reversed;
}
console.log(reverseWords('Learning Javascript is fun'));
*/

/*
14. QUESTION 14 PLUS: LOOP VERSION:
*/

function reverseArrayWords(sentence) {
  const words = sentence.split(" ");
  const reversedArray = [];
  for (let i = words.length - 1; i >= 0; i--) {
    reversedArray.push(words[i]);
  }
  return reversedArray.join(" ");
}
console.log(reverseArrayWords("Learning Javascript is hard"));

/*
15. Filter Words Longer Than X
    - Define a function `filterLongWords(words, minLength)` that uses a for loop
      to collect only the words that have a length >= minLength.
    - Log the resulting array.
*/
function filterLongWords(words, minlength) {
  const longWords = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].length >= minlength) {
      longWords.push(words[i]);
    }
  }
  return longWords;
}

const finalFilteredWords = filterLongWords(
  ["ali", "ege", "zeynep", "erdem", "nihal", "ayşegül", "nesrin"],
  5,
);
console.log(finalFilteredWords);

/*
16. Log Array Elements with Their Indices
    - Define a function `logElementsWithIndex(arr)` that loops through the array
      and logs "Index: i, Value: arr[i]" for each element.
*/
function logElementsWithIndex(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(`Index: ${i}, Value: ${arr[i]}`);
  }
}
logElementsWithIndex(["apple", "banana", "orange"]);

/*
17. Find the Smallest Number in an Array
    - Define a function `findMin(numbers)` that loops through the array
      to find and return the smallest number.
    - Log the smallest number.
*/
function findMin(numbers) {
  let minNumber = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < minNumber) {
      minNumber = numbers[i];
    }
  }
  console.log("Minimum Number is:", minNumber);
  return minNumber;
}
findMin([2, 4, 8, 1, 7, 6, 9]);

/*
18. Count Occurrences of a Word in an Array
    - Define a function `countOccurrences(arr, word)` that loops through `arr`
      to count how many times `word` appears.
    - Log the count.
*/

function countOccurrences(arr, word) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].toLowerCase() === word.toLowerCase()) {
      count++;
    }
  }
  return count;
}
let result = countOccurrences(
  ["ali", "ali", "ali", "ali", "veli", "Ali", "veli"],
  "ali",
);
console.log("Array has", result, "ali");

/*
19. Remove Falsy Values
    - Define a function `removeFalsyValues(arr)` that loops through an array
      and returns a new array without falsy values (false, 0, "", null, undefined, NaN).
    - Log the new array.
*/
function removeFalsyValues(arr) {
  let filteredArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      filteredArray.push(arr[i]);
    }
  }
  return filteredArray;
}
const mixedArray = [0, 1, "merhaba", "", false, 42, null, undefined, NaN, "JS"];
const resultOfFilteredArray = removeFalsyValues(mixedArray);

console.log("Filtered Array: ", resultOfFilteredArray);

/*
19. questıon 19 PLUS .filter() Method
    - Define a function `removeFalsyValues(arr)` that loops through an array
      and returns a new array without falsy values (false, 0, "", null, undefined, NaN).
    - Log the new array.
*/
const mixArray = [0, 1, "merhaba", "", false, 42, null, undefined, NaN, "JS"];
const cleanArray = mixArray.filter(Boolean);
console.log(cleanArray);

/*
20. Sum of All Digits in a String
    - Define a function `sumDigits(str)` that loops through each character of `str`,
      checks if it's a digit, and if so, adds it to a total sum.
    - Log the final sum.
    - Example: "abc123" -> 6
*/
function sumDigits(str) {
  let totalSum = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= "0" && str[i] <= "9") {
      totalSum += Number(str[i]);
    }
  }
  return totalSum;
}
let totalDigitSum = sumDigits("ABC012D45EF");
console.log(totalDigitSum);

/*
21. Average of Array Elements
    - Define a function `averageArray(numbers)` that uses a loop
      to calculate the average (sum / length).
    - Log the average.
*/
function averageArray(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  let average = sum / numbers.length;
  return average;
}
let averageResult = averageArray([2, 4, 6, 8]);
console.log(averageResult);

/*
22. Flatten a 2D Array (Nested Loops)
    - Define a function `flattenArray(twoDArray)` that takes an array of arrays
      (e.g., [[1,2],[3,4]]) and uses nested loops to create a new one-dimensional array.
    - Log the flattened array.
*/
function flattenArray(twoDArray) {
  let flat = [];
  for (let i = 0; i < twoDArray.length; i++) {
    for (let j = 0; j < twoDArray[i].length; j++) {
      flat.push(twoDArray[i][j]);
    }
  }
  return flat;
}
let my2DArray = [
  [1, 2],
  [3, 4],
];
let result2D = flattenArray(my2DArray);
console.log("The Flattened Array is: ", result2D);

/*
23. Find Words Containing a Letter
    - Define a function `findWordsWithLetter(words, letter)` that loops through
      an array of words and returns a new array of only the words that contain
      the given letter.
    - Log the filtered array.
*/
function findWordsWithLetter(words, letter) {
  let filteredArray = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].toLowerCase().includes(letter.toLowerCase())) {
      filteredArray.push(words[i]);
    }
  }
  return filteredArray;
}
let wordsWithLetter = ["apple", "banana", "orange"];
let filteredWords = findWordsWithLetter(wordsWithLetter, "e");
console.log(filteredWords);

/*
24. Push and Pop Operations
    - Define a function `pushPopExample(arr, itemToPush)` that:
      - pushes itemToPush to arr
      - logs the updated array
      - then pops the last element
      - logs the popped element
      - logs the final array
*/

function pushPopExample(arr, itemToPush) {
  arr.push(itemToPush);
  console.log("Updated Array: ", arr);
  let poppedItem = arr.pop();

  console.log("Popped Item: ", poppedItem);
  console.log("Final Array: ", arr);
}
pushPopExample([1, 2, 3, 4], 5);

/*
25. Push and Shift Operations
    - Define a function `manageQueue(queue, newPerson)` that:
      - push `newPerson` to the end of `queue`
      - logs the updated queue
      - shifts (removes) the first person in the queue
      - logs the removed person
      - logs the final queue
*/
function manageQueue(queue, newPerson){
  queue.push(newPerson);
  console.log('the updated queue: ', queue);
  let removedItem=queue.shift();
  console.log('The removed person: ', removedItem);
  console.log('The final queue: ', queue);
  return queue;
}
manageQueue(['elit', 'evrim', 'ilayda'], 'ayşe');

/*
26. To-Do List Application 
  - Define a function `updateTodoList(todoList, startIndex, deleteCount, ...newTasks)`:
   - Logs the current list of tasks.
   - Removes `deleteCount` tasks starting at `startIndex`.
   - Inserts any new tasks at the end of the array.
   - Logs the updated list.
*/

const todoList = ["Study JS", "Eat breakfast", "Walk dog"];
function updateTodoList(todoList, startIndex, deleteCount, ...newTasks){
  console.log('current tasks: ', todoList);
  todoList.splice(startIndex, deleteCount);
  todoList.push(...newTasks);
  console.log('updated list: ', todoList);
}

updateTodoList(todoList, 1, 1, 'Watch Movie', 'Sleep');


/*  QUESTION 3 PLUS.
Define a function groupOddEven(numbers) that takes an array of numbers. Instead of just counting them, 
the function should create two separate lists: one for even numbers and one for odd numbers. 
Finally, log both lists to the console.
*/

function oddEvenNumbers(numbers) {
  let oddNumbers = [];
  let evenNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      evenNumbers.push(numbers[i]);
    } else {
      oddNumbers.push(numbers[i]);
    }
  }
  console.log(
    "the odd numbers array:",
    oddNumbers,
    "the even numbers array:",
    evenNumbers,
  );
}
oddEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9]);

//  QUESTION 8 PLUS  .()split method

let sentence = "I like coding";
let words = sentence.split(" "); // ['I', 'like', 'coding']

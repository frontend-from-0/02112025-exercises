/*
1. Sum Array Elements with a For Loop
   - Define a function `sumArray(numbers)` that uses a for loop
     to sum all elements in an array of numbers.
   - Log the final sum.
*/
console.log("Ex. 1 --------");
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
console.log("Ex. 2 --------");

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
console.log("Ex. 3 --------");

function countOddEven(numbers) {
  let oddCount = 0;
  let eventCount = 0;
  for (i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      eventCount++;
    } else {
      oddCount++;
    }
  }
  console.log("Odd:", oddCount, "and Even:", eventCount);
}
countOddEven([1, 2, 3, 4]);

/*
4. Sum of Numbers in a Range (While Loop)
   - Define a function `sumRange(start, end)` that uses a while loop
     to sum all integers from `start` to `end` (inclusive).
   - Log the final sum.
*/
console.log("Ex. 4 --------");

function sumRange(start, end) {
  let sum = 0;
  let current = start;
  if (start <= end) {
    while (current <= end) {
      sum += current;
      current++;
    }
  } else {
    while (current >= end) {
      sum += current;
      current--;
    }
  }

  console.log("Final Sum:", sum);
}
sumRange(5, 3);
sumRange(1, 3);

/*
5. Reverse an Array
   - Define a function `reverseArray(arr)` that reverses the elements
     of an array manually using a for loop (without using .reverse()).
   - Log the reversed array.
*/
console.log("Ex. 5 --------");

function reverseArray(arr) {
  const reversed = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    const currentValue = arr[i];
    reversed.push(currentValue);
  }
  console.log("Final reversed array", reversed);
}

reverseArray([3, 7, 9, 1, 2]);

/*
6. Filter Out Negative Numbers
   - Define a function `filterNegative(numbers)` that loops through
     an array of numbers and creates a new array without any negative values.
   - Log the new array.
*/
console.log("Ex. 6 --------");

function filterNegative(numbers) {
  let result = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] >= 0) {
      result.push(numbers[i]);
    }
  }
  console.log("Initial array", numbers, "Result", result);
}
filterNegative([3, -7, 9, -1, 2]);
/*
7. Double the Values (For-of Loop)
   - Define a function `doubleValues(numbers)` that uses a for-of loop
     to multiply each number by 2, storing results in a new array.
   - Log the new array.
*/
console.log("Ex. 7 --------");
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
console.log("Ex. 8 --------");

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
console.log("Ex. 9 --------");

function sumObjectValues(obj) {
  let sum = 0;
  for (const key in obj) {
    if (typeof obj[key] === "number") {
      sum += obj[key];
    }
  }
  console.log("Sum of object values:", sum);
}

sumObjectValues({ a: 10, b: 20, c: 5 });
sumObjectValues({ x: 100, y: 50, name: "Furkan" });

/*
10. Print Keys of an Object (For-in)
    - Define a function `printObjectKeys(obj)` that uses a for-in loop
      to log each key of the object.
    - Example: { name: "Alice", age: 25 } -> logs "name", then "age"
*/
console.log("Ex. 10 --------");

function printObjectKeys(obj) {
  for (const key in obj) {
    console.log(key);
  }
}
printObjectKeys({ name: "Furkan", age: 28, city: "Konya" });

/*
11. Sum Array Using do-while Loop
    - Define a function `sumWithDoWhile(numbers)` that uses a do-while loop
      to sum all numbers in the array.
    - Log the total.
*/
console.log("Ex. 11 --------");

function sumWithDoWhile(numbers) {
  let sum = 0;
  let i = 0;

  if (numbers.length === 0) {
    // Boş array kontrolü
    console.log("Array is empty, sum: 0");
    return;
  }

  do {
    sum += numbers[i]; // Mevcut elemanı topla
    i++; // Bir sonraki elemana geç
  } while (i < numbers.length); // Dizi bitmediği sürece devam et

  console.log("Sum with do-while:", sum);
}
sumWithDoWhile([3, 6, 9, 4]);
sumWithDoWhile([10, 20, 30]);
sumWithDoWhile([]);
/*
12. Remove Duplicates from an Array
    - Define a function `removeDuplicates(arr)` that loops through the array
      and creates a new array without duplicate elements.
    - Hint: you could check if the item is already in the new array before pushing.
    - Log the new array without duplicates.
*/
console.log("Ex. 12 --------");
function removeDuplicates(arr) {
  const unique = [];
  for (let i = 0; i < arr.length; i++) {
    if (!unique.includes(arr[i])) {
      unique.push(arr[i]);
    }
  }
  console.log("Orginal", arr);
  console.log("Without duplicates", unique);
}

removeDuplicates([1, 2, 2, 3, 1, 4, 3]);
removeDuplicates(["a", "b", "a", "c"]);

/*
13. Calculate Factorial (For Loop)
    - Define a function `factorial(n)` that calculates n! (n factorial)
      using a for loop.
    - Log the result. 
    - Example: factorial(5) -> 120
*/
console.log("Ex. 13 --------");
function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result = result * i;
  }
  console.log(n + "! =", result);
}
factorial(5);
factorial(3);
factorial(0);
factorial(1);
factorial(100);

/*
14. String -> Array -> String
    - Define a function `reverseWords(sentence)` that splits the sentence 
      into an array of words, reverses the array order, then joins it back into
      a string. Use loops or built-in methods as you like.
    - Log the reversed sentence.
*/
console.log("Ex. 14 --------");

function reverseWords(sentence) {
  const words = sentence.split(" ");
  const reversed = words.reverse();
  const result = reversed.join(" ");
  console.log("Original:", sentence);
  console.log("Reversed:", result);
}
reverseWords(" Hello World JS");
reverseWords("I love coding");
reverseWords("one two three four");
/*
15. Filter Words Longer Than X
    - Define a function `filterLongWords(words, minLength)` that uses a for loop
      to collect only the words that have a length >= minLength.
    - Log the resulting array.
*/
console.log("Ex. 15 --------");
function filterLongWords(words, minLength) {
  const result = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].length >= minLength) {
      result.push(words[i]);
    }
  }
  console.log("Filtered words (>=" + minLength + " chars):", result);
}

filterLongWords(["cat", "elephant", "dog", "butterfly", "ox"], 4);
filterLongWords(["hi", "hello", "hey", "howdy"], 4);
/*
16. Log Array Elements with Their Indices
    - Define a function `logElementsWithIndex(arr)` that loops through the array
      and logs "Index: i, Value: arr[i]" for each element.
*/
console.log("Ex. 16 --------");

function logElementsWithIndex(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(`Index: ${i}, Value: ${arr[i]}`);
  }
}
logElementsWithIndex(["apple", "banana", "cherry"]);
/*
17. Find the Smallest Number in an Array
    - Define a function `findMin(numbers)` that loops through the array
      to find and return the smallest number.
    - Log the smallest number.
*/
console.log("Ex. 17 --------");

function findMin(numbers) {
  let min = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) {
      min = numbers[i];
    }
  }
  console.log("Minimum value:", min);
}

findMin([4, 9, 50, 10]);
findMin([4, 9, -50, 10]);
findMin([100, 200, 5, 1, 300]);

/*
18. Count Occurrences of a Word in an Array
    - Define a function `countOccurrences(arr, word)` that loops through `arr`
      to count how many times `word` appears.
    - Log the count.
*/
console.log("Ex. 18 --------");

function countOccurrences(arr, word) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === word) {
      count++;
    }
  }
  console.log(`"${word}" appears ${count} times`);
}
countOccurrences(["apple", "banana", "apple", "cherry", "apple"], "apple");
countOccurrences(["yes", "no", "yes", "maybe"], "yes");
countOccurrences(["a", "b", "c"], "z");

/*
19. Remove Falsy Values
    - Define a function `removeFalsyValues(arr)` that loops through an array
      and returns a new array without falsy values (false, 0, "", null, undefined, NaN).
    - Log the new array.
*/
console.log("Ex. 19 --------");

function removeFalsyValues(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      result.push(arr[i]);
    }
  }
  console.log("Original", arr);
  console.log("Without falsy", result);
}
removeFalsyValues([1, 0, "hello", "", null, true, false, undefined, 42]);

/*
20. Sum of All Digits in a String
    - Define a function `sumDigits(str)` that loops through each character of `str`,
      checks if it's a digit, and if so, adds it to a total sum.
    - Log the final sum.
    - Example: "abc123" -> 6
*/
console.log("Ex. 20 --------");

function sumDigits(str) {
  let sum = 0;
  for (const char of str) {
    const num = Number(char);
    if (!isNaN(num) && char !== " ") {
      sum += num;
    }
  }
  console.log(`Sum of digits in "${str}":`, sum);
}
sumDigits("1", "2", " ", "a");
sumDigits("abc123");
sumDigits("hello world");
sumDigits("a1b2c3d4e5");

/*
21. Average of Array Elements
    - Define a function `averageArray(numbers)` that uses a loop
      to calculate the average (sum / length).
    - Log the average.
*/
console.log("Ex. 21 --------");

function averageArray(numbers) {
  if (numbers.length === 0) {
    console.log("Array is empty");
    return;
  }
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  const average = sum / numbers.length;
  console.log("Average", average);
}

averageArray([10, 20, 30, 40]);
averageArray([1, 2, 3, 4, 5]);
averageArray([10]);
/* 
22. Flatten a 2D Array (Nested Loops)
    - Define a function `flattenArray(twoDArray)` that takes an array of arrays
      (e.g., [[1,2],[3,4]]) and uses nested loops to create a new one-dimensional array.
    - Log the flattened array.
*/
console.log("Ex. 22 --------");
function flattenArray(twoDArray) {
  const flat = [];
  for (let i = 0; i < twoDArray.length; i++) {
    for (let j = 0; j < twoDArray[i].length; j++) {
      flat.push(twoDArray[i][j]);
    }
  }
  console.log("Flattened:", flat);
}
flattenArray([
  [1, 2],
  [3, 4],
  [5, 6],
]);
flattenArray([
  ["a", "b"],
  ["c", "d"],
]);
/*
23. Find Words Containing a Letter
    - Define a function `findWordsWithLetter(words, letter)` that loops through
      an array of words and returns a new array of only the words that contain
      the given letter.
    - Log the filtered array.
*/
console.log("Ex. 23 --------");
function findWordsWithLetter(words, letter) {
  const result = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].includes(letter)) {
      result.push(words[i]);
    }
  }
  console.log(`Words containing "${letter}":`, result);
}

findWordsWithLetter(["apple", "banana", "cherry", "kiwi"], "a");
findWordsWithLetter(["hello", "world", "hi", "everyone"], "o");
findWordsWithLetter(["hello", "world", "hi", "everyone"], "p");

/*
24. Push and Pop Operations
    - Define a function `pushPopExample(arr, itemToPush)` that:
      - pushes itemToPush to arr
      - logs the updated array
      - then pops the last element
      - logs the popped element
      - logs the final array
*/
console.log("Ex. 24 --------");

function pushPopExample(arr, itemToPush) {
  arr.push(itemToPush);
  console.log("After push:", arr);

  const popped = arr.pop();
  console.log("Popped element:", popped);
  console.log("After pop:", arr);
}

pushPopExample([1, 2, 3], 99);
pushPopExample(["a", "b"], "c");
/*
25. Push and Shift Operations
    - Define a function `manageQueue(queue, newPerson)` that:
      - push `newPerson` to the end of `queue`
      - logs the updated queue
      - shifts (removes) the first person in the queue
      - logs the removed person
      - logs the final queue
*/
console.log("Ex. 25 --------");

function manageQueue(queue, newPerson) {
  queue.push(newPerson);
  console.log("Queue after push:", queue);

  const removed = queue.shift();
  console.log("Removed person:", removed);
  console.log("Final queue:", queue);
}

manageQueue(["Ali", "Veli", "Mehmet"], "Ayşe");
/*
26. To-Do List Application 
  - Define a function `updateTodoList(todoList, startIndex, deleteCount, ...newTasks)`:
   - Logs the current list of tasks.
   - Removes `deleteCount` tasks starting at `startIndex`.
   - Inserts any new tasks at the end of the array.
   - Logs the updated list.
*/
console.log("Ex. 26 --------");

const todoList = ["Study JS", "Eat breakfast", "Walk dog"];

function updateTodoList(todoList, startIndex, deleteCount, ...newTasks) {
  console.log("Current list:", todoList);

  const removed = todoList.splice(startIndex, deleteCount, ...newTasks);

  if (removed.length > 0) {
    console.log("Removed tasks:", removed);
  }
  console.log("Updated list:", todoList);
}
updateTodoList(todoList, 1, 1, "Go for a run");

updateTodoList(todoList, 0, 0, "Wake up", "Make coffee");

/*
1. Sum Array Elements with a For Loop
   - Define a function `sumArray(numbers)` that uses a for loop
     to sum all elements in an array of numbers.
   - Log the final sum.
*/

function sumArray(numbers) {
  let result = 0;
  console.log('Finding sum of ', numbers, ' array');

  // if (numbers.length === 0) {
  //   console.log('Array is empty');
  //   return;
  // }

  for (let i = 0; i < numbers.length; i++) {
    console.log('Current position', i, 'current element', numbers[i]);
    result = result + numbers[i];
  }

  console.log('Final sum', result);
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
  console.log('The maximum number of array', numbers, 'is', max);
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
  let oddCount = 0;
  let eventCount = 0;
  for (i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      eventCount++;
    } else {
      oddCount++;
    }
  }
  console.log('Odd:', oddCount, 'and Even:', eventCount);
}
countOddEven([1, 2, 3, 4]);

/*
4. Sum of Numbers in a Range (While Loop)
   - Define a function `sumRange(start, end)` that uses a while loop
     to sum all integers from `start` to `end` (inclusive).
   - Log the final sum.
*/
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

  console.log('Final Sum:', sum);
}
sumRange(5, 3);
sumRange(1, 3);

/*
5. Reverse an Array
   - Define a function `reverseArray(arr)` that reverses the elements
     of an array manually using a for loop (without using .reverse()).
   - Log the reversed array.
*/
function reverseArray(arr) {
  const reversed = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    const currentValue = arr[i];
    reversed.push(currentValue);
  }
  console.log('Final reversed array', reversed);
}

reverseArray([3, 7, 9, 1, 2]);

/*
6. Filter Out Negative Numbers
   - Define a function `filterNegative(numbers)` that loops through
     an array of numbers and creates a new array without any negative values.
   - Log the new array.
*/
function filterNegative(numbers) {
  let result = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] >= 0) {
      result.push(numbers[i]);
    }
  }
  console.log('Initial array', numbers, 'Result', result);
}
filterNegative([3, -7, 9, -1, 2]);
/*
7. Double the Values (For-of Loop)
   - Define a function `doubleValues(numbers)` that uses a for-of loop
     to multiply each number by 2, storing results in a new array.
   - Log the new array.
*/

function doubleValues(numbers) {
  const result = [];
  for (const number of numbers) {
    if (typeof number !== 'number'){
      console.log("Array contains elements other than numbers, please provide correct input.");
      return;
    }
    result.push(number * 2);
  }
  console.log('Result is', result);
}
doubleValues([1, 4, 6]);
doubleValues([1, 'asdas', 6]);


/*
8. Print Each Character of a String (For-of)
   - Define a function `printCharacters(str)` that uses a for-of loop
     to log each character in the string on a separate line.
*/
function printCharacters(str){
  console.log("printing characters of the string", str);
 for ( const char of str){
  console.log(char);
 }
}
printCharacters("Lesson");

['a', 's', 'e'][0]; // 'a'

'ase'[0] // 'a'

/*
9. Sum All Values in an Object
   - Define a function `sumObjectValues(obj)` that iterates over the
     properties of an object (using a for-in loop) and sums all numeric values.
   - Log the sum.
   - Example: {a: 10, b: 20, c: 5} -> 35
*/

function sumObjectValues(obj) {
  let sum = 0;
  for (const key in obj) {
    if (typeof obj[key] === 'number') {
      sum += obj[key];
    }
  }
  console.log('Ex. 9 - Object sum:', sum);
}
sumObjectValues({a: 10, b: 20, c: 5}); // -> 35

/*
10. Print Keys of an Object (For-in)
*/
function printObjectKeys(obj) {
  console.log("Ex. 10 - Keys:");
  for (const key in obj) {
    console.log(key);
  }
}
printObjectKeys({ name: "Alice", age: 25 });

/*
11. Sum Array Using do-while Loop
*/
function sumWithDoWhile(numbers) {
  let sum = 0;
  let i = 0;
  if (numbers.length > 0) {
    do {
      sum += numbers[i];
      i++;
    } while (i < numbers.length);
  }
  console.log('Ex. 11 - Do-while sum:', sum);
}
sumWithDoWhile([5, 10, 15]);

/*
12. Remove Duplicates from an Array
*/
function removeDuplicates(arr) {
  const uniqueArr = [];
  for (const item of arr) {
    if (!uniqueArr.includes(item)) {
      uniqueArr.push(item);
    }
  }
  console.log('Ex. 12 - Unique Array:', uniqueArr);
}
removeDuplicates([1, 2, 2, 3, 4, 4, 5]);

/*
13. Calculate Factorial (For Loop)
*/
function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  console.log(`Ex. 13 - Factorial of ${n}:`, result);
}
factorial(5); // 120

/*
14. String -> Array -> String (Reverse Words)
*/
function reverseWords(sentence) {
  const words = sentence.split(" ");
  const reversed = words.reverse().join(" ");
  console.log('Ex. 14 - Reversed sentence:', reversed);
}
reverseWords("JavaScript is fun"); // "fun is JavaScript"

/*
15. Filter Words Longer Than X
*/
function filterLongWords(words, minLength) {
  const filtered = [];
  for (const word of words) {
    if (word.length >= minLength) {
      filtered.push(word);
    }
  }
  console.log('Ex. 15 - Long words:', filtered);
}
filterLongWords(['apple', 'dog', 'banana', 'cat'], 5);

/*
16. Log Array Elements with Their Indices
*/
function logElementsWithIndex(arr) {
  console.log("Ex. 16 - Indexed Elements:");
  for (let i = 0; i < arr.length; i++) {
    console.log(`Index: ${i}, Value: ${arr[i]}`);
  }
}
logElementsWithIndex(['A', 'B', 'C']);

/*
17. Find the Smallest Number in an Array
*/
function findMin(numbers) {
  let min = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) {
      min = numbers[i];
    }
  }
  console.log('Ex. 17 - Smallest number:', min);
}
findMin([10, 2, 50, 1, 8]);

/*
18. Count Occurrences of a Word in an Array
*/
function countOccurrences(arr, word) {
  let count = 0;
  for (const item of arr) {
    if (item === word) {
      count++;
    }
  }
  console.log(`Ex. 18 - '${word}' appeared:`, count, 'times');
}
countOccurrences(['apple', 'orange', 'apple', 'banana'], 'apple');

/*
19. Remove Falsy Values
*/
function removeFalsyValues(arr) {
  const cleanArr = [];
  for (const val of arr) {
    if (val) { // JavaScript'te if(val) falsy değerleri eler
      cleanArr.push(val);
    }
  }
  console.log('Ex. 19 - Clean array:', cleanArr);
}
removeFalsyValues([0, 1, false, 2, "", 3, null, undefined, NaN]);

/*
20. Sum of All Digits in a String
*/
function sumDigits(str) {
  let totalSum = 0;
  for (const char of str) {
    if (!isNaN(char) && char !== " ") {
      totalSum += Number(char);
    }
  }
  console.log('Ex. 20 - Digit sum:', totalSum);
}
sumDigits("abc123"); // 6

/*
21. Average of Array Elements
*/
function averageArray(numbers) {
  let sum = 0;
  for (const num of numbers) {
    sum += num;
  }
  const average = sum / numbers.length;
  console.log('Ex. 21 - Average:', average);
}
averageArray([10, 20, 30, 40]);

/*
22. Flatten a 2D Array (Nested Loops)
*/
function flattenArray(twoDArray) {
  const flat = [];
  for (const subArray of twoDArray) {
    for (const item of subArray) {
      flat.push(item);
    }
  }
  console.log('Ex. 22 - Flattened:', flat);
}
flattenArray([[1, 2], [3, 4], [5, 6]]);

/*
23. Find Words Containing a Letter
*/
function findWordsWithLetter(words, letter) {
  const result = [];
  for (const word of words) {
    if (word.toLowerCase().includes(letter.toLowerCase())) {
      result.push(word);
    }
  }
  console.log(`Ex. 23 - Words with '${letter}':`, result);
}
findWordsWithLetter(['Apple', 'Banana', 'Cherry'], 'a');

/*
24. Push and Pop Operations
*/
function pushPopExample(arr, itemToPush) {
  arr.push(itemToPush);
  console.log('Ex. 24 - After Push:', arr);
  const popped = arr.pop();
  console.log('Popped item:', popped);
  console.log('Final array:', arr);
}
pushPopExample([1, 2, 3], 4);

/*
25. Push and Shift Operations
*/
function manageQueue(queue, newPerson) {
  queue.push(newPerson);
  console.log('Ex. 25 - Queue updated:', queue);
  const removed = queue.shift();
  console.log('Removed person:', removed);
  console.log('Final queue:', queue);
}
manageQueue(['Alice', 'Bob'], 'Charlie');

/*
26. To-Do List Application (Splice kullanımı)
*/
function updateTodoList(list, startIndex, deleteCount, ...newTasks) {
  console.log('Ex. 26 - Current tasks:', list);
  
  // startIndex'ten başlayarak deleteCount kadar siler
  list.splice(startIndex, deleteCount);
  
  // Yeni görevleri dizinin sonuna ekler
  list.push(...newTasks);
  
  console.log('Updated tasks:', list);
}

const myTasks = ['Study JS', 'Eat breakfast', 'Walk dog'];
updateTodoList(myTasks, 1, 1, 'Exercise', 'Read book');
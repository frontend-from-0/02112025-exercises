/*
1. Sum Array Elements with a For Loop
   - Define a function `sumArray(numbers)` that uses a for loop
     to sum all elements in an array of numbers.
   - Log the final sum.
*/
console.log("Ex. 1. result is:")
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
console.log("Ex. 2. result is:")
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
console.log("Ex. 3. result is:")
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
console.log("Ex. 4. result is:")
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
console.log("Ex. 5. result is:")
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
console.log("Ex. 6. result is:")
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
console.log("Ex. 7. result is:")
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
console.log("Ex. 8. result is:")
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
console.log("Ex. 9. result is:")

function sumObjectValues(obj){
  console.log("sums all numeric values in object..", obj)
  let sum = 0;
  for( const key in obj){
    if(typeof obj[key] === "number"){
      sum = sum + obj[key];
    }
  }
  console.log("sum:", sum);
}
sumObjectValues({a:10, b:20, c:5, d:"Pınar"});

/*
10. Print Keys of an Object (For-in)
    - Define a function `printObjectKeys(obj)` that uses a for-in loop
      to log each key of the object.
    - Example: { name: "Alice", age: 25 } -> logs "name", then "age"
*/
console.log("Ex. 10. result is:")

function printObjectKeys(obj){
  console.log("Printing all keys in object..")
 for(const key in obj){

  console.log(`${key}`)
 }
console.log("keys are listed above.")
}
printObjectKeys({name: "Pınar", surname: "Ertanç", age:36})

/*
11. Sum Array Using do-while Loop
    - Define a function `sumWithDoWhile(numbers)` that uses a do-while loop
      to sum all numbers in the array.
    - Log the total.
*/
console.log("Ex. 11. result is:")
function sumWithDoWhile(numbers){
  console.log("cheking numbers in array..", numbers)
  let sum = 0;
  let i = 0;
  do {if(typeof numbers[i] === "number")
    {sum +=numbers[i]}
  
  i++;}
  while (i < numbers.length );
   console.log("total of numbers in the array:",sum);  
  

}
sumWithDoWhile([3,7,10,"a","z"]);

/*
12. Remove Duplicates from an Array
    - Define a function `removeDuplicates(arr)` that loops through the array
      and creates a new array without duplicate elements.
    - Hint: you could check if the item is already in the new array before pushing.
    - Log the new array without duplicates.
*/

console.log("Ex. 12. result is:")

function removeDuplicates(arr){
console.log("Cheking dublicate element in array..", arr)
  const newArray = [ ];
  for (const element of arr){
    if(!newArray.includes(element)){
      newArray.push(element);
    }
  }
console.log("Without dublicates new array is:", newArray);
}

removeDuplicates([3, "a", "a", 7, 7, 0, "c", "c"]);

/*
13. Calculate Factorial (For Loop)
    - Define a function `factorial(n)` that calculates n! (n factorial)
      using a for loop.
    - Log the result. 
    - Example: factorial(5) -> 120
*/
console.log("Ex. 13. result is:")

function factorial(n){
  console.log("Calculating..")
  let result = 1;
for (let i=1; i<= n; i++){
 result *= i;

}
console.log("Factorial result of 5 is:", result);
}

factorial(5);


/*
14. String -> Array -> String
    - Define a function `reverseWords(sentence)` that splits the sentence 
      into an array of words, reverses the array order, then joins it back into
      a string. Use loops or built-in methods as you like.
    - Log the reversed sentence.
*/

console.log("Ex. 14. result is:")

function reverseWords(sentence) {
  const reversedSentence = sentence.split(" ").reverse().join(" ");
  console.log("Reversed sentence is:", reversedSentence);
}

reverseWords("Bugün hava rüzgarlı ve soğuk");
/*
15. Filter Words Longer Than X
    - Define a function `filterLongWords(words, minLength)` that uses a for loop
      to collect only the words that have a length >= minLength.
    - Log the resulting array.
*/
console.log("Ex. 15. result is:")

function filterLongWords(words, minLength){
  console.log("Filtering the words by length..")
const resultArray = [ ];
for (let i = 0; i < words.length; i++){
  const currentWord = words[i];
  if(currentWord.length >= minLength){
resultArray.push(currentWord);
  }
}
console.log("Filtered array is:", resultArray);
}
filterLongWords(["pancake", "cherry", "eggs", "honey", "blueberry"], 6)
/*
16. Log Array Elements with Their Indices
    - Define a function `logElementsWithIndex(arr)` that loops through the array
      and logs "Index: i, Value: arr[i]" for each element.
*/

console.log("Ex. 16. result is:")
function logElementsWithIndex(arr){
for (let i = 0; i < arr.length; i++)
{console.log("Index: ",i+ " Value: ",arr[i]);
 }

}
console.log("The Correct location and value informations;")
logElementsWithIndex(["Elma", "Armut", "Portakal"]);
logElementsWithIndex([100,200,300]);


/*
17. Find the Smallest Number in an Array
    - Define a function `findMin(numbers)` that loops through the array
      to find and return the smallest number.
    - Log the smallest number.
*/
console.log("Ex. 17. result is:")

function findMin(numbers){
  console.log("Searching min number in", numbers);
  let min = numbers[0];
  for(let i = 1; i < numbers.length; i++){
    if(min > numbers[i]){ min = numbers[i]
    }
  }
  console.log("Min number of the array is:", min);
  return min;
}
findMin([50,55,45,26,18,100]);
/*
18. Count Occurrences of a Word in an Array
    - Define a function `countOccurrences(arr, word)` that loops through `arr`
      to count how many times `word` appears.
    - Log the count.
*/
console.log("Ex. 18. result is:")

function countOccurrences(arr, word){
  console.log("Counting " + word + " in the array..")
let count = 0;
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === word){
      count++; 
    }
  }
  console.log("There is " + count + " times " + word + " in array.");
}
countOccurrences(["mavi", 3, "yeşil", "mavi"], "mavi");

/*
19. Remove Falsy Values
    - Define a function `removeFalsyValues(arr)` that loops through an array
      and returns a new array without falsy values (false, 0, "", null, undefined, NaN).
    - Log the new array.
*/
console.log("Ex. 19. result is:")
function removeFalsyValues(arr){
  console.log("Searching falsy values in ",arr)
  const newArray = [ ];
for (let i = 0; i < arr.length; i++){
if(arr[i]){
  newArray.push(arr[i])
}
}
console.log("Filtered array is: ", newArray);
}

removeFalsyValues(["menekşe",2, "","renk", , "sarı"] );
/*
20. Sum of All Digits in a String
    - Define a function `sumDigits(str)` that loops through each character of `str`,
      checks if it's a digit, and if so, adds it to a total sum.
    - Log the final sum.
    - Example: "abc123" -> 6
*/
console.log("Ex. 20. result is:")
function sumDigits(str){
  console.log("Checking all characters in >>", str + "...")
  let sum = 0;
for(const char of str){
  if(!isNaN(char)){
    sum += Number(char);

  }
}
console.log("The total of digit characters: ",sum)
}

sumDigits("Atatürk1881");
/*
21. Average of Array Elements
    - Define a function `averageArray(numbers)` that uses a loop
      to calculate the average (sum / length).
    - Log the average.
*/
console.log("Ex. 21. result is:")
function averageArray(numbers){
let sum = 0;
for(let i = 0; i < numbers.length; i++){
  sum = sum + numbers[i];
} 
console.log(sum/numbers.length)

}
averageArray([1,2,3,4,5]);

/*
22. Flatten a 2D Array (Nested Loops)
    - Define a function `flattenArray(twoDArray)` that takes an array of arrays
      (e.g., [[1,2],[3,4]]) and uses nested loops to create a new one-dimensional array.
    - Log the flattened array.
*/
console.log("Ex. 22. result is:")

function flattenArray(twoDArray){
const newArray = [ ];
for (const arr of twoDArray){
  for(const element of arr){
    newArray.push(element);
  }
}
console.log("Flatted array is: ", newArray);
}

flattenArray([["Can", "Pınar"],["Sema", "İnci"]]);
/*
23. Find Words Containing a Letter
    - Define a function `findWordsWithLetter(words, letter)` that loops through
      an array of words and returns a new array of only the words that contain
      the given letter.
    - Log the filtered array.
*/
console.log("Ex. 23. result is:")
function findWordsWithLetter(words, letter){
  console.log('Searching from '  + words + 'which is contain letter ' + letter )
  const newArray = [ ];
for(const word of words){
  if(word.includes(letter)){
    newArray.push(word);
  }
}
console.log("These words contain with " +letter, newArray);
}

findWordsWithLetter(["Cenk","Can","Ahmet","Beyza","Cüneyt"], "a");


/*
24. Push and Pop Operations
    - Define a function `pushPopExample(arr, itemToPush)` that:
      - pushes itemToPush to arr
      - logs the updated array
      - then pops the last element
      - logs the popped element
      - logs the final array
*/
console.log("Ex. 24. result is:")

function pushPopExample(arr, itemToPush){
  console.log("Array is: " , arr);
  console.log("Added one more element..");
arr.push(itemToPush);
 console.log("Updated array is: ", arr);
 const poppedElement = arr.pop();
 console.log("Popped element is: ", poppedElement);
 console.log("Final array is: ", arr);
}
pushPopExample([1,5,7], "elma");
/*
25. Push and Shift Operations
    - Define a function `manageQueue(queue, newPerson)` that:
      - push `newPerson` to the end of `queue`
      - logs the updated queue
      - shifts (removes) the first person in the queue
      - logs the removed person
      - logs the final queue
*/

console.log("Ex. 25. result is:")

function manageQueue(queue, newPerson){
queue.push(newPerson);
console.log(queue);
const removedPerson = queue.shift();
console.log(removedPerson);
console.log(queue);

}

manageQueue(["Ahmet", "Mehmet", "Ayşe"], "Ece");

/*
26. To-Do List Application 
  - Define a function `updateTodoList(todoList, startIndex, deleteCount, ...newTasks)`:
   - Logs the current list of tasks.
   - Removes `deleteCount` tasks starting at `startIndex`.
   - Inserts any new tasks at the end of the array.
   - Logs the updated list.
*/
console.log("Ex. 26. result is:")
function updateTodoList(todoList, startIndex, deleteCount, ...newTasks){ 
  console.log(todoList);
  todoList.splice(startIndex, deleteCount)
  todoList.push(...newTasks);
  console.log(todoList);

}


const todoList = ['Study JS', 'Eat breakfast', 'Walk dog'];
updateTodoList(todoList, 1, 2, 'Drink coffee', 'Call mom', 'Have fun');
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
  const result = [];
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
  let toplam = 0;
  for (const anahtar in obj) {
    if (typeof obj[anahtar] === "number") {
       toplam = toplam + obj[anahtar];
    }
  }
  console.log(`Toplam =  ${toplam}`);
}
const testObjesi = {a: 10, d: "armut", b: 20, c: 5}
sumObjectValues(testObjesi);

/*
10. Print Keys of an Object (For-in)
    - Define a function `printObjectKeys(obj)` that uses a for-in loop
      to log each key of the object.
    - Example: { name: "Alice", age: 25 } -> logs "name", then "age"
*/

function printObjectKeys(obj) {
  for (const key in obj) {
    console.log(key);
  }
}

const testObjesi2 = { name: "Alice", age: 25 };
printObjectKeys(testObjesi2);




/*
11. Sum Array Using do-while Loop
    - Define a function `sumWithDoWhile(numbers)` that uses a do-while loop
      to sum all numbers in the array.
    - Log the total.
*/



function sumWithDoWhile(numbers) {
  let total =0;
  let i = 0;

  if (numbers.length === 0) {
    console.log(`Toplam = 0`);
    return;
  }

  do{
    total += numbers[i];

    i++;
  } while (i < numbers.length);


  console.log(`Toplam = ${total}`);
}

const ornekDizi = [10, 20, 30, 40];
sumWithDoWhile([5, 15]);



/*
12. Remove Duplicates from an Array
    - Define a function `removeDuplicates(arr)` that loops through the array
      and creates a new array without duplicate elements.
    - Hint: you could check if the item is already in the new array before pushing.
    - Log the new array without duplicates.
*/


function removeDuplicates(arr) {

  const benzersizSepet = [];

  for (const eleman of arr) {

    if (benzersizSepet.includes(eleman)){
      benzersizSepet.push(eleman);
    }
  }

  console.log(benzersizSepet);

}

const sayilar = [1,2,2,3,4,4,5,1];
removeDuplicates(sayilar);

const meyveler = ["elma","armut","elma","muz","armut"];
removeDuplicates(meyveler);



/*
13. Calculate Factorial (For Loop)
    - Define a function `factorial(n)` that calculates n! (n factorial)
      using a for loop.
    - Log the result. 
    - Example: factorial(5) -> 120
*/


function factorial(n) {
  let carpimSonucu = 1;


  for (let i = 1; i <= n; i++) {
    carpimSonucu *=i;
  }
  console.log(carpimSonucu);
}

factorial(5);

factorial(9);

factorial(11);




/*
14. String -> Array -> String
    - Define a function `reverseWords(sentence)` that splits the sentence 
      into an array of words, reverses the array order, then joins it back into
      a string. Use loops or built-in methods as you like.
    - Log the reversed sentence.
*/


function reverseWords(sentence) {
  const yeniCumle = sentence.split(" ").reverse().join(" ");

  console.log(yeniCumle);
}

reverseWords("Merhaba dünya nasılsın");

reverseWords("Javascript öğrenmek çok eğlenceli");




/*
15. Filter Words Longer Than X
    - Define a function `filterLongWords(words, minLength)` that uses a for loop
      to collect only the words that have a length >= minLength.
    - Log the resulting array.
*/


function filterLongWords(words, minLength) {

  const uzunKelimeler = [];

  for (let i = 0; i < words.length; i++) {


    if (words[i].length >= minLength) {

      uzunKelimeler.push(words[i]);
    }
  }
  console.log(uzunKelimeler);
}

const fruits = ["elma","çilek","muz","karpuz","nar","mandalina"];

filterLongWords(fruits, 5);

filterLongWords(fruits, 7);





/*
16. Log Array Elements with Their Indices
    - Define a function `logElementsWithIndex(arr)` that loops through the array
      and logs "Index: i, Value: arr[i]" for each element.
*/


function logElementsWithIndex(arr) {

  for (let i =0; i < arr.length; i++) {

    console.log(`Index: ${i}, Value: ${arr[i]}`);
  } 
}

const colors = ["Red", "Blue", "Green", "Yellow"];
logElementsWithIndex(colors);




/*
17. Find the Smallest Number in an Array
    - Define a function `findMin(numbers)` that loops through the array
      to find and return the smallest number.
    - Log the smallest number.
*/


function findMin(numbers) {

  if (numbers.length === 0) {
    return "Dizi boş!!!!";
  }

  let enKucuk = numbers[0];

  for (let i= 1; i < numbers.length; i++) {

    if (numbers[i] < enKucuk) {

      enKucuk = numbers[i];
    }
  }
  return enKucuk;


}
const testDizisi = [45, 12, 8, 99, 3, 24];

const sonuc = findMin(testDizisi);
console.log(`Dizideki en küçük sayı: ${sonuc}`);

console.log(`En küçük: ${findMin([10, -5, 2, -15, 8])}`);


/*
18. Count Occurrences of a Word in an Array
    - Define a function `countOccurrences(arr, word)` that loops through `arr`
      to count how many times `word` appears.
    - Log the count.
*/


function countOccurrences(arr, word) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    
    if (arr[i] === word) {
      
      count++; 
    }
  }

  console.log(`"${word}" kelimesi listede ${count} defa geçiyor.`);
}

const siparisListesi = ["kahve", "çay", "su", "kahve", "soda", "kahve", "çay"];

countOccurrences(siparisListesi, "kahve"); 

countOccurrences(siparisListesi, "su"); 

countOccurrences(siparisListesi, "ayran"); 






/*
19. Remove Falsy Values
    - Define a function `removeFalsyValues(arr)` that loops through an array
      and returns a new array without falsy values (false, 0, "", null, undefined, NaN).
    - Log the new array.
*/

function removeFalsyValues(arr) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      result.push(arr[i]);
    }
  }

  return result;
}

const mixedArray = [10, false, "Merhaba", 0, "", null, "Dünya", undefined, NaN, 42];
const cleanArray = removeFalsyValues(mixedArray);
console.log(cleanArray); 




/*
20. Sum of All Digits in a String
    - Define a function `sumDigits(str)` that loops through each character of `str`,
      checks if it's a digit, and if so, adds it to a total sum.
    - Log the final sum.
    - Example: "abc123" -> 6
*/


function sumDigits(str) {
  let sum = 0; 

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (char >= '0' && char <= '9') {
      sum += parseInt(char); 
    }
  }

  console.log(sum); 
  return sum; 
}

sumDigits("abc123");



/*
21. Average of Array Elements
    - Define a function `averageArray(numbers)` that uses a loop
      to calculate the average (sum / length).
    - Log the average.
*/


function averageArray(numbers) {
  if (numbers.length === 0) {
    console.log(0);
    return 0;
  }

  let sum = 0; 

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i]; 
  }

  let average = sum / numbers.length;

  console.log(average);
  return average;
}

averageArray([10, 20, 30, 40]); 



/*
22. Flatten a 2D Array (Nested Loops)
    - Define a function `flattenArray(twoDArray)` that takes an array of arrays
      (e.g., [[1,2],[3,4]]) and uses nested loops to create a new one-dimensional array.
    - Log the flattened array.
*/


function flattenArray(twoDArray) {
  const flatArray = [];

  for (let i = 0; i < twoDArray.length; i++) {
    const subArray = twoDArray[i]; 

    for (let j = 0; j < subArray.length; j++) {
      
      flatArray.push(subArray[j]); 
    }
  }

  console.log(flatArray);
  return flatArray;
}

flattenArray([[1, 2], [3, 4]]); 




/*
23. Find Words Containing a Letter
    - Define a function `findWordsWithLetter(words, letter)` that loops through
      an array of words and returns a new array of only the words that contain
      the given letter.
    - Log the filtered array.
*/


function findWordsWithLetter(words, letter) {
  const filteredWords = [];

  for (let i = 0; i < words.length; i++) {
    const currentWord = words[i];

    if (currentWord.includes(letter)) {
      
      filteredWords.push(currentWord);
    }
  }

  console.log(filteredWords);
  return filteredWords;
}

findWordsWithLetter(["elma", "armut", "kiraz", "kivi", "muz"], "m"); 




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

  console.log("Eklendikten sonra dizi:", arr);

  const poppedElement = arr.pop();

  console.log("Çıkarılan eleman:", poppedElement);

  console.log("Dizinin son hali:", arr);
}

let meyvelers = ["elma", "armut"];
pushPopExample(meyvelers, "muz");

pushPopExample(["elma", "armut"], "muz");



/*
25. Push and Shift Operations
    - Define a function `manageQueue(queue, newPerson)` that:
      - push `newPerson` to the end of `queue`
      - logs the updated queue
      - shifts (removes) the first person in the queue
      - logs the removed person
      - logs the final queue
*/


function manageQueue(queue, newPerson) {
  queue.push(newPerson);

  console.log("Yeni kişi eklendikten sonra kuyruk:", queue);

  const removedPerson = queue.shift();

  console.log("Kuyruktan ayrılan kişi:", removedPerson);

  console.log("Kuyruğun son hali:", queue);
}

let bankaSırasi = ["Ali", "Ayşe", "Mehmet"];
manageQueue(bankaSırasi, "Fatma");




/*
26. To-Do List Application 
  - Define a function `updateTodoList(todoList, startIndex, deleteCount, ...newTasks)`:
   - Logs the current list of tasks.
   - Removes `deleteCount` tasks starting at `startIndex`.
   - Inserts any new tasks at the end of the array.
   - Logs the updated list.
*/

const todoList = ['Study JS', 'Eat breakfast', 'Walk dog'];

function updateTodoList(arr, startIndex, deleteCount, ...newTasks) {
  console.log("Mevcut listemiz:", arr);

  arr.splice(startIndex, deleteCount);

  if (newTasks.length > 0) {
    arr.push(...newTasks);
  }

  console.log("Güncellenmiş listemiz:", arr);
}


updateTodoList(todoList, 1, 1, 'Read a book', 'Go to gym'); 

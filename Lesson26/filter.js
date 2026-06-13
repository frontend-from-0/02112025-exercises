// Exercise 5:
// Given an array of sentences, keep the sentences that have more than 10 words.
const sentencesExercise5 = [
  'The quick brown fox jumps over the lazy dog.',
  'I love to code and solve problems.',
  'The sun sets in the west.',
  'Life is like a box of chocolates.',
  'The cat meowed loudly.',
  'She walked along the beach, enjoying the salty breeze.',
  'The rain poured down, soaking everything in sight.',
  'He smiled and waved goodbye.',
  'The mountain peaks were covered in snow.',
  'The room was filled with laughter and joy.',
  'I have been dreaming of traveling the world and exploring new cultures and cuisines.',
  'The city lights shimmered in the night sky, creating a mesmerizing spectacle.',
  'She diligently practiced the piano for hours, striving for perfection in every note.',
  'The ancient ruins stood as a testament to a long-lost civilization, captivating the imaginations of visitors.',
  'As the waves crashed against the shore, a sense of tranquility washed over me.',
  'In the depths of the forest, hidden treasures await those who dare to seek them.',
  'The starry night sky stretched endlessly, a canvas of beauty and mystery.',
  'With each step, the hiker felt closer to the summit, fueled by determination and a sense of adventure.',
  'The aroma of freshly brewed coffee permeated the air, enticing passersby to indulge in a cup of warmth.',
  'The butterfly gracefully fluttered its wings, showcasing vibrant colors in a delicate dance.',
];

const sentences = sentencesExercise5.filter((word) => {
  return word.split(' ').length > 10;
});

console.log('Ex.5', sentences);

// Exercise 6:
// Given an array of products, keep the products that are out of stock (where the quantity is 0).
const productsExercise6 = [
  {
    name: 'Laptop',
    brand: 'Apple',
    price: 1999,
    quantity: 0,
  },
  {
    name: 'Smartphone',
    brand: 'Samsung',
    price: 899,
    quantity: 20,
  },
  {
    name: 'TV',
    brand: 'LG',
    price: 1499,
    quantity: 15,
  },
  {
    name: 'Headphones',
    brand: 'Sony',
    price: 299,
    quantity: 30,
  },
  {
    name: 'Smartwatch',
    brand: 'Apple',
    price: 399,
    quantity: 25,
  },
  {
    name: 'Camera',
    brand: 'Canon',
    price: 999,
    quantity: 0,
  },
  {
    name: 'Gaming Console',
    brand: 'Microsoft',
    price: 499,
    quantity: 8,
  },
  {
    name: 'Tablet',
    brand: 'Samsung',
    price: 649,
    quantity: 18,
  },
  {
    name: 'Smart Speaker',
    brand: 'Amazon',
    price: 99,
    quantity: 0,
  },
  {
    name: 'Fitness Tracker',
    brand: 'Fitbit',
    price: 129,
    quantity: 14,
  },
];

const productFilter = productsExercise6.filter(
  (product) => product.quantity > 0,
);
console.log('Ex.6', productFilter);

// Exercise 7:
// Given an array of numbers, keep the numbers that are divisible by 3.
const numbersExercise7 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const tripleNumber = numbersExercise7.filter((triple) => triple % 3 === 0);

console.log('Ex.7', tripleNumber);

// Exercise 8:
// Given an array of strings, keep the strings that have more than 5 characters.
const wordsExercise8 = [
  'apple',
  'banana',
  'car',
  'dog',
  'elephant',
  'flower',
  'guitar',
  'house',
  'island',
  'jungle',
];

const longWords = wordsExercise8.filter((word) => word.length > 5);

console.log('Ex.8', longWords);

// Exercise 9:
// Given an array of objects representing students, keep the students who have a grade lower than C.
const studentsExercise9 = [
  {
    id: 1,
    name: 'Alice',
    age: 18,
    grade: 'A',
  },
  {
    id: 2,
    name: 'Bob',
    age: 19,
    grade: 'B',
  },
  {
    id: 3,
    name: 'Charlie',
    age: 20,
    grade: 'B+',
  },
  {
    id: 4,
    name: 'David',
    age: 19,
    grade: 'A-',
  },
  {
    id: 5,
    name: 'Emma',
    age: 18,
    grade: 'A+',
  },
  {
    id: 6,
    name: 'Frank',
    age: 20,
    grade: 'B',
  },
  {
    id: 7,
    name: 'Grace',
    age: 19,
    grade: 'D+',
  },
  {
    id: 8,
    name: 'Hannah',
    age: 20,
    grade: 'A-',
  },
  {
    id: 9,
    name: 'Isaac',
    age: 18,
    grade: 'D',
  },
  {
    id: 10,
    name: 'Julia',
    age: 19,
    grade: 'B-',
  },
];

const lowGradeStudents = studentsExercise9.filter((student) =>
  ['D', 'D+'].includes(student.grade),
);
console.log('Ex.9', lowGradeStudents);

// Exercise 10:
// Given an array of user objects, keep the users who have a name starting with the letter "J".
const usersExercise10 = [
  {
    id: 1,
    name: 'John',
    age: 25,
    email: 'john@example.com',
  },
  {
    id: 2,
    name: 'Alice',
    age: 32,
    email: 'alice@example.com',
  },
  {
    id: 3,
    name: 'Bob',
    age: 28,
    email: 'bob@example.com',
  },
  {
    id: 4,
    name: 'Emily',
    age: 21,
    email: 'emily@example.com',
  },
  {
    id: 5,
    name: 'Michael',
    age: 35,
    email: 'michael@example.com',
  },
  {
    id: 6,
    name: 'Sara',
    age: 29,
    email: 'sara@example.com',
  },
  {
    id: 7,
    name: 'David',
    age: 42,
    email: 'david@example.com',
  },
  {
    id: 8,
    name: 'Olivia',
    age: 31,
    email: 'olivia@example.com',
  },
  {
    id: 9,
    name: 'Daniel',
    age: 27,
    email: 'daniel@example.com',
  },
  {
    id: 10,
    name: 'Sophia',
    age: 23,
    email: 'sophia@example.com',
  },
];

const nameFilter = usersExercise10.filter((user) => user.name.startsWith('J'));

console.log('Ex.10', nameFilter);

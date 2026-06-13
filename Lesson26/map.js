// Exercise 6:
// Given an array of numbers, convert each number to a string representation using .map().
const numbersExercise6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const convertToString = numbersExercise6.map((number) => number.toString());

console.log('Ex.6', convertToString);

// Exercise 7:
// Given an array of sentences, split each sentence into an array of words using .map().
const sentencesExercise7 = [
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
];

const splitSentences = sentencesExercise7.map((word) => word.split());

console.log('Ex.7', splitSentences);

// Exercise 8:
// Given an array of user objects, extract an array of their email addresses using .map().
const usersExercise8 = [
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

const userEmail = usersExercise8.map((user) => user.email);

console.log('Ex.8', userEmail);

// Exercise 9:
// Given an array of objects representing books, extract an array of book titles and authors using .map().
const booksExercise9 = [
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    genre: 'Fiction',
    price: 12.99,
  },
  {
    title: '1984',
    author: 'George Orwell',
    genre: 'Fiction',
    price: 10.99,
  },
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    genre: 'Fiction',
    price: 9.99,
  },
  {
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    genre: 'Fiction',
    price: 7.99,
  },
  {
    title: 'To the Lighthouse',
    author: 'Virginia Woolf',
    genre: 'Fiction',
    price: 14.99,
  },
  {
    title: 'Brave New World',
    author: 'Aldous Huxley',
    genre: 'Fiction',
    price: 11.99,
  },
  {
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    genre: 'Fiction',
    price: 8.99,
  },
  {
    title: 'Moby-Dick',
    author: 'Herman Melville',
    genre: 'Fiction',
    price: 13.99,
  },
  {
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    genre: 'Fantasy',
    price: 10.99,
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    author: 'J.K. Rowling',
    genre: 'Fantasy',
    price: 9.99,
  },
];

const bookInfo = booksExercise9.map((book) => `${book.title} - ${book.author}`);

console.log('Ex.9', bookInfo);
// Exercise 10:
// Given an array of prices, add a currency symbol to each price using .map().
const pricesExercise10 = [1999, 899, 1499, 299, 399, 999, 499, 649, 99, 129];

const addSymbol = pricesExercise10.map((symbol) => `$${symbol}`);

console.log('Ex.10', addSymbol);

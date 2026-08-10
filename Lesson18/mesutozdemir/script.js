/*
===========================================================
  LIBRARY MANAGEMENT SYSTEM
===========================================================
In this assignment, you'll build a simple Library Management
System to practice Object-Oriented Programming in JavaScript.

You'll practice:
1. Classes and objects
2. Encapsulation with private fields
3. Methods and basic validation
4. Arrays and basic array methods (push, find, filter)
5. Conditional logic and simple calculations

You can run this file with Node.js or in the browser console.
Follow the steps in order and test each part as you go.
*/

/*
-----------------------------------------------------------
  STEP 1: Create the Book Class
-----------------------------------------------------------
1. Define a `Book` class.
2. The constructor should accept:
   - `title` (string, at least 3 characters)
   - `author` (string, at least 3 characters)
   - `isbn` (string, should be unique in the library)
3. Add a property `isBorrowed` that is `false` by default.
4. Add basic validation in the constructor:
   - If `title` or `author` is not valid, throw an Error.
5. Add a method `toggleBorrowedStatus()` that flips
   `isBorrowed` between `true` and `false`.
*/
/*
-----------------------------------------------------------
  STEP 2: Create the Member Class
-----------------------------------------------------------
1. Define a `Member` class.
2. The constructor should accept:
   - `name` (string, at least 3 characters)
   - `memberId` (string or number, should be unique)
3. Add a `borrowedBooks` property that starts as an empty
   array. It will store the ISBNs of borrowed books.
4. Add validation in the constructor and throw an Error
   if `name` is not valid.
5. Add methods:
   - `borrowBook(isbn)`:
       - Add the `isbn` to `borrowedBooks` if it is not
         already there.
   - `returnBook(isbn)`:
       - Remove the `isbn` from `borrowedBooks` if it exists.
*/


/*
-----------------------------------------------------------
  STEP 3: Create the Library Class
-----------------------------------------------------------
1. Define a `Library` class.
2. Use private fields to store internal data:
   - `#books` (array of Book instances)
   - `#members` (array of Member instances)
   - `#lateFeesPerDay` (number, e.g. 0.5)
   - `#borrowRecords` (object) to remember when a
     member borrowed a specific book.
     Example key: `${memberId}-${isbn}`.
3. In the constructor:
   - Initialize `#books` and `#members` as empty arrays.
   - Initialize `#borrowRecords` as an empty object.
   - Set `#lateFeesPerDay` to a number (e.g. 0.5).
*/
/*
-----------------------------------------------------------
  STEP 4: Add Library Methods (Managing Books & Members)
-----------------------------------------------------------
Inside the `Library` class, add the following methods:

1. `addBook(book)`:
   - Accepts a `Book` instance.
   - Check if a book with the same `isbn` already exists in
     `#books`. If it does, log a message and DO NOT add it.
   - Otherwise, push the book into `#books`.

2. `removeBook(isbn)`:
   - Find the book by `isbn`.
   - Only remove it if `isBorrowed` is `false`.
   - If you remove it, log a success message.
   - If the book does not exist, or is borrowed, log a
     different message.

3. `registerMember(member)`:
   - Accepts a `Member` instance.
   - Ensure there is no existing member with the same
     `memberId` in `#members`.
   - If unique, add the member and log a success message.
*/


/*
-----------------------------------------------------------
  STEP 5: Borrowing and Returning Books
-----------------------------------------------------------
Add the following methods to the `Library` class:

1. `borrowBook(memberId, isbn, borrowDate)`:
   - Find the member by `memberId`.
   - Find the book by `isbn`.
   - If either is not found, log an error message.
   - If the book is already borrowed, log that it is not
     available.
   - Otherwise:
       - Mark the book as borrowed (use Book method).
       - Call `borrowBook(isbn)` on the Member instance.
       - Store the `borrowDate` in `#borrowRecords` using a
         key like `${memberId}-${isbn}`.

2. `returnBook(memberId, isbn, returnDate)`:
   - Find the member and the book (like in `borrowBook`).
   - If not found, log an error.
   - If the book is not marked as borrowed, log a message.
   - Otherwise:
       - Mark the book as available again.
       - Call `returnBook(isbn)` on the Member instance.
       - Look up the `borrowDate` from `#borrowRecords`.
       - Calculate how many days passed between
         `borrowDate` and `returnDate`.
       - If the book was kept more than 14 days:
           - Calculate how many days late it is.
           - Multiply this number by `#lateFeesPerDay`.
           - Log the late fee to the console.
       - Remove the record from `#borrowRecords`.
*/

/*
-----------------------------------------------------------
  STEP 6: Viewing Library Information
-----------------------------------------------------------
Add the following methods to the `Library` class:

1. `viewAvailableBooks()`:
   - Log all books where `isBorrowed` is `false`.
   - For each book, log its `title`, `author`, and `isbn`.

2. `viewBorrowedBooks()`:
   - Log all books where `isBorrowed` is `true`.
*/

/*
-----------------------------------------------------------
  STEP 7: Test Your Library
-----------------------------------------------------------
1. Create a few `Book` instances, for example:
   - "The Hobbit" by "J.R.R. Tolkien"
   - "1984" by "George Orwell"
2. Create a couple of `Member` instances.
3. Create a `Library` instance.
4. Add the books and register the members.
5. Borrow and return books. Try:
   - Returning a book on time.
   - Returning a book after more than 14 days to see the
     late fee log.
6. Call:
   - `viewAvailableBooks()`
   - `viewBorrowedBooks()`
   at different times and check the console output.
*/


// All Steps Starts From Here


// --------------------------------------------
// Book Class Code Block
// --------------------------------------------
class Book {
  constructor(title, author, isbn) {
    if (typeof title !== "string" || title.trim().length < 3) {
      throw new Error("Title must be a string with at least 3 characters.");
    }
    if (typeof author !== "string" || author.trim().length < 3) {
      throw new Error("Author must be a string with at least 3 characters.");
    }
    if (typeof isbn !== "string" || isbn.trim() === "") {
      throw new Error("ISBN must be a non-empty string.");
    }
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.isBorrowed = false;
  }

  toggleBorrowedStatus() {
    this.isBorrowed = !this.isBorrowed;
  }
}

// --------------------------------------------
// Member Class Code Block
// --------------------------------------------
class Member {
  constructor(name, memberId) {
    if (typeof name !== "string" || name.trim().length < 3) {
      throw new Error("Name must be a string with at least 3 characters.");
    }
    if (typeof memberId !== "string" && typeof memberId !== "number") {
      throw new Error("Member ID must be a string or number.");
    }
    this.name = name;
    this.memberId = memberId;
    this.borrowedBooks = [];
  }

  borrowBook(isbn) {
    if (!this.borrowedBooks.includes(isbn)) {
      this.borrowedBooks.push(isbn);
    }
  }

  returnBook(isbn) {
    const index = this.borrowedBooks.indexOf(isbn);
    if (index !== -1) {
      this.borrowedBooks.splice(index, 1);
    }
  }
}

// --------------------------------------------
// Library Class Code Block
// --------------------------------------------
class Library {
  #books;
  #members;
  #lateFeesPerDay;
  #borrowRecords;

  constructor(lateFeesPerDay = 0.5) {
    this.#books = [];
    this.#members = [];
    this.#borrowRecords = {};
    this.#lateFeesPerDay = lateFeesPerDay;
  }

  // Book & Member Management
  addBook(book) {
    if (!(book instanceof Book)) return console.log("Invalid book object.");
    if (this.#books.some(b => b.isbn === book.isbn)) {
      return console.log(`Book with ISBN ${book.isbn} already exists.`);
    }
    this.#books.push(book);
    console.log(`Book "${book.title}" added successfully.`);
  }

  removeBook(isbn) {
    const index = this.#books.findIndex(b => b.isbn === isbn);
    if (index === -1) return console.log(`Book with ISBN ${isbn} does not exist.`);
    const book = this.#books[index];
    if (book.isBorrowed) return console.log(`Cannot remove "${book.title}" because it is borrowed.`);
    this.#books.splice(index, 1);
    console.log(`Book "${book.title}" removed successfully.`);
  }

  registerMember(member) {
    if (!(member instanceof Member)) return console.log("Invalid member object.");
    if (this.#members.some(m => m.memberId === member.memberId)) {
      return console.log(`Member with ID ${member.memberId} already exists.`);
    }
    this.#members.push(member);
    console.log(`Member "${member.name}" registered successfully.`);
  }

  // Borrowing & Returning Code Block
  borrowBook(memberId, isbn, borrowDate = new Date()) {
    const member = this.#members.find(m => m.memberId === memberId);
    if (!member) return console.log(`Member with ID ${memberId} not found.`);
    const book = this.#books.find(b => b.isbn === isbn);
    if (!book) return console.log(`Book with ISBN ${isbn} not found.`);
    if (book.isBorrowed) return console.log(`Book "${book.title}" is currently not available.`);

    book.toggleBorrowedStatus();
    member.borrowBook(isbn);
    this.#borrowRecords[`${memberId}-${isbn}`] = new Date(borrowDate);
    console.log(`Book "${book.title}" borrowed by ${member.name} on ${borrowDate}.`);
  }

  returnBook(memberId, isbn, returnDate = new Date()) {
    const member = this.#members.find(m => m.memberId === memberId);
    if (!member) return console.log(`Member with ID ${memberId} not found.`);
    const book = this.#books.find(b => b.isbn === isbn);
    if (!book) return console.log(`Book with ISBN ${isbn} not found.`);
    if (!book.isBorrowed) return console.log(`Book "${book.title}" is not marked as borrowed.`);

    book.toggleBorrowedStatus();
    member.returnBook(isbn);

    const borrowKey = `${memberId}-${isbn}`;
    const borrowDate = this.#borrowRecords[borrowKey];
    if (!borrowDate) return console.log(`No borrow record found for this book and member.`);

    const diffTime = new Date(returnDate) - borrowDate;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays > 14) {
      const lateDays = diffDays - 14;
      const lateFee = lateDays * this.#lateFeesPerDay;
      console.log(`Book returned late by ${lateDays} day(s). Late fee: $${lateFee.toFixed(2)}`);
    } else {
      console.log("Book returned on time. No late fee.");
    }

    delete this.#borrowRecords[borrowKey];
    console.log(`Book "${book.title}" returned by ${member.name} on ${returnDate}.`);
  }

  // View books code block
  viewAvailableBooks() {
    const available = this.#books.filter(b => !b.isBorrowed);
    console.log("Available Books:");
    available.forEach(book => console.log(`Title: ${book.title}, Author: ${book.author}, ISBN: ${book.isbn}`));
    if (available.length === 0) console.log("No available books.");
  }

  viewBorrowedBooks() {
    const borrowed = this.#books.filter(b => b.isBorrowed);
    console.log("Borrowed Books:");
    borrowed.forEach(book => console.log(`Title: ${book.title}, Author: ${book.author}, ISBN: ${book.isbn}`));
    if (borrowed.length === 0) console.log("No borrowed books.");
  }
}

// --------------------------------------------
// Example scenario
// --------------------------------------------
const library = new Library(0.5);

// Create Books
const hobbit = new Book("The Hobbit", "J.R.R. Tolkien", "1111");
const book1984 = new Book("1984", "George Orwell", "2222");

// Create Members
const member1 = new Member("Ahmet", 101);
const member2 = new Member("Ayşe", 102);

// Add Books & Members
library.addBook(hobbit);
library.addBook(book1984);
library.registerMember(member1);
library.registerMember(member2);

// Check available books
library.viewAvailableBooks();

// Borrow "The Hobbit" by member1
library.borrowBook(101, "1111", "2026-03-01");

// Borrow "1984" by member2
library.borrowBook(102, "2222", "2026-03-05");

// Check status
library.viewAvailableBooks();
library.viewBorrowedBooks();

// Return "The Hobbit" on time
library.returnBook(101, "1111", "2026-03-10");

// Return "1984" late (more than 14 days)
library.returnBook(102, "2222", "2026-03-25");

// Final status
library.viewAvailableBooks();
library.viewBorrowedBooks();




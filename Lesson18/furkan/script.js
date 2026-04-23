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

class Book {
  constructor(title, author, isbn) {
    if (typeof title !== 'string' || title.trim().length < 3) {
      throw new Error('Title must be at least 3 characters.');
    }
    if (typeof author !== 'string' || author.trim().length < 3) {
      throw new Error('Author must be at least 3 characters.');
    }
    if (typeof isbn !== 'string' || isbn.trim().length === 0) {
      throw new Error('Isbn number must be a valid string.');
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

class Member {
  constructor(name, memberId) {
    if (typeof name !== 'string' || name.trim().length < 3) {
      throw new Error('Member name must be at least 3 characters.');
    }
    if (typeof memberId !== 'string' || memberId.trim().length < 3) {
      throw new Error('The Member Id must be at least 3 characters.');
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
    this.borrowedBooks = this.borrowedBooks.filter((id) => id !== isbn);
  }
}

class Library {
  #books = [];
  #members = [];
  #borrowRecords = {};
  #lateFeesPerDay = 0.5;

  addBook(book) {
    const alreadyExists = this.#books.find((b) => b.isbn === book.isbn);

    if (alreadyExists) {
      console.log(`A book with ISBN "${book.isbn}" already exists.`);
      return;
    }

    this.#books.push(book);
    console.log(`"${book.title}" added to the library.`);
  }

  removeBook(isbn) {
    const book = this.#books.find((b) => b.isbn === isbn);

    if (!book) {
      console.log(`No book found with ISBN "${isbn}".`);
      return;
    }

    if (book.isBorrowed) {
      console.log(
        `"${book.title}" is currently borrowed and cannot be removed.`,
      );
      return;
    }

    this.#books = this.#books.filter((b) => b.isbn !== isbn);
    console.log(`"${book.title}" has been removed from the library.`);
  }

  registerMember(member) {
    const alreadyExists = this.#members.find(
      (m) => m.memberId === member.memberId,
    );

    if (alreadyExists) {
      console.log(
        `A member with ID "${member.memberId}" is already registered.`,
      );
      return;
    }

    this.#members.push(member);
    console.log(`Member "${member.name}" registered successfully.`);
  }

  borrowBook(memberId, isbn, borrowDate) {
    const member = this.#members.find((m) => m.memberId === memberId);
    const book = this.#books.find((b) => b.isbn === isbn);

    if (!member) {
      console.log(`No member found with ID "${memberId}".`);
      return;
    }
    if (!book) {
      console.log(`No book found with ISBN "${isbn}".`);
      return;
    }
    if (book.isBorrowed) {
      console.log(`"${book.title}" is already borrowed by someone else.`);
      return;
    }

    book.toggleBorrowedStatus();
    member.borrowBook(isbn);

    const recordKey = `${memberId}-${isbn}`;
    this.#borrowRecords[recordKey] = borrowDate;

    console.log(`"${book.title}" borrowed by ${member.name} on ${borrowDate}.`);
  }

  returnBook(memberId, isbn, returnDate) {
    const member = this.#members.find((m) => m.memberId === memberId);
    const book = this.#books.find((b) => b.isbn === isbn);

    if (!member) {
      console.log(`No member found with ID "${memberId}".`);
      return;
    }
    if (!book) {
      console.log(`No book found with ISBN "${isbn}".`);
      return;
    }
    if (!book.isBorrowed) {
      console.log(`"${book.title}" is not currently marked as borrowed.`);
      return;
    }

    book.toggleBorrowedStatus();
    member.returnBook(isbn);

    const recordKey = `${memberId}-${isbn}`;
    const borrowDate = new Date(this.#borrowRecords[recordKey]);
    const returnDateObj = new Date(returnDate);

    const msPerDay = 1000 * 60 * 60 * 24;
    const daysKept = Math.floor((returnDateObj - borrowDate) / msPerDay);

    console.log(
      `"${book.title}" returned by ${member.name}. Kept for ${daysKept} days.`,
    );

    const allowedDays = 14;
    if (daysKept > allowedDays) {
      const daysLate = daysKept - allowedDays;
      const fee = daysLate * this.#lateFeesPerDay;
      console.log(
        `Late fee: ${daysLate} day(s) × $${this.#lateFeesPerDay} = $${fee.toFixed(2)}`,
      );
    } else {
      console.log(`Returned on time! No late fee.`);
    }

    delete this.#borrowRecords[recordKey];
  }

  viewAvailableBooks() {
    const available = this.#books.filter((b) => !b.isBorrowed);

    if (available.length === 0) {
      console.log('No books are currently available.');
      return;
    }

    console.log('Available books:');
    available.forEach((b) => {
      console.log(`  - "${b.title}" by ${b.author} | ISBN: ${b.isbn}`);
    });
  }

  viewBorrowedBooks() {
    const borrowed = this.#books.filter((b) => b.isBorrowed);

    if (borrowed.length === 0) {
      console.log('No books are currently borrowed.');
      return;
    }

    console.log('Borrowed books:');
    borrowed.forEach((b) => {
      console.log(`  - "${b.title}" by ${b.author} | ISBN: ${b.isbn}`);
    });
  }
}

const book1 = new Book('The Hobbit', 'J.R.R. Tolkien', 'ISBN-001');
const book2 = new Book('1984', 'George Orwell', 'ISBN-002');
const book3 = new Book('Dune', 'Frank Herbert', 'ISBN-003');

const member1 = new Member('Furkan', 'M1');
const member2 = new Member('Ali', 'M2');

const library = new Library();

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book1);

library.registerMember(member1);
library.registerMember(member2);

library.viewAvailableBooks();

library.borrowBook('M1', 'ISBN-001', '2026-01-01');
library.borrowBook('M2', 'ISBN-002', '2025-02-11');
library.borrowBook('M1', 'ISBN-001', '2024-01-05');

library.viewAvailableBooks();
library.viewBorrowedBooks();

library.returnBook('M1', 'ISBN-001', '2026-01-11');

library.returnBook('M2', 'ISBN-002', '2025-03-01');

library.viewAvailableBooks();

// 1) Remove the current and unborrowed book → it should be successful
library.removeBook('ISBN-003');

// 2) Remove the same book again → it should be 'not found'
library.removeBook('ISBN-003');

// 3) Remove the unborrowed book → it should be 'borrowed'
library.removeBook('ISBN-001');

// 4) Check the remaining books
library.viewAvailableBooks();

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

class Book {
  #title;
  #author;
  #isbn;
  #isBorrowed;

  constructor(title, author, isbn) {
    if (typeof title === "string" && title.length >= 3) {
      this.#title = title;
    } else {
      throw Error("Invalid title: Must be at least 3 characters long.");
    }

    if (typeof author === "string" && author.length >= 3) {
      this.#author = author;
    } else {
      throw Error("Invalid author: Must be at least 3 characters long.");
    }

    this.#title = title;
    this.#author = author;
    this.#isbn = isbn;
    this.#isBorrowed = false;
  }
  get isbn() {
    return this.#isbn;
  }
  get title() {
    return this.#title;
  }
  get isBorrowed() {
    return this.#isBorrowed;
  }
  get author() {
  return this.#author;
}

  toggleBorrowedStatus() {
    this.#isBorrowed = !this.#isBorrowed;
  }
}

// testing
try {
  const myBook = new Book("The Hobbit", "J.R.R. Tolkien", "12345");
  console.log("Book created:", myBook.title);

  myBook.toggleBorrowedStatus();
  console.log("Is borrowed?", myBook.isBorrowed);

  myBook.toggleBorrowedStatus();
  console.log("Is borrowed?", myBook.isBorrowed);
} catch (error) {
  console.log(error.message);
}

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

class Member {
  #name;
  #memberId;

  constructor(name, memberId) {
    if (typeof name === "string" && name.length >= 3) {
      this.#name = name;
    } else {
      throw Error("Invalid name: Must be at least 3 characters long.");
    }

    if (typeof memberId === "string" || typeof memberId === "number") {
      this.#memberId = memberId;
    } else {
      throw Error("Invalid memberId: Must be a string or a number.");
    }

    this.#name = name;
    this.#memberId = memberId;
    this.borrowedBooks = [];
  }
  get memberId() {
    return this.#memberId;
  }
  get name() {
    return this.#name;
  }

  borrowBook(isbn) {
    if (this.borrowedBooks.includes(isbn)) {
      console.log(
        `Member ${this.name} already has the book with ISBN: ${isbn}`,
      );
    } else {
      this.borrowedBooks.push(isbn);
      console.log(`Book ${isbn} added to ${this.name}'s list.`);
    }
  }
  returnBook(isbn) {
    const index = this.borrowedBooks.indexOf(isbn);
    if (index !== -1) {
      this.borrowedBooks.splice(index, 1);
      console.log(`Book ${isbn} returned by ${this.name}.`);
    } else {
      console.log(`Member ${this.name} does not have book with ISBN: ${isbn}`);
    }
  }
}

// testing
try {
  console.log("------ Adding a new member -------");
  const member1 = new Member("Guner Keles", "M101");

  member1.borrowBook("978-111");
  member1.borrowBook("978-111");
  member1.borrowBook("978-222");

  console.log("Current borrowed books:", member1.borrowedBooks);

  member1.returnBook("978-111");
  console.log("After return:", member1.borrowedBooks);
} catch (error) {
  console.log("Error:", error.message);
}

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

class Library {
  #books;
  #members;
  #lateFeesPerDay;
  #borrowRecords;

  constructor() {
    this.#books = [];
    this.#members = [];
    this.#borrowRecords = {};
    this.#lateFeesPerDay = 0.5;

    console.log("Library initialized successfully.");
  }

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

  addBook(book) {
    for (const existingBook of this.#books) {
      if (existingBook.isbn === book.isbn) {
        console.log(
          `Error: Book with ISBN ${book.isbn} already exists in library.`,
        );
        return;
      }
    }
    this.#books.push(book);
    console.log(`Success: "${book.title}" added to the library.`);
  }
  removeBook(isbn) {
    for (let i = 0; i < this.#books.length; i++) {
      if (this.#books[i].isbn === isbn) {
        console.log(
          "----The book has found!---- Controlling if it has borrowed",
        );
        if (this.#books[i].isBorrowed) {
          console.log(
            `Cannot remove "${this.#books[i].title}": It is currently borrowed.`,
          );
          return;
        }
        const removedBook = this.#books.splice(i, 1);
        console.log(
          `Success: Book "${removedBook[0].title}" removed from library.`,
        );
        return;
      }
    }
    console.log(`Error: Book with ISBN ${isbn} not found.`);
  }
  registerMember(member) {
    for (const existingMember of this.#members) {
      if (existingMember.memberId === member.memberId) {
        console.log(
          `Error: Member ID ${member.memberId} is already registered.`,
        );
        return;
      }
    }
    this.#members.push(member);
    console.log(
      `Success: Member "${member.name}" registered with ID: ${member.memberId}.`,
    );
  }

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

  // 1.borrowBook method

  borrowBook(memberId, isbn, borrowDate) {
    let foundMember = null;
    for (const m of this.#members) {
      if (m.memberId === memberId) foundMember = m;
    }
    let foundBook = null;
    for (const b of this.#books) {
      if (b.isbn === isbn) foundBook = b;
    }
    if (!foundMember || !foundBook) {
      console.log("Error: Member or Book not found.");
      return;
    }
    if (foundBook.isBorrowed) {
      console.log(`Error: "${foundBook.title}" is already borrowed.`);
      return;
    }
    foundBook.toggleBorrowedStatus();
    foundMember.borrowBook(isbn);

    const recordKey = `${memberId}-${isbn}`;
    this.#borrowRecords[recordKey] = borrowDate;

    console.log(
      `Success: ${foundMember.name} borrowed "${foundBook.title}" on ${borrowDate}.`,
    );
  }

  // 2.returnBook method
  returnBook(memberId, isbn, returnDate) {
    let foundMember = null;
    for (const m of this.#members) {
      if (m.memberId === memberId) foundMember = m;
    }
    let foundBook = null;
    for (const b of this.#books) {
      if (b.isbn === isbn) foundBook = b;
    }
    if (!foundBook || !foundMember) {
      console.log("Error: Invalid return attempt.");
      return;
    }
    if (!foundBook.isBorrowed) {
      console.log(`Error: "${foundBook.title}" was not borrowed.`);
      return;
    }
    foundBook.toggleBorrowedStatus();
    foundMember.returnBook(isbn);

    const recordKey = `${memberId}-${isbn}`;
    const borrowDateStr = this.#borrowRecords[recordKey];

    const start = new Date(borrowDateStr);
    const end = new Date(returnDate);

    const diffTime = Math.abs(end - start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays > 14) {
      const lateDays = diffDays - 14;
      const fee = lateDays * this.#lateFeesPerDay;
      console.log(`LATE RETURN! Fee: ${fee} EUR (${lateDays} days late).`);
    } else {
      console.log("Book returned on time. No late fee.");
    }
    delete this.#borrowRecords[recordKey];
  }

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

  // viewAvailable method

  viewAvailableBooks() {
    console.log("---Available Books---");
    let foundAll = false;

    for (const book of this.#books) {
      if (book.isBorrowed === false) {
        console.log(
          `Title: ${book.title} | Author: ${book.author} | ISBN: ${book.isbn}`,
        );
        foundAll = true;
      }
    }
    if (!foundAll) {
      console.log("No books are currently available.");
    }
    console.log("-----------------------");
  }

  // viewBorrowed method
  viewBorrowedBooks() {
    console.log("---Borrowed Books---");
    let foundAll = false;

    for (const book of this.#books) {
      if (book.isBorrowed === true) {
        console.log(`Title: ${book.title} | ISBN: ${book.isbn}`);
        foundAll = true;
      }
    }
    if (!foundAll) {
      console.log("No books are currently borrowed.");
    }
    console.log("-----------------------");
  }
}

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
// 1. Book Instance
const book1 = new Book("The Hobbit", "J.R.R. Tolkien", "ISBN-111");
const book2 = new Book("1984", "George Orwell", "ISBN-222");
const book3 = new Book("The Great Gatsby", "F. Scott Fitzgerald", "ISBN-333");

// 2. Member Instance
const member1 = new Member("Pippo Cast", "M001");
const member2 = new Member("Andrea Luca", "M002");

// 3. Library Instance
const myLibrary = new Library();

console.log("--- INITIALIZING LIBRARY ---");

// 4. Adding book ve registering members
myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.addBook(book3);

myLibrary.registerMember(member1);
myLibrary.registerMember(member2);

console.log("\n--- BORROWING TEST ---");

// 5. Borrowing
// Pippo borrowing "The Hobbit" (1 March 2024)
myLibrary.borrowBook("M001", "ISBN-111", "2024-03-01");

// Andrea Luca borrowing "1984" (1 March 2024)
myLibrary.borrowBook("M002", "ISBN-222", "2024-03-01");

// Checking the situation
myLibrary.viewAvailableBooks();
myLibrary.viewBorrowedBooks();

console.log("\n--- RETURNING TEST (ON TIME) ---");

// Pippo returning the book in time 
myLibrary.returnBook("M001", "ISBN-111", "2024-03-05");

console.log("\n--- RETURNING TEST (LATE FEE) ---");

// Andrea Luca returning late (25 March - 24 days after, 14 more)
// 24 - 14 = 10 days more. 10 * 0.5 = 5.0 EUR must be as fee.
myLibrary.returnBook("M002", "ISBN-222", "2024-03-25");

console.log("\n--- FINAL STATUS ---");

// Checking the final situation
myLibrary.viewAvailableBooks();
myLibrary.viewBorrowedBooks();

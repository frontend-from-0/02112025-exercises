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
  constructor(title, author, isbn) {
    if (title.length < 3) {
      throw new Error("Title must be at least 3 characters long.");
    }
    if (author.length < 3) {
      throw new Error("Author must be at least 3 characters long.");
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
const myBook = new Book("The Hobbit", "J.Tolkien", "123456");
console.log(myBook.isBorrowed);
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
  constructor(name, memberId) {
    if (name.length < 3) {
      throw new Error("The name is not valid.");
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
    this.borrowedBooks = this.borrowedBooks.filter(
      (bookIsbn) => bookIsbn !== isbn,
    );
  }
}
const realMember = new Member("Jihane", "J001");
console.log(realMember);
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

// STEPS 3-6

class Library {
  #books;
  #members;
  #lateFeesPerDay;
  #borrowRecords;

  constructor() {
    this.#books = [];
    this.#members = [];
    this.#lateFeesPerDay = 0.5;
    this.#borrowRecords = {};
  }

  addBook(book) {
    const exists = this.#books.some((b) => b.isbn === book.isbn);
    if (exists) {
      console.log(`Error: Book with ISBN ${book.isbn} already exists.`);
    } else {
      this.#books.push(book);
      console.log(`Success: Added "${book.title}".`);
    }
  }

  removeBook(isbn) {
    const book = this.#books.find((b) => b.isbn === isbn);
    if (!book) {
      console.log("Error: Book not found in the library.");
      return;
    }
    if (book.isBorrowed) {
      console.log(
        `Error: Cannot remove "${book.title}" because it is currently borrowed.`,
      );
    } else {
      this.#books = this.#books.filter((b) => b.isbn !== isbn);
      console.log(
        `Success: "${book.title}" has been removed from the library.`,
      );
    }
  }

  registerMember(member) {
    const idExists = this.#members.some((m) => m.memberId === member.memberId);
    if (idExists) {
      console.log(`Error: Member ID ${member.memberId} is already taken.`);
    } else {
      this.#members.push(member);
      console.log(`Success: Registered member "${member.name}".`);
    }
  }

  borrowBook(memberId, isbn, borrowDate) {
    const member = this.#members.find((m) => m.memberId === memberId);
    const book = this.#books.find((b) => b.isbn === isbn);

    if (!member || !book) {
      console.log("Error: Member or Book could not be found.");
      return;
    }
    if (book.isBorrowed) {
      console.log(`Error: "${book.title}" is already checked out.`);
      return;
    }

    book.borrow();
    member.borrowBook(isbn);

    const recordKey = `${memberId}-${isbn}`;
    this.#borrowRecords[recordKey] = borrowDate;
    console.log(
      `Success: ${member.name} borrowed "${book.title}" on ${borrowDate}.`,
    );
  }

  returnBook(memberId, isbn, returnDate) {
    const member = this.#members.find((m) => m.memberId === memberId);
    const book = this.#books.find((b) => b.isbn === isbn);

    if (!member || !book) {
      console.log("Error: Member or Book could not be found.");
      return;
    }
    if (!book.isBorrowed) {
      console.log(`Error: "${book.title}" was not marked as borrowed.`);
      return;
    }

    book.returnBook();
    member.returnBook(isbn);

    const recordKey = `${memberId}-${isbn}`;
    const borrowDate = this.#borrowRecords[recordKey];

    const start = new Date(borrowDate);
    const end = new Date(returnDate);
    const timeDiff = end - start;
    const daysPassed = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

    if (daysPassed > 14) {
      const daysLate = daysPassed - 14;
      const fee = daysLate * this.#lateFeesPerDay;
      console.log(
        `Late Return Notice: This book is ${daysLate} days late. Fee: $${fee.toFixed(2)}.`,
      );
    } else {
      console.log("Thank you! Book returned on time.");
    }
    delete this.#borrowRecords[recordKey];
  }

  viewAvailableBooks() {
    const available = this.#books.filter((b) => !b.isBorrowed);
    if (available.length === 0) {
      console.log("No books are currently available.");
      return;
    }
    console.log("--- Available Books ---");
    available.forEach((b) =>
      console.log(
        `Title: "${b.title}" | Author: ${b.author} | ISBN: ${b.isbn}`,
      ),
    );
  }

  viewBorrowedBooks() {
    const borrowed = this.#books.filter((b) => b.isBorrowed);
    if (borrowed.length === 0) {
      console.log("No books are currently checked out.");
      return;
    }
    console.log("--- Borrowed Books ---");
    borrowed.forEach((b) =>
      console.log(
        `Title: "${b.title}" | Author: ${b.author} | ISBN: ${b.isbn}`,
      ),
    );
  }
}

// STEP 7. TESTING

// ==========================================
// 1-3. INITIALIZE THE SYSTEM
// ==========================================
console.log("STARTING LIBRARY TEST RUN");

const centralLibrary = new Library();

// Create Book instances
const book1 = new Book("The Hobbit", "J.R.R. Tolkien", "978-0261102217");
const book2 = new Book("1984", "George Orwell", "978-0451524935");
const book3 = new Book("To Kill a Mockingbird", "Harper Lee", "978-0446310789");

// Create Member instances
const member1 = new Member("Jihane", "M001");
const member2 = new Member("Alex", "M002");

// ==========================================
// 4. REGISTER BOOKS & MEMBERS
// ==========================================
console.log("[Phase 1: Registration]");
centralLibrary.addBook(book1);
centralLibrary.addBook(book2);
centralLibrary.addBook(book3);

centralLibrary.registerMember(member1);
centralLibrary.registerMember(member2);

// ==========================================
//6a. CHECK CHRONOLOGICAL DASHBOARDS (INITIAL STATUS)
// ==========================================
console.log("[Phase 2: Initial Dashboard Check]");
centralLibrary.viewAvailableBooks(); // Should list all 3 books
centralLibrary.viewBorrowedBooks(); // Should say no books are checked out

// ==========================================
// 5. SIMULATE BORROWING
// ==========================================
console.log("[Phase 3: Checking Out Books]");
// Jihane borrows The Hobbit on May 1st
centralLibrary.borrowBook("M001", "978-0261102217", "2026-05-01");
// Alex borrows 1984 on May 1st
centralLibrary.borrowBook("M002", "978-0451524935", "2026-05-01");

// ==========================================
//6b. CHECK DASHBOARDS AFTER BORROWING
// ==========================================
console.log("[Phase 4: Dashboard Check After Checkout]");
centralLibrary.viewAvailableBooks(); // Should only show "To Kill a Mockingbird"
centralLibrary.viewBorrowedBooks(); // Should show "The Hobbit" and "1984"

// ==========================================
// 5a. SIMULATE ON-TIME RETURN
// ==========================================
console.log("[Phase 5: Simulating On-Time Return]");
// Jihane returns "The Hobbit" on May 10th (9 days kept -> within 14-day limit!)
centralLibrary.returnBook("M001", "978-0261102217", "2026-05-10");

// ==========================================
// 5b. SIMULATE LATE RETURN (WITH FEES!)
// ==========================================
console.log("[Phase 6: Simulating Late Return]");
// Alex returns "1984" on May 20th (19 days kept -> 5 days late!)
// Expected Fee: 5 days * $0.50 = $2.50
centralLibrary.returnBook("M002", "978-0451524935", "2026-05-20");

// ==========================================
// 6c. FINAL DASHBOARD CHECK
// ==========================================
console.log("[Phase 7: Final Library Dashboard Status]");
centralLibrary.viewAvailableBooks(); // All 3 books should be back on shelves!
centralLibrary.viewBorrowedBooks(); // Should say no books are checked out
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

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
    if (title.length < 3 || author.length < 3) {
      throw Error("Title should be a string with more than 2 characters");
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

const myBook = new Book("Nutuk", "Atatürk", "12345");
console.log("initial status:", myBook.isBorrowed);
console.log("---------");
myBook.toggleBorrowedStatus();
console.log("Status after toggling:", myBook.isBorrowed);
console.log("---------");
myBook.toggleBorrowedStatus();
console.log("Status after toggling again:", myBook.isBorrowed);
console.log("---------");

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
      throw new Error("Name should be a string with more than 2 characters");
    }
    this.name = name;
    this.memberId = memberId;
    this.borrowedBooks = [];
  }
  borrowBook(isbn) {
    if (!this.borrowedBooks.includes(isbn)) {
      this.borrowedBooks.push(isbn);
      console.log(`Book ${isbn} borrowed by ${this.name}`);
    } else {
      console.log(`${this.name} already has this book`);
    }
  }
  returnBook(isbn) {
    this.borrowedBooks = this.borrowedBooks.filter(
      (bookIsbn) => bookIsbn !== isbn,
    );
    console.log(`Book ${isbn} returned by ${this.name}.`);
  }
}
const member1 = new Member("Elit Altun", "M94");
console.log(`Member created: ${member1.name}`);
console.log("---------");
member1.borrowBook("ISBN-123");
console.log(`Current books:, ${member1.borrowedBooks}`);
console.log("---------");
member1.borrowBook("ISBN-123");
console.log("---------");
member1.borrowBook("ISBN-789");
console.log(`Books after second borrow:, ${member1.borrowedBooks}`);
console.log("---------");
member1.returnBook("ISBN-123");
console.log(`Books after return, ${member1.borrowedBooks}`);
console.log("---------");

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
      console.log(`Book with ISBN ${book.isbn} alreay exists.`);
    } else {
      this.#books.push(book);
      console.log(`Book "${book.title}" added to the library.`);
    }
  }

  removeBook(isbn) {
    const foundBook = this.#books.find((b) => b.isbn === isbn);
    if (foundBook && !foundBook.isBorrowed) {
      this.#books = this.#books.filter((b) => b.isbn !== isbn);
      console.log(`Book with ISBN ${isbn} has been removed.`);
    } else if (!foundBook) {
      console.log(`Book with ISBN ${isbn} not found.`);
    } else {
      console.log(
        `Cannot remove book ${isbn} because it is currently borrowed.`,
      );
    }
  }

  registerMember(member) {
    const exists = this.#members.some((m) => m.memberId === member.memberId);
    if (exists) {
      console.log(`Member ID ${member.memberId} is already registered.`);
    } else {
      this.#members.push(member);
      console.log(
        `Member "${member.name}" (ID: ${member.memberId}) has been registered.`,
      );
    }
  }
  borrowBook(memberId, isbn, borrowDate) {
    const foundMember = this.#members.find((m) => m.memberId === memberId);
    const foundBook = this.#books.find((b) => b.isbn === isbn);

    if (!foundMember || !foundBook) {
      console.log("Error: Member or book not found.");
    } else if (foundBook.isBorrowed) {
      console.log(`The book "${foundBook.title}" is already borrowed.`);
    } else {
      foundBook.toggleBorrowedStatus();
      foundMember.borrowBook(isbn);
      this.#borrowRecords[`${memberId}-${isbn}`] = borrowDate;
      console.log(
        `Book "${foundBook.title}" succesfully borrowed by ${foundMember.name}.`,
      );
    }
  }

  returnBook(memberId, isbn, returnDate) {
    const foundMember = this.#members.find((m) => m.memberId === memberId);
    const foundBook = this.#books.find((b) => b.isbn === isbn);

    if (!foundMember || !foundBook) {
      console.log("Error: Member or book not found.");
      return;
    }

    const borrowDateStr = this.#borrowRecords[`${memberId}-${isbn}`];
    if (!borrowDateStr) {
      console.log("Error:No Borrow record found for this member and book.");
      return;
    }

    const bDate = new Date(borrowDateStr);
    const rDate = new Date(returnDate);

    const diffInMs = rDate - bDate;
    const diffInDays = diffInMs / (1000 * 60 * 60 * 24);

    if (diffInDays > 14) {
      const lateDays = diffInDays - 14;
      const totalLateFees = lateDays * this.#lateFeesPerDay;
      console.log(
        `Late return! Fee: $${totalLateFees.toFixed(2)}. (${lateDays} days late)`,
      );
    }
    foundBook.toggleBorrowedStatus();
    foundMember.returnBook(isbn);
    delete this.#borrowRecords[`${memberId}-${isbn}`];
  }

  viewAvailableBooks() {
    console.log(`Viewing availale books...`);
    this.#books.forEach((book) => {
      if (!book.isBorrowed) {
        console.log(`${book.title} by ${book.author} (ISBN: ${book.isbn})`);
      }
    });
  }
  /*
for(const book of this.#books){
if(!book.isBorrowed){
      console.log(`${book.title} by ${book.author} (ISBN: ${book.isbn})`)
    }
}
*/

  viewBorrowedBooks() {
    console.log(`Viewing borrowed books...`);
    for (const book of this.#books) {
      if (book.isBorrowed) {
        console.log(`${book.title} by ${book.author} (ISBN: ${book.isbn})`);
      }
    }
  }

  findBooksByAuthor(authorName) {
    return this.#books.filter(
      (book) => book.author.toLowerCase() === authorName.toLowerCase(),
    );
  }
}

const myLibrary = new Library();
const book1 = new Book("5 am Club", "Robin Sharma", "ISBN-001");
const book2 = new Book("Let Them Theory", "Mel Robbins", "ISBN-002");
const member3 = new Member("İlayda Yildiz", "M03");
const book3 = new Book("The Hobbit", "J.R.R. Tolkien", "ISBN-555");
const book4 = new Book("1984", "George Orwell", "ISBN-444");
const member4 = new Member("Evrim Göksel", "M04");

console.log("---Testing Registration---");
myLibrary.addBook(book1);
console.log("---------");
myLibrary.addBook(book1);
console.log("---------");
myLibrary.addBook(book2);
console.log("---------");
myLibrary.registerMember(member3);
console.log("---------");
myLibrary.registerMember(member3);

console.log("\n--- Testing Removal ---");

myLibrary.removeBook("ISBN-001");
console.log("---------");
myLibrary.removeBook("ISBN-999");
console.log("---------");

myLibrary.addBook(book1);
myLibrary.addBook(book3);
myLibrary.addBook(book4);
myLibrary.registerMember(member3);
myLibrary.registerMember(member4);

console.log(`---Testing Borrowing---`);
myLibrary.borrowBook("M03", "ISBN-001", "2026-03-01");
console.log("---------");
myLibrary.borrowBook("M03", "ISBN-001", "2026-03-01");
console.log("---------");
myLibrary.borrowBook("M04", "ISBN-001", "2026-03-10");
console.log("---------");
console.log(
  `The book list of the member "${member3.name}":`,
  member3.borrowedBooks,
);
console.log("---------");

console.log("--- Testing Return & Fees ---");
myLibrary.returnBook("M03", "ISBN-001", "2026-03-11");
console.log("---------");
myLibrary.borrowBook("M03", "ISBN-001", "2026-03-01");
console.log("---------");
console.log("Testing Late Fees...");
myLibrary.returnBook("M03", "ISBN-001", "2026-03-21");
console.log("---------");
myLibrary.returnBook("M03", "ISBN-001", "2026-03-25");
console.log("---------");
console.log("---Testing Search & Listing---");

myLibrary.viewAvailableBooks();
const robinSharmaBooks = myLibrary.findBooksByAuthor("Robin Sharma");
if (robinSharmaBooks.length > 0) {
  console.log(`\nResults for "Robin Sharma":`);
  robinSharmaBooks.forEach((book) => {
    console.log(`- ${book.title} (ISBN: ${book.isbn})`);
  });
} else {
  console.log("No books found for this author.");
}
console.log("---------");
const orhanPamukBooks = myLibrary.findBooksByAuthor("Orhan Pamuk");
if (orhanPamukBooks.length > 0) {
  console.log(`\nResults for "Orhan Pamuk":`);
  orhanPamukBooks.forEach((book) => {
    console.log(`- ${book.title} (ISBN: ${book.isbn})`);
  });
} else {
  console.log("No books found for this author.");
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

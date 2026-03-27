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

class Book{

 constructor(title, author, isbn){
   if( typeof title === 'string' && title.trim().length > 3){
      this.title = title;
   } else {throw Error ('Title should be a string with more than 3 characters')
 }

   if( typeof isbn === 'string' && isbn.trim().length > 3){
   this.isbn = isbn;  
 } else { throw Error ('Isbn should be a string with more than 3 characters')
 }
   if(typeof author === 'string' && author.trim().length > 3){
      this.author = author;
   } else {throw Error('Author should be a string with more than 3 characters')}
  
   this.isBorrowed = false;
 }

 toggleBorrowedStatus(){
   console.log(`Checking the book status of ${this.isbn}..`);
   this.isBorrowed = !this.isBorrowed;
   if(this.isBorrowed === true){
      console.log(`${this.title} is borrowed successfully!`);
   } else {console.log(`The book with this ${this.isbn} number is in library!`);}

 }

}

class Member{

   constructor(name, memberId){
      if(typeof name === "string" && name.trim().length > 3){
         this.name = name;
      }else {throw Error(`Name should be a string with more than 3 characters.`)}
      if(typeof memberId === "string" || typeof memberId === "number"){
         this.memberId = memberId;   
      }else{throw Error (`MemberId should be a string or a number.`)}

      this.borrowedBooks = [];
   }

 borrowBook(isbn){
   console.log('Adding book in to borrowed books list..');
   if(!this.borrowedBooks.includes(isbn)){
      this.borrowedBooks.push(isbn);
      console.log(`${isbn} added in to the list.`);
   } else {throw Error(`This book ${isbn}, is already in the list. `) }
 } 

 returnBook(isbn){
   console.log('Removing book from the borrowed books list..');
   for(let i = 0; i < this.borrowedBooks.length; i++){
      if(this.borrowedBooks[i] === isbn){
      this.borrowedBooks.splice(i,1);
      console.log(`This book ${isbn} removed successfully!`)
      return;
      } 
 }
  throw Error (`This book ${isbn} doesn\'t exist.`)
   }

}

class Library{
 #books;
 #members;
 #lateFeesPerDay;
 #borrowRecords;

 constructor(){
   this.#books = [];
   this.#members = [];
   this.#lateFeesPerDay = 0.8 ;
   this.#borrowRecords = {};
 }

 addBook(book){
 for(const currentBook of this.#books){
   if(currentBook.isbn === book.isbn){
      console.log(`This ${book.title} already exist.`);
      return;
   }       
 }
 this.#books.push(book);
      console.log(`${book.title} added succsessfully!`);
 }

 removeBook(isbn){
   for(let i = 0; i < this.#books.length; i++){
      const book = this.#books[i];
      if(book.isbn === isbn && book.isBorrowed === false ){
        this.#books.splice(i,1);
        console.log(`The book ${book.isbn} removed successfully!`)
        return;
      }
      else{
      console.log(`This book ${book.isbn} can not remove, please check borrowed list.`);
      return;
   }
   }
     console.log(`This book ${book.isbn} doen\'t exist.`)
 }

 registerMember(member){
   for(let i = 0; i < this.#members.length; i++){
      const newMember = this.#members[i];
      if(newMember.memberId === member.memberId){
         console.log(`${member.name} is already a member.`);
         return;
      } 
   }
    
     this.#members.push(member);
         console.log(`${member.name} is registered successfully!`)
   }

 borrowBook(memberId, isbn, borrowDate){
   let foundMember = null;
   let foundBook = null;

   for(let i = 0; i < this.#members.length; i++){
      if(this.#members[i].memberId === memberId){
         foundMember = this.#members[i];
      }
   }

   for(let j = 0; j < this.#books.length; j++){
      if(this.#books[j].isbn === isbn){
         foundBook = this.#books[j];
      }
   }

   if(foundMember === null || foundBook === null){
      throw Error ("No matching data found!");
   }

   if(foundBook.isBorrowed){
      console.log("This book is already borrowed.")
   }

    foundBook.toggleBorrowedStatus();

    const borrowKey =`${memberId}-${isbn}`;
    this.#borrowRecords[borrowKey] = borrowDate;

 }

 returnBook(memberId, isbn, returnDate){
  let foundMember = null;
   let foundBook = null;

   for(let i = 0; i < this.#members.length; i++){
      if(this.#members[i].memberId === memberId){
         foundMember = this.#members[i];
      }
   }

   for(let j = 0; j < this.#books.length; j++){
      if(this.#books[j].isbn === isbn){
         foundBook = this.#books[j];
      }
   }
    if(foundMember === null || foundBook === null){
      throw Error ("No matching data found!");
   } 
  
    if(!foundBook.isBorrowed){
      console.log("This book is already exist.")
   }
   
   foundBook.toggleBorrowedStatus();

   const borrowKey =`${memberId}-${isbn}`;
    borrowDate = this.#borrowRecords[borrowKey];
     
   const lateDays = returnDate - borrowDate;

   if(lateDays > 14){
     let lateFee = (lateDays - 14)*this.#lateFeesPerDay;
      console.log(`Total late fee is: ${lateFee}`);
   }
 
 }

 viewAvailableBooks(){
  console.log("looking available books..");
  let availableBooks = [];
  for(const book of this.#books){
   if(!book.isBorrowed){
      availableBooks.push(book);
   }
  }

  if(availableBooks.length === 0){
   console.log("There is no available book.");
  } else {
   for(const book of availableBooks){
      console.log(`Title: ${book.title}, Author: ${book.author}, Isbn: ${book.isbn}.`);
   }
  }

 }

 viewBorrowedBooks(){
   console.log("Looking borrowed books..");
   let borrowedBooks = [];
   for(const book of this.#books){
      if(book.isBorrowed){
         borrowedBooks.push(book);
      }
   }

   if(borrowedBooks.length === 0){
      console.log("There is no borrowed book.");
   } else {
      for(const book of borrowedBooks){
         console.log(`Title: ${book.title}, Author: ${book.author}, Isbn: ${book.isbn}.`);
      }
   }
 }

}
const book1 = new Book("The Hobbit", "J.R.R Tolkien", "5356456");
const book2 = new Book("1984", "George Orwell", "1234");
const book3 = new Book("Harry Potter", "J.K Rowling", "876854");

const member1 = new Member("Pınar", "0001");
const member2 = new Member("Sema", "0002");
const member3 = new Member("Inci", "0003");

const library1 = new Library();

library1.addBook(book1);
library1.addBook(book2);
library1.addBook(book3);

library1.registerMember(member1);
library1.registerMember(member2);
library1.registerMember(member3);
library1.borrowBook("0001", "5356456","2026-01-01");
library1.returnBook("0001", "5356456","2026-03-03")

library1.viewAvailableBooks();
library1.viewBorrowedBooks();
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




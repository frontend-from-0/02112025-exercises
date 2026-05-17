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
      throw new Error("Kitap adı (title) ve yazar (author) en az 3 karakter olmalıdır.");
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
      throw new Error("Üye adı (name) en az 3 karakter olmalıdır.");
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
    this.borrowedBooks = this.borrowedBooks.filter(id => id !== isbn);
  }
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
    this.#lateFeesPerDay = 0.5;
    this.#borrowRecords = {};
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
    const exists = this.#books.some(b => b.isbn === book.isbn);
    if (exists) {
      console.log(`HATA: ${book.isbn} ISBN numaralı kitap zaten kütüphanede var.`);
    } else {
      this.#books.push(book);
      console.log(`BAŞARILI: "${book.title}" kütüphaneye eklendi.`);
    }
  }

  removeBook(isbn) {
    const index = this.#books.findIndex(b => b.isbn === isbn);
    if (index !== -1) {
      if (this.#books[index].isBorrowed) {
        console.log("HATA: Bu kitap şu an ödünç alınmış durumda, silinemez.");
      } else {
        this.#books.splice(index, 1);
        console.log(`BAŞARILI: Kitap kütüphaneden silindi.`);
      }
    } else {
      console.log("HATA: Silinmek istenen kitap bulunamadı.");
    }
  }

  registerMember(member) {
    const exists = this.#members.some(m => m.memberId === member.memberId);
    if (exists) {
      console.log(`HATA: ${member.memberId} ID'li üye zaten mevcut.`);
    } else {
      this.#members.push(member);
      console.log(`BAŞARILI: Üye kaydedildi - ${member.name}`);
    }
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


 
       borrowBook(memberId, isbn, borrowDate) {
    const member = this.#members.find(m => m.memberId === memberId);
    const book = this.#books.find(b => b.isbn === isbn);

    if (!member || !book) {
      console.error("HATA: Üye veya Kitap bulunamadı.");
      return;
    }

    if (book.isBorrowed) {
      console.log(`ÜZGÜNÜZ: "${book.title}" kitabı şu an başka bir üyede.`);
      return;
    }

    book.toggleBorrowedStatus();
    member.borrowBook(isbn);
    
    const recordKey = `${memberId}-${isbn}`;
    this.#borrowRecords[recordKey] = borrowDate;
    
    console.log(`BİLGİ: ${member.name}, "${book.title}" kitabını ödünç aldı.`);
  }

  returnBook(memberId, isbn, returnDate) {
    const member = this.#members.find(m => m.memberId === memberId);
    const book = this.#books.find(b => b.isbn === isbn);

    if (!member || !book) {
      console.error("HATA: Üye veya Kitap bulunamadı.");
      return;
    }

    if (!book.isBorrowed) {
      console.log("BİLGİ: Bu kitap zaten kütüphanede, ödünç alınmamış görünuyor.");
      return;
    }

    book.toggleBorrowedStatus();
    member.returnBook(isbn);

    const recordKey = `${memberId}-${isbn}`;
    const borrowDate = this.#borrowRecords[recordKey];

    if (borrowDate) {
      const timeDiff = returnDate.getTime() - borrowDate.getTime();
      const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24)); 

      if (daysDiff > 14) {
        const lateDays = daysDiff - 14;
        const fee = lateDays * this.#lateFeesPerDay;
        console.log(`GECİKME CEZASI: "${book.title}" kitabı ${lateDays} gün gecikti. Kesilen ceza: $${fee.toFixed(2)}`);
      } else {
        console.log(`TEŞEKKÜRLER: "${book.title}" zamanında iade edildi.`);
      }
      
      delete this.#borrowRecords[recordKey];
    }
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



   viewAvailableBooks() {
    console.log("\n--- Mevcut (Müsait) Kitaplar ---");
    const availableBooks = this.#books.filter(b => !b.isBorrowed);
    availableBooks.forEach(b => console.log(`- ${b.title} / ${b.author} (ISBN: ${b.isbn})`));
  }

  viewBorrowedBooks() {
    console.log("\n--- Ödünç Alınan Kitaplar ---");
    const borrowedBooks = this.#books.filter(b => b.isBorrowed);
    borrowedBooks.forEach(b => console.log(`- ${b.title} / ${b.author} (ISBN: ${b.isbn})`));
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

   /*
-----------------------------------------------------------
  STEP 7: Test Your Library
-----------------------------------------------------------
*/

const book1 = new Book("The Hobbit", "J.R.R. Tolkien", "ISBN-001");
const book2 = new Book("1984", "George Orwell", "ISBN-002");
const book3 = new Book("Simyacı", "Paulo Coelho", "ISBN-003");

const member1 = new Member("Ahmet Yılmaz", "M-001");
const member2 = new Member("Ayşe Demir", "M-002");

const myLibrary = new Library();

console.log("--- 1. KAYIT İŞLEMLERİ ---");
myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.addBook(book3);

myLibrary.registerMember(member1);
myLibrary.registerMember(member2);

console.log("\n--- 2. ÖDÜNÇ ALMA İŞLEMLERİ ---");

const borrowDate1 = new Date("2024-03-01"); 
const borrowDate2 = new Date("2024-03-10"); 

myLibrary.borrowBook("M-001", "ISBN-001", borrowDate1); 
myLibrary.borrowBook("M-002", "ISBN-002", borrowDate2); 

console.log("\n--- 3. DURUM KONTROLÜ (ÖDÜNÇ ALINDIKTAN SONRA) ---");
myLibrary.viewAvailableBooks();
myLibrary.viewBorrowedBooks();

console.log("\n--- 4. İADE İŞLEMLERİ VE CEZA KONTROLÜ ---");
const onTimeReturnDate = new Date("2024-03-20");
myLibrary.returnBook("M-002", "ISBN-002", onTimeReturnDate);

const lateReturnDate = new Date("2024-03-26");
myLibrary.returnBook("M-001", "ISBN-001", lateReturnDate);

console.log("\n--- 5. DURUM KONTROLÜ (İADELERDEN SONRA) ---");
myLibrary.viewAvailableBooks();
myLibrary.viewBorrowedBooks();
   
   

 


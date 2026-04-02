/*
===========================================================
  LIBRARY MANAGEMENT SYSTEM - FULL IMPLEMENTATION
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

// --- STEP 1: Book Class ---
/*
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
  #isBorrowed = false;

  constructor(title, author, isbn) {
    if (typeof title !== "string" || title.trim().length < 3)
      throw new Error("Geçersiz Kitap Adı");
    if (typeof author !== "string" || author.trim().length < 3)
      throw new Error("Geçersiz Yazar");
    if (typeof isbn !== "string") throw new Error("Geçersiz ISBN");
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }

  get isBorrowed() {
    return this.#isBorrowed;
  }

  toggleBorrowedStatus() {
    this.#isBorrowed = !this.#isBorrowed;
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
    if (typeof name !== "string" || name.length < 3)
      throw new Error("Geçersiz Üye İsmi");
    if (typeof memberId !== "string" && typeof memberId !== "number")
      throw new Error("Geçersiz Üye ID");

    this.name = name;
    this.memberId = memberId;
    this.borrowedBooks = []; // ISBN listesi
  }

  borrowBook(isbn) {
    if (!this.borrowedBooks.includes(isbn)) {
      this.borrowedBooks.push(isbn);
    }
  }

  returnBook(isbn) {
    this.borrowedBooks = this.borrowedBooks.filter((item) => item !== isbn);
  }
}

// --- STEP 3, 4, 5 & 6: Library Class ---
class Library {
  #books = [];
  #members = [];
  #lateFeesPerDay = 0.5;
  #borrowRecords = {};

  constructor() {
    console.log("--- Kütüphane Sistemi Aktif ---");
  }

  // Step 4: Kitap ve Üye Yönetimi
  addBook(book) {
    if (this.#books.find((b) => b.isbn === book.isbn)) {
      console.log(`Hata: ${book.isbn} zaten mevcut.`);
      return;
    }
    this.#books.push(book);
    console.log(`Kitap Eklendi: ${book.title}`);
  }

  removeBook(isbn) {
    const bookIndex = this.#books.findIndex((b) => b.isbn === isbn);

    if (bookIndex === -1) {
      console.log(`Hata: ${isbn} ISBN numaralı kitap bulunamadı.`);
      return;
    }

    const book = this.#books[bookIndex];

    if (book.isBorrowed) {
      console.log(
        `Hata: "${book.title}" şu an bir üyede, iade edilmeden silinemez.`,
      );
    } else {
      this.#books.splice(bookIndex, 1);
      console.log(`Kitap Silindi: ${book.title}`);
    }
  }

  registerMember(member) {
    if (this.#members.find((m) => m.memberId === member.memberId)) {
      console.log(`Hata: ${member.memberId} ID'li üye zaten var.`);
      return;
    }
    this.#members.push(member);
    console.log(`Üye Kaydedildi: ${member.name}`);
  }

  // Step 5: Ödünç Alma ve İade
  borrowBook(memberId, isbn, borrowDate) {
    const member = this.#members.find((m) => m.memberId === memberId);
    const book = this.#books.find((b) => b.isbn === isbn);

    if (!member || !book) {
      console.log("Hata: Üye veya Kitap bulunamadı.");
      return;
    }

    if (book.isBorrowed) {
      console.log(`Üzgünüz, '${book.title}' şu an ödünçte.`);
      return;
    }

    // İşlemleri gerçekleştir
    book.toggleBorrowedStatus();
    member.borrowBook(isbn);
    this.#borrowRecords[`${memberId}-${isbn}`] = new Date(borrowDate);

    console.log(`BAŞARILI: ${member.name}, '${book.title}' kitabını aldı.`);
  }

  returnBook(memberId, isbn, returnDate) {
    const member = this.#members.find((m) => m.memberId === memberId);
    const book = this.#books.find((b) => b.isbn === isbn);
    const recordKey = `${memberId}-${isbn}`;
    const borrowDate = this.#borrowRecords[recordKey];

    if (!book.isBorrowed) {
      console.log("Kitap zaten kütüphanede.");
      return;
    }

    if (!member || !book || !borrowDate) {
      console.log("Hata: Geçersiz iade işlemi.");
      return;
    }

    // Gecikme Ücreti Hesaplama
    const rDate = new Date(returnDate);
    const diffTime = Math.abs(rDate - borrowDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays > 14) {
      const lateDays = diffDays - 14;
      const fee = lateDays * this.#lateFeesPerDay;
      console.log(`DİKKAT: ${lateDays} gün gecikme! Ücret: ${fee} TL`);
    }

    // Durumları güncelle
    book.toggleBorrowedStatus();
    member.returnBook(isbn);
    delete this.#borrowRecords[recordKey];
    console.log(`BAŞARILI: '${book.title}' iade edildi.`);
  }

  // Step 6: Görüntüleme
  viewAvailableBooks() {
    console.log("\n--- Mevcut Kitaplar ---");
    this.#books
      .filter((b) => !b.isBorrowed)
      .forEach((b) =>
        console.log(`- ${b.title} (${b.author}) [ISBN: ${b.isbn}]`),
      );
  }

  viewBorrowedBooks() {
    console.log("\n--- Ödünç Verilenler ---");
    this.#books
      .filter((b) => b.isBorrowed)
      .forEach((b) => console.log(`- ${b.title} (Şu an dışarıda)`));
  }
}

// --- STEP 7: TEST ALANI ---
const myLibrary = new Library();

// 1. Nesneleri Oluştur
const book1 = new Book("Hobbit", "J.R.R. Tolkien", "ISBN-001");
const book2 = new Book("1984", "George Orwell", "ISBN-002");
const member1 = new Member("Ali Veli", "M01");

// 2. Kütüphaneye Ekle
myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.registerMember(member1);

// 3. Ödünç Alma (1 Mart'ta almış olsun)
myLibrary.borrowBook("M01", "ISBN-001", "2024-03-01");

// 4. Durumu Görüntüle
myLibrary.viewAvailableBooks();
myLibrary.viewBorrowedBooks();

// 5. İade Etme (20 Mart'ta iade etsin - 19 gün geçmiş, 5 gün gecikme)
console.log("\n--- İade İşlemi Başlıyor ---");
myLibrary.returnBook("M01", "ISBN-001", "2024-03-20");

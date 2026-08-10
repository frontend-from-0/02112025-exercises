/*
===========================================================
  SIMPLE CONTACT BOOK APPLICATION
===========================================================
In this project, you'll create a Contact Book to store and
manage basic info: name, phone, and email.

You'll practice:
1. Arrays and objects
2. Loops (for, for-of, findIndex, etc.)
3. Conditionals (if-else)
4. Basic CRUD (Create, Read, Update, Delete) functionality

Below is a step-by-step guide, with sample code and 
comments explaining what each section does. Run this file
in Node.js or in your browser's console to see the output.
*/

/*
-----------------------------------------------------------
  STEP 1: Setup and Initial Data
-----------------------------------------------------------
1. Create an array named 'contacts' with a few initial 
   sample contacts.
2. Each contact is an object with 'name', 'phone', and 
   'email' properties.
*/
const contacts = [
  {
    name: 'John',
    phone: '0123 234 23 34',
    email: 'johndoe@gmail.com',
  },
  {
    name: 'Guner',
    phone: '0123 234 32 45',
    email: 'gnrkls@gmail.com',
  },

  {
    name: 'Mesut',
    phone: '0000 000 00 00',
    email: 'mesut@gmail.com',
  },
  {
    name: 'Ahmet',
    phone: '0000 000 00 01',
    email: 'ahmet@gmail.com',
  },
];

const ContactBook = [];

/*
-----------------------------------------------------------
  STEP 2: Display All Contacts
-----------------------------------------------------------
Function: displayAllContacts()
- Loops over the 'contacts' array.
- Logs a descriptive string for each contact.

Example output:
  Name: Alice, Phone: 123-456-7890, Email: alice@example.com
*/

function displayAllContacts(contactBook) {
  console.log('Displaying all contacts...');

  if (contactBook.length < 1) {
    console.log('No contacts to display.');
    console.log('----------------');
    return;
  }

  for (let i = 0; i < contactBook.length; i++) {
    console.log(
      `Name: ${contactBook[i].name}, Phone:${contactBook[i].phone} , Email: ${contactBook[i].email}`,
    );
  }
  console.log('End of contacts.');
  console.log('----------------');
}

displayAllContacts(contacts);

// Helper function findContact:
function findContact(name, contactBook) {
  for (let i = 0; i < contactBook.length; i++) {
    if (contactBook[i].name.toLowerCase() === name.toLowerCase()) {
      return contactBook[i];
    }
  }

  return null;
}

/*
-----------------------------------------------------------
  STEP 3: Add a New Contact
-----------------------------------------------------------
Function: addContact(name, phone, email)
- Creates a new contact object and pushes it into 'contacts'.
- Checks if a contact with the same name already 
  exists before adding. If found, logs a warning and returns.
- Logs "Contact added successfully." if everything is good.
*/

function addContact(name, phone, email, contactBook) {
  console.log('Adding contact with name...', name);

  console.log('Verifying if the contact exists');

  const maybeContact = findContact(name, contactBook);

  if (maybeContact) {
    console.warn(`Warning: contact with name ${name} already exists`);
    console.log('----------------');
    return;
  }

  console.log('Contact is not found.');
  const newContact = {
    name: name,
    phone: phone,
    email: email,
  };

  //   const newContact = {name, phone,email}; - shorter syntax becuase name, phone and email values are variables and these variables have the same names as their keys.

  contactBook.push(newContact);
  console.log('Added contact with name', name);
  console.log('----------------');
}
addContact('muhammed', '555-4497', 'muhammed@gmail.com', contacts);
addContact('John', '555-4497', 'muhammed@gmail.com', contacts);
addContact('john', '555-4497', 'muhammed@gmail.com', contacts);

displayAllContacts(contacts);
/*
-----------------------------------------------------------
  STEP 4: View a Contact by Name
-----------------------------------------------------------
Function: viewContact(name)
- Loops over 'contacts' to find one matching 'name'.
- Logs the contact info if found.
- Otherwise, logs: "No contact found with the name: <name>"
*/
function viewContact(name, contactBook) {
  console.log('Looking for contact with the name ' + name);

  const maybeContact = findContact(name, contactBook);
  if (maybeContact) {
    console.log('Name: ' + maybeContact.name);
    console.log('Phone: ' + maybeContact.phone);
    console.log('Email: ' + maybeContact.email);
    return;
  }

  console.log('No contact found with the name: ' + name);
}
viewContact('John', contacts);
viewContact('john', contacts);
viewContact('muhammed', contacts);
viewContact('', contacts);

/*
-----------------------------------------------------------
  STEP 5: Update a Contact
-----------------------------------------------------------
Function: updateContact(name, newPhone, newEmail)
- Finds the contact by name and updates phone + email.
- Logs "Contact updated successfully." if found.
- Otherwise, logs: "No contact found with the name: <name>"
*/

function updateContact(name, newPhone, newEmail, contactBook) {
  const maybeContact = findContact(name, contactBook);
  if (maybeContact) {
    maybeContact.phone = newPhone;
    maybeContact.email = newEmail;
    console.log('Contact updated successfully.');
  } else {
    console.log('No contact found with the name ', name);
  }
}
updateContact("Seda","5649373","seda@gmail.com",contacts);
updateContact('John', '12345', 'aa@gmail.com', contacts);
viewContact('John', contacts);

displayAllContacts(contacts);
/*
-----------------------------------------------------------
  STEP 6: Remove a Contact
-----------------------------------------------------------
Function: removeContact(name)
- Finds the index of the contact with 'name' using 
  findIndex() or a loop.
- Splices it from the array if found.
- Logs "Contact removed successfully." if found.
- Otherwise, logs: "No contact found with the name: <name>"
*/

function removeContact(name) {
  const index = contacts.findIndex(contact => contact.name === name);

  if (index !== -1) {
    contacts.splice(index, 1);
    console.log("Contact removed successfully.");
  } else {
    console.log(`No contact found with the name: ${name}`);
  }
}

removeContact("John");
console.log(contacts);
/*
-----------------------------------------------------------
  STEP 7: Testing Our Functions
-----------------------------------------------------------
Below are some sample function calls to demonstrate the 
Contact Book in action.
*/
function removeContact(name) {
  const index = contacts.findIndex(contact => contact.name.includes(name));

  if (index !== -1) {
    contacts.splice(index, 1);
    console.log("Contact removed successfully.");
  } else {
    console.log(`No contact found with the name: ${name}`);
  }
}

removeContact("John");
console.log(contacts);

console.log("Optional 1 Lesson Finished")

function sortContacts() {
  contacts.sort((a, b) => a.name.localeCompare(b.name));
  console.log("Contacts sorted alphabetically.");
}

sortContacts();
console.log(contacts);
console.log("Optional 2 Lesson Finished")

function searchContact(value) {
  const contact = contacts.find(
    c => c.phone === value || c.email === value
  );

  if (contact) {
    console.log("Contact found:", contact);
  } else {
    console.log(`No contact found with phone or email: ${value}`);
  }
}

searchContact("0000 000 00 01");
searchContact("mesut@gmail.com");
console.log("Optional 3 Lesson Finished")
/*
-----------------------------------------------------------
  OPTIONAL ENHANCEMENTS:
-----------------------------------------------------------
1. Partial Name Search:
   - Instead of strict ===, use .includes() for the name check.

2. Sort Contacts:
   - Add a function to sort contacts alphabetically by name.
   
3. Search by multiple fields:
   - e.g., find a contact by phone number or email.
*/

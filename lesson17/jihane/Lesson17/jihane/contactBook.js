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
];

const emptyContactBook = [];

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


function removeContact(name, contactBook) {
  console.log('Trying to remove contact with name:', name);

  const index = contactBook.findIndex(
    (contact) => contact.name.toLowerCase() === name.toLowerCase()
  );

  if (index !== -1) {
    contactBook.splice(index, 1);
    console.log('Contact removed successfully.');
  } else {
    console.log('No contact found with the name:', name);
  }

  console.log('----------------');
}

removeContact('John', contacts);
removeContact('muhammed', contacts);
removeContact('Unknown', contacts);

displayAllContacts(contacts);

/*
-----------------------------------------------------------
  STEP 7: Testing Our Functions
-----------------------------------------------------------
Below are some sample function calls to demonstrate the 
Contact Book in action.
*/

/*
-----------------------------------------------------------
  STEP 7: Testing Our Functions (Corrected)
-----------------------------------------------------------
*/

// Reset test data for isolated testing
const testContacts = [
  { name: 'Jihane', phone: '123456', email: 'jihane@test.com' },
  { name: 'David', phone: '78910', email: 'david@test.com' },
];

// 1. Display initial contacts
displayAllContacts(testContacts);

// 2. Add new contacts
addContact('Anna', '333', 'anna@test.com', testContacts);
addContact('Jihane', '999', 'duplicate@test.com', testContacts); 

// 3. View contacts
viewContact('Jihane', testContacts);
viewContact('anna', testContacts);
viewContact('Unknown', testContacts);

// 4. Update contacts
updateContact('David', '10987', 'updated@test.com', testContacts);
updateContact('Unknown', '000', 'no@test.com', testContacts);

// 5. Remove contacts
removeContact('Jihane', testContacts);
removeContact('Unknown', testContacts);

// 6. Display contacts after removal
displayAllContacts(testContacts);

// 7. Partial name search
searchContactsByName('an', testContacts); 
searchContactsByName('da', testContacts); 

// 8. Sort contacts alphabetically
sortContactsByName(testContacts);
displayAllContacts(testContacts);

// 9. Search by multiple fields
searchContacts('anna', testContacts);
searchContacts('10987', testContacts);
searchContacts('@test.com', testContacts);

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

function searchContactsByName(partialName, contactBook) {
  console.log('Searching contacts with name containing:', partialName);

  const results = contactBook.filter((contact) =>
    contact.name.toLowerCase().includes(partialName.toLowerCase())
  );

  if (results.length === 0) {
    console.log('No matching contacts found.');
  } else {
    results.forEach((contact) => {
      console.log(
        `Name: ${contact.name}, Phone: ${contact.phone}, Email: ${contact.email}`
      );
    });
  }

}

searchContactsByName('ji', contacts);
searchContactsByName('da', contacts);

function sortContactsByName(contactBook) {
  contactBook.sort((a, b) =>
    a.name.toLowerCase().localeCompare(b.name.toLowerCase())
  );

  console.log('Contacts sorted alphabetically.');

}

sortContactsByName(contacts);
displayAllContacts(contacts);

function searchContacts(query, contactBook) {
  console.log('Searching for:', query);

  const results = contactBook.filter((contact) =>
    contact.name.toLowerCase().includes(query.toLowerCase()) ||
    contact.phone.includes(query) ||
    contact.email.toLowerCase().includes(query.toLowerCase())
  );

  if (results.length === 0) {
    console.log('No matching contacts found.');
  } else {
    results.forEach((contact) => {
      console.log(
        `Name: ${contact.name}, Phone: ${contact.phone}, Email: ${contact.email}`
      );
    });
  }

}

searchContacts('jihane', contacts);
searchContacts('123456', contacts);
searchContacts('@gmail.com', contacts);


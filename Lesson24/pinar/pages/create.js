
const userFirstNameInput = document.getElementById('firstName');
const userLastNameInput = document.getElementById('lastName');
const userAgeInput = document.getElementById('age');

const createUserButton = document.querySelector('.button--create');
const closeButton = document.querySelector('.btn-close');

const messageDiv = document.getElementById("messageDiv");
const messageParagraph = document.getElementById("message");
const validationErrorMessage = document.querySelectorAll('.validError');


function createUser(event){
  if (event) event.preventDefault();

  const existingNewUsers = JSON.parse(localStorage.getItem('new_users_list')) || [];
  const nextId = 30 + existingNewUsers.length + 1;

  const newUser = {
  id:nextId,  
  firstName: userFirstNameInput.value.trim(),
  lastName: userLastNameInput.value,
  age: userAgeInput.value,
  }

 const firsNamePattern = /^[A-Za-zÇĞİıÖŞüçğiöşü\s]{2,30}$/;
 const lastNamePattern = /^[A-Za-zÇĞİıÖŞüçğiöşü]{2,30}$/;
 const agePattern = /^(1[0-1][0-9]|120|[1-9]?[0-9])$/;

 

 validationErrorMessage.forEach(p => {
    p.classList.add('hidden');
    p.textContent = "";
});

const isFirstNameValid = validateInput(userFirstNameInput, firsNamePattern, "Please enter a valid name...");
if (!isFirstNameValid) return;

const isLastNameValid = validateInput(userLastNameInput, lastNamePattern, "Please enter a valid name...");
if (!isLastNameValid) return;

const isAgeValid = validateInput(userAgeInput, agePattern, "Please enter an age between 1 and 120.");
if (!isAgeValid) return;


fetch('https://dummyjson.com/users/add', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(newUser)
})
.then((res) => {
  if(!res.ok) throw new Error(`An error occurred. Status: ${res.status}`)
    return res.json();
})
.then((data)=>{
  messageDiv.classList.remove('hidden');
  messageParagraph.textContent = `The user with ${data.firstName} ${data.lastName} has been successfully created whit ID number ${nextId}.`;
  existingNewUsers.push(newUser);
  localStorage.setItem('new_users_list', JSON.stringify(existingNewUsers));
})
.catch((error)=>{
  messageDiv.classList.remove('hidden');
  messageParagraph.textContent = `Something went wrong. ${error.message}`;
})
}

  function validateInput(inputElement, pattern, errorMessage) {
  const value = inputElement.value.trim();
  const errorElement = inputElement.nextElementSibling;
  
  if (!pattern.test(value)) {
    errorElement.classList.remove('hidden');
    errorElement.textContent = errorMessage;
    return false;
  }
  return true;
}


  createUserButton.addEventListener('click', createUser);
  closeButton.addEventListener('click',()=>{
  messageDiv.classList.add('hidden');
  window.location.href = "../index.html";

})
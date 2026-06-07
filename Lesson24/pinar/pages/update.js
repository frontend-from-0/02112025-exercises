const paramsString = window.location.search;
const searchParams = new URLSearchParams(paramsString);
const userId = searchParams.get(`userId`);

const userFirstNameInput = document.getElementById('firstName');
const userLastNameInput = document.getElementById('lastName');
const userAgeInput = document.getElementById('age');

const userUpdateButton = document.querySelector('.button--update');
const closeButton = document.querySelector('.btn-close');

const messageDiv = document.querySelector('.messageDiv');
const messageParagraph = document.getElementById("message");
const validationErrorMessage = document.querySelectorAll('.validError');


if(userId){
fetch(`https://dummyjson.com/users/${userId}`)
 .then(res => {
  if (!res.ok) throw new Error("User doesn\'t exist.");
      return res.json();
})
 .then((user)=>{
      const localData = localStorage.getItem(`updated_user_${userId}`);
      let userToDisplay = user;

      if (localData) {
        userToDisplay = JSON.parse(localData);
      }

  userFirstNameInput.value = userToDisplay.firstName;
  userLastNameInput.value = userToDisplay.lastName;
  userAgeInput.value = userToDisplay.age;
  userIdInput.value = userToDisplay.id;
 })
}

function updateUser(event){
  if (event) event.preventDefault();
 const updatedUser = {
  firstName: userFirstNameInput.value.trim(),
  lastName: userLastNameInput.value,
  age: userAgeInput.value,

 };
 const firsNamePattern = /^[A-Za-zÇĞİıÖŞüçğiöşü\s]{2,30}$/;
 const lastNamePattern = /^[A-Za-zÇĞİıÖŞüçğiöşü]{2,30}$/;
 const agePattern = /^(1[0-1][0-9]|120|[1-9]?[0-9])$/;

 
 validationErrorMessage.forEach(p => {
    p.classList.add('hidden');
    p.textContent = "";
});


const isFirstNameValid = validateInput(userFirstNameInput, firsNamePattern, "Please enter a valid name consisting min 2 characters and letters.");
if (!isFirstNameValid) return;

const isLastNameValid = validateInput(userLastNameInput, lastNamePattern, "Please enter a valid name consisting min 2 characters and letters.");
if (!isLastNameValid) return;

const isAgeValid = validateInput(userAgeInput, agePattern, "Please enter an age between 1 and 120.");
if (!isAgeValid) return;

 fetch(`https://dummyjson.com/users/${userId}`, {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(updatedUser)
})
.then(res => {
  if(!res.ok) throw new Error(`An error occurred. Status: ${res.status}`)
    return res.json();
})
.then((updatedUser)=>{
  messageDiv.classList.remove('hidden');
  messageParagraph.textContent = `The user with ${userId} id has been successfully updated.`;
  localStorage.setItem(`updated_user_${userId}`, JSON.stringify(updatedUser));
})
.catch(error=>{
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

  userUpdateButton.addEventListener('click', updateUser);
  closeButton.addEventListener('click',()=>{
  messageDiv.classList.add('hidden');
  window.location.href = "../index.html";
})

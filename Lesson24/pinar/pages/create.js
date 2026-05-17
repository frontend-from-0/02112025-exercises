
const userFirstNameInput = document.getElementById('firstName');
const userLastNameInput = document.getElementById('lastName');
const userAgeInput = document.getElementById('age');

const createUserButton = document.getElementById('createUserButton');
const closeButton = document.querySelector('.btn-close');


function createUser(event){
  if (event) event.preventDefault();

  const existingNewUsers = JSON.parse(localStorage.getItem('new_users_list')) || [];
  const nextId = 30 + existingNewUsers.length + 1;

  const newUser = {
  id:nextId,  
  firstName: userFirstNameInput.value,
  lastName: userLastNameInput.value,
  age: userAgeInput.value,
  }

 const firsNamePattern = /^[A-Za-zÇĞİıÖŞüçğiöşü\s]{2,30}$/;
 const lastNamePattern = /^[A-Za-zÇĞİıÖŞüçğiöşü]{2,30}$/;
 const agePattern = /^(1[0-1][0-9]|120|[1-9]?[0-9])$/;

 const messageDiv = document.getElementById("messageDiv");
 const messageParagraph = document.getElementById("message");
 const validationErrorMessage = document.querySelectorAll('.validError');

 validationErrorMessage.forEach(p => {
    p.classList.add('hidden');
    p.textContent = "";
});

if(!firsNamePattern.test(userFirstNameInput.value)){
  const validErrorElement = userFirstNameInput.nextElementSibling;
   validErrorElement.classList.remove('hidden');
   validErrorElement.textContent = ("Please enter a valid name consisting min 2 characters and letters.");
  return;
}

if(!lastNamePattern.test(userLastNameInput.value)){
  const validErrorElement = userLastNameInput.nextElementSibling;
  validErrorElement.classList.remove('hidden');
  validErrorElement.textContent = ("Please enter a valid name consisting min 2 characters and letters.");
  return;
}

if(!agePattern.test(userAgeInput.value)){
  const validErrorElement = userAgeInput.nextElementSibling;
  validErrorElement.classList.remove('hidden');
  validErrorElement.textContent = ("Please enter an age between 1 and 120.");
  return;
}

fetch('https://dummyjson.com/users/add', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(newUser)
})
.then(res => {
  if(!res.ok) throw new Error(`An error occurred. Status: ${res.status}`)
    return res.json();
})
.then((data)=>{
  messageDiv.classList.remove('hidden');
  messageParagraph.textContent = `The user with ${data.firstName} ${data.lastName} has been successfully created wit ID number ${nextId}.`;
  existingNewUsers.push(newUser);
  localStorage.setItem('new_users_list', JSON.stringify(existingNewUsers));
})
.catch(error=>{
  messageDiv.classList.remove('hidden');
  messageParagraph.textContent = `Something went wrong. ${error.message}`;
})
}
  createUserButton.addEventListener('click', createUser);
  closeButton.addEventListener('click',()=>{
  messageDiv.classList.add('hidden');
  window.location.href = "../index.html";

})
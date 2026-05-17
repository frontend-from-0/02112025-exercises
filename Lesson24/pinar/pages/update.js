const paramsString = window.location.search;
const searchParams = new URLSearchParams(paramsString);
const userId = searchParams.get(`userId`);

const userIdInput = document.getElementById('id');
const userFirstNameInput = document.getElementById('firstName');
const userLastNameInput = document.getElementById('lastName');
const userAgeInput = document.getElementById('age');

const userUpdateButton = document.querySelector('.button--update');
const closeButton = document.querySelector('.btn-close');

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
  id: userIdInput.value,
  firstName: userFirstNameInput.value,
  lastName: userLastNameInput.value,
  age: userAgeInput.value,

 };
 const idPattern = /^[0-9]+$/;
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

if(!idPattern.test(userIdInput.value)){
 const validErrorElement = userIdInput.nextElementSibling;
  validErrorElement.classList.remove('hidden');
  validErrorElement.textContent = ("Please enter avalid id number consisting only numbers.");
 return;
}

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
  userUpdateButton.addEventListener('click', updateUser);
  closeButton.addEventListener('click',()=>{
  messageDiv.classList.add('hidden');
  window.location.href = "../index.html";
})

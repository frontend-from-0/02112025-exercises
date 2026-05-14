const paramsString = window.location.search;
const searchParams = new URLSearchParams(paramsString);
const userId = searchParams.get(`userId`);

const userIdInput = document.getElementById('id');
const userFirstNameInput = document.getElementById('firstName');
const userLastNameInput = document.getElementById('lastName');
const userAgeInput = document.getElementById('age');

const userUpdateButton = document.getElementsByClassName('button--update');

if(userId){
fetch(`https://dummyjson.com/users/${userId}`)
 .then(res => {
  if (!res.ok) throw new Error("User doesn\'t exist.");
      return res.json();
})
 .then((user)=>{
  userFirstNameInput.value = user.firstName;
  userLastNameInput.value = user.lastName;
  userAgeInput.value = user.age;
  userIdInput.value = user.id;
 })
}

function updateUser(userId){
 const updatedUser = {
  id: userIdInput.value,
  firstName: userFirstNameInput.value,
  lastName: userLastNameInput.value,
 };
 const idPattern = /^[0-9]+$/;
 const firsNamePattern = /^[A-Za-zÇĞİıÖŞüçğiöşü\s]{2,30}$/;
 const lastNamePattern = /^[A-Za-zÇĞİıÖŞüçğiöşü]{2,30}$/;
 const agePattern = /^(1[0-1][0-9]|120|[1-9]?[0-9])$/;

 const messageDiv = document.getElementById("messageDiv");
 const messageParagraph = document.getElementById("message");

if(!idPattern.test(userIdInput.value)){
 alert("Please enter avalid id number consisting only numbers and min 2 caracters.");
 return;
}

if(!firsNamePattern.test(userFirstNameInput.value)){
  alert("Please enter a valid name consisting min 2 characters and letters.");
  return;
}

if(!lastNamePattern.test(userLastNameInput.value)){
  alert("Please enter a valid name consisting min 2 characters and letters.");
  return;
}

if(!agePattern.test(userAgeInput.value)){
  alert("Please enter an age between 1 and 120.");
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
})
.catch(error=>{
  messageDiv.classList.remove('hidden');
  messageParagraph.textContent = `Something went wrong. ${res.status}`;
})
}
userUpdateButton.addEventListener('click', updateUser);




// When form is submitted, read and validate form data, then send UPDATE request to update user information https://dummyjson.com/docs/users#users-update
// Once you get response, show a success or error message on the page
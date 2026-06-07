
const container = document.getElementById('container');
const fetchUsersButton = document.getElementById('fetchUsersButton');
const closeButton = document.querySelector('.btn-close');

function createUserCard(userObj){
       const card = document.createElement('div');
        card.classList.add('card');
        card.id = `card-${userObj.id}`

        const title = document.createElement('h2');
        title.classList.add(`card-title`);
        title.textContent = `User: ${userObj.id}`;

        const paragraph = document.createElement('p');
        paragraph.classList.add('card-body');
        paragraph.textContent = `Name: ${userObj.firstName},   Last Name: ${userObj.lastName},   Age ${userObj.age}`;
      
        const buttonDiv = document.createElement('div');
        buttonDiv.classList.add('buttonDiv')
        
        const updateButton = document.createElement('a');
        updateButton.classList.add('button', 'button--update');
        updateButton.textContent = 'Update User';
        updateButton.href = `./pages/update.html?userId=${userObj.id}`;

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('button', 'button--danger');
        deleteButton.textContent = 'Delete User';
        deleteButton.addEventListener('click', () => deleteUser(userObj.id));

        card.appendChild(title);
        card.appendChild(paragraph);
        buttonDiv.appendChild(updateButton);
        buttonDiv.appendChild(deleteButton);
        card.appendChild(buttonDiv);
        container.appendChild(card);
}

function getUsers() {
  fetch('https://dummyjson.com/users')
    .then((res) => {
      if (!res.ok) {
        throw new Error(`An error occurred. Status: ${res.status}`);
      }
      return res.json();
    })
    .then((data) => {
      container.innerHTML = "";
      const users = data.users;
      users.forEach((user) => {

        const localData = localStorage.getItem(`updated_user_${user.id}`);
        let userToDisplay = user;
        if (localData) {
          userToDisplay = JSON.parse(localData); 
        }
        createUserCard(userToDisplay);
      });
    
      const localNewUsers = JSON.parse(localStorage.getItem('new_users_list')) || [];
      localNewUsers.forEach((newUser) => {
        createUserCard(newUser);
      });
    })
    .catch((err) => console.error(err.message)); 
}
    

function deleteUser (userId) {
  const messageDiv = document.getElementById('messageDiv');
  const messageParagraph = document.getElementById('message');
fetch(`https://dummyjson.com/users/${userId}`, {
  method: 'DELETE',
})
.then((res)=>{
  if(!res.ok){
    throw new Error (`Some thing went wrong! Try delete user again. Status: ${res.status}`)
  }
  return res.json();
})
.then((user)=>{
   
   messageDiv.classList.remove('hidden');
   messageParagraph.textContent =`The user with id number ${user.id}, ${user.firstName} ${user.lastName} has been deleted succesfully.`; 
   localStorage.removeItem(`updated_user_${userId}`);
   const deletedUser = document.getElementById(`card-${user.id}`);
   if(deletedUser){
   deletedUser.remove();}
  })
.catch((error)=>{
  console.error("Error:", error.message);
  
  messageParagraph.textContent = error.message; 
  messageDiv.classList.remove('hidden');
})

}

fetchUsersButton.addEventListener('click', getUsers);
closeButton.addEventListener('click', ()=>{
  messageDiv.classList.add('hidden');
})


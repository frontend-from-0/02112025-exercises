/* 
CRUD - set of basic operations or functions that are commonly used in the context of database management and web applications to manage and manipulate data.
C - create - POST method (has request body to transfer data)
R - read - GET method (cannot have request body to send data to the server)
U - update - PUT / PATCH method (have request body to transfer data)
D - delete - DELETE method
Status codes
HTTP status codes are three-digit numbers that the server sends in response to a client's request made to a web server. They provide information about the outcome of the request, whether it was successful, encountered an error, or requires further action. HTTP status codes are grouped into several ranges, each indicating a different category of response. 
100... - Informational Responses
200... - Successful Responses (200 OK, 201 Created, 204 No content)
300.. - redirection (301 Moved Permanently, Found (or 307 Temporary Redirect))
400... - Errors (400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found)
500... - Service error (500 Internal Server Error, 502 Bad Gateway, 503 Service Unavailable)
*/
const container = document.getElementById('container');
const fetchUsersButton = document.getElementById('fetchUsersButton');
const closeButton = document.querySelector('.btn-close');

function getUsers() {
  fetch('https://dummyjson.com/users')
    .then((res) => {
      if (!res.ok) {
        throw new Error(`An error occurred. Status: ${res.status}`);
      }
      return res.json();
    })
    .then((data) => {
      const users = data.users;
      users.forEach((user) => {
      
        const card = document.createElement('div');
        card.classList.add('card');
        card.id = `card-${user.id}`

        const title = document.createElement('h2');
        title.classList.add(`card-title`);
        title.textContent = `User: ${user.id}`;

        const paragraph = document.createElement('p');
        paragraph.classList.add('card-body');
        paragraph.textContent = `Name: ${user.firstName},   Last Name: ${user.lastName},   Age ${user.age}`;

        const buttonDiv = document.createElement('div');
        buttonDiv.classList.add('buttonDiv')
        
        const updateButton = document.createElement('a');
        updateButton.classList.add('button', 'button--update');
        updateButton.textContent = 'Update User';
        updateButton.href = `./pages/update.html?userId=${user.id}`;

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('button', 'button--danger');
        deleteButton.textContent = 'Delete User';
        deleteButton.addEventListener('click', () => deleteUser(user.id));


        card.appendChild(title);
        card.appendChild(paragraph);
        buttonDiv.appendChild(updateButton);
        buttonDiv.appendChild(deleteButton);
        card.appendChild(buttonDiv);

        
        container.appendChild(card);
      });
    });
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


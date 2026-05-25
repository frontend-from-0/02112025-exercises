const userForm = document.getElementById('userForm');
const firstNameInput = document.getElementById('firstName');
const lastNameInput = document.getElementById('lastName');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const notification = document.getElementById('notification');
const message = document.getElementById('message');
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function createUser(event) {
  event.preventDefault();

  const newUser = {
    firstName: firstNameInput.value,
    lastName: lastNameInput.value,
    email: emailInput.value,
    password: passwordInput.value,
  };

  if (
    !newUser.firstName ||
    !newUser.lastName ||
    !newUser.email ||
    !newUser.password
  ) {
    notification.classList.remove('hidden');
    message.textContent = 'All fields are required.';
    return;
  }
  if (!emailRegex.test(newUser.email)) {
    notification.classList.remove('hidden');
    message.textContent = 'Enter a valid email address.';
    return;
  }

  fetch('https://dummyjson.com/users/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newUser),
  })
    .then((response) => {
      if (!response.ok) throw new Error('User creation failed.');
      return response.json();
    })
    .then((data) => {
      console.log(data);
      notification.classList.remove('hidden');
      message.textContent = 'User created successfully.';
    })
    .catch((error) => {
      console.error(error);
      notification.classList.remove('hidden');
      message.textContent = 'An error occured.';
    });
}

userForm.addEventListener('submit', createUser);

const userForm = document.getElementById('userForm');
const firstNameInput = document.getElementById('firstName');
const lastNameInput = document.getElementById('lastName');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const notification = document.getElementById('notification');
const message = document.getElementById('message');
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

function createUser(event) {
  event.preventDefault();

  const newUser = {
    firstName: firstNameInput.value.trim(),
    lastName: lastNameInput.value.trim(),
    email: emailInput.value.trim(),
    password: passwordInput.value.trim(),
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
  if (newUser.firstName.length <= 1) {
    notification.classList.remove('hidden');
    message.textContent = 'The first name must be at least 2 characters.';
    return;
  }
  if (newUser.lastName.length <= 1) {
    notification.classList.remove('hidden');
    message.textContent = 'The last name must be at least 2 characters.';
    return;
  }
  if (!passRegex.test(newUser.password)) {
    notification.classList.remove('hidden');
    message.textContent = 'The password must be at least 8 characters and include at least one number and one letter.';
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

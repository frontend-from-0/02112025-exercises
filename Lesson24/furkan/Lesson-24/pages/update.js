const paramsString = window.location.search;

const searchParams = new URLSearchParams(paramsString);

const userId = searchParams.get('userId');
// Select elements from HTML
// Fetch data of the user with a given id, then prefill the form with this data
// When form is submitted, read and validate form data, then send UPDATE request to update user information https://dummyjson.com/docs/users#users-update
// Once you get response, show a success or error message on the page

document.addEventListener('DOMContentLoaded', () => {
  const userForm = document.getElementById('userForm');
  const firstNameInput = document.getElementById('firstName');
  const lastNameInput = document.getElementById('lastName');
  const emailInput = document.getElementById('email');
  const notification = document.getElementById('notification');
  const message = document.getElementById('message');
  const profileInfo = document.getElementById('profileInfo');

  function getUsers() {
    fetch(`https://dummyjson.com/users/${userId}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`An error occurred. Status: ${res.status}`);
        }
        return res.json();
      })
      .then((user) => {
        profileInfo.textContent = '';
          const details = [
          `Gender: ${user.gender}`,
          `Id: ${user.id}`,
          `Age: ${user.age}`,
          `Birthday: ${user.birthDate}`,
          `Company: ${user.company?.name}`,
          `Password: ${user.password}`,
          `Role: ${user.role}`,];

        details.forEach(detail => {
          const p = document.createElement('p');
          p.textContent = detail;
          profileInfo.appendChild(p);
        });
      })
      .catch((error) => {
        console.error(error);
        notification.classList.remove('hidden');
        message.textContent = 'failed to fetch user.';
      });
  }
  function updateUser(event) {
    event.preventDefault();

    const updatedUser = {
      firstName: firstNameInput.value,
      email: emailInput.value,
    };
    if (!updatedUser.firstName || !updatedUser.email) {
      notification.classList.remove('hidden');
      message.textContent = 'All fields are required.';
      return;
    }

    fetch(`https://dummyjson.com/users/${userId}`, {
      method: 'PATCH',

      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify(updatedUser),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Update failed');
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        notification.classList.remove('hidden');
        message.textContent = 'User updated successfully.';
      })
      .catch((error) => {
        console.log(error);
        notification.classList.remove('hidden');
        message.textContent = 'An error occured.';
      });
  }

  getUsers();
  userForm.addEventListener('submit', updateUser);
});
console.log(window.location.href);

const params = new URLSearchParams(window.location.search);
const userId = params.get('userId');

const form = document.getElementById('updateForm');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const user = {
    firstName: firstName.value,
    lastName: lastName.value
  };

  fetch(`https://dummyjson.com/users/${userId}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user)
  })
  .then(res => res.json())
  .then(() => {
    showModal('User updated!');
    setTimeout(() => window.location.href = 'index.html', 2000);
  });
});
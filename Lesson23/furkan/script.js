const postContainer = document.getElementById('postContainer');
const fetchButton = document.getElementById('fetchDataBtn');
const errorMsg = document.getElementById('errorMsg');
const randomImage = document.getElementById('randomImage');

function getPosts() {
  const response = fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `An error occured when fetching posts. Status: ${response.status},
          status text: ${response.statusText}`,
        );
      }
      console.log('Right after the error');
      return response.json();
    })
    .then((resultOfResponesJson) => console.log())
    .catch((error) => {
      console.error('An error occured.', error);
    });
}

function getRandomUsers() {
  postContainer.innerHTML = 'Loading...';
  fetch('https://randomuser.me/api/')
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `An error occured when fetching random users.
          Status: ${response.status},
          status text: ${response.statusText}`,
        );
      }

      return response.json();
    })

    .then((data) => {
      const user = data.results[0];

      console.log(user);

      postContainer.innerHTML = `

        <div class="card">

          <img
            src="${user.picture.large}"
            alt="${user.name.first}"
          >

          <h2>
            ${user.name.first}
            ${user.name.last}
          </h2>

          <p>
            Age: ${user.dob.age}
          </p>

          <p>
            Email: ${user.email}
          </p>

          <p>
            Phone: ${user.phone}
          </p>

          <p>
            City: ${user.location.city}
          </p>

          <p>
            Country: ${user.location.country}
          </p>

          <p>
            Username:
            ${user.login.username}
          </p>

        </div>
      `;
    })

    .catch((error) => {
      console.error('An error occured.', error);

      errorMsg.textContent = 'An error occured when fetching users.';
    });
}

fetchButton.addEventListener('click', getRandomUsers);

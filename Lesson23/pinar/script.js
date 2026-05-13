const fetchButton = document.getElementById('fetchDataBtn');
const errorMsg = document.getElementById('errorMsg');
const randomImage = document.getElementById('randomImage');

function getRandomPhoto() {
  fetch(`https://api.unsplash.com/photos/random?orientation=portrait&query=sea&client_id=${UNSPLASH_CLIENT_ID}`)
    .then(
      (response) => {
      if (!response.ok) {
        throw new Error(
          `An error occured when fetching random photo. Status: ${response.status}, status text: ${response.statusText}`,
        );
      }
      return response.json();
    }
  )
    .then((data) => {
      console.log(data);
      randomImage.src = data.urls.regular;
      randomImage.alt = data.alt_description;
      return false;
    })
    .then(somethinElse => console.log('Something else is', somethinElse))
    .catch((error) => {
      console.error('An error occured.', error);
      errorMsg.textContent = 'An error occured when fetching random photo.';
    })
    .finally(() => {
      document.body.classList.toggle('bg-dark')
    });
}

fetchButton.addEventListener('click', getRandomPhoto);

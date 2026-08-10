const fetchButton = document.getElementById("fetchDataBtn");
const errorMsg = document.getElementById("errorMsg");
const postsContainer = document.getElementById("postsContainer");
const clearButton = document.getElementById("clearDataBtn");
const modal = document.getElementById("confirmModal");
const confirmYes = document.getElementById("confirmYes");
const confirmNo = document.getElementById("confirmNo");

clearButton.addEventListener("click", () => {
  modal.classList.remove("hidden");
});

confirmNo.addEventListener("click", () => {
  modal.classList.add("hidden");
});

confirmYes.addEventListener("click", () => {
  postsContainer.innerHTML = "";
  errorMsg.textContent = "";
  document.body.classList.remove("bg-dark");

  modal.classList.add("hidden");
});
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.add("hidden");
  }
});

function getPosts() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`An error occurred. Status: ${response.status}`);
      }
      return response.json();
    })
    .then((posts) => {
      postsContainer.innerHTML = "";

      posts.forEach((post) => {
        const postCard = document.createElement("div");
        postCard.classList.add("post-card");

        const title = document.createElement("h3");
        title.textContent = post.id + ": " + post.title;

        const body = document.createElement("p");
        body.textContent = post.body;

        postCard.appendChild(title);
        postCard.appendChild(body);
        postsContainer.appendChild(postCard);
      });
    })
    .catch((error) => {
      console.error(error);
      errorMsg.textContent = "An error occurred when fetching posts.";
    })
    .finally(() => {
      document.body.classList.toggle("bg-dark");
    });
}

fetchButton.addEventListener("click", getPosts);

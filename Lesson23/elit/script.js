console.log("Bağlantı başarılı! Konsolu görebiliyorum.");

const burgerIcon = document.getElementById("burger_icon");
const burgerMenu = document.getElementById("burger_menu");
const closeIcon = document.getElementById("close_icon");
const postsContainer = document.getElementById("posts_container");

console.log("Burger Icon:", burgerIcon);
console.log("Burger Menu:", burgerMenu);

burgerIcon.addEventListener("click", () => {
  const isHidden = burgerMenu.classList.toggle("hidden");
  burgerIcon.setAttribute("Aria-expanded", !isHidden);
});

closeIcon.addEventListener("click", () => {
  console.log("Close icon has been clicked!");
  burgerMenu.classList.add("hidden");
});

function getPosts() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `An error occured when fetching posts. Status: ${response.status}, Status text: ${response.statusText}`,
        );
      }
      return response.json();
    })
    .then((data) => {
      console.log("Data received successfully:", data);
      data.forEach((post) => {
        const card = document.createElement("div");
        card.classList.add("post_card");

        const titleElement = document.createElement("h2");
        titleElement.textContent = post.title;
        titleElement.classList.add("post_title");

        const bodyElement = document.createElement("p");
        bodyElement.textContent = post.body;
        bodyElement.classList.add("post_body");

        card.appendChild(titleElement);
        card.appendChild(bodyElement);
        postsContainer.appendChild(card);
      });
    })
    .catch((error) => {
      console.error("Fetched error:", error);
    });
}

getPosts();

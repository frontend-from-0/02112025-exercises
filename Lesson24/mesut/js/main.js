const container = document.getElementById("container");
const fetchBtn = document.getElementById("fetchUsersButton");

function getUsers() {
  container.innerHTML = "";

  fetch("https://dummyjson.com/users")
    .then((res) => res.json())
    .then((data) => {
      data.users.forEach((user) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.dataset.id = user.id;

        card.innerHTML = `
          <h3>User: ${user.id}</h3>
          <p>${user.firstName} ${user.lastName}, age ${user.age}</p>
        `;

        const del = document.createElement("button");
        del.textContent = "Delete";
        del.classList.add("button", "button--danger");

        const update = document.createElement("a");
        update.textContent = "Update";
        update.href = `update.html?userId=${user.id}`;
        update.classList.add("button", "button--success");

        del.addEventListener("click", () => {
          showConfirm(user.id, deleteUser);
        });

        card.append(del, update);
        container.appendChild(card);
      });

      /* MODAL MESSAGE AREA*/
      showModal(`${data.users.length} users loaded successfully!`);
    })
    .catch(() => {
      showModal("Error while fetching users!");
    });
}

function deleteUser(userId) {
  fetch(`https://dummyjson.com/users/${userId}`, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then(() => {
      document.querySelector(`[data-id="${userId}"]`)?.remove();
      showModal("User deleted successfully!");
    });
}

fetchBtn.addEventListener("click", getUsers);

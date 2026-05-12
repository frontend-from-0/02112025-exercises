const form = document.getElementById("createForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const user = {
    firstName: firstName.value,
    lastName: lastName.value,
  };

  fetch("https://dummyjson.com/users/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .then(() => {
      showModal("User created!");
      setTimeout(() => (window.location.href = "index.html"), 2000);
    });
});

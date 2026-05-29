const createForm = document.getElementById("createUserForm");
const firstNameInput = document.getElementById("firstName");
const lastNameInput = document.getElementById("lastName");
const ageInput = document.getElementById("age");
const successNotificationDiv = document.getElementById("success_notification");
const errorNotificationDiv = document.getElementById("error_notification");
const successMessageParagraph = document.getElementById("success_message");
const errorMessageParagraph = document.getElementById("error_message");

createForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const newUserData = {
    firstName: firstNameInput.value.trim(),
    lastName: lastNameInput.value.trim(),
    age: parseInt(ageInput.value, 10),
  };

  if (
    !newUserData.firstName ||
    !newUserData.lastName ||
    isNaN(newUserData.age)
  ) {
    errorMessageParagraph.textContent = "Please fill out all fields correctly!";
    errorNotificationDiv.classList.remove("hidden");
    return;
  }

  fetch("https://dummyjson.com/users/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newUserData),
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Failed to create user. Status: ${res.status}`);
      }
      return res.json();
    })
    .then((data) => {
      console.log("User created successfully on API:", data);
      successMessageParagraph.textContent = `User ${data.firstName} ${data.lastName} has been successfully created with ID: ${data.id}!`;
      successNotificationDiv.classList.remove("hidden");
      errorNotificationDiv.classList.add("hidden");
      createForm.reset();
      setTimeout(() => {
        window.location.href = "../index.html";
      }, 3000);
    })
    .catch((error) => {
      console.log("Error creating user:", error);
      errorMessageParagraph.textContent =
        "Failed to create user. Please try again.";
      errorNotificationDiv.classList.remove("hidden");
      successNotificationDiv.classList.add("hidden");
    });
});

const paramsString = window.location.search;
const searchParams = new URLSearchParams(paramsString);

// Select elements from HTML
// Fetch data of the user with a given id, then prefill the form with this data
// When form is submitted, read and validate form data, then send UPDATE request to update user information https://dummyjson.com/docs/users#users-update
// Once you get response, show a success or error message on the page

const userId = searchParams.get("userId");
console.log("Fetched User ID:", userId);

const updateForm = document.getElementById("updateUserForm");
const firstNameInput = document.getElementById("firstName");
const lastNameInput = document.getElementById("lastName");
const ageInput = document.getElementById("age");
const successNotificationDiv = document.getElementById("success_notification");
const errorNotificationDiv = document.getElementById("error_notification");
const successMessageParagraph = document.getElementById("success_message");
const errorMessageParagraph = document.getElementById("error_message");

function getUserDetails() {
  if (!userId) {
    errorMessageParagraph.textContent = "User ID not found in URL!";
    errorNotificationDiv.classList.remove("hidden");
    return;
  }

  fetch(`https://dummyjson.com/users/${userId}`)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Failed to fetch user details. Status: ${res.status}`);
      }
      return res.json();
    })
    .then((user) => {
      firstNameInput.value = user.firstName;
      lastNameInput.value = user.lastName;
      ageInput.value = user.age;
      console.log("Form successfully prefilled with user data", user);
    })
    .catch((error) => {
      console.log("Error fetching user details:", error);
      errorMessageParagraph.textContent =
        "Could not load user details. Please try again.";
      errorNotificationDiv.classList.remove("hidden");
    });
}
getUserDetails();

updateForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const updatedData = {
    firstName: firstNameInput.value.trim(),
    lastName: lastNameInput.value.trim(),
    age: parseInt(ageInput.value, 10),
  };

  if (
    !updatedData.firstName ||
    !updatedData.lastName ||
    isNaN(updatedData.age)
  ) {
    errorMessageParagraph.textContent = "Please fill out all fields correctly!";
    errorNotificationDiv.classList.remove("hidden");
    return;
  }

  fetch(`https://dummyjson.com/users/${userId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedData),
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error("`Failed to update user. Status: ${res.status}`");
      }
      return res.json();
    })
    .then((updatedData) => {
      console.log("User updated successfully on API:", updatedData);
      successMessageParagraph.textContent = `User ${updatedData.firstName} ${updatedData.lastName} has been successfully updated.`;
      successNotificationDiv.classList.remove("hidden");
      errorNotificationDiv.classList.add("hidden");

      setTimeout(() => {
        window.location.href = "../index.html";
      }, 5000);
    })
    .catch((error) => {
      console.log("Error updating user:", error);
      errorMessageParagraph.textContent =
        "An error occurred while updating the user. Please try again.";
      errorNotificationDiv.classList.remove("hidden");
    });
});

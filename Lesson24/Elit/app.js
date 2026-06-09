/* 
CRUD - set of basic operations or functions that are commonly used in the context of database management and web applications to manage and manipulate data.
C - create - POST method (has request body to transfer data)
R - read - GET method (cannot have request body to send data to the server)
U - update - PUT / PATCH method (have request body to transfer data)
D - delete - DELETE method
Status codes
HTTP status codes are three-digit numbers that the server sends in response to a client's request made to a web server. They provide information about the outcome of the request, whether it was successful, encountered an error, or requires further action. HTTP status codes are grouped into several ranges, each indicating a different category of response. 
100... - Informational Responses
200... - Successful Responses (200 OK, 201 Created, 204 No content)
300.. - redirection (301 Moved Permanently, Found (or 307 Temporary Redirect))
400... - Errors (400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found)
500... - Service error (500 Internal Server Error, 502 Bad Gateway, 503 Service Unavailable)
*/
const container = document.getElementById("container");
const fetchUsersButton = document.getElementById("fetchUsersButton");

function getUsers() {
  fetch("https://dummyjson.com/users")
    .then((res) => {
      if (!res.ok) {
        throw new Error(`An error occurred. Status: ${res.status}`);
      }
      return res.json();
    })
    .then((data) => {
      const users = data.users;
      users.forEach((user) => {
        // div with class card
        // h2 with class card-title that will have text 'User: user.id'
        // p with class card-body that will have text "firstName and lastName"

        const card = document.createElement("div");
        card.classList.add("card");

        const title = document.createElement("h2");
        title.classList.add("card-title");
        title.textContent = `User: ${user.id}`;

        const paragraph = document.createElement("p");
        paragraph.classList.add("card-body");
        paragraph.textContent = `${user.firstName} ${user.lastName}, age ${user.age}`;

        const updateButton = document.createElement("a");
        updateButton.classList.add("button", "button--success");
        updateButton.textContent = "Update User";
        updateButton.href = `./pages/update.html?userId=${user.id}`;

        const deleteButton = document.createElement("button");
        deleteButton.classList.add("button", "button--danger");
        deleteButton.textContent = "Delete User";
        deleteButton.addEventListener("click", () => deleteUser(user.id, card));

        card.appendChild(title);
        card.appendChild(paragraph);
        card.appendChild(updateButton);
        card.appendChild(deleteButton);

        container.appendChild(card);
      });
    });
}

function deleteUser(userId, cardElement) {
  // TODO: add fetch request with DELETE method to delete a given user. If response is successful, show a confirmation message on the screen.

  fetch(`https://dummyjson.com/users/${userId}`, {
    method: "DELETE",
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error(`An error occurred. Status: ${res.status}`);
      }
      return res.json();
    })
    .then((data) => {
      console.log(`User deleted successfully:`, data);

      const successNotificationDiv = document.getElementById(
        "success_notification",
      );
      const successMessageParagraph =
        document.getElementById("success_message");

      successMessageParagraph.textContent = `User ${data.firstName} ${data.lastName} has been successfully deleted!`;
      successNotificationDiv.classList.remove("hidden");

      cardElement.remove();

      setTimeout(() => {
        successNotificationDiv.classList.add("hidden");
      }, 3000);
    })

    .catch((error) => {
      console.log("Error during deletion:", error);

      const errorNotificationDiv =
        document.getElementById("error_notification");
      const errorMessageParagraph = document.getElementById("error_message");

      errorMessageParagraph.textContent =
        "An error occurred while deleting the user. Please try again.";
      errorNotificationDiv.classList.remove("hidden");
    });
}

fetchUsersButton.addEventListener("click", getUsers);

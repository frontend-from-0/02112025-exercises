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

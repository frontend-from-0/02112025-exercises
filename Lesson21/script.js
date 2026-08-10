const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phonePattern = /^\+?\d(?:\s?\d){9,19}$/;
const namePattern = /^[a-zA-ZÀ-ÿ][a-zA-ZÀ-ÿ' \-]*[a-zA-ZÀ-ÿ]$/;
// const cardNumberPattern =
//   /^(?<=^|[^0-9])[0-9]{16}(?=[^0-9]|$)|[0-9]{4}[-| |_][0-9]{4}[-| |_][0-9]{4}[-| |_][0-9]{4}/;
/*
1. Select elements (inputs, error elements, form)

2. Add event listeners (submit, blur)

3. [blur events] Get the value and use if statement to compare value to patter or rules
3a. - value is correct -> move on to the next field
3b. - value is not correct -> show error message (add text to the corresponding error element and remove class hidden)

4. [form submit event] Define variable that keeps information about if the form is correct on now.
Trigger another validation, if no error -> show success message.
*/
const emailInput = document.getElementById("email");
const emailErrorParagraph = document.getElementById("emailError");
const phoneInput = document.getElementById("phone");
const phoneErrorParagraph = document.getElementById("phoneError");
const firstNameInput = document.getElementById("firstName");
const firstNameErrorParagraph = document.getElementById("firstNameError");
const lastNameInput = document.getElementById("lastName");
const lastNameErrorParagraph = document.getElementById("lastNameError");
const cardNumberInput = document.getElementById("cardNumber");
const cardNumberErrorParagraph = document.getElementById("cardNumberError");
const cvvInput = document.getElementById("cvv");
const cvvErrorParagraph = document.getElementById("cvvError");
const formElement = document.getElementById("checkoutForm");
const successElement = document.getElementById("success");
let formCorrect = true;

function validateEmail(email) {
  if (email.length < 1) {
    emailErrorParagraph.textContent =
      "An email address is required so we can contact you.";
    emailErrorParagraph.classList.remove("hidden");
    formCorrect = false;
  } else if (!emailPattern.test(email)) {
    emailErrorParagraph.textContent =
      "That doesn’t look like a valid email address (e.g. name@gmail.com).";
    emailErrorParagraph.classList.remove("hidden");
    formCorrect = false;
  } else {
    emailErrorParagraph.textContent = "";
    emailErrorParagraph.classList.add("hidden");
    formCorrect = false;
  }
}

function validatePhone(phone) {
  if (phone.length < 1) {
    phoneErrorParagraph.textContent =
      "A phone number is required so we can contact you.";
    phoneErrorParagraph.classList.remove("hidden");
    formCorrect = false;
  } else if (!phonePattern.test(phone)) {
    phoneErrorParagraph.textContent =
      "That doesn’t look like a valid phone number (e.g. +905554443322). Max 20 digits allowed.";
    phoneErrorParagraph.classList.remove("hidden");
    formCorrect = false;
  } else {
    phoneErrorParagraph.textContent = "";
    phoneErrorParagraph.classList.add("hidden");
  }
}

function validateFirstName(firstName) {
  if (firstName.length < 1) {
    firstNameErrorParagraph.textContent = "First name is required.";
    firstNameErrorParagraph.classList.remove("hidden");
    formCorrect = false;
  } else if (firstName.length > 50) {
    firstNameErrorParagraph.textContent =
      "First name can be 50 characters max.";
    firstNameErrorParagraph.classList.remove("hidden");
    formCorrect = false;
  } else if (!namePattern.test(firstName)) {
    firstNameErrorParagraph.textContent =
      "Names can only contain letters and standard punctuation like hyphens or spaces.";
    firstNameErrorParagraph.classList.remove("hidden");
    formCorrect = false;
  } else {
    firstNameErrorParagraph.textContent = "";
    firstNameErrorParagraph.classList.add("hidden");
  }
}
function validateLastName(lastName) {
  if (lastName.length < 1) {
    lastNameErrorParagraph.textContent = "Last name is required.";
    lastNameErrorParagraph.classList.remove("hidden");
    formCorrect = false;
  } else if (lastName.length > 50) {
    lastNameErrorParagraph.textContent = "Last name can be 50 characters max.";
    lastNameErrorParagraph.classList.remove("hidden");
    formCorrect = false;
  } else if (!namePattern.test(lastName)) {
    lastNameErrorParagraph.textContent =
      "Names can only contain letters and standard punctuation like hyphens or spaces.";
    lastNameErrorParagraph.classList.remove("hidden");
    formCorrect = false;
  } else {
    lastNameErrorParagraph.textContent = "";
    lastNameErrorParagraph.classList.add("hidden");
  }
}

function validateCardNumber(cardNumber) {
  const onlyDigits = /^\d+$/;
  if (cardNumber.length === 0) {
    cardNumberErrorParagraph.textContent = "Your card number is required.";
    cardNumberErrorParagraph.classList.remove("hidden");
    formCorrect = false;
  } else if (cardNumber.length !== 16) {
    cardNumberErrorParagraph.textContent =
      "Your card number must be 16 numbers.";
    cardNumberErrorParagraph.classList.remove("hidden");
    formCorrect = false;
  } else if (!/^\d+$/.test(cardNumber)) {
    cardNumberErrorParagraph.textContent =
      "Card number must contain only numbers.";
    cardNumberErrorParagraph.classList.remove("hidden");
    formCorrect = false;
  } else {
    cardNumberErrorParagraph.textContent = "";
    cardNumberErrorParagraph.classList.add("hidden");
  }
}

function validateCvv(cvv) {
  const onlyDigitCvv = /^\d+$/;
  if (cvv.length === 0) {
    cvvErrorParagraph.textContent = "Your Cvv is required.";
    cvvErrorParagraph.classList.remove("hidden");
    formCorrect = false;
  } else if (cvv.length !== 3) {
    cvvErrorParagraph.textContent = "Your Cvv must be 3 numbers.";
    cvvErrorParagraph.classList.remove("hidden");
    formCorrect = false;
  } else if (!/^\d+$/.test(cvv)) {
    cvvErrorParagraph.textContent = "Cvv must contain only numbers.";
    cvvErrorParagraph.classList.remove("hidden");
    formCorrect = false;
  } else {
    cvvErrorParagraph.textContent = "";
    cvvErrorParagraph.classList.add("hidden");
  }
}

cardNumberInput.addEventListener("change", () => {
  cardNumberInput.value = cardNumberInput.value.replace(/\s/g, "");

  const result = validateCardNumber(cardNumberInput.value);

  cardNumberErrorParagraph.innerText = result;
});

cvvInput.addEventListener("change", () => {
  cvvInput.value = cvvInput.value.replace(/\s/g, "");

  const result = validateCvv(cvvInput.value);

  cvvErrorParagraph.innerText = result;
});

emailInput.addEventListener("change", () => {
  let emailValue = emailInput.value.trim();
  validateEmail(emailValue);
});

phoneInput.addEventListener("change", () => {
  let phoneValue = phoneInput.value.trim();
  validatePhone(phoneValue);
});

firstNameInput.addEventListener("change", () => {
  let firstNameValue = firstNameInput.value.trim();
  validateFirstName(firstNameValue);
});
lastNameInput.addEventListener("change", () => {
  let lastNameValue = lastNameInput.value.trim();
  validateLastName(lastNameValue);
});

cardNumberInput.addEventListener("change", () => {
  let cardNumberValue = cardNumberInput.value.trim();
  validateCardNumber(cardNumberValue);
});
cvvInput.addEventListener("change", () => {
  let cvvValue = cvvInput.value.trim();
  validateCvv(cvvValue);
});

formElement.addEventListener("submit", (event) => {
  event.preventDefault();
  formCorrect = true;
  // TODO: Find error that prevents error message from showing up
  const emailValue = emailInput.value.trim();
  const phoneValue = phoneInput.value.trim();
  const firstNameValue = firstNameInput.value.trim();
  const lastNameValue = lastNameInput.value.trim();
  const cardNumberValue = cardNumberInput.value.trim();
  const cardNumberValue = cardNumberInput.value.trim();
  const cvvValue = cvvInput.value.trim();

  validateEmail(emailValue);
  validatePhone(phoneValue);
  validateFirstName(firstNameValue);
  validateLastName(lastNameValue);
  validateCardNumber(cardNumberValue);
  validateCvv(cvvValue);
  
  if (formCorrect) {
    successElement.classList.remove("hidden");
    formElement.classList.add("hidden");
  }
});

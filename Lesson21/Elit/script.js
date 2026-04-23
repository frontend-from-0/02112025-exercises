const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phonePattern = /^\+?\d(?:\s?\d){9,19}$/;
const namePattern = /^[a-zA-ZÀ-ÿ][a-zA-ZÀ-ÿ' \-]*[a-zA-ZÀ-ÿ]$/;

const cardNumberPattern = /^\d{4}[\s-]?\d{4}[\s-]?\d{4}[\s-]?\d{4}$/;
const expirationDatePattern = /^(0[1-9]|1[0-2])\/\d{2}$/;
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
const expirationDateInput = document.getElementById("expDate");
const expirationDateErrorParagraph = document.getElementById("expDateError");

const formElement = document.getElementById("checkoutForm");
const successElement = document.getElementById("success");
let formCorrect = true;

function validateEmail(email) {
  if (email.length < 1) {
    emailErrorParagraph.textContent =
      "An email address is required so we can contact you.";
    emailInput.setAttribute("aria-invalid", "true");
    emailErrorParagraph.classList.remove("hidden");
    formCorrect = false;
  } else if (!emailPattern.test(email)) {
    emailErrorParagraph.textContent =
      "That doesn’t look like a valid email address (e.g. name@gmail.com).";
    emailInput.setAttribute("aria-invalid", "true");
    emailErrorParagraph.classList.remove("hidden");
    formCorrect = false;
  } else {
    emailErrorParagraph.textContent = "";
    emailInput.setAttribute("aria-invalid", "false");
    emailErrorParagraph.classList.add("hidden");
  }
}

function validatePhone(phone) {
  if (phone.length < 1) {
    phoneErrorParagraph.textContent =
      "A phone number is required so we can contact you.";
    phoneInput.setAttribute("aria-invalid", "true");
    phoneErrorParagraph.classList.remove("hidden");
    formCorrect = false;
  } else if (!phonePattern.test(phone)) {
    phoneErrorParagraph.textContent =
      "That doesn’t look like a valid phone number (e.g. +905554443322). Max 20 digits allowed.";
    phoneInput.setAttribute("aria-invalid", "true");
    phoneErrorParagraph.classList.remove("hidden");
    formCorrect = false;
  } else {
    phoneErrorParagraph.textContent = "";
    phoneInput.setAttribute("aria-invalid", "false");
    phoneErrorParagraph.classList.add("hidden");
  }
}

function validateFirstName(firstName) {
  if (firstName.length < 1) {
    firstNameErrorParagraph.textContent = "First name is required.";
    firstNameInput.setAttribute("aria-invalid", "true");
    firstNameErrorParagraph.classList.remove("hidden");
    formCorrect = false;
  } else if (firstName.length > 50) {
    firstNameErrorParagraph.textContent =
      "First name can be 50 characters max.";
    firstNameInput.setAttribute("aria-invalid", "true");
    firstNameErrorParagraph.classList.remove("hidden");
    formCorrect = false;
  } else if (!namePattern.test(firstName)) {
    firstNameErrorParagraph.textContent =
      "Names can only contain letters and standard punctuation like hyphens or spaces.";
    firstNameInput.setAttribute("aria-invalid", "true");
    firstNameErrorParagraph.classList.remove("hidden");
    formCorrect = false;
  } else {
    firstNameErrorParagraph.textContent = "";
    firstNameInput.setAttribute("aria-invalid", "false");
    firstNameErrorParagraph.classList.add("hidden");
  }
}

function validateLastName(lastName) {
  if (lastName.length < 1) {
    lastNameErrorParagraph.textContent = "Last name is required.";
    lastNameInput.setAttribute("aria-invalid", "true");
    lastNameErrorParagraph.classList.remove("hidden");
    formCorrect = false;
  } else if (lastName.length > 50) {
    lastNameErrorParagraph.textContent = "Last name can be 50 characters max.";
    lastNameInput.setAttribute("aria-invalid", "true");
    lastNameErrorParagraph.classList.remove("hidden");
    formCorrect = false;
  } else if (!namePattern.test(lastName)) {
    lastNameErrorParagraph.textContent =
      "Names can only contain letters and standard punctuation like hyphens or spaces.";
    lastNameInput.setAttribute("aria-invalid", "true");
    lastNameErrorParagraph.classList.remove("hidden");
    formCorrect = false;
  } else {
    lastNameErrorParagraph.textContent = "";
    lastNameInput.setAttribute("aria-invalid", "false");
    lastNameErrorParagraph.classList.add("hidden");
  }
}
function validateCardNumber(cardNumber) {
  if (cardNumber.length < 1) {
    cardNumberErrorParagraph.textContent = "Card number is required.";
    cardNumberInput.setAttribute("aria-invalid", "true");
    cardNumberErrorParagraph.classList.remove("hidden");
    formCorrect = false;
  } else if (cardNumber.length < 16 || cardNumber.length > 16) {
    cardNumberErrorParagraph.textContent =
      "Card number must be 16 digits long.";
    cardNumberInput.setAttribute("aria-invalid", "true");
    cardNumberErrorParagraph.classList.remove("hidden");
    formCorrect = false;
  } else if (!cardNumberPattern.test(cardNumber)) {
    cardNumberErrorParagraph.textContent =
      "Ensure your card number contains only numbers and is 16 digits long. (e.g., 1234 5678 1234 5678).";
    cardNumberInput.setAttribute("aria-invalid", "true");
    cardNumberErrorParagraph.classList.remove("hidden");
    formCorrect = false;
  } else {
    cardNumberErrorParagraph.textContent = "";
    cardNumberInput.setAttribute("aria-invalid", "false");
    cardNumberErrorParagraph.classList.add("hidden");
  }
}

function validateExpirationDate(expirationDate) {
  if (expirationDate.length < 1) {
    expirationDateErrorParagraph.textContent = "Expiration Date is required.";
    expirationDateInput.setAttribute("aria-invalid", "true");
    expirationDateErrorParagraph.classList.remove("hidden");
    formCorrect = false;
  } else if (cardNumber.length < 16 || cardNumber.length > 16) {
    cardNumberErrorParagraph.textContent =
      "Card number must be 16 digits long.";
    cardNumberInput.setAttribute("aria-invalid", "true");
    cardNumberErrorParagraph.classList.remove("hidden");
    formCorrect = false;
  } else if (!cardNumberPattern.test(cardNumber)) {
    cardNumberErrorParagraph.textContent =
      "Ensure your card number contains only numbers and is 16 digits long. (e.g., 1234 5678 1234 5678).";
    cardNumberInput.setAttribute("aria-invalid", "true");
    cardNumberErrorParagraph.classList.remove("hidden");
    formCorrect = false;
  } else {
    cardNumberErrorParagraph.textContent = "";
    cardNumberInput.setAttribute("aria-invalid", "false");
    cardNumberErrorParagraph.classList.add("hidden");
  }
}

emailInput.addEventListener("change", () => {
  const emailValue = emailInput.value.trim();
  validateEmail(emailValue);
});

phoneInput.addEventListener("change", () => {
  const phoneValue = phoneInput.value.trim();
  validatePhone(phoneValue);
});

firstNameInput.addEventListener("change", () => {
  const firstNameValue = firstNameInput.value.trim();
  validateFirstName(firstNameValue);
});

lastNameInput.addEventListener("change", () => {
  const lastNameValue = lastNameInput.value.trim();
  validateLastName(lastNameValue);
});

cardNumberInput.addEventListener("change", () => {
  const cardNumberValue = cardNumberInput.value.trim();
  validateCardNumber(cardNumberValue);
});

formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  formCorrect = true; // hataları unutup sıfırlatmak için

  const currentEmailValue = emailInput.value.trim();
  const currentPhoneValue = phoneInput.value.trim();
  const currentFirstNameValue = firstNameInput.value.trim();
  const currentLastNameValue = lastNameInput.value.trim();
  const currentCardNumberValue = cardNumberInput.value.trim();
  validateEmail(currentEmailValue);
  validatePhone(currentPhoneValue);
  validateFirstName(currentFirstNameValue);
  validateLastName(currentLastNameValue);
  validateCardNumber(currentCardNumberValue);

  if (formCorrect) {
    formElement.reset();
    successElement.classList.remove("hidden");
    successElement.focus();
    formElement.classList.add("hidden");
    console.log("Form başarıyla gönderildi!");
  } else {
    const firstError = document.querySelector('[aria-invalid="true"]');
    if (firstError) {
      firstError.focus();
    }
    console.log("Formda hala hatalar var, gönderme işlemi durduruldu.");
  }
});

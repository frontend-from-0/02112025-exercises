const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phonePattern = /^\+?\d(?:\s?\d){9,19}$/;
const namePattern = /^[a-zA-ZÀ-ÿ][a-zA-ZÀ-ÿ' \-]*[a-zA-ZÀ-ÿ]$/;
const cardNumberPattern = /^\d{4}(\s?\d{4}){3}$/;
const expDatePattern = /^(0[1-9]|1[0-2])\/\d{2}$/;
const cvvPattern = /^\d{3,4}$/;
/*
1. Select elements (inputs, error elements, form)

2. Add event listeners (submit, blur)

3. [blur events] Get the value and use if statement to compare value to patter or rules
3a. - value is correct -> move on to the next field
3b. - value is not correct -> show error message (add text to the corresponding error element and remove class hidden)

4. [form submit event] Define variable that keeps information about if the form is correct on now.
Trigger another validation, if no error -> show success message.
*/

/*
What to do:
1. Add validation for the fields that we did not cover in the lesson. Make sure to show a descriptive error message to the user.
2. Show a meaningful confirmation message once the form is submitted successfully.
3. Update CSS so that the page has good color contrast (Run Accessibility test).
4. Make sure that accessibility rules are followed (tip: check how to make input validation errors accessible).
*/

const emailInput = document.getElementById('email');
const emailErrorParagraph = document.getElementById('emailError');

const phoneInput = document.getElementById('phone');
const phoneErrorParagraph = document.getElementById('phoneError');

const firstNameInput = document.getElementById('firstName');
const firstNameErrorParagraph = document.getElementById('firstNameError');

const lastNameInput = document.getElementById('lastname');
const lastNameErrorParagraph = document.getElementById('lastnameError');

const cardNumberInput = document.getElementById('cardnumber');
const cardNumberErrorParagraph = document.getElementById('cardnumberError');

const expDateInput = document.getElementById('expDate');
const expDateErrorParagraph = document.getElementById('expDateError');

const cvvInput = document.getElementById('cvv');
const cvvErrorParagraph = document.getElementById('cvvError');

const formElement = document.getElementById('checkoutForm');

let formCorrect = true;

function showError(paragraph, message) {
  paragraph.textContent = message;
  paragraph.classList.remove('hidden');

  const inputId = paragraph.id.replace('Error', '').toLowerCase();
  const linkedInput = document.querySelector(
    `[aria-describedy="${paragraph.id}"]`,
  );
  if (linkedInput) linkedInput.setAttribute('aria-invalid', 'true');
}

function clearError(paragraph) {
  paragraph.textContent = '';
  paragraph.classList.add('hidden');
  const linkedInput = document.querySelector(
    `[aria-describedby="${paragraph.id}"]`,
  );
  if (linkedInput) linkedInput.setAttribute('aria-invalid', 'false');
}
//------------------------------------------------

function validateEmail(email) {
  if (email.length < 1) {
    emailErrorParagraph.textContent =
      'An email address is required so we can contact you.';
    emailErrorParagraph.classList.remove('hidden');
  } else if (!emailPattern.test(email)) {
    emailErrorParagraph.textContent =
      'That doesn’t look like a valid email address (e.g. name@gmail.com).';
    emailErrorParagraph.classList.remove('hidden');
  } else {
    emailErrorParagraph.textContent = '';
    emailErrorParagraph.classList.add('hidden');
  }
}

function validatePhone(phone) {
  if (phone.length < 1) {
    phoneErrorParagraph.textContent =
      'A phone number is required so we can contact you.';
    phoneErrorParagraph.classList.remove('hidden');
    formCorrect = false;
  } else if (!phonePattern.test(phone)) {
    phoneErrorParagraph.textContent =
      'That doesn’t look like a valid phone number (e.g. +905554443322). Max 20 digits allowed.';
    phoneErrorParagraph.classList.remove('hidden');
    formCorrect = false;
  } else {
    phoneErrorParagraph.textContent = '';
    phoneErrorParagraph.classList.add('hidden');
  }
}

function validateFirstName(firstName) {
  if (firstName.length < 3) {
    firstNameErrorParagraph.textContent =
      'First name must have more than 2 characters.';
    firstNameErrorParagraph.classList.remove('hidden');
    formCorrect = false;
  } else if (firstName.length > 50) {
    firstNameErrorParagraph.textContent =
      'First name can be 50 characters max.';
    firstNameErrorParagraph.classList.remove('hidden');
    formCorrect = false;
  } else if (!namePattern.test(firstName)) {
    firstNameErrorParagraph.textContent =
      'Names can only contain letters and standard punctuation like hyphens or spaces.';
    firstNameErrorParagraph.classList.remove('hidden');
    formCorrect = false;
  } else {
    firstNameErrorParagraph.textContent = '';
    firstNameErrorParagraph.classList.add('hidden');
  }
}

function validateLastName(lastName) {
  if (lastName.length < 2) {
    showError(
      lastNameErrorParagraph,
      'Last name must have more than 2 characters.',
    );
    return false;
  } else if (lastName.length > 50) {
    showError(
      lastNameErrorParagraph,
      'The last name can be a maximum of 50 characters.',
    );
    return false;
  } else if (!namePattern.test(lastName)) {
    showError(
      lastNameErrorParagraph,
      'The surname may only contain letters and standard punctuation marks such as hyphens/spaces.',
    );
    return false;
  }
  clearError(lastNameErrorParagraph);
  return true;
}

function validateCardNumber(cardNumber) {
  if (cardNumber.length < 1) {
    showError(cardNumberErrorParagraph, 'Card number is required.');
    return false;
  } else if (cardNumber.replace(/\s/g, '').length < 16) {
    showError(cardNumberErrorParagraph, 'Card number must be 16 digits long.');
    return false;
  } else if (!cardNumberPattern.test(cardNumber)) {
    showError(
      cardNumberErrorParagraph,
      'The card number must be 16 digits long. (e.g., 1234 5678 9101 1121)',
    );
    return false;
  }
  clearError(cardNumberErrorParagraph);
  return true;
}

function validateExpDate(expDate) {
  if (expDate.length < 1) {
    showError(expDateErrorParagraph, 'Expiration date is required.');
    return false;
  } else if (!expDatePattern.test(expDate)) {
    showError(
      expDateErrorParagraph,
      'The date must be in MM/YY format. (e.g., 04/26)',
    );
    return false;
  }

  const [month, year] = expDate.split('/').map(Number);
  const now = new Date();
  const expiry = new Date(2000 + year, month - 1);
  if (expiry < new Date(now.getFullYear(), now.getMonth())) {
    showError(
      expDateErrorParagraph,
      'This card has expired. Please use a valid card.',
    );
    return false;
  }
  clearError(expDateErrorParagraph);
  return true;
}

function validateCVV(cvv) {
  if (cvv.length < 1) {
    showError(cvvErrorParagraph, 'CVV number is required.');
    return false;
  } else if (!cvvPattern.test(cvv)) {
    showError(
      cvvErrorParagraph,
      'CVV must consist of 3 or 4 digits (e.g., 123).',
    );
    return false;
  }
  clearError(cvvErrorParagraph);
  return true;
}
//Input listeners..

cardNumberInput.addEventListener('input', () => {
  let val = cardNumberInput.value.replace(/\D/g, '').substring(0, 16);
  cardNumberInput.value = val.replace(/(.{4})/g, '$1 ').trim();
});
expDateInput.addEventListener('input', () => {
  let val = expDateInput.value.replace(/\D/g, '').substring(0, 4);
  if (val.length >= 3) val = val.substring(0, 2) + '/' + val.substring(2);
  expDateInput.value = val;
});
phoneInput.addEventListener('input', () => {
  let val = phoneInput.value.replace(/\D/g, '').substring(0, 10);
  phoneInput.value = val.replace(/^(\d{3})(\d{3})(\d{4})$/, '$1 $2 $3');
});

//Change listeners..

emailInput.addEventListener('change', () => {
  const emailValue = emailInput.value.trim();
  validateEmail(emailValue);
});

phoneInput.addEventListener('change', () => {
  const phoneValue = phoneInput.value.trim();
  validatePhone(phoneValue);
});

firstNameInput.addEventListener('change', () => {
  const firstNameValue = firstNameInput.value.trim();
  validateFirstName(firstNameValue);
});

lastNameInput.addEventListener('change', () => {
  const lastNameValue = lastNameInput.value.trim();
  validateLastName(lastNameValue);
});

//Blur listeners..

cardNumberInput.addEventListener('blur', () => {
  const cardNumberValue = cardNumberInput.value.trim();
  validateCardNumber(cardNumberValue);
});

expDateInput.addEventListener('blur', () => {
  const expDateValue = expDateInput.value.trim();
  validateExpDate(expDateValue);
});

cvvInput.addEventListener('blur', () => {
  const cvvValue = cvvInput.value.trim();
  validateCVV(cvvValue);
});

//Submit listeners..

formElement.addEventListener('submit', (event) => {
  event.preventDefault();

  // TODO: Find error that prevents error message from showing up

  // I found where the problem was. We dont have emailValue, phoneValue and firsNameValue variable. We must be identify new variable.

  const emailValue = emailInput.value.trim();
  const phoneValue = phoneInput.value.trim();
  const firstNameValue = firstNameInput.value.trim();
  const lastNameValue = lastNameInput.value.trim();
  const cardNumberValue = cardNumberInput.value.trim();
  const expDateValue = expDateInput.value.trim();
  const cvvValue = cvvInput.value.trim();

  const allValid = [
    validateEmail(emailValue),
    validatePhone(phoneValue),
    validateFirstName(firstNameValue),
    validateLastName(lastNameValue),
    validateCardNumber(cardNumberValue),
    validateExpDate(expDateValue),
    validateCVV(cvvValue),
  ].every(Boolean);

  if (formCorrect) {
    successElement.classList.remove('hidden');
    formElement.classList.add('hidden');
  }
});

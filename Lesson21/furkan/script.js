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
const successElement = document.getElementById('success');

let formCorrect = true;

function showError(input, paragraph, message) {
  paragraph.textContent = message;
  paragraph.classList.remove('hidden');
  input.setAttribute('aria-invalid', 'true');
}

function clearError(input, paragraph) {
  paragraph.textContent = '';
  paragraph.classList.add('hidden');
  input.setAttribute('aria-invalid', 'false');
}
//------------------------------------------------

function validateEmail(email) {
  email = email.trim();
  if (email.length < 1) {
    showError(emailInput, emailErrorParagraph, 'An email address is required...');
    return false;
  } else if (!emailPattern.test(email)) {
    showError(emailInput, emailErrorParagraph, 'That doesn\'t look like a valid email...');
    return false;
  } else {
    clearError(emailInput, emailErrorParagraph);
    return true;
  }
}

function validatePhone(phone) {
  phone = phone.trim();
  if (phone.length < 1) {
    showError(phoneInput, phoneErrorParagraph, 'A phone number is required...');
    return false;
  } else if (!phonePattern.test(phone)) {
    showError(phoneInput, phoneErrorParagraph, 'That doesn\'t look like a valid phone number...');
    return false;
  }
  clearError(phoneInput, phoneErrorParagraph);
  return true;
}

function validateName(input, value, errorParagraph, fieldName) {
  value = value.trim();
  if (value.length < 2) {
    showError(input, errorParagraph, `${fieldName} must have more than 2 characters.`);
    return false;
  } else if (value.length > 50) {
    showError(input, errorParagraph, `${fieldName} can be 50 characters max.`);
    return false;
  } else if (!namePattern.test(value)) {
    showError(input, errorParagraph, `${fieldName} can only contain letters...`);
    return false;
  }
  clearError(input, errorParagraph);
  return true;
}


function validateCardNumber(cardNumber) {
  cardNumber = cardNumber.trim();
  if (cardNumber.length < 1) {
    showError(cardNumberInput, cardNumberErrorParagraph, 'Card number is required.');
    return false;
  }
  clearError(cardNumberInput, cardNumberErrorParagraph);
  return true;
}
function validateExpDate(expDate) {
  expDate = expDate.trim();
  if (expDate.length < 1) {
    showError(expDateInput, expDateErrorParagraph, 'Date number is required.');
    return false;
  }
  clearError(expDateInput, expDateErrorParagraph);
  return true;
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
  cvv = cvv.trim();
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

//Change and Blur Listeners
function addValidationListener (input, eventType, validateFunction) {
  input.addEventListener(eventType, () => {
    validateFunction(input.value);
  });
}
addValidationListener(emailInput, 'change', validateEmail);
addValidationListener(phoneInput, 'change', validatePhone);
addValidationListener(cardNumberInput, 'blur', validateCardNumber);
addValidationListener(expDateInput, 'blur', validateExpDate);
addValidationListener(cvvInput, 'blur', validateCVV);

addValidationListener(firstNameInput, 'change', (value) =>
  validateName(firstNameInput, value, firstNameErrorParagraph, 'First name')
);

addValidationListener(lastNameInput, 'change', (value) =>
  validateName(lastNameInput, value, lastNameErrorParagraph, 'Last name')
);



//Submit listeners..

formElement.addEventListener('submit', (event) => {
  event.preventDefault();

  // TODO: Find error that prevents error message from showing up

  // I found where the problem was. We dont have emailValue, phoneValue and firsNameValue variable. We must be identify new variable.

  const emailValue = emailInput.value;
  const phoneValue = phoneInput.value;
  const firstNameValue = firstNameInput.value;
  const lastNameValue = lastNameInput.value;
  const cardNumberValue = cardNumberInput.value;
  const expDateValue = expDateInput.value;
  const cvvValue = cvvInput.value;

  const allValid = [
    validateEmail(emailInput.value),
    validatePhone(phoneInput.value),
    validateName(firstNameInput, firstNameInput.value, firstNameErrorParagraph, 'First name'),
    validateName(lastNameInput, lastNameInput.value, lastNameErrorParagraph, 'Last name'),
    validateCardNumber(cardNumberInput.value),
    validateExpDate(expDateInput.value),
    validateCVV(cvvInput.value),
  ].every(Boolean);

  if (formCorrect) {
    successElement.classList.remove('hidden');
    formElement.classList.add('hidden');
  }
});

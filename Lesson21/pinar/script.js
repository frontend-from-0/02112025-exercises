const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phonePattern = /^\+?\d(?:\s?\d){9,19}$/;
const namePattern = /^[a-zA-ZçÇğĞıİöÖşŞüÜ][a-zA-ZçÇğĞıİöÖşŞüÜ' \-]*[a-zA-ZçÇğĞıİöÖşŞüÜ]$/;
const cardPattern = /^[0-9]{13,19}$/;
const cvvPattern = /^[0-9]{3}$/;
const expPattern = /^(0[1-9]|1[0-2])\d{2}$/;
/*
1. Select elements (inputs, error elements, form)

2. Add event listeners (submit, blur)

3. [blur events] Get the value and use if statement to compare value to patter or rules
3a. - value is correct -> move on to the next field
3b. - value is not correct -> show error message (add text to the corresponding error element and remove class hidden)

4. [form submit event] Define variable that keeps information about if the form is correct on now.
Trigger another validation, if no error -> show success message.
*/

const emailInput = document.getElementById('email');
const emailErrorParagraph = document.getElementById('emailError');
const phoneInput = document.getElementById('phone');
const phoneErrorParagraph = document.getElementById('phoneError');
const firstNameInput = document.getElementById('firstName');
const firstNameErrorParagraph = document.getElementById('firstNameError');
const lastNameInput = document.getElementById('lastname');
const lastNameErrorParagraph = document.getElementById('lastNameError');
const cardNumberInput = document.getElementById('cardnumber');
const cardNumberErrorParagraph = document.getElementById('cardNumberError');
const cvvNumberInput = document.getElementById('cvv');
const cvvNumberErrorParagraph = document.getElementById('cvvError');
const expiryDateInput = document.getElementById('expDate');
const expiryDateErrorParagraph = document.getElementById('expDateError');
const formElement = document.getElementById('checkoutForm');
const successElement = document.getElementById('success');
const successButton = document.querySelector('.btn-success');
let formCorrect = true;
let emailCorrection = true;
let phoneCorrection = true;
let nameCorrection = true;
let lastNameCorrection = true;
let cardNumberCorrection = true;
let expCorrection = true;
let cvvCorrection = true;

function validateEmail(email) {
  if (email.length < 1) {
    emailErrorParagraph.textContent =
      'An email address is required so we can contact you.';
    emailErrorParagraph.classList.remove('hidden');
    emailCorrection = false;
  } else if (!emailPattern.test(email)) {
    emailErrorParagraph.textContent =
      'That doesn’t look like a valid email address (e.g. name@gmail.com).';
    emailErrorParagraph.classList.remove('hidden');
    emailCorrection = false;
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
    phoneCorrection = false;
  } else if (!phonePattern.test(phone)) {
    phoneErrorParagraph.textContent =
      'That doesn’t look like a valid phone number (e.g. +905554443322). Max 20 digits allowed.';
    phoneErrorParagraph.classList.remove('hidden');
    phoneCorrection = false;
  } else {
    phoneErrorParagraph.textContent = '';
    phoneErrorParagraph.classList.add('hidden');
  }
}

function validateFirstName(firstName) {
  if (firstName.length < 1) {
    firstNameErrorParagraph.textContent = 'First name is required.';
    firstNameErrorParagraph.classList.remove('hidden');
   nameCorrection = false;
  } else if (firstName.length > 50) {
    firstNameErrorParagraph.textContent =
      'First name can be 50 characters max.';
    firstNameErrorParagraph.classList.remove('hidden');
    nameCorrection = false;
  } else if (!namePattern.test(firstName)) {
    firstNameErrorParagraph.textContent =
      'Names can only contain letters and standard punctuation like hyphens or spaces.';
    firstNameErrorParagraph.classList.remove('hidden');
    nameCorrection = false;
  } else {
    firstNameErrorParagraph.textContent = '';
    firstNameErrorParagraph.classList.add('hidden');
    
  }
}

function validateLastName(lastName) {
  if (lastName.length < 1) {
    lastNameErrorParagraph.textContent = 'Last name is required.';
    lastNameErrorParagraph.classList.remove('hidden');
    lastNameCorrection = false;
  } else if (lastName.length > 50) {
    lastNameErrorParagraph.textContent =
      'Last name can be 50 characters max.';
    lastNameErrorParagraph.classList.remove('hidden');
    lastNameCorrection = false;
  } else if (!namePattern.test(lastName)) {
    lastNameErrorParagraph.textContent =
      'Names can only contain letters and standard punctuation like hyphens or spaces.';
    lastNameErrorParagraph.classList.remove('hidden');
    lastNameCorrection = false;
  } else {
    lastNameErrorParagraph.textContent = '';
    lastNameErrorParagraph.classList.add('hidden');
   
  }
}

function validateCardNumber(cardNumber) {
  if (cardNumber.length < 1) {
    cardNumberErrorParagraph.textContent = 'Card number is required.';
    cardNumberErrorParagraph.classList.remove('hidden');
    cardNumberCorrection = false;
  } else if (cardNumber.length < 13) {
    cardNumberErrorParagraph.textContent =
      'Card number can be 13 characters min.';
    cardNumberErrorParagraph.classList.remove('hidden');
    cardNumberCorrection = false;
  } else if (cardNumber.length > 19) {
    cardNumberErrorParagraph.textContent =
      'Card number can be 19 characters max.';
    cardNumberErrorParagraph.classList.remove('hidden');
   cardNumberCorrection = false;
  } else if (!cardPattern.test(cardNumber)) {
    cardNumberErrorParagraph.textContent =
      'Please enter numbers only.';
    cardNumberErrorParagraph.classList.remove('hidden');
   cardNumberCorrection = false;
  } else {
    cardNumberErrorParagraph.textContent = '';
    cardNumberErrorParagraph.classList.add('hidden');
   
  }
}

function validateExpDateNumber(expDate) {
  const numericValue = expDate.replace(/\D/g, '');

  if (numericValue.length >= 2) {
    const mm = numericValue.slice(0, 2);
    const yy = numericValue.slice(2, 4);
    expiryDateInput.value = numericValue.length > 2 ? `${mm} / ${yy}` : mm; 
  } 

  if (numericValue.length < 1) {
    expiryDateErrorParagraph.textContent = 'Expiry date is required.';
    expiryDateErrorParagraph.classList.remove('hidden');
   expCorrection = false;
  } else if (numericValue.length > 4) {
    expiryDateErrorParagraph.textContent =
      'Expiry date can be 4 characters max.';
    expiryDateErrorParagraph.classList.remove('hidden');
    expCorrection = false;
  } else if (!expPattern.test(numericValue)) {
    expiryDateErrorParagraph.textContent =
      'Please enter valid month (01-12) and year.';
    expiryDateErrorParagraph.classList.remove('hidden');
    expCorrection= false;
  } else {
    expiryDateErrorParagraph.textContent = '';
    expiryDateErrorParagraph.classList.add('hidden');
    
  }
}

function validateCvvNumber(cvvNumber) {
  if (cvvNumber.length < 1) {
    cvvNumberErrorParagraph.textContent = 'CVV number is required.';
    cvvNumberErrorParagraph.classList.remove('hidden');
    cvvCorrection = false;
  } else if (cvvNumber.length > 3) {
    cvvNumberErrorParagraph.textContent =
      'CVV number can be 3 characters max.';
    cvvNumberErrorParagraph.classList.remove('hidden');
    cvvCorrection = false;
  } else if (!cvvPattern.test(cvvNumber)) {
    cvvNumberErrorParagraph.textContent =
      'Please enter numbers only.';
    cvvNumberErrorParagraph.classList.remove('hidden');
    cvvCorrection = false;
  } else {
    cvvNumberErrorParagraph.textContent = '';
    cvvNumberErrorParagraph.classList.add('hidden');
   
  }
}

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

cardNumberInput.addEventListener('input', () => {
  const cardNumberValue = cardNumberInput.value.trim();
  validateCardNumber(cardNumberValue);
});

cvvNumberInput.addEventListener('input', () => {
  const cvvNumberValue = cvvNumberInput.value.trim();
  validateCvvNumber(cvvNumberValue);
});

expiryDateInput.addEventListener('input', () => {
  const expiryDateValue = expiryDateInput.value.trim();
  validateExpDateNumber(expiryDateValue);
});



formElement.addEventListener('change', ()=>{
  if (nameCorrection&&emailCorrection&&lastNameCorrection&&phoneCorrection&&cardNumberCorrection&&cvvCorrection&&expCorrection){
   formCorrect;
   successButton.classList.remove('btn-success');
   successButton.classList.add('btn-success-confirm');
  }
  })

formElement.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const emailVal = emailInput.value.trim();
  const phoneVal = phoneInput.value.trim();
  const firstNameVal = firstNameInput.value.trim();
  const lastNameVal = lastNameInput.value.trim();
  const cardVal = cardNumberInput.value.trim();
  const cvvVal = cvvNumberInput.value.trim();
  const expVal = expiryDateInput.value.trim();

  validateEmail(emailVal);
  validatePhone(phoneVal);
  validateFirstName(firstNameVal);
  validateLastName(lastNameVal);
  validateCardNumber(cardVal);
  validateCvvNumber(cvvVal);
  validateExpDateNumber(expVal);

  if (formCorrect){
    successElement.classList.remove('hidden');
    formElement.classList.add('hidden');
  }
})





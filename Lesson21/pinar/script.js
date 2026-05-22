const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phonePattern = /^\+?\d(?:\s?\d){9,19}$/;
const namePattern = /^[a-zA-ZçÇğĞıİöÖşŞüÜ][a-zA-ZçÇğĞıİöÖşŞüÜ' \-]*[a-zA-ZçÇğĞıİöÖşŞüÜ]$/;
const cardPattern = /^[0-9]{13,19}$/;
const cvvPattern = /^[0-9]{3}$/;
const expPattern = /^(0[1-9]|1[0-2])\d{2}$/;

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

function showErrorElement(element,message){
  element.textContent = message;
  element.classList.remove('hidden');
}

function clearError(element){
  element.textContent = " ";
  element.classList.add('hidden');
}

function validateEmail(email) {
  const emailVal = emailInput.value.trim();
  if (emailVal.length < 1) {
    showError(emailErrorParagraph,'An email address is required so we can contact you.'); 
    emailCorrection = false;
  } else if (!emailPattern.test(email)) {
    showError(emailErrorParagraph,'That doesn’t look like a valid email address (e.g. name@gmail.com).'); 
    emailCorrection = false;
  } else {
    clearError(emailErrorParagraph); 
    emailCorrection = true;
  } 
  return emailCorrection;
}

function validatePhone(phone) {
  const phoneVal = phoneInput.value.trim();
  if (phoneVal.length < 1) {
    showError(phoneErrorParagraph,'A phone number is required so we can contact you.');   
    phoneCorrection = false;
  } else if (!phonePattern.test(phone)) {
    showError(phoneErrorParagraph,'That doesn’t look like a valid phone number (e.g. +905554443322). Max 20 digits allowed.');
    phoneCorrection = false;
  } else {
  clearError(phoneErrorParagraph); 
  phoneCorrection = true;
}
return phoneCorrection;
}

function validateFirstName(firstName) {
  const firstNameVal = firstNameInput.value.trim();
  if (firstNameVal.length < 1) {
    showError(firstNameErrorParagraph, 'First name is required.');
   nameCorrection = false;
  } else if (firstName.length > 50) {
    showError(firstNameErrorParagraph, 'First name can be 50 characters max.');
    nameCorrection = false;
  } else if (!namePattern.test(firstName)) {
    showError(firstNameErrorParagraph, 'Names can only contain letters and standard punctuation like hyphens or spaces.');
    nameCorrection = false;
  } else {
    clearError(firstNameErrorParagraph);
    nameCorrection = true;
  }
  return nameCorrection;
}

function validateLastName(lastName) {
  const lastNameVal = lastNameInput.value.trim();
  if (lastNameVal.length < 1) {
    showError(lastNameErrorParagraph, 'Last name is required.');
    lastNameCorrection = false;
  } else if (lastName.length > 50) {
    showError(lastNameErrorParagraph, 'Last name can be 50 characters max.');
    lastNameCorrection = false;
  } else if (!namePattern.test(lastName)) {
    showError(lastNameErrorParagraph, 'Names can only contain letters and standard punctuation like hyphens or spaces.');
    lastNameCorrection = false;
  } else {
    clearError(lastNameErrorParagraph);
    lastNameCorrection = true;
  }
  return lastNameCorrection;
}

function validateCardNumber(cardNumber) {
  const cardVal = cardNumberInput.value.trim();
  if (cardVal.length < 1) {
    showError(cardNumberErrorParagraph,'Card number is required.');
    cardNumberCorrection = false;
  } else if (cardNumber.length < 13) {
    showError(cardNumberErrorParagraph, 'Card number can be 13 characters min.');
    cardNumberCorrection = false;
  } else if (cardNumber.length > 19) {
    showError(cardNumberErrorParagraph, 'Card number can be 19 characters max.');
   cardNumberCorrection = false;
  } else if (!cardPattern.test(cardNumber)) {
   showError(cardNumberErrorParagraph, 'Please enter numbers only.');
   cardNumberCorrection = false;
  } else {
    clearError(cardNumberErrorParagraph);
    cardNumberCorrection = true;
  }
  return cardNumberCorrection;
}

function validateExpDateNumber(expDate) {
   const expVal = expDate.trim();
  const numericValue = expVal.replace(/\D/g, '');

  if (numericValue.length >= 2) {
    const mm = numericValue.slice(0, 2);
    const yy = numericValue.slice(2, 4);
    expiryDateInput.value = numericValue.length > 2 ? `${mm} / ${yy}` : mm; 
  } 

  if (numericValue.length < 1) {
    showError(expiryDateErrorParagraph, 'Expiry date is required.');
   expCorrection = false;
  } else if (numericValue.length > 4) {
   showError(expiryDateErrorParagraph, 'Expiry date can be 4 characters max.');
    expCorrection = false;
  } else if (!expPattern.test(numericValue)) {
    showError(expiryDateErrorParagraph, 'Please enter valid month (01-12) and year.');
    expCorrection= false;
  } else {
    clearError(expiryDateErrorParagraph);
    expCorrection = true;
  }
  return expCorrection;
}

function validateCvvNumber(cvvNumber) {
  const cvvVal = cvvNumberInput.value.trim();
  if (cvvVal.length < 1) {
   showError(cvvNumberErrorParagraph,'CVV number is required.');
    cvvCorrection = false;
  } else if (cvvNumber.length > 3) {
   showError(cvvNumberErrorParagraph, 'CVV number can be 3 characters max.');
    cvvCorrection = false;
  } else if (!cvvPattern.test(cvvNumber)) {
   showError(cvvNumberErrorParagraph, 'Please enter numbers only.');
    cvvCorrection = false;
  } else {
    clearError(cvvNumberErrorParagraph);
    cvvCorrection = true;
  }
  return cvvCorrection;
}

emailInput.addEventListener('change', () => {
  validateEmail(emailInput.value);
});

phoneInput.addEventListener('change', () => {
  validatePhone(phoneInput.value);
});

firstNameInput.addEventListener('change', () => {
  validateFirstName(firstNameInput.value);
});

lastNameInput.addEventListener('change', () => {
  validateLastName(lastNameInput.value);
});

cardNumberInput.addEventListener('change', () => {
  validateCardNumber(cardNumberInput.value);
});

cvvNumberInput.addEventListener('change', () => {
  validateCvvNumber(cvvNumberInput.value);
});

expiryDateInput.addEventListener('change', () => {
  validateExpDateNumber(expiryDateInput.value);
});

formElement.addEventListener('submit', (event) => {
  event.preventDefault();
  const isEmailValid = validateEmail(emailInput.value) ;
  const isPhoneValid = validatePhone(phoneInput.value); 
  const isFirstNameValid = validateFirstName(firstNameInput.value);
  const isLastNameValid = validateLastName(lastNameInput.value); 
  const isCardNumValid = validateCardNumber(cardNumberInput.value);  
  const isCvvValid = validateCvvNumber(cvvNumberInput.value); 
  const isExpValid = validateExpDateNumber(expiryDateInput.value);
  const successButton = document.querySelector('.btn-success');
  
  if (isEmailValid&&isPhoneValid&&isFirstNameValid&&isLastNameValid&&isCardNumValid&&isCvvValid&&isExpValid){
    successElement.classList.remove('hidden');
    formElement.classList.add('hidden');
    successButton.classList.remove('btn-success');
    successButton.classList.add('btn-confirm');
    successButton.style.backgroundColor = "green";
    console.log("Form başarıyla gönderildi! 🎉");
  } else {
    console.log("Formda hatalar var, lütfen kontrol et. ❌");
  }
  }
)





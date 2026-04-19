// confirmButton.addEventListener('click', () => {
//   alert('Button was clicked!')
// });

/* 
1. Select all necessary elements
2. When user selects a date, show it in the Summary section
  - add event listener with type 'change' / 'blur' to the date input
3. When user clicks on timeslot button, show its value in the Summary section
  - mark clicked button as selected with a different color (add 'selected' class)
  - before selecting an option, remove 'selected' class from all other options
  - only show time that was selected on the last click

4. Make confirm button disabled by default, only when all fields are filled it should be enabled (toggle a css class and disabled property)
*/
/*
1. Add input for user name, show the information on the right side when the user stops filling the name.
2. Add input for user email, show the information on the right side when the user stops filling the email.
3. Set min date (in JS) for tomorrow or any other future date for the date input field.
5. Style the confirmation element so it looks good. Make sure to add all information that you user filled in the form to it.
*/

const dateInput = document.getElementById('date');
const timeSlotElements = document.getElementsByClassName('slot');
const userNameElement = document.getElementById('username');
const emailElement = document.getElementById('email');
const errorMsg = document.getElementById('errorMsg');
const selectedDateElement = document.getElementById('selected-date');
const selectedTimeElement = document.getElementById('selected-time');
const enteredUserName = document.getElementById('entered-username');
const enteredEmail = document.getElementById('entered-email');
const confirmButton = document.getElementById('confirm');
const data = { date: null, time: null, username: null, email: null };
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

dateInput.addEventListener('change', () => {
  if (dateInput.value) {
    selectedDateElement.textContent = dateInput.value;
    data.date = dateInput.value;
  } else {
    selectedDateElement.textContent = '-';
    data.date = null;
  }
  allowSubmit();
});

const today = new Date();
today.setDate(today.getDate() + 1);

const minDate = today.toISOString().split('T')[0];
dateInput.min = minDate;

[...timeSlotElements].forEach((element) => {
  element.addEventListener('click', () => {
    deselectTimeSlots();

    selectedTimeElement.textContent = element.textContent;
    element.classList.add('selected');
    data.time = element.textContent;
    allowSubmit();
  });
});

userNameElement.addEventListener('blur', () => {
  if (userNameElement.value) {
    enteredUserName.textContent = userNameElement.value;
    data.username = userNameElement.value;
  } else {
    enteredUserName.textContent = '-';
    data.username = null;
  }
});

emailElement.addEventListener('blur', () => {
  const value = emailElement.value;

  if (value && emailRegex.test(value)) {
    enteredEmail.textContent = value;
    data.email = value;
    errorMsg.style.display = 'none';
  } else {
    enteredEmail.textContent = '-';
    data.email = null;
    errorMsg.style.display = 'block';
  }
});
function deselectTimeSlots() {
  [...timeSlotElements].forEach((element) =>
    element.classList.remove('selected'),
  );
}

function allowSubmit() {
  if (data.date && data.time) {
    confirmButton.removeAttribute('disabled');
  } else {
    confirmButton.setAttribute('disabled', true);
  }
}

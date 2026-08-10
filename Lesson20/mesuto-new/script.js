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

const dateInput = document.getElementById('date');
const userNameInput = document.getElementById('user-name');
const userEmailInput = document.getElementById('user-email');
const timeSlotElements = document.getElementsByClassName('slot');
const selectedDateElement = document.getElementById('selected-date');
const selectedTimeElement = document.getElementById('selected-time');
const enteredUserName = document.getElementById('entered-user-name');
const enteredUserEmail = document.getElementById('entered-user-email');
const confirmButton = document.getElementById('confirm');
const data = { date: null, time: null, username: null, useremail: null };
const formSend = document.getElementById('confirm');

const modal = document.querySelector("#successModal");
const closeBtn = document.querySelector("#closeModal");
formSend.addEventListener("click", (e) => {
  e.preventDefault(); 
  modal.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});
dateInput.addEventListener("change", () => {
  const selectedDate = new Date(dateInput.value);

  const today = new Date();
  today.setHours(0, 0, 0, 0); 

  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  if (selectedDate < tomorrow) {
    alert("Please choose tomorrow or a later date.");
    dateInput.value = ""; 
  }
});

userNameInput.addEventListener('change', () => {
  if (userNameInput.value) {
    enteredUserName.textContent = userNameInput.value;
    data.username = userNameInput.value;
  } else {
    enteredUserName.textContent = '-';
    data.username=null;
  }
  allowSubmit();
});

userEmailInput.addEventListener('change', () => {
  if (userEmailInput.value) {
    enteredUserEmail.textContent = userEmailInput.value;
    data.useremail = userEmailInput.value;
  } else {
    enteredUserEmail.textContent = '-';
    data.useremail=null;
  }
  allowSubmit();
});


dateInput.addEventListener('change', () => {
  if (dateInput.value) {
    selectedDateElement.textContent = dateInput.value;
    data.date = dateInput.value;
  } else {
    selectedDateElement.textContent = '-';
    data.date=null;
  }
  allowSubmit();
});

[...timeSlotElements].forEach((element) => {
  element.addEventListener('click', () => {
    deselectTimeSlots();

    selectedTimeElement.textContent = element.textContent;
    element.classList.add('selected');
    data.time = element.textContent;
    allowSubmit();
  });
});

function deselectTimeSlots() {
  [...timeSlotElements].forEach((element) =>
    element.classList.remove('selected'),
  );
}

function allowSubmit() {
  if (data.date && data.time && data.username && data.useremail) {
    confirmButton.removeAttribute('disabled');
  } else {
    confirmButton.setAttribute('disabled', true);
  }
}



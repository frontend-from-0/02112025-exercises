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

const dateInput = document.getElementById("date");
const timeSlotElements = document.getElementsByClassName("slot-input");
const selectedDateElement = document.getElementById("selected-date");
const selectedTimeElement = document.getElementById("selected-time");
const confirmButton = document.getElementById("confirm");
const data = { name: null, email: null, date: null, time: null };
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("mail_address");
const selectedNameElement = document.getElementById("selected-name");
const selectedEmailElement = document.getElementById("selected-email");

let tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
dateInput.min = tomorrow.toISOString().split("T")[0];

function allowSubmit() {
  if (data.name && data.email && data.date && data.time) {
    confirmButton.removeAttribute("disabled");
  } else {
    confirmButton.setAttribute("disabled", true);
  }
}

dateInput.addEventListener("change", () => {
  if (dateInput.value) {
    selectedDateElement.textContent = dateInput.value;
    data.date = dateInput.value;
  } else {
    selectedDateElement.textContent = "-";
    data.date = null;
  }
  allowSubmit();
});

[...timeSlotElements].forEach((element) => {
  element.addEventListener("change", () => {
    selectedTimeElement.textContent = element.value;
    data.time = element.value;
    allowSubmit();
  });
});

nameInput.addEventListener("blur", () => {
  if (nameInput.value) {
    selectedNameElement.textContent = nameInput.value;
    data.name = nameInput.value;
  } else {
    selectedNameElement.textContent = "-";
    data.name = null;
  }
  allowSubmit();
});

emailInput.addEventListener("blur", () => {
  if (emailInput.value) {
    selectedEmailElement.textContent = emailInput.value;
    data.email = emailInput.value;
  } else {
    selectedEmailElement.textContent = "-";
    data.email = null;
  }
  allowSubmit();
});

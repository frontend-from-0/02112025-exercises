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
const statusMessage = document.getElementById('status-message');


const namePattern = /^[a-zA-ZÀ-ÿığüşöçİĞÜŞÖÇ]+(?: [a-zA-ZÀ-ÿığüşöçİĞÜŞÖÇ]+)*$/;
const nameErrorParagraph = document.getElementById('nameError');

const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const emailErrorParagraph = document.getElementById('emailError');

function validateName(name){
if(name.length<1){
  nameErrorParagraph.textContent = 'name is required.';
nameErrorParagraph.classList.remove('hidden');
nameInput.classList.add('input-invalid');
return false;
} else if (name.length > 50) {
    nameErrorParagraph.textContent =
      'First name can be 50 characters max.';
    nameErrorParagraph.classList.remove('hidden');
    nameInput.classList.add('input-invalid');
    return false;
}else if (!namePattern.test(name)) {
    nameErrorParagraph.textContent =
    'Names can only contain letters and standard punctuation like hyphens or spaces.';
    nameErrorParagraph.classList.remove('hidden');
    nameInput.classList.add('input-invalid');
    return false;
}else {
    nameErrorParagraph.textContent = '';
   nameErrorParagraph.classList.add('hidden');
   nameInput.classList.remove('input-invalid');
   return true;
  }
}

function validateEmail(email){
  if(email.length<1){
    emailErrorParagraph.textContent = 'An email address is required so we can contact you.';
    emailErrorParagraph.classList.remove('hidden');
    emailInput.classList.add('input-invalid');
    return false;
  }else if(!emailPattern.test(email)){
    emailErrorParagraph.textContent = 'That doesn’t look like a valid email address (e.g. name@gmail.com).';
    emailErrorParagraph.classList.remove('hidden');
     emailInput.classList.add('input-invalid');
    return false;
  }else {
    emailErrorParagraph.textContent = '';
    emailErrorParagraph.classList.add('hidden');
     emailInput.classList.remove('input-invalid');
    return true;
  }
}

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

nameInput.addEventListener("change", () => {
const isValid = validateName(nameInput.value);

  if (isValid) {
    selectedNameElement.textContent = nameInput.value;
    data.name = nameInput.value;
  } else {
    selectedNameElement.textContent = "-";
    data.name = null;
  }
  allowSubmit();
});

emailInput.addEventListener("input", () => {
const isValid = validateEmail(emailInput.value);

  if (isValid) {
    selectedEmailElement.textContent = emailInput.value;
    data.email = emailInput.value;
  } else {
    selectedEmailElement.textContent = "-";
    data.email = null;
  }
  allowSubmit();
});

confirmButton.addEventListener('click', ()=>{
  statusMessage.innerHTML = `
    <p>Your appointment has been successfully confirmed! ✅</p>
    <ul>
      <li><strong>Name:</strong> ${data.name}</li>
      <li><strong>Email:</strong> ${data.email}</li>
      <li><strong>Date:</strong> ${data.date}</li>
      <li><strong>Time:</strong> ${data.time}</li>
    </ul>
  `;
  statusMessage.style.color = "green";

  nameInput.value = "";
  emailInput.value = "";
  dateInput.value = "";
  [...timeSlotElements].forEach(slot => slot.checked = false);

  selectedNameElement.textContent = "-";
  selectedEmailElement.textContent = "-";
  selectedDateElement.textContent = "-";
  selectedTimeElement.textContent = "-";

  data.name = null;
  data.email = null;
  data.date = null;
  data.time = null;
  confirmButton.setAttribute("disabled", true);
  console.log("Submitted data:", data);
})
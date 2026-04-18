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
const timeSlotElements = document.getElementsByClassName('slot');
const selectedDateElement = document.getElementById('selected-date');
const selectedTimeElement = document.getElementById('selected-time');
const confirmButton = document.getElementById('confirm');
const fullNameInput = document.getElementById("name-text");
const emailInput = document.getElementById("email-text"); 
const enteredName = document.getElementById("entered-name");
const enteredEmail = document.getElementById("entered-email");
const data = { date: null, time: null, fullName: null, email: null };



dateInput.addEventListener('change', () => {

  const selectedDate = new Date(dateInput.value);
  if (dateInput.value && selectedDate < tomorrow) {
    alert("Hata: En erken yarın için rezervasyon yapabilirsiniz!");
    dateInput.value = "";
    selectedDateElement.textContent = '-';
    data.date = null;
  }

   else if (dateInput.value) {
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

fullNameInput.addEventListener('change', () => {
  if (fullNameInput.value.trim()) {
    enteredName.textContent = fullNameInput.value;
    data.fullName = fullNameInput.value;
  } else {
    enteredName.textContent = '-';
    data.fullName=null;
  }
  allowSubmit();
});

emailInput.addEventListener('change', () => {
  if (emailInput.value.trim()) {
    enteredEmail.textContent = emailInput.value;
    data.email = emailInput.value;
  } else {
    enteredEmail.textContent = '-';
    data.email=null;
  }
  allowSubmit();
});

function deselectTimeSlots() {
  [...timeSlotElements].forEach((element) =>
    element.classList.remove('selected'),
  );
}

function allowSubmit() {
  if (data.date && data.time && data.fullName && data.email ) {
    confirmButton.removeAttribute('disabled');
  } else {
    confirmButton.setAttribute('disabled', true);
  }
}

const today = new Date();
const tomorrow = new Date();

function setDate(){

tomorrow.setDate(today.getDate() + 1);
tomorrow.setHours(0, 0, 0, 0);

const yyyy = tomorrow.getFullYear();
const mm = String(tomorrow.getMonth() + 1).padStart(2, '0');
const dd = String(tomorrow.getDate()).padStart(2, '0');

const formattedTomorrow = `${yyyy}-${mm}-${dd}`;

if (dateInput) {
    dateInput.setAttribute("min", formattedTomorrow);
}
}
document.addEventListener('DOMContentLoaded', ()=>{
  setDate();
});


const bookingForm = document.querySelector(".booking");
const confirmationVoucher =document.querySelector("#confirmation");
const bookingContainer = document.querySelector(".container");


  bookingForm.addEventListener('submit',(e)=>{
  e.preventDefault();
  confirmationVoucher.style.display="flex";
  bookingContainer.classList.add("opacity");
   
   
  const confirmationVoucherData = document.createElement("ul");
  const voucherArray =[
    `Name: ${data.fullName}`,
    `Date: ${data.date}`,
    `Time: ${data.time}`,
    `E-Mail: ${data.email}`
  ]

  voucherArray.forEach(bookingItem=>{
    const li =document.createElement("li");
    li.innerText=bookingItem;
    confirmationVoucherData.appendChild(li);
  });

  const customerInfo = document.querySelector("#customer-info");
  customerInfo.textContent = '';
  customerInfo.appendChild(confirmationVoucherData);
})

const closeBtn = document.querySelector("#close-btn");
 closeBtn.addEventListener('click', (e)=>{
  confirmationVoucher.style.display = "none";
  bookingContainer.classList.remove("opacity");
  

})
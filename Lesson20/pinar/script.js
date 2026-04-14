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
const fullNameInput = document.querySelector("#name-text");
const emailInput = document.querySelector("#email-text"); 
const enteredName = document.querySelector("#entered-name");
const enteredEmail = document.querySelector("#entered-email");
const data = { date: null, time: null, fullName: null, email: null };



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

fullNameInput.addEventListener('change', () => {
  if (fullNameInput.value) {
    enteredName.textContent = fullNameInput.value;
    data.fullName = fullNameInput.value;
  } else {
    enteredName.textContent = '-';
    data.fullName=null;
  }
  allowSubmit();
});

emailInput.addEventListener('change', () => {
  if (emailInput.value) {
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

const datePicker = document.querySelector('input[type="date"]');
const today = new Date();
const tomorrow = new Date();

tomorrow.setDate(today.getDate() + 1);
tomorrow.setHours(0, 0, 0, 0);

const yyyy = tomorrow.getFullYear();
const mm = String(tomorrow.getMonth() + 1).padStart(2, '0'); // Aylar 0'dan başlar
const dd = String(tomorrow.getDate()).padStart(2, '0');

const formattedTomorrow = `${yyyy}-${mm}-${dd}`;

if (datePicker) {
    datePicker.setAttribute("min", formattedTomorrow);
}

function selectDate(usersChoise){
  
  const selected = new Date(usersChoise);
  if(selected < tomorrow){
    console.log("Hata: En erken yarın için rezervasyon yapabilirsiniz!");
    return null;
  } else{ 
    return selected;
  }
}

const bookingForm = document.getElementsByClassName("booking");
const confirmationVoucher =document.querySelector("#confirmation");
confirmButton.addEventListener('click',(e)=>{
   e.preventDefault();
   confirmationVoucher.style.display = "flex";
   bookingForm.style.opacity = "0.4";
})

confirmButton.addEventListener('click',(e)=>{
  e.preventDefault();
  const voucherFullName = document.querySelector("#entered-name").innerText;
  const voucherDate = document.querySelector("#selected-date").innerText;
  const voucherTime = document.querySelector("#selected-time").innerText;
  const voucherEmail = document.querySelector("#entered-email").innerText;
 

  const list = document.createElement("ul");
  const voucherArray =[
    `Name: ${voucherFullName}`,
    `Date: ${voucherDate}`,
    `Time: ${voucherTime}`,
    `E-Mail: ${voucherEmail}`
  ]

  voucherArray.forEach(text=>{
    const li =document.createElement("li");
    li.innerText=text;
    list.appendChild(li);
  });
  const customerInfo = document.querySelector("#customer-info");
  customerInfo.appendChild(list);
})

const closeBtn = document.querySelector("#close-btn");
closeBtn.addEventListener('click', (e)=>{
  confirmationVoucher.style.display = "none";
})
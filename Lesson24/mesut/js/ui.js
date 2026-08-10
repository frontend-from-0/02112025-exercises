const modal = document.getElementById("modal");
const modalMessage = document.getElementById("modalMessage");
const modalClose = document.getElementById("modalClose");

const confirmModal = document.getElementById("confirmModal");
const confirmYes = document.getElementById("confirmYes");
const confirmNo = document.getElementById("confirmNo");

let selectedUserId = null;

/* ALERT MODAL AREA*/
function showModal(message) {
  modalMessage.textContent = message;
  modal.classList.remove("hidden");
}

modalClose.addEventListener("click", () => {
  modal.classList.add("hidden");
});

/* CONFIRM MODAL AREA*/
function showConfirm(userId, callback) {
  selectedUserId = userId;
  confirmModal.classList.remove("hidden");

  confirmYes.onclick = () => {
    callback(userId);
    confirmModal.classList.add("hidden");
  };

  confirmNo.onclick = () => {
    confirmModal.classList.add("hidden");
  };
}
confirmModal.addEventListener("click", (e) => {
  if (e.target === confirmModal) {
    confirmModal.classList.add("hidden");
  }
});

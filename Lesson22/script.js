const cart = {
  apples: { quantity: 0, price: 5 },
  bananas: { quantity: 0, price: 3 },
  bread: { quantity: 0, price: 4 },
  eggs: { quantity: 0, price: 10 },
};

function updateUI() {
  let total = 0;
  let totalItems = 0;

  Object.keys(cart).forEach((item) => {
    const qtyEl = document.getElementById(`${item}_quantity`);
    if (qtyEl) qtyEl.innerText = cart[item].quantity;

    const cartRow = document.getElementById(`${item}_cart`);
    if (cartRow) {
      cartRow.style.display = cart[item].quantity > 0 ? "flex" : "none";
    }

    total += cart[item].quantity * cart[item].price;
    totalItems += cart[item].quantity;
  });

  document.getElementById("total_price").innerText = total;

  const clearBtn = document.getElementById("clear_cart");
  if (totalItems > 0) {
    clearBtn.classList.remove("hidden");
    clearBtn.classList.add("flex");
  } else {
    clearBtn.classList.add("hidden");
    clearBtn.classList.remove("flex");
  }
}

function changeQuantity(item, amount) {
  if (cart[item]) {
    cart[item].quantity += amount;

    if (cart[item].quantity < 0) cart[item].quantity = 0;

    updateUI();
  }
}

function clearCartBtn() {
  if (confirm("Are you sure you want to empty the basket?")) {
    Object.keys(cart).forEach((item) => {
      cart[item].quantity = 0;
    });
    updateUI();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  Object.keys(cart).forEach((item) => {
    const addBtn = document.getElementById(`${item}_add`);
    if (addBtn) addBtn.onclick = () => changeQuantity(item, 1);
    const removeBtn = document.getElementById(`${item}_remove`);
    if (removeBtn)
      removeBtn.onclick = () => {
        cart[item].quantity = 0;
        updateUI();
      };
    const incBtn = document.getElementById(`${item}_increment`);
    const decBtn = document.getElementById(`${item}_decrement`);

    if (incBtn) incBtn.onclick = () => changeQuantity(item, 1);
    if (decBtn) decBtn.onclick = () => changeQuantity(item, -1);
  });
  updateUI();
});

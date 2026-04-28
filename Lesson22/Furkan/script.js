const totalPrice = document.getElementById('total_price');
const clearCartBtn = document.getElementById('clear_cart');

let products = {
  apples: {
    quantity: 1,
    price: 1,
  },
  bananas: {
    quantity: 1,
    price: 1,
  },
  bread: {
    quantity: 1,
    price: 1,
  },
  eggs: {
    quantity: 1,
    price: 1,
  },
};

let total = 0;

document.addEventListener('DOMContentLoaded', () => {
  loadFromLocalStorage();
  calculateTotal();
  Object.keys(products).forEach((productName) => {
    const addProductBtn = document.getElementById(`${productName}_add`);
    const removeProductBtn = document.getElementById(`${productName}_remove`);
    const productQuantity = document.getElementById(`${productName}_quantity`);
    const incrementButton = document.getElementById(`${productName}_increment`);
    const decrementButton = document.getElementById(`${productName}_decrement`);

    productQuantity.textContent = products[productName].quantity;

    updateProductUI(productName);

    addProductBtn.addEventListener('click', () => addProduct(productName));
    removeProductBtn.addEventListener('click', () =>
      removeProduct(productName),
    );
    incrementButton.addEventListener('click', () =>
      incrementProduct(productName),
    );
    decrementButton.addEventListener('click', () =>
      decrementProduct(productName),
    );
  });
  clearCartBtn.addEventListener('click', clearCart);
});

function saveToLocalStorage() {
  localStorage.setItem('productData', JSON.stringify(products));
}

function loadFromLocalStorage() {
  const savedProduct = localStorage.getItem('productData');
  if (savedProduct) {
    products = JSON.parse(savedProduct);
  }
}

function updateProductUI(productName) {
  const quantity = products[productName].quantity;
  const cartItem = document.getElementById(`${productName}_cart`);
  const quantitySpan = document.getElementById(`${productName}_quantity`);

  quantitySpan.textContent = quantity;

  if (quantity === 0) {
    cartItem.classList.add('hidden');
  } else {
    cartItem.classList.remove('hidden');
  }
}

function calculateTotal() {
  total = 0;
  Object.keys(products).forEach((productName) => {
    total =
      total + products[productName].quantity * products[productName].price;
  });
  totalPrice.textContent = total;
  saveToLocalStorage();
}

function removeProduct(productName) {
  products[productName].quantity = 0;

  updateProductUI(productName);
  calculateTotal();
  saveToLocalStorage();
}

function addProduct(productName) {
  products[productName].quantity += 1;

  updateProductUI(productName);
  calculateTotal();
  saveToLocalStorage();
}

// TODO: clearCart functionality, decrement & increment buttons functionality
function incrementProduct(productName) {
  products[productName].quantity += 1;

  updateProductUI(productName);
  calculateTotal();
  saveToLocalStorage();
}
function decrementProduct(productName) {
  if (products[productName].quantity > 0) {
    products[productName].quantity -= 1;
  }

  updateProductUI(productName);
  calculateTotal();
  saveToLocalStorage();
}

function clearCart() {
  Object.keys(products).forEach((productName) => {
    products[productName].quantity = 0;
    updateProductUI(productName);
  });
  calculateTotal();
  saveToLocalStorage();
}

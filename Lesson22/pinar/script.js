const totalPrice = document.getElementById('total_price');
const clearCartBtn = document.getElementById('clear_cart');

let products = JSON.parse(localStorage.getItem('myCart')) || {
  apples: { 
    quantity: 0, 
    price: 1
   },
  bananas: { 
    quantity: 0, 
    price: 1 
  },
  bread: { 
    quantity: 0, 
    price: 1 
  },
  eggs: { 
    quantity: 0, 
    price: 1 
  }
};

let total = 0;

document.addEventListener('DOMContentLoaded', () => {
  calculateTotal();
  Object.keys(products).forEach(productName => {
    const addProductBtn = document.getElementById(`${productName}_add`);
    const removeProductBtn = document.getElementById(`${productName}_remove`);
    const incrementButton = document.getElementById(`${productName}_increment`);
    const decrementButton = document.getElementById(`${productName}_decrement`);
    const productQuantity = document.getElementById(`${productName}_quantity`);
    productQuantity.textContent = products[productName].quantity;
    const productCartItem = document.getElementById(`${productName}_cart`);
    productQuantity.textContent = products[productName].quantity;
    if (products[productName].quantity > 0) {
      productCartItem.classList.remove('hidden');
    } else {
      productCartItem.classList.add('hidden');
    }

    addProductBtn.addEventListener('click', () => addProduct(productName, productQuantity, productCartItem));
    removeProductBtn.addEventListener('click', () => removeProduct(productName, productCartItem));
    incrementButton.addEventListener('click',() => addProduct(productName, productQuantity, productCartItem));
    decrementButton.addEventListener('click', () => decrementProduct(productName, productQuantity, productCartItem));
    
  });
  clearCartBtn.addEventListener('click', clearAllProducts);

});

function calculateTotal () {
  total = 0;
  Object.keys(products).forEach(productName => {
    total = total + products[productName].quantity * products[productName].price;
  });
  totalPrice.textContent = total;
}

function decrementProduct (productName, productQuantitySpan, productCartItem) {
  if (products[productName].quantity === 1) productCartItem.classList.add('hidden');
  products[productName].quantity -= 1;
  productQuantitySpan.textContent = products[productName].quantity;
  
  calculateTotal();
  saveToLocalStorage();
}

function removeProduct(productName, productCartItem) {
  products[productName].quantity = 0;
  productCartItem.classList.add('hidden');
  
  calculateTotal();
  saveToLocalStorage();
}

function addProduct (productName, productQuantitySpan, productCartItem) {
  if (products[productName].quantity === 0) productCartItem.classList.remove('hidden');

  products[productName].quantity += 1;
  productQuantitySpan.textContent = products[productName].quantity;
  
  calculateTotal();
  saveToLocalStorage();
}

function clearAllProducts (productName,productCartItem){
Object.keys(products).forEach(productName=>{
  products[productName].quantity = 0;
  const productCartItem = document.getElementById(`${productName}_cart`);
  const productQuantity = document.getElementById(`${productName}_quantity`);
  if (productCartItem) productCartItem.classList.add('hidden');
  if (productQuantity) productQuantity.textContent = 0;
})
calculateTotal();
saveToLocalStorage();
}


function saveToLocalStorage() {
  localStorage.setItem('myCart', JSON.stringify(products));
}
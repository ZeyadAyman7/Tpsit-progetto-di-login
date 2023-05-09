let cartTotal = 0;
let cartItems = 0;

function addToCart(price) {
  cartItems++;
  cartTotal += price;

  updateCartDisplay();
}

function updateCartDisplay() {
  const cartTotalElement = document.getElementById("cart-total");
  cartTotalElement.textContent = "$" + cartTotal.toFixed(2);
}

function checkout() {
  alert("Thank you for your purchase!");
  cartTotal = 0;
  cartItems = 0;

  updateCartDisplay();
}

function generateCategories() {
  const sidebar = document.querySelector('.sidebar');
  const categoriesList = sidebar.querySelector('ul');
  categoriesList.innerHTML = '';

  for (let i = 1; i <= 5; i++) {
    const categoryItem = document.createElement('li');
    const categoryLink = document.createElement('a');
    categoryLink.href = '#';
    categoryLink.textContent = 'Category ' + i;

    categoryItem.appendChild(categoryLink);
    categoriesList.appendChild(categoryItem);
  }
}

generateCategories();


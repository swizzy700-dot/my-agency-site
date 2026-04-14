let cartCount = 0;
let cartItems = [];

function addToCart(productName) {
  cartCount++;
  cartItems.push(productName);

  document.getElementById("cart-count").innerText = cartCount;

  updateCartUI();
}

function updateCartUI() {
  const list = document.getElementById("cart-list");
  list.innerHTML = "";

  cartItems.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = item + " <button onclick='removeItem(" + index + ")'>X</button>";
    list.appendChild(li);
  });
}

function removeItem(index) {
  cartItems.splice(index, 1);
  cartCount--;

  document.getElementById("cart-count").innerText = cartCount;
  updateCartUI();
}

function openCart() {
  document.getElementById("cart-sidebar").classList.add("active");
}

function closeCart() {
  document.getElementById("cart-sidebar").classList.remove("active");
}
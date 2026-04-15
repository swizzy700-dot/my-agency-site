const products = [
  { id: 1, name: "Hoodie", price: 60, image: "images/hoodie.jpg" },
  { id: 2, name: "Tee", price: 30, image: "images/tshirt.jpg" },
  { id: 3, name: "Joggers", price: 45, image: "images/joggers.jpg" }
];

let cart = [];

/* RENDER PRODUCTS */
function renderProducts() {
  const grid = document.getElementById("productGrid");

  products.forEach(p => {
    grid.innerHTML += `
      <div class="card">
        <img src="${p.image}" />
        <h3>${p.name}</h3>
        <p>$${p.price}</p>
        <button onclick="addToCart(${p.id})">Add to Cart</button>
      </div>
    `;
  });
}

function renderProducts() {
  const grid = document.getElementById("productGrid");

  products.forEach(p => {
    grid.innerHTML += `
      <div class="card">
        <img src="${p.image}" />
        <h3>${p.name}</h3>
        <p>$${p.price}</p>

        <button onclick="openProduct(${p.id})">
          View Product
        </button>

      </div>
    `;
  });
}

/* ADD TO CART */
function addToCart(id) {
  const item = products.find(p => p.id === id);
  cart.push(item);

  document.getElementById("cartCount").innerText = cart.length;

  document.getElementById("cartItems").innerHTML =
    cart.map(i => `<p>${i.name} - $${i.price}</p>`).join("");

  document.getElementById("cart").classList.add("active");
}

/* HEADLINE ANIMATION TEXT CHANGE */
const texts = ["Build. Design. Scale.", "Premium Digital Store", "Modern Streetwear Experience"];
let i = 0;

setInterval(() => {
  i = (i + 1) % texts.length;
  document.getElementById("headline").innerText = texts[i];
}, 3000);

renderProducts();

let currentProduct = null;

function openProduct(id) {
  currentProduct = products.find(p => p.id === id);

  document.getElementById("modalImg").src = currentProduct.image;
  document.getElementById("modalName").innerText = currentProduct.name;
  document.getElementById("modalPrice").innerText = "$" + currentProduct.price;

  document.getElementById("productModal").style.display = "flex";
}

function closeProduct() {
  document.getElementById("productModal").style.display = "none";
}

function addToCartFromModal() {
  addToCart(currentProduct.id);
  closeProduct();
}

const slider = document.querySelector(".slider");

setInterval(() => {
  slider.scrollBy({ left: 300, behavior: "smooth" });
}, 3000);
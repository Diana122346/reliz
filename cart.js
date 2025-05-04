let cartItems = [];

function loadCart() {
  cartItems = JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cartItems));
}

function renderCart() {
  const container = document.getElementById("cart-container");
  const totalPriceEl = document.getElementById("total-price");
  container.innerHTML = "";

  if (cartItems.length === 0) {
    container.innerHTML = `<p style="text-align: center; font-size: 18px;">Кошик порожній 🪹</p>`;
    totalPriceEl.textContent = "0 ₴";
    return;
  }

  let total = 0;

  cartItems.forEach(item => {
    const itemEl = document.createElement("div");
    itemEl.className = "cart-item";

    itemEl.innerHTML = `
      <div class="cart-info">
        <img src="${item.image}" alt="${item.title}">
        <div>
          <h4>${item.title}</h4>
          <p>${item.price} ₴</p>
        </div>
      </div>
      <div class="cart-controls">
        <button onclick="updateQuantity(${item.id}, -1)">−</button>
        <span>${item.quantity}</span>
        <button onclick="updateQuantity(${item.id}, 1)">+</button>
      </div>
    `;

    container.appendChild(itemEl);
    total += item.price * item.quantity;
  });

  totalPriceEl.textContent = total + " ₴";
}

function updateQuantity(id, delta) {
  const item = cartItems.find(i => i.id === id);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity < 1) item.quantity = 1;

  saveCart();
  renderCart();
}

function clearCart() {
  cartItems.length = 0;
  localStorage.removeItem("cart");
  renderCart();
}

function addToCart(book) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const existing = cart.find(item => item.id === book.id);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...book, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`Книгу «${book.title}» додано до кошика! 🛒`);
}

document.addEventListener("DOMContentLoaded", () => {
  loadCart();
  renderCart();
});

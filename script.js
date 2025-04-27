let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(title, price) {
    cart.push({ title, price });
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    alert(`Книга \"${title}\" додана у кошик!`);
}

function updateCartCount() {
    document.querySelectorAll('#cart-count').forEach(el => el.innerText = cart.length);
}

function renderCart() {
    const cartItemsDiv = document.getElementById('cart-items');
    const totalPriceP = document.getElementById('total-price');
    cartItemsDiv.innerHTML = '';

    if (cart.length === 0) {
        cartItemsDiv.innerHTML = '<p>Ваш кошик порожній.</p>';
        totalPriceP.innerText = '';
        return;
    }

    let total = 0;
    cart.forEach(item => {
        const div = document.createElement('div');
        div.innerText = `${item.title} - ${item.price} грн`;
        cartItemsDiv.appendChild(div);
        total += item.price;
    });

    totalPriceP.innerText = `Загальна сума: ${total} грн`;
}

document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
    if (document.getElementById('cart-items')) {
        renderCart();
    }
});
/* ═══════════════════════════════════════
   SMART CANTEEN — js/cart.js
   Cart page: render items, qty controls, totals
════════════════════════════════════════ */

requireCanteen();

let cart = getCart();

/* ── RENDER CART PAGE ── */
function renderCartPage() {
  const items    = Object.values(cart);
  const subtotal = cartSubtotal(cart);
  const tax      = cartTax(cart);
  const grand    = cartGrandTotal(cart);

  const emptyEl   = document.getElementById('cart-empty');
  const contentEl = document.getElementById('cart-content');

  if (items.length === 0) {
    emptyEl.style.display   = 'block';
    contentEl.style.display = 'none';
    return;
  }

  emptyEl.style.display   = 'none';
  contentEl.style.display = 'block';

  document.getElementById('cart-items-list').innerHTML = items.map(({ item, qty }) => `
    <div class="cart-item">
      <div class="cart-item-emoji">${item.emoji}</div>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">₹${item.price} × ${qty}</div>
      </div>
      <div class="cart-item-right">
        <div class="cart-item-total">₹${item.price * qty}</div>
        <div class="qty-control">
          <button class="qty-btn" onclick="cartChangeQty('${item.id}',-1)">−</button>
          <span class="qty-num">${qty}</span>
          <button class="qty-btn" onclick="cartChangeQty('${item.id}',1)">+</button>
        </div>
        <button class="cart-item-remove" onclick="removeFromCart('${item.id}')">Remove</button>
      </div>
    </div>`).join('');

  document.getElementById('summary-subtotal').textContent = `₹${subtotal}`;
  document.getElementById('summary-tax').textContent      = `₹${tax}`;
  document.getElementById('summary-total').textContent    = `₹${grand}`;
}

function cartChangeQty(id, delta) {
  if (!cart[id]) return;
  cart[id].qty += delta;
  if (cart[id].qty <= 0) {
    delete cart[id];
  }
  saveCart(cart);
  updateCartBadge();
  renderCartPage();
}

function removeFromCart(id) {
  delete cart[id];
  saveCart(cart);
  updateCartBadge();
  renderCartPage();
}

document.addEventListener('DOMContentLoaded', renderCartPage);
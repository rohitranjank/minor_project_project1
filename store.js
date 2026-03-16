/* ═══════════════════════════════════════
   SMART CANTEEN — js/store.js
   Shared state via localStorage
   Import this on EVERY page
════════════════════════════════════════ */

const KEYS = {
  canteen:  'sc_canteen',   // 'A' or 'C'
  cart:     'sc_cart',      // JSON object
  orderId:  'sc_order_id',  // '#SC-XXXX'
};

/* ── CANTEEN ── */
function getCanteen()         { return localStorage.getItem(KEYS.canteen) || null; }
function setCanteen(block)    { localStorage.setItem(KEYS.canteen, block); }
function clearCanteen()       { localStorage.removeItem(KEYS.canteen); }

/* ── CART ── */
function getCart() {
  try { return JSON.parse(localStorage.getItem(KEYS.cart)) || {}; }
  catch { return {}; }
}
function saveCart(cart) { localStorage.setItem(KEYS.cart, JSON.stringify(cart)); }
function clearCart()    { localStorage.removeItem(KEYS.cart); }

/* ── ORDER ID ── */
function getOrderId()      { return localStorage.getItem(KEYS.orderId) || '#SC-0000'; }
function setOrderId(id)    { localStorage.setItem(KEYS.orderId, id); }

/* ── CART HELPERS ── */
function cartTotalItems(cart) {
  return Object.values(cart).reduce((s, c) => s + c.qty, 0);
}
function cartSubtotal(cart) {
  return Object.values(cart).reduce((s, c) => s + c.item.price * c.qty, 0);
}
function cartTax(cart)      { return Math.round(cartSubtotal(cart) * 0.05); }
function cartGrandTotal(cart){ return cartSubtotal(cart) + cartTax(cart); }

/* ── TOAST ── */
function showToast(msg, type = '') {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();
  const t = document.createElement('div');
  t.className = `toast ${type}`;
  t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(() => {
    t.style.transition = 'opacity 0.3s';
    t.style.opacity = '0';
    setTimeout(() => t.remove(), 300);
  }, 2500);
}

/* ── UPDATE CART BADGE in header ── */
function updateCartBadge() {
  const badge = document.getElementById('cart-count');
  if (!badge) return;
  const cart  = getCart();
  const total = cartTotalItems(cart);
  badge.textContent = total;
}

/* ── CANTEEN LABEL in header ── */
function updateCanteenLabel() {
  const el = document.getElementById('canteen-label');
  if (!el) return;
  const block = getCanteen();
  el.textContent = block === 'A' ? 'A-Block Canteen'
                 : block === 'C' ? 'C-Block Canteen'
                 : '—';
}

/* ── GUARD: redirect to index if no canteen selected ── */
function requireCanteen() {
  if (!getCanteen()) {
    window.location.href = 'index.html';
  }
}

/* ── GUARD: redirect to menu if cart is empty ── */
function requireCart() {
  const cart = getCart();
  if (cartTotalItems(cart) === 0) {
    window.location.href = 'menu.html';
  }
}

/* Init badge on any page that has a header */
document.addEventListener('DOMContentLoaded', () => {
  updateCartBadge();
  updateCanteenLabel();
});
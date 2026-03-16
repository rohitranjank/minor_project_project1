/* ═══════════════════════════════════════
   SMART CANTEEN — js/menu.js
   Menu page: render · filter · cart ops · float bar
════════════════════════════════════════ */

/* Guard: must have canteen selected */
requireCanteen();

/* Working cart (kept in memory, synced to localStorage) */
let cart = getCart();

const canteenBlock   = getCanteen();
const currentItems   = MENU[canteenBlock] || [];

/* ── RENDER MENU ── */
function renderMenu(filter = 'all') {
  const grid = document.getElementById('menu-grid');
  const items = filter === 'all'
    ? currentItems
    : currentItems.filter(i => i.category === filter);

  if (!items.length) {
    grid.innerHTML = '<p class="no-results">No items in this category</p>';
    return;
  }

  grid.innerHTML = items.map((item, idx) => {
    const inCart = cart[item.id];
    const vegTag = item.veg
      ? '<div class="veg-tag"></div>'
      : '<div class="nonveg-tag"></div>';
    const bsTag = item.bestseller ? '<span class="bestseller-tag">🔥 Best</span>' : '';
    const actionBtn = inCart
      ? `<div class="qty-control">
           <button class="qty-btn" onclick="changeQty('${item.id}',-1)">−</button>
           <span class="qty-num" id="qty-${item.id}">${inCart.qty}</span>
           <button class="qty-btn" onclick="changeQty('${item.id}',1)">+</button>
         </div>`
      : `<button class="add-btn" onclick="addToCart('${item.id}')">ADD +</button>`;

    return `
      <div class="food-card" style="animation-delay:${idx * 0.04}s">
        <div class="food-card-image">
          ${vegTag}
          <img class="food-img" src="${item.img}" alt="${item.name}" loading="lazy"
               onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
          <span class="food-emoji-fallback" style="display:none">${item.emoji}</span>
          ${bsTag}
        </div>
        <div class="food-card-body">
          <div class="food-name">${item.name}</div>
          <div class="food-desc">${item.desc}</div>
          <div class="food-card-footer">
            <div class="food-price"><span>₹</span>${item.price}</div>
            <div id="action-${item.id}">${actionBtn}</div>
          </div>
        </div>
      </div>`;
  }).join('');
}

/* ── FILTER ── */
function filterCategory(cat, btn) {
  document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderMenu(cat);
}

/* ── CART OPERATIONS ── */
function addToCart(itemId) {
  const item = currentItems.find(i => i.id === itemId);
  if (!item) return;
  cart[itemId] = cart[itemId]
    ? { item, qty: cart[itemId].qty + 1 }
    : { item, qty: 1 };
  saveCart(cart);
  updateActionBtn(itemId);
  updateFloatBar();
  updateCartBadge();
  showToast(`${item.emoji} ${item.name} added!`, 'success');
}

function changeQty(itemId, delta) {
  if (!cart[itemId]) return;
  cart[itemId].qty += delta;
  if (cart[itemId].qty <= 0) {
    delete cart[itemId];
    saveCart(cart);
    updateActionBtn(itemId);
    updateFloatBar();
    updateCartBadge();
    return;
  }
  saveCart(cart);
  const qEl = document.getElementById(`qty-${itemId}`);
  if (qEl) qEl.textContent = cart[itemId].qty;
  updateFloatBar();
  updateCartBadge();
}

function updateActionBtn(itemId) {
  const el = document.getElementById(`action-${itemId}`);
  if (!el) return;
  const inCart = cart[itemId];
  el.innerHTML = inCart
    ? `<div class="qty-control">
         <button class="qty-btn" onclick="changeQty('${itemId}',-1)">−</button>
         <span class="qty-num" id="qty-${itemId}">${inCart.qty}</span>
         <button class="qty-btn" onclick="changeQty('${itemId}',1)">+</button>
       </div>`
    : `<button class="add-btn" onclick="addToCart('${itemId}')">ADD +</button>`;
}

/* ── FLOAT BAR ── */
function updateFloatBar() {
  const bar   = document.getElementById('float-cart');
  const total = cartTotalItems(cart);
  const grand = cartGrandTotal(cart);
  if (total > 0) {
    bar.style.display = 'flex';
    document.getElementById('float-items').textContent = `${total} item${total > 1 ? 's' : ''}`;
    document.getElementById('float-total').textContent  = `₹${grand}`;
  } else {
    bar.style.display = 'none';
  }
}

/* ── INIT ── */
document.addEventListener('DOMContentLoaded', () => {
  renderMenu('all');
  updateFloatBar();
});
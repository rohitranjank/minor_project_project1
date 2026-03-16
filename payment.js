/* ═══════════════════════════════════════
   SMART CANTEEN — js/payment.js
   Payment form validation + UPI flow
════════════════════════════════════════ */

requireCanteen();
requireCart();

let selectedUpiApp = 'gpay';

/* ── POPULATE STRIP ── */
document.addEventListener('DOMContentLoaded', () => {
  const cart  = getCart();
  const total = cartTotalItems(cart);
  const grand = cartGrandTotal(cart);
  document.getElementById('pay-item-count').textContent = `${total} item${total > 1 ? 's' : ''}`;
  document.getElementById('pay-total').textContent      = `₹${grand}`;
  document.getElementById('verify-amount').textContent  = `₹${grand}`;
});

/* ── UPI APP SELECTION ── */
function selectUpiApp(btn, app) {
  document.querySelectorAll('.upi-app-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  selectedUpiApp = app;
  const ph = { gpay:'yourname@okicici', phonepe:'yourname@ybl', paytm:'yourname@paytm', other:'yourname@upi' };
  document.getElementById('inp-upi').placeholder = ph[app] || 'yourname@upi';
}

/* ── VALIDATION ── */
function validateForm() {
  let ok = true;
  const name  = document.getElementById('inp-name').value.trim();
  const phone = document.getElementById('inp-phone').value.trim();
  const upi   = document.getElementById('inp-upi').value.trim();

  if (!name || name.length < 2) {
    document.getElementById('err-name').textContent = 'Please enter your full name';
    ok = false;
  } else { document.getElementById('err-name').textContent = ''; }

  if (!/^[6-9]\d{9}$/.test(phone)) {
    document.getElementById('err-phone').textContent = 'Enter a valid 10-digit Indian mobile number';
    ok = false;
  } else { document.getElementById('err-phone').textContent = ''; }

  if (!/^[\w.\-]{2,}@[a-zA-Z]{2,}$/.test(upi)) {
    document.getElementById('err-upi').textContent = 'Enter a valid UPI ID (e.g. name@upi)';
    ok = false;
  } else { document.getElementById('err-upi').textContent = ''; }

  return ok;
}

/* ── VERIFY & PAY ── */
function verifyUpi() {
  const cart = getCart();
  if (cartTotalItems(cart) === 0) { showToast('🛒 Cart is empty!', 'error'); return; }
  if (!validateForm()) return;

  document.getElementById('verify-text').style.display    = 'none';
  document.getElementById('verify-spinner').style.display = 'inline';
  document.getElementById('btn-verify').disabled = true;

  setTimeout(() => {
    /* Generate order ID and save it */
    const orderId = '#SC-' + Math.floor(1000 + Math.random() * 9000);
    setOrderId(orderId);
    /* Navigate to tracking */
    window.location.href = 'tracking.html';
  }, 2200);
}
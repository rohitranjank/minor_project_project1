/* ═══════════════════════════════════════
   SMART CANTEEN — js/select.js
   Splash screen dismiss + canteen selection
════════════════════════════════════════ */

/* ── SPLASH DISMISS ── */
(function initSplash() {
  const splash = document.getElementById('splash-screen');
  if (!splash) return;
  const TOTAL = 3000 + 700;
  setTimeout(() => {
    splash.addEventListener('animationend', () => { splash.style.display = 'none'; }, { once: true });
    setTimeout(() => { splash.style.display = 'none'; }, 800);
  }, TOTAL - 100);
})();

/* ── SELECT CANTEEN ── */
function selectCanteen(block) {
  setCanteen(block);
  clearCart();
  window.location.href = 'menu.html';
}

/* Legacy function names (from original code) */
function A_Block() { selectCanteen('A'); }
function C_Block() { selectCanteen('C'); }
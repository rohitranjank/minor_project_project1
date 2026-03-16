/* ═══════════════════════════════════════
   SMART CANTEEN — js/tracking.js
   Order tracking: stages · timer · confetti
════════════════════════════════════════ */

requireCanteen();

document.addEventListener('DOMContentLoaded', () => {
  /* Populate order header */
  document.getElementById('order-id').textContent = getOrderId();
  const block = getCanteen();
  document.getElementById('tracking-canteen').textContent =
    block === 'A' ? 'A-Block Canteen' : 'C-Block Canteen';

  renderTrackingSummary();
  startTrackingAnimation();
  startConfetti();
});

/* ── ORDER SUMMARY ── */
function renderTrackingSummary() {
  const cart     = getCart();
  const items    = Object.values(cart);
  const grand    = cartGrandTotal(cart);

  const el = document.getElementById('tracking-summary');
  el.innerHTML = `
    <div class="tracking-summary-title">Order Summary</div>
    ${items.map(({ item, qty }) => `
      <div class="tracking-item">
        <span class="tracking-item-name">${item.emoji} ${item.name}</span>
        <span class="tracking-item-qty">× ${qty}</span>
        <span class="tracking-item-price">₹${item.price * qty}</span>
      </div>`).join('')}
    <div class="tracking-item" style="font-weight:800;font-size:15px;color:var(--teal-l);margin-top:6px;">
      <span>Grand Total</span><span></span><span>₹${grand}</span>
    </div>`;
}

/* ── STAGE ANIMATION ── */
function startTrackingAnimation() {
  /* Stage 0 already done */
  document.getElementById('stage-0').classList.add('done');
  document.getElementById('status-0').textContent = '✓ Done';
  document.getElementById('status-0').classList.add('done');

  const stages = [
    { delay: 2000,  activeLabel: '👨‍🍳 Preparing…' },
    { delay: 6000,  activeLabel: '🔥 Sizzling!'   },
    { delay: 11000, activeLabel: '🍽️ Plating…'    },
    { delay: 15000, activeLabel: '🛎️ Serving…'    },
  ];

  stages.forEach((s, i) => {
    const idx = i + 1;
    setTimeout(() => {
      /* Mark previous done */
      const prev = document.getElementById(`stage-${idx - 1}`);
      prev.classList.remove('active'); prev.classList.add('done');
      const prevSt = document.getElementById(`status-${idx - 1}`);
      prevSt.textContent = '✓ Done';
      prevSt.classList.remove('active'); prevSt.classList.add('done');
      const conn = document.getElementById(`conn-${idx - 1}`);
      if (conn) conn.classList.add('filled');

      /* Activate current */
      document.getElementById(`stage-${idx}`).classList.add('active');
      const currSt = document.getElementById(`status-${idx}`);
      currSt.textContent = s.activeLabel;
      currSt.classList.add('active');

      /* Final stage */
      if (idx === 4) {
        setTimeout(() => {
          document.getElementById('timer-sub').textContent = '✅ Your order is ready! Enjoy your meal 🎉';
          document.getElementById('timer-display').style.color = 'var(--green-l)';
          document.getElementById('timer-bar').style.background = 'linear-gradient(90deg,var(--green),var(--green-l))';
          document.getElementById('btn-neworder').style.display = 'inline-block';
          showToast('🛎️ Your food is ready!', 'success');
        }, 3000);
      }
    }, s.delay);
  });

  startCountdownTimer(20 * 60);
}

/* ── COUNTDOWN TIMER ── */
function startCountdownTimer(totalSecs) {
  let rem = totalSecs;
  const timerEl = document.getElementById('timer-display');
  const barEl   = document.getElementById('timer-bar');

  const iv = setInterval(() => {
    rem--;
    if (rem <= 0) {
      clearInterval(iv);
      timerEl.textContent = '00:00';
      barEl.style.width   = '100%';
      return;
    }
    const m = Math.floor(rem / 60), s = rem % 60;
    timerEl.textContent  = `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
    barEl.style.width    = `${((totalSecs - rem) / totalSecs) * 100}%`;
  }, 1000);
}

/* ── CONFETTI ── */
function startConfetti() {
  const canvas = document.getElementById('confetti-canvas');
  const ctx    = canvas.getContext('2d');
  canvas.width = window.innerWidth; canvas.height = window.innerHeight;

  const colors = ['#00A896','#00C9B1','#FFD700','#2ED573','#FF4757','#7BED9F','#70A1FF'];
  const parts  = Array.from({ length: 140 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height - canvas.height,
    w: Math.random() * 11 + 4, h: Math.random() * 7 + 2,
    color: colors[Math.floor(Math.random() * colors.length)],
    rot: Math.random() * Math.PI * 2,
    speed: Math.random() * 3 + 2,
    rotS: (Math.random() - 0.5) * 0.1,
    opacity: 1, drift: (Math.random() - 0.5) * 1.5
  }));

  let frame = 0;
  (function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    frame++;
    parts.forEach(p => {
      p.y += p.speed; p.x += p.drift; p.rot += p.rotS;
      if (frame > 120) p.opacity -= 0.008;
      ctx.save();
      ctx.globalAlpha = Math.max(0, p.opacity);
      ctx.translate(p.x, p.y); ctx.rotate(p.rot);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.w/2, -p.h/2, p.w, p.h);
      ctx.restore();
    });
    if (parts.some(p => p.opacity > 0 && p.y < canvas.height)) requestAnimationFrame(animate);
  })();
}

window.addEventListener('resize', () => {
  const c = document.getElementById('confetti-canvas');
  if (c) { c.width = window.innerWidth; c.height = window.innerHeight; }
});

/* ── NEW ORDER ── */
function startNewOrder() {
  clearCart();
  window.location.href = 'menu.html';
}
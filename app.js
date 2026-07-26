// The Shahi Dosa - Core Engine

let orderCart = JSON.parse(localStorage.getItem("shahi_order_cart") || "[]");
let currentCategory = "All";
let searchQuery = "";

function formatINR(num) {
  return "₹" + Number(num).toLocaleString("en-IN");
}

function saveOrderCart() {
  localStorage.setItem("shahi_order_cart", JSON.stringify(orderCart));
  updateCartBadge();
}

function updateCartBadge() {
  const totalQty = orderCart.reduce((sum, item) => sum + item.qty, 0);
  const badges = document.querySelectorAll(".cart-badge");
  badges.forEach(b => {
    b.textContent = totalQty;
    b.style.display = totalQty > 0 ? "flex" : "none";
  });
}

function addToOrder(itemId) {
  const item = MENU_ITEMS.find(m => m.id === itemId);
  if (!item) return;

  const existing = orderCart.find(c => c.id === itemId);
  if (existing) {
    existing.qty += 1;
  } else {
    orderCart.push({ id: itemId, qty: 1 });
  }

  saveOrderCart();
  showToast(`Added ${item.name} to your order! 🪷`);
}

function updateOrderQty(itemId, delta) {
  const idx = orderCart.findIndex(c => c.id === itemId);
  if (idx > -1) {
    orderCart[idx].qty += delta;
    if (orderCart[idx].qty <= 0) {
      orderCart.splice(idx, 1);
    }
    saveOrderCart();
    renderOrderDrawer();
  }
}

function showToast(msg) {
  let toast = document.getElementById("shahiToast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "shahiToast";
    toast.style.cssText = "position:fixed; bottom:30px; left:50%; transform:translateX(-50%); background:#7c0d1e; color:#fff; padding:12px 24px; border-radius:30px; font-weight:700; font-size:14px; box-shadow:0 8px 30px rgba(0,0,0,0.5); z-index:9999; border:1px solid #f59e0b; transition:all 0.3s ease;";
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.style.opacity = "1";
  setTimeout(() => { toast.style.opacity = "0"; }, 2500);
}

// Render Menu Cards
function renderMenu() {
  const grid = document.getElementById("menuGrid");
  if (!grid) return;

  let items = [...MENU_ITEMS];

  if (currentCategory !== "All") {
    items = items.filter(i => i.category === currentCategory);
  }

  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    items = items.filter(i => i.name.toLowerCase().includes(q) || i.description.toLowerCase().includes(q));
  }

  if (items.length === 0) {
    grid.innerHTML = `
      <div style="grid-column:1/-1; text-align:center; padding:48px; color:var(--text-muted)">
        <i class="fa-solid fa-utensils" style="font-size:48px; color:var(--gold-accent); margin-bottom:12px"></i>
        <h3>No dishes found matching "${searchQuery}"</h3>
        <p>Try searching for Dosa, Uttapam, Idli, or Chole Bhature!</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = items.map(item => `
    <div class="food-card">
      <div class="food-img-box">
        <img src="${item.image}" alt="${item.name}" loading="lazy">
        ${item.isPopular ? `<span class="food-popular-badge"><i class="fa-solid fa-crown"></i> Chef Special</span>` : ''}
      </div>

      <div class="food-details">
        <div class="food-header">
          <div class="food-title">
            <span class="pure-veg-tag" style="margin-left:0; margin-right:6px">🟢 PURE VEG</span>
            ${item.name}
          </div>
          <div class="food-price">${formatINR(item.price)}</div>
        </div>

        <div class="food-desc">${item.description}</div>

        <div class="food-actions">
          <button class="add-order-btn" onclick="addToOrder('${item.id}')">
            <i class="fa-solid fa-plus"></i> ADD TO ORDER
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

// Category Pills Renderer
function renderCategoryPills() {
  const container = document.getElementById("categoryPills");
  if (!container) return;

  container.innerHTML = MENU_CATEGORIES.map(cat => `
    <button class="cat-pill ${cat === currentCategory ? 'active' : ''}" onclick="setCategory('${cat}')">
      ${cat === 'All' ? '✨ All Dishes' : cat}
    </button>
  `).join('');
}

function setCategory(cat) {
  currentCategory = cat;
  renderCategoryPills();
  renderMenu();
}

// Drawer Controller
function openOrderDrawer() {
  const drawer = document.getElementById("orderDrawerBackdrop");
  if (drawer) {
    renderOrderDrawer();
    drawer.classList.add("active");
  }
}

function closeOrderDrawer() {
  const drawer = document.getElementById("orderDrawerBackdrop");
  if (drawer) drawer.classList.remove("active");
}

function renderOrderDrawer() {
  const list = document.getElementById("drawerOrderList");
  const totalEl = document.getElementById("drawerOrderTotal");
  if (!list) return;

  if (orderCart.length === 0) {
    list.innerHTML = `
      <div style="text-align:center; padding:48px 0; color:var(--text-muted)">
        <i class="fa-solid fa-basket-shopping" style="font-size:48px; color:var(--gold-accent); margin-bottom:12px"></i>
        <h4>Your Order is Empty</h4>
        <p style="font-size:13px; margin-top:4px">Add delicious Dosas & Uttapams from our menu!</p>
      </div>
    `;
    if (totalEl) totalEl.textContent = formatINR(0);
    return;
  }

  let grandTotal = 0;

  list.innerHTML = orderCart.map(c => {
    const item = MENU_ITEMS.find(m => m.id === c.id);
    if (!item) return '';
    const itemTotal = item.price * c.qty;
    grandTotal += itemTotal;

    return `
      <div class="order-item-row">
        <div>
          <div style="font-size:14px; font-weight:700; color:#fff">${item.name}</div>
          <div style="font-size:12px; color:var(--gold-accent)">${formatINR(item.price)} × ${c.qty} = ${formatINR(itemTotal)}</div>
        </div>

        <div style="display:flex; align-items:center; gap:8px">
          <button class="order-qty-btn" onclick="updateOrderQty('${item.id}', -1)">-</button>
          <span style="font-size:14px; font-weight:800; color:#fff">${c.qty}</span>
          <button class="order-qty-btn" onclick="updateOrderQty('${item.id}', 1)">+</button>
        </div>
      </div>
    `;
  }).join('');

  if (totalEl) totalEl.textContent = formatINR(grandTotal);
}

// Send Order to WhatsApp
function sendWhatsAppOrder() {
  if (orderCart.length === 0) {
    showToast("Your cart is empty! Please add items first.");
    return;
  }

  let text = `*👑 New Food Order - The Shahi Dosa 👑*\n\n`;
  let grandTotal = 0;

  orderCart.forEach(c => {
    const item = MENU_ITEMS.find(m => m.id === c.id);
    if (item) {
      const itemTotal = item.price * c.qty;
      grandTotal += itemTotal;
      text += `▪ *${item.name}* x ${c.qty} = ₹${itemTotal}\n`;
    }
  });

  text += `\n*Grand Total: ₹${grandTotal}*\n`;
  text += `\nPlease confirm my order! Thank you. 🙏`;

  const encoded = encodeURIComponent(text);
  window.open(`https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${encoded}`, '_blank');
}

// Table Booking Form Handler
function submitTableBooking(event) {
  event.preventDefault();
  const name = document.getElementById("bookName").value.trim();
  const guests = document.getElementById("bookGuests").value;
  const date = document.getElementById("bookDate").value;
  const time = document.getElementById("bookTime").value;

  if (name && guests && date && time) {
    showToast(`Table booked successfully for ${name} (${guests} Guests)! 👑`);
    document.getElementById("bookingForm").reset();
  }
}

// Render Google Map Reviews
function renderReviews() {
  const container = document.getElementById("googleReviewsGrid");
  if (!container) return;

  container.innerHTML = GOOGLE_REVIEWS.map(r => `
    <div class="review-card">
      <div class="review-header">
        <img src="${r.avatar}" class="review-avatar" alt="${r.name}">
        <div>
          <div style="font-weight:700; color:#fff; font-size:15px">${r.name}</div>
          <div style="font-size:12px; color:var(--text-muted)">${r.date} • <span style="color:#4285F4; font-weight:700">Google Verified <i class="fa-solid fa-circle-check"></i></span></div>
        </div>
      </div>

      <div style="color:var(--gold-accent); font-size:14px; margin-bottom:8px">
        ★★★★★ <span style="color:#fff; font-weight:700; font-size:13px">5.0</span>
      </div>

      <p style="font-size:13px; color:var(--text-main); font-style:italic">"${r.comment}"</p>
    </div>
  `).join('');
}

// Auth State Management
let shahiUser = JSON.parse(localStorage.getItem("shahi_user") || "null");

function updateAuthUI() {
  const authContainer = document.getElementById("headerAuthBtn");
  if (!authContainer) return;

  if (shahiUser) {
    authContainer.innerHTML = `
      <div style="display:flex; align-items:center; gap:8px">
        <span style="font-size:13px; font-weight:700; color:var(--gold-accent)"><i class="fa-solid fa-user-crown"></i> ${shahiUser.name}</span>
        <button onclick="logoutUser()" style="background:rgba(255,255,255,0.1); color:#fff; border-radius:20px; padding:4px 10px; font-size:11px; font-weight:700" title="Sign Out">Logout</button>
      </div>
    `;
  } else {
    authContainer.innerHTML = `
      <button onclick="openAuthModal('signin')" style="background:rgba(245,158,11,0.15); border:1px solid var(--card-border); color:var(--gold-accent); font-weight:700; font-size:13px; padding:8px 16px; border-radius:20px; cursor:pointer">
        <i class="fa-regular fa-user"></i> Sign In / Sign Up
      </button>
    `;
  }
}

function openAuthModal(mode = 'signin') {
  const modal = document.getElementById("authModalBackdrop");
  if (modal) {
    switchAuthTab(mode);
    modal.classList.add("active");
  }
}

function closeAuthModal() {
  const modal = document.getElementById("authModalBackdrop");
  if (modal) modal.classList.remove("active");
}

function switchAuthTab(mode) {
  const signinBtn = document.getElementById("tabBtnSignIn");
  const signupBtn = document.getElementById("tabBtnSignUp");
  const signinForm = document.getElementById("formSignIn");
  const signupForm = document.getElementById("formSignUp");

  if (mode === 'signin') {
    if (signinBtn) signinBtn.classList.add("active");
    if (signupBtn) signupBtn.classList.remove("active");
    if (signinForm) signinForm.style.display = "block";
    if (signupForm) signupForm.style.display = "none";
  } else {
    if (signupBtn) signupBtn.classList.add("active");
    if (signinBtn) signinBtn.classList.remove("active");
    if (signupForm) signupForm.style.display = "block";
    if (signinForm) signinForm.style.display = "none";
  }
}

function handleSignIn(e) {
  e.preventDefault();
  const email = document.getElementById("signinEmail").value.trim();
  if (email) {
    shahiUser = { name: email.split('@')[0], email: email };
    localStorage.setItem("shahi_user", JSON.stringify(shahiUser));
    updateAuthUI();
    closeAuthModal();
    showToast(`Welcome back, ${shahiUser.name}! 👑`);
  }
}

function handleSignUp(e) {
  e.preventDefault();
  const name = document.getElementById("signupName").value.trim();
  const email = document.getElementById("signupEmail").value.trim();
  if (name && email) {
    shahiUser = { name: name, email: email };
    localStorage.setItem("shahi_user", JSON.stringify(shahiUser));
    updateAuthUI();
    closeAuthModal();
    showToast(`Welcome to The Shahi Dosa, ${name}! 🪷`);
  }
}

function logoutUser() {
  shahiUser = null;
  localStorage.removeItem("shahi_user");
  updateAuthUI();
  showToast("Logged out successfully");
}

// DOM Initialization
document.addEventListener("DOMContentLoaded", () => {
  renderCategoryPills();
  renderMenu();
  renderReviews();
  updateCartBadge();
  updateAuthUI();

  // Search Bar Listener
  const searchInput = document.getElementById("menuSearchInput");
  if (searchInput) {
    searchInput.addEventListener("input", function() {
      searchQuery = this.value.trim();
      renderMenu();
    });
  }

  // Transparent Header Scroll Listener
  window.addEventListener("scroll", function() {
    const header = document.querySelector(".shahi-header");
    if (header) {
      if (window.scrollY > 20) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    }
  });
});

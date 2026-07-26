// ShopNear Shared Engine (Header, Footer, Cart State, Wishlist State & UI Utilities)

// State Management
function getCart() {
  return JSON.parse(localStorage.getItem("shopnear_cart") || "[]");
}

function saveCart(cart) {
  localStorage.setItem("shopnear_cart", JSON.stringify(cart));
  updateBadges();
}

function getWishlist() {
  return JSON.parse(localStorage.getItem("shopnear_wishlist") || "[]");
}

function saveWishlist(wishlist) {
  localStorage.setItem("shopnear_wishlist", JSON.stringify(wishlist));
  updateBadges();
}

function formatPrice(num) {
  return "₹" + Number(num).toLocaleString("en-IN");
}

function showToast(msg, type = "info") {
  let container = document.getElementById("toastContainer");
  if (!container) {
    container = document.createElement("div");
    container.id = "toastContainer";
    container.className = "toast-container";
    document.body.appendChild(container);
  }
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<i class="fa-solid fa-circle-check" style="color:#26a541"></i> <span>${msg}</span>`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = "0";
    setTimeout(() => toast.remove(), 300);
  }, 2500);
}

function updateBadges() {
  const cart = getCart();
  const wishlist = getWishlist();

  const totalCartQty = cart.reduce((acc, item) => acc + item.qty, 0);
  const cartBadges = document.querySelectorAll(".cart-badge");
  cartBadges.forEach(b => {
    b.textContent = totalCartQty;
    b.style.display = totalCartQty > 0 ? "inline-block" : "none";
  });

  const wishlistBadges = document.querySelectorAll(".wishlist-badge");
  wishlistBadges.forEach(b => {
    b.textContent = wishlist.length;
    b.style.display = wishlist.length > 0 ? "inline-block" : "none";
  });
}

function toggleWishlist(productId) {
  let wishlist = getWishlist();
  const index = wishlist.indexOf(productId);
  let added = false;
  if (index > -1) {
    wishlist.splice(index, 1);
    showToast("Removed item from Wishlist");
  } else {
    wishlist.push(productId);
    showToast("Added item to Wishlist ❤️");
    added = true;
  }
  saveWishlist(wishlist);

  // Update UI hearts if present
  document.querySelectorAll(`.wishlist-heart-btn[data-id="${productId}"]`).forEach(btn => {
    if (added) btn.classList.add("active");
    else btn.classList.remove("active");
  });

  return added;
}

function addToCart(productId, qty = 1) {
  let cart = getCart();
  const existingIndex = cart.findIndex(item => item.id === productId);
  if (existingIndex > -1) {
    cart[existingIndex].qty += qty;
  } else {
    cart.push({ id: productId, qty: qty });
  }
  saveCart(cart);
  showToast("Added to Cart 🛒");
}

// Render Standard Header Component
function renderHeader() {
  const headerContainer = document.getElementById("mainHeader");
  if (!headerContainer) return;

  const savedTheme = localStorage.getItem("shopnear_theme") || "light";
  if (savedTheme === "dark") document.body.classList.add("dark-mode");

  headerContainer.innerHTML = `
    <div class="header">
      <div class="header-container">
        <!-- Brand Logo -->
        <a href="index.html" class="brand-logo">
          ShopNear
        </a>

        <!-- Live Search Box -->
        <div class="search-box">
          <div class="search-input-wrap">
            <input type="text" id="globalSearchInput" placeholder="Search for products, brands and more..." autocomplete="off">
            <button type="button" id="globalSearchBtn"><i class="fa-solid fa-magnifying-glass"></i></button>
          </div>
          <div class="search-autocomplete" id="searchAutocomplete"></div>
        </div>

        <!-- Header Actions -->
        <div class="header-actions">
          <button class="login-btn" onclick="openLoginModal()">Login</button>
          
          <a href="shop.html" class="nav-link-btn">
            <i class="fa-solid fa-store"></i> Shop
          </a>

          <a href="wishlist.html" class="nav-link-btn">
            <i class="fa-regular fa-heart"></i> Wishlist
            <span class="badge-count wishlist-badge" style="display:none">0</span>
          </a>

          <a href="cart.html" class="nav-link-btn">
            <i class="fa-solid fa-cart-shopping"></i> Cart
            <span class="badge-count cart-badge" style="display:none">0</span>
          </a>

          <button class="theme-toggle-btn" id="themeToggleBtn" title="Toggle Dark/Light Mode">
            <i class="${savedTheme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon'}"></i>
          </button>
        </div>
      </div>
    </div>

    <!-- Category Sub-Header -->
    <div class="category-nav-bar">
      <div class="category-container">
        <a href="shop.html" class="cat-item"><i class="fa-solid fa-border-all"></i> All Categories</a>
        <a href="shop.html?category=Mobiles" class="cat-item"><i class="fa-solid fa-mobile-screen-button"></i> Mobiles</a>
        <a href="shop.html?category=Electronics" class="cat-item"><i class="fa-solid fa-laptop"></i> Electronics</a>
        <a href="shop.html?category=Fashion" class="cat-item"><i class="fa-solid fa-shirt"></i> Fashion</a>
        <a href="shop.html?category=Home+%26+Kitchen" class="cat-item"><i class="fa-solid fa-house"></i> Home & Kitchen</a>
        <a href="shop.html?category=Beauty+%26+Toys" class="cat-item"><i class="fa-solid fa-spray-can-sparkles"></i> Beauty & Toys</a>
        <a href="shop.html?category=Avengers+Special" class="cat-item" style="color: #ff3e6c;"><i class="fa-solid fa-shield-halved" style="color:#ff3e6c"></i> Avengers Special</a>
      </div>
    </div>
  `;

  // Attach search event listeners
  const input = document.getElementById("globalSearchInput");
  const autoDiv = document.getElementById("searchAutocomplete");
  if (input && autoDiv) {
    input.addEventListener("input", function() {
      const q = this.value.trim().toLowerCase();
      if (q.length < 2) {
        autoDiv.classList.remove("active");
        return;
      }
      const matches = PRODUCTS.filter(p => p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q)).slice(0, 6);
      if (matches.length === 0) {
        autoDiv.innerHTML = `<div class="search-item"><div class="info"><div class="title" style="color:#878787">No products found matching "${q}"</div></div></div>`;
      } else {
        autoDiv.innerHTML = matches.map(p => `
          <div class="search-item" onclick="window.location.href='product-detail.html?id=${p.id}'">
            <img src="${p.image}" alt="${p.name}">
            <div class="info">
              <div class="title">${p.name}</div>
              <div class="price">${formatPrice(p.price)}</div>
            </div>
          </div>
        `).join("");
      }
      autoDiv.classList.add("active");
    });

    document.addEventListener("click", function(e) {
      if (!input.contains(e.target) && !autoDiv.contains(e.target)) {
        autoDiv.classList.remove("active");
      }
    });

    document.getElementById("globalSearchBtn").addEventListener("click", function() {
      const q = input.value.trim();
      if (q) window.location.href = `shop.html?search=${encodeURIComponent(q)}`;
    });
  }

  // Theme Toggler Listener
  document.getElementById("themeToggleBtn").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");
    localStorage.setItem("shopnear_theme", isDark ? "dark" : "light");
    this.querySelector("i").className = isDark ? "fa-solid fa-sun" : "fa-solid fa-moon";
  });

  updateBadges();
}

// Render Footer
function renderFooter() {
  const footerContainer = document.getElementById("mainFooter");
  if (!footerContainer) return;

  footerContainer.innerHTML = `
    <footer class="footer">
      <div class="footer-top">
        <div class="footer-col">
          <h4>ABOUT</h4>
          <ul>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">About ShopNear</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Press Stories</a></li>
            <li><a href="#">ShopNear Wholesale</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>HELP</h4>
          <ul>
            <li><a href="#">Payments</a></li>
            <li><a href="#">Shipping & Delivery</a></li>
            <li><a href="#">Cancellation & Returns</a></li>
            <li><a href="#">FAQ & Help Center</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>POLICY</h4>
          <ul>
            <li><a href="#">Return Policy</a></li>
            <li><a href="#">Terms of Use</a></li>
            <li><a href="#">Security</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Sitemap</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>SOCIAL</h4>
          <ul>
            <li><a href="#"><i class="fa-brands fa-facebook"></i> Facebook</a></li>
            <li><a href="#"><i class="fa-brands fa-x-twitter"></i> Twitter / X</a></li>
            <li><a href="#"><i class="fa-brands fa-instagram"></i> Instagram</a></li>
            <li><a href="#"><i class="fa-brands fa-youtube"></i> YouTube</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <div><i class="fa-solid fa-store" style="color:#ffe500"></i> Become a Seller</div>
        <div><i class="fa-solid fa-gift" style="color:#ffe500"></i> Gift Cards</div>
        <div><i class="fa-solid fa-circle-question" style="color:#ffe500"></i> Help Center</div>
        <div>© 2026 ShopNear.com. All Rights Reserved</div>
      </div>
    </footer>
  `;
}

// Global Login Modal Simulation
function openLoginModal() {
  let modal = document.getElementById("loginModal");
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "loginModal";
    modal.style.cssText = "position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.6); z-index:2000; display:flex; align-items:center; justify-content:center;";
    modal.innerHTML = `
      <div style="background:var(--card-bg); width:100%; max-width:420px; border-radius:8px; overflow:hidden; box-shadow:0 8px 32px rgba(0,0,0,0.3); animation:slideUp 0.3s ease;">
        <div style="background:var(--primary-blue); color:#fff; padding:24px; text-align:center; position:relative">
          <h3 style="font-size:22px; font-weight:800">Login to ShopNear</h3>
          <p style="font-size:13px; opacity:0.9; margin-top:4px">Get access to your Orders, Wishlist and Recommendations</p>
          <button onclick="document.getElementById('loginModal').remove()" style="position:absolute; top:12px; right:16px; background:none; color:#fff; font-size:20px"><i class="fa-solid fa-xmark"></i></button>
        </div>
        <div style="padding:24px">
          <div style="margin-bottom:16px">
            <label style="display:block; font-size:12px; font-weight:700; color:var(--text-secondary); margin-bottom:6px">Enter Email / Mobile Number</label>
            <input type="text" id="loginInput" placeholder="+91 9876543210" style="width:100%; padding:10px 14px; border:1px solid var(--border-color); border-radius:4px; font-size:14px">
          </div>
          <button onclick="submitLogin()" style="width:100%; background:var(--action-orange); color:#fff; font-weight:700; padding:12px; border-radius:2px; font-size:15px">CONTINUE</button>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
  }
}

function submitLogin() {
  const val = document.getElementById("loginInput").value.trim();
  if (val) {
    showToast("Logged in successfully as " + val);
    const loginModal = document.getElementById("loginModal");
    if (loginModal) loginModal.remove();
  } else {
    showToast("Please enter a valid email or phone number");
  }
}

// Auto Initialize Header & Footer on DOM Ready
document.addEventListener("DOMContentLoaded", function() {
  renderHeader();
  renderFooter();

  // Scroll listener for glassmorphism header
  window.addEventListener("scroll", function() {
    const header = document.querySelector(".header");
    if (header) {
      if (window.scrollY > 20) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    }
  });
});

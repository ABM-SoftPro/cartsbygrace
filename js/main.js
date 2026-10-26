/**
 * CARATS ATELIER — LUXURY JEWELLERY WEBSITE
 * Interactive Vanilla JavaScript Engine
 * Handles Quick View, Wishlist, Cart Drawer, Search Overlay,
 * Newsletter validation, Concept navigation & Micro-interactions.
 */

// --- SAMPLE PRODUCT CATALOGUE ---
const PRODUCTS = [
  {
    id: 'celeste-necklace',
    name: 'Celeste Gold Necklace',
    category: 'Necklaces',
    price: '₹58,500',
    priceVal: 58500,
    image: 'assets/images/celeste-necklace.jpg',
    badge: 'Bestseller',
    description: 'An ethereal creation crafted in 18K hallmarked yellow gold, adorned with handset brilliant-cut pavé diamonds that capture subtle, celestial luminosity.',
    metal: '18K Hallmarked Solid Gold',
    stone: 'VVS-VS Conflict-Free Diamonds (0.42 ct)',
    length: '16-18 inches adjustable chain'
  },
  {
    id: 'grace-ring',
    name: 'Grace Diamond Ring',
    category: 'Rings',
    price: '₹1,45,000',
    priceVal: 145000,
    image: 'assets/images/grace-ring.jpg',
    badge: 'Signature',
    description: 'A tribute to enduring devotion. Hand-selected cushion-cut center diamond enveloped in a delicate micro-pavé band of exceptional clarity and brilliance.',
    metal: '18K Warm White or Yellow Gold',
    stone: 'GIA Certified Solitaire (0.90 ct)',
    length: 'Custom Sizing Available (Sizes 10–18)'
  },
  {
    id: 'luna-earrings',
    name: 'Luna Pearl Earrings',
    category: 'Earrings',
    price: '₹38,200',
    priceVal: 38200,
    image: 'assets/images/luna-earrings.jpg',
    badge: 'New Arrival',
    description: 'Lustrous hand-picked South Sea cultured pearls suspended gracefully from sculpted 18K solid gold drop hooks.',
    metal: '18K Recycled Solid Gold',
    stone: '10–11mm Natural South Sea Pearls',
    length: 'Drop length: 28mm'
  },
  {
    id: 'aurora-bracelet',
    name: 'Aurora Tennis Bracelet',
    category: 'Bracelets',
    price: '₹1,15,000',
    priceVal: 115000,
    image: 'assets/images/aurora-bracelet.jpg',
    badge: 'Iconic',
    description: 'A timeless continuous river of channel-set laboratory and natural diamonds, meticulously balanced with our signature Atelier security clasp.',
    metal: '18K Yellow Gold / Platinum',
    stone: 'Round Brilliant Diamonds (2.10 ct total)',
    length: 'Standard 7.0 inches (Adjustable on request)'
  },
  {
    id: 'solstice-pendant',
    name: 'Solstice Pendant',
    category: 'Necklaces',
    price: '₹46,000',
    priceVal: 46000,
    image: 'assets/images/solstice-pendant.jpg',
    badge: 'Limited Edition',
    description: 'Inspired by ancient celestial talismans, featuring radiant hand-engraved fluted gold rays surrounding a sparkling center solitaire.',
    metal: '22K & 18K Dual-Tone Gold',
    stone: 'Round Diamond 0.25 ct',
    length: '18 inch wheat link chain'
  },
  {
    id: 'etoile-studs',
    name: 'Étoile Stud Earrings',
    category: 'Earrings',
    price: '₹32,500',
    priceVal: 32500,
    image: 'assets/images/etoile-studs.jpg',
    badge: 'Handcrafted',
    description: 'Discreet yet undeniably radiant. Four-prong architectural setting in 18K gold engineered to maximise light refraction from every angle.',
    metal: '18K Yellow Gold',
    stone: 'Brilliant Round Cut (0.35 ct per pair)',
    length: 'Post & friction butterfly backs'
  },
  {
    id: 'classic-hoops',
    name: 'The Classic Gold Hoops',
    category: 'Earrings',
    price: '₹29,800',
    priceVal: 29800,
    image: 'assets/images/classic-hoops.jpg',
    badge: 'Essential',
    description: 'The definitive everyday luxury hoop. Hollow-cast 18K gold offers lightweight, all-day comfort with high-polish mirror finish.',
    metal: '18K Hallmarked Yellow Gold',
    stone: 'Clean High-Polish Gold',
    length: 'Diameter 22mm / Thickness 3mm'
  },
  {
    id: 'signature-solitaire',
    name: 'Signature Solitaire Ring',
    category: 'Rings',
    price: '₹1,85,000',
    priceVal: 185000,
    image: 'assets/images/signature-solitaire.jpg',
    badge: 'High Jewellery',
    description: 'Our master karigars craft each Signature Solitaire individually with a refined tapered shank and whisper-thin gallery wire.',
    metal: '950 Platinum / 18K Gold',
    stone: '1.20 ct Oval / Round Solitaire',
    length: 'Bespoke fit with complimentary engraving'
  }
];

// --- STATE MANAGEMENT ---
let wishlist = JSON.parse(localStorage.getItem('carats_wishlist') || '[]');
let bag = JSON.parse(localStorage.getItem('carats_bag') || JSON.stringify([
  { id: 'celeste-necklace', qty: 1 }
]));

// --- DOM READY ---
document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initWishlist();
  initBagDrawer();
  initQuickViewModal();
  initSearchOverlay();
  initNewsletter();
  initBackToTop();
  initConceptSwitcher();
});

// --- HEADER & SCROLL BEHAVIOR ---
function initHeader() {
  const header = document.querySelector('.site-header');
  const mobileToggle = document.querySelector('.mobile-toggle');
  const mobileDrawer = document.querySelector('.mobile-drawer');
  const mobileClose = document.querySelector('.mobile-close-btn');

  // Sticky header scroll detection
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  });

  // Mobile menu toggle
  mobileToggle?.addEventListener('click', () => {
    mobileDrawer?.classList.add('open');
    document.body.style.overflow = 'hidden';
  });

  mobileClose?.addEventListener('click', () => {
    mobileDrawer?.classList.remove('open');
    document.body.style.overflow = '';
  });

  // Close drawer on background click
  mobileDrawer?.addEventListener('click', (e) => {
    if (e.target === mobileDrawer) {
      mobileDrawer.classList.remove('open');
      document.body.style.overflow = '';
    }
  });

  // Close drawer when clicking mobile links
  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
      mobileDrawer?.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

// --- CONCEPT SWITCHER HIGHLIGHTING ---
function initConceptSwitcher() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  
  // Normalize index.html or empty to home-1
  let activeConcept = 'home-1';
  if (currentPage.includes('home-2')) activeConcept = 'home-2';
  if (currentPage.includes('home-3')) activeConcept = 'home-3';

  document.querySelectorAll('[data-concept]').forEach(el => {
    if (el.dataset.concept === activeConcept) {
      el.classList.add('active');
    } else {
      el.classList.remove('active');
    }
  });
}

// --- TOAST NOTIFICATION SYSTEM ---
function showToast(message, icon = '✦') {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span>${icon}</span><span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

// --- WISHLIST MANAGEMENT ---
function initWishlist() {
  updateWishlistBadges();

  // Attach event to wishlist buttons on product cards
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.product-wishlist-btn');
    if (!btn) return;

    e.preventDefault();
    e.stopPropagation();
    const productId = btn.dataset.productId;
    toggleWishlist(productId, btn);
  });

  // Header wishlist button toggle drawer or view
  const headerWishlistBtn = document.querySelector('#header-wishlist-btn');
  headerWishlistBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    if (wishlist.length === 0) {
      showToast('Your wishlist is currently empty. Tap the heart on any piece to save it.', '♡');
    } else {
      showToast(`You have ${wishlist.length} item(s) in your saved collection.`, '♥');
    }
  });
}

function toggleWishlist(productId, btnElement) {
  const index = wishlist.indexOf(productId);
  const prod = PRODUCTS.find(p => p.id === productId);
  const prodName = prod ? prod.name : 'Item';

  if (index > -1) {
    wishlist.splice(index, 1);
    if (btnElement) btnElement.classList.remove('active');
    showToast(`Removed "${prodName}" from Wishlist`, '♡');
  } else {
    wishlist.push(productId);
    if (btnElement) btnElement.classList.add('active');
    showToast(`Saved "${prodName}" to Wishlist`, '♥');
  }

  localStorage.setItem('carats_wishlist', JSON.stringify(wishlist));
  updateWishlistBadges();
}

function updateWishlistBadges() {
  const badges = document.querySelectorAll('.wishlist-count-badge');
  badges.forEach(badge => {
    badge.textContent = wishlist.length;
    badge.style.display = wishlist.length > 0 ? 'flex' : 'none';
  });

  // Sync heart buttons state on the page
  document.querySelectorAll('.product-wishlist-btn').forEach(btn => {
    const id = btn.dataset.productId;
    if (wishlist.includes(id)) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

// --- SHOPPING BAG DRAWER ---
function initBagDrawer() {
  const drawer = document.querySelector('#bag-drawer');
  const bagBtn = document.querySelector('#header-bag-btn');
  const closeBtn = document.querySelector('#bag-drawer-close');
  const checkoutBtn = document.querySelector('#drawer-checkout-btn');

  bagBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    renderBagDrawer();
    drawer?.classList.add('open');
    document.body.style.overflow = 'hidden';
  });

  closeBtn?.addEventListener('click', () => {
    drawer?.classList.remove('open');
    document.body.style.overflow = '';
  });

  // Close when clicking outside drawer content
  window.addEventListener('click', (e) => {
    if (e.target === drawer) {
      drawer.classList.remove('open');
      document.body.style.overflow = '';
    }
  });

  checkoutBtn?.addEventListener('click', () => {
    showToast('Demo Presentation: Secure checkout and concierge booking ready for integration.', '✨');
  });

  updateBagBadges();
}

function addToBag(productId, qty = 1) {
  const existing = bag.find(item => item.id === productId);
  if (existing) {
    existing.qty += qty;
  } else {
    bag.push({ id: productId, qty: qty });
  }

  localStorage.setItem('carats_bag', JSON.stringify(bag));
  updateBagBadges();
  renderBagDrawer();

  const product = PRODUCTS.find(p => p.id === productId);
  showToast(`Added "${product ? product.name : 'Piece'}" to your Atelier Bag`, '🛍');
}

function removeFromBag(productId) {
  bag = bag.filter(item => item.id !== productId);
  localStorage.setItem('carats_bag', JSON.stringify(bag));
  updateBagBadges();
  renderBagDrawer();
  showToast('Item removed from your bag', '✓');
}

function updateBagBadges() {
  const totalQty = bag.reduce((acc, curr) => acc + curr.qty, 0);
  const badges = document.querySelectorAll('.bag-count-badge');
  badges.forEach(badge => {
    badge.textContent = totalQty;
    badge.style.display = totalQty > 0 ? 'flex' : 'none';
  });
}

function renderBagDrawer() {
  const container = document.querySelector('#bag-drawer-items');
  const subtotalEl = document.querySelector('#bag-drawer-subtotal');
  if (!container) return;

  if (bag.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 3rem 1rem; color: #888;">
        <svg width="48" height="48" fill="none" stroke="currentColor" stroke-width="1.2" viewBox="0 0 24 24" style="margin: 0 auto 1rem; opacity: 0.6;">
          <path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
        </svg>
        <p style="font-size: 1.1rem; font-family: var(--font-heading); margin-bottom: 0.5rem;">Your Atelier Bag is Empty</p>
        <p style="font-size: 0.82rem; color: #999;">Explore our collections to discover timeless treasures.</p>
      </div>
    `;
    if (subtotalEl) subtotalEl.textContent = '₹0';
    return;
  }

  let total = 0;
  let html = '';

  bag.forEach(item => {
    const prod = PRODUCTS.find(p => p.id === item.id);
    if (!prod) return;
    const itemTotal = prod.priceVal * item.qty;
    total += itemTotal;

    html += `
      <div class="drawer-item">
        <img src="${prod.image}" alt="${prod.name}" class="drawer-item-img">
        <div>
          <div class="drawer-item-title">${prod.name}</div>
          <div class="drawer-item-price">${prod.price} × ${item.qty}</div>
          <div style="font-size: 0.72rem; color: #888; margin-top: 2px;">18K Hallmarked</div>
        </div>
        <button class="drawer-remove-btn" onclick="removeFromBag('${prod.id}')" title="Remove Item">
          <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
            <path d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>
    `;
  });

  container.innerHTML = html;
  if (subtotalEl) {
    subtotalEl.textContent = '₹' + total.toLocaleString('en-IN');
  }
}

// Make removeFromBag accessible globally
window.removeFromBag = removeFromBag;

// --- PRODUCT QUICK VIEW MODAL ---
function initQuickViewModal() {
  const modal = document.querySelector('#quickview-modal');
  const closeBtn = document.querySelector('#quickview-close');

  // Trigger quick view from cards
  document.addEventListener('click', (e) => {
    const qvBtn = e.target.closest('.product-quickview-btn') || e.target.closest('[data-quickview]');
    if (!qvBtn) return;

    e.preventDefault();
    const productId = qvBtn.dataset.productId;
    openQuickView(productId);
  });

  closeBtn?.addEventListener('click', () => {
    closeQuickView();
  });

  modal?.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeQuickView();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal?.classList.contains('open')) {
      closeQuickView();
    }
  });
}

function openQuickView(productId) {
  const prod = PRODUCTS.find(p => p.id === productId);
  if (!prod) return;

  const modal = document.querySelector('#quickview-modal');
  if (!modal) return;

  const imgEl = modal.querySelector('#qv-image');
  const catEl = modal.querySelector('#qv-category');
  const titleEl = modal.querySelector('#qv-title');
  const priceEl = modal.querySelector('#qv-price');
  const descEl = modal.querySelector('#qv-desc');
  const metalEl = modal.querySelector('#qv-metal');
  const stoneEl = modal.querySelector('#qv-stone');
  const badgeEl = modal.querySelector('#qv-badge');
  const addBagBtn = modal.querySelector('#qv-add-bag');
  const addWishBtn = modal.querySelector('#qv-add-wishlist');

  if (imgEl) imgEl.src = prod.image;
  if (imgEl) imgEl.alt = prod.name;
  if (catEl) catEl.textContent = prod.category;
  if (titleEl) titleEl.textContent = prod.name;
  if (priceEl) priceEl.textContent = prod.price;
  if (descEl) descEl.textContent = prod.description;
  if (metalEl) metalEl.textContent = prod.metal;
  if (stoneEl) stoneEl.textContent = prod.stone;
  if (badgeEl) badgeEl.textContent = prod.badge;

  if (addBagBtn) {
    addBagBtn.onclick = () => {
      addToBag(prod.id);
      closeQuickView();
    };
  }

  if (addWishBtn) {
    addWishBtn.onclick = () => {
      toggleWishlist(prod.id);
      addWishBtn.textContent = wishlist.includes(prod.id) ? '♥ Saved in Wishlist' : '♡ Add to Wishlist';
    };
    addWishBtn.textContent = wishlist.includes(prod.id) ? '♥ Saved in Wishlist' : '♡ Add to Wishlist';
  }

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeQuickView() {
  const modal = document.querySelector('#quickview-modal');
  modal?.classList.remove('open');
  document.body.style.overflow = '';
}

// --- SEARCH OVERLAY SYSTEM ---
function initSearchOverlay() {
  const searchModal = document.querySelector('#search-modal');
  const searchTriggers = document.querySelectorAll('.search-trigger-btn');
  const closeBtn = document.querySelector('#search-close-btn');
  const input = document.querySelector('#search-input');
  const resultsGrid = document.querySelector('#search-results');

  searchTriggers.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      searchModal?.classList.add('open');
      document.body.style.overflow = 'hidden';
      setTimeout(() => input?.focus(), 150);
      renderSearchResults('');
    });
  });

  closeBtn?.addEventListener('click', () => {
    searchModal?.classList.remove('open');
    document.body.style.overflow = '';
  });

  input?.addEventListener('input', (e) => {
    renderSearchResults(e.target.value.trim().toLowerCase());
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && searchModal?.classList.contains('open')) {
      searchModal.classList.remove('open');
      document.body.style.overflow = '';
    }
  });

  function renderSearchResults(query) {
    if (!resultsGrid) return;
    const matches = query === '' 
      ? PRODUCTS.slice(0, 4) 
      : PRODUCTS.filter(p => p.name.toLowerCase().includes(query) || p.category.toLowerCase().includes(query));

    if (matches.length === 0) {
      resultsGrid.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 3rem 1rem; color: #888;">
          <p style="font-size: 1.25rem; font-family: var(--font-heading);">No pieces matched "${query}"</p>
          <p style="font-size: 0.85rem; margin-top: 0.5rem;">Try searching for "Gold", "Ring", "Necklace", or "Pearl"</p>
        </div>
      `;
      return;
    }

    resultsGrid.innerHTML = matches.map(prod => `
      <div class="product-card" style="cursor: pointer;" onclick="openQuickView('${prod.id}'); document.querySelector('#search-modal').classList.remove('open');">
        <div class="product-image-wrap">
          <img src="${prod.image}" alt="${prod.name}" class="product-img">
        </div>
        <div class="product-info">
          <span class="product-category">${prod.category}</span>
          <h4 class="product-title">${prod.name}</h4>
          <div class="product-footer">
            <span class="product-price">${prod.price}</span>
            <span class="btn-underline" style="font-size: 0.7rem;">Quick View</span>
          </div>
        </div>
      </div>
    `).join('');
  }
}

// Make openQuickView accessible globally
window.openQuickView = openQuickView;

// --- NEWSLETTER VALIDATION ---
function initNewsletter() {
  document.querySelectorAll('.newsletter-form').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('.newsletter-input');
      const feedback = form.parentElement.querySelector('.newsletter-feedback');
      const email = input?.value.trim();

      if (!email || !email.includes('@') || !email.includes('.')) {
        showToast('Please provide a valid email address.', '⚠');
        return;
      }

      input.value = '';
      if (feedback) {
        feedback.textContent = '✦ Welcome to the Carats Atelier Society. A private invitation has been sent.';
        feedback.classList.add('active');
      }
      showToast('Thank you for subscribing to Carats Atelier Society.', '✦');
    });
  });
}

// --- BACK TO TOP BUTTON ---
function initBackToTop() {
  const btn = document.querySelector('.back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 450) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

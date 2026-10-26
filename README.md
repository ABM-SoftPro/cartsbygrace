# CARATS ATELIER — Premium Jewellery Website (3 Unique Homepage Concepts)

A luxury fine jewellery frontend demonstration website presenting **three distinctly unique homepage concepts** designed for client presentation and creative direction selection. Inspired by modern fine jewellery aesthetics (such as [Carats by Grace](https://www.instagram.com/caratsbygrace)), quiet luxury, high-fashion editorial catalogues, and romantic boutique gifting.

---

## 💎 The Three Creative Concepts

| Concept | Creative Direction | Palette | Typography | Key Characteristics |
| :--- | :--- | :--- | :--- | :--- |
| **Home 1 — One Bright (Bright Luxury)** (`home-1.html` / `index.html`) | Ultra bright, radiant sunlit alabaster white & polished gold | Crisp Alabaster White (`#FCFBF9`), Sunlit Cream (`#F6F3ED`), Radiant Gold (`#B89047`), Charcoal (`#1C1917`) | **Cormorant Garamond** (Headings) & **Montserrat** (Body) | High-key airy photography, pristine white daylight boutique, 4-column balanced category grid, 18K solid gold hallmarking, heritage atelier craftsmanship |
| **Home 2 — One Little Dark (Midnight Noir Luxury)** (`home-2.html`) | Moody, high-contrast, midnight velvet & gilded gold noir | Deep Midnight Obsidian (`#111014`), Dark Charcoal Velvet (`#19171F`), Night Card (`#1D1B24`), Gilded Gold (`#D4AF37`) | **Bodoni Moda** (Headings) & **DM Sans** (Body) | Deep dark atmospheric styling, glowing gold typography & borders, asymmetrical campaign gallery, kinetic lookbook, high-end evening VIP salon atmosphere |
| **Home 3 — Carats by Grace (@caratsbygrace)** (`home-3.html`) | Direct homage to @caratsbygrace fine lab-grown diamond jewellery by Nishi & Prateek | Cashmere Blush Ivory (`#FDF9F6`), Soft Rose Cream (`#F6EDE7`), Rose Gold Shimmer (`#C08A63`), Mocha (`#33221E`) | **Playfair Display** (Headings) & **Lato** (Body) | 100% Real IGI-certified lab-grown diamonds, "Why Lab Diamonds" science breakdown, founders Nishi & Prateek's story, Instagram styling reel gallery, Lucknow Flagship Showroom (Mahanagar) & WhatsApp video tours |

---

## 🚀 Live Interaction & Features

All three homepages are fully functional, interactive, and share the common JavaScript engine:
- **Client Concept Switcher**: An interactive top bar and floating bottom switcher allows the client to switch between all 3 homepage concepts seamlessly with 1 click on desktop and mobile.
- **Product Quick-View Modal**: Clicking "Quick View" on any product card opens an interactive modal with high-res photography, specifications (purity, diamond carat, hallmarking), quantity, and "Add to Bag" / "Save to Wishlist".
- **Real-Time Search Overlay**: Clicking the search icon opens a full-screen luxury search overlay with live filtering across the catalogue.
- **Interactive Atelier Bag**: Slide-over drawer with item count, dynamic subtotal calculation in INR (`₹`), quantity adjustment, and item removal.
- **Wishlist Toggle**: Real-time heart toggling on all product cards with saved items counter and notification toasts.
- **Responsive Mobile Navigation**: Working hamburger menu with slide-in drawer and direct concept switcher.
- **Newsletter Subscription**: Frontend validation with custom feedback and toast confirmation.
- **Back to Top**: Smooth scroll button with auto-visibility threshold.

---

## 📁 Project Folder Structure

```
jewellery-showcase/
├── index.html              # Default landing page (displays Concept 1: Timeless Luxury)
├── home-1.html             # Concept 1: Timeless Luxury
├── home-2.html             # Concept 2: Modern Editorial Luxury
├── home-3.html             # Concept 3: Romantic Boutique
├── css/
│   └── style.css           # Comprehensive CSS design tokens, themes & layout rules
├── js/
│   └── main.js             # Vanilla JS state engine (Quick View, Bag, Search, Wishlist)
├── assets/
│   ├── images/             # High-resolution local jewellery photography
│   │   ├── hero-timeless.jpg
│   │   ├── hero-editorial.jpg
│   │   ├── hero-romantic.jpg
│   │   ├── celeste-necklace.jpg
│   │   ├── grace-ring.jpg
│   │   ├── luna-earrings.jpg
│   │   ├── aurora-bracelet.jpg
│   │   ├── solstice-pendant.jpg
│   │   ├── etoile-studs.jpg
│   │   ├── classic-hoops.jpg
│   │   ├── signature-solitaire.jpg
│   │   ├── craft-atelier.jpg
│   │   ├── materials-gold.jpg
│   │   ├── gift-box.jpg
│   │   └── ...
│   └── icons/              # Scalable SVG vector icons
└── README.md               # Documentation & deployment guide
```

---

## 💻 How to Run Locally

Because this project is built purely with **HTML5, CSS3, and Vanilla JavaScript**, no build process (`npm install` or compilation) is required.

### Method 1: Direct File Opening
Double-click `index.html` (or right-click &rarr; *Open With* &rarr; *Google Chrome* / *Edge* / *Safari* / *Firefox*).

### Method 2: Local HTTP Server (Optional)
If you prefer running via a local server:

**Using Python:**
```bash
python -m http.server 8000
# Open http://localhost:8000 in your browser
```

**Using Node.js (`npx serve`):**
```bash
npx -y serve .
```

**Using VS Code Live Server:**
Right-click `index.html` and click **"Open with Live Server"**.

---

## 🌐 Deploying to GitHub Pages

1. **Initialize Git Repository (if not already done):**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Carats Atelier jewellery showcase (3 homepages)"
   ```

2. **Push to your GitHub repository:**
   ```bash
   git branch -M main
   git remote add origin https://github.com/<YOUR-USERNAME>/<YOUR-REPOSITORY-NAME>.git
   git push -u origin main
   ```

3. **Enable GitHub Pages:**
   - In your GitHub repository, go to **Settings** &rarr; **Pages** (under the "Code and automation" section).
   - Under **Build and deployment** &gt; **Source**, select **Deploy from a branch**.
   - Under **Branch**, select `main` and folder `/ (root)`.
   - Click **Save**.
   - Your site will be live within 1–2 minutes at: `https://<YOUR-USERNAME>.github.io/<YOUR-REPOSITORY-NAME>/`

---

## 🎨 How to Customize Brand Name, Images & Pricing

1. **Replacing Brand Name (`CARATS ATELIER`):**
   - Search for `CARATS ATELIER` across `index.html`, `home-1.html`, `home-2.html`, and `home-3.html` and replace it with your client's preferred brand name.
2. **Replacing Product Names & Prices:**
   - Open `js/main.js` and locate the `PRODUCTS` array at the top. You can easily adjust names, prices in INR (`₹`), stone specifications, and image paths.
3. **Adding Your Own Product Photos:**
   - Place your product photos in `assets/images/` and update the matching filenames in the HTML or in `js/main.js`.
4. **Customizing Typography:**
   - Google Fonts links are defined in `css/style.css` and can be changed to match client brand guidelines.

---

## ⚖️ Technical Architecture & Quality Assurance

- **Zero External Dependencies**: Pure vanilla HTML5, CSS3, and JavaScript.
- **GitHub Pages Compatible**: All asset links and page navigation use strict relative paths (`./css/style.css`, `assets/images/...`, `home-1.html`, etc.).
- **Responsive on All Devices**: Tested and optimized for 1440px, 1024px, 768px, 390px, and 320px screens.
- **Accessibility & Performance**: Semantic HTML elements, ARIA labels on interactive elements, lazy loading on below-the-fold images, and keyboard accessibility for modals (`Esc` key to close).
- **Client Presentation Ready**: Fully responsive navigation bar, quick switcher banner, and interactive cart & wishlist states.

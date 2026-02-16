import { cart } from './cart.js';
import { getCurrentUser, logoutUser } from './auth.js';

// Products will be fetched from Supabase
let products = [];

// --- Daily FarmFresh UI Components ---

// 1. Desktop Header (Matches specific Daily FarmFresh Layout)
const desktopHeaderHTML = `
<div class="header-desktop container">
    <div class="flex items-center">
        <a href="index.html" class="logo-text">daily<span class="logo-suffix">farmfresh</span></a>
        <div class="location-box" style="margin-left: 3rem;">
            <span class="location-title">Delivery in 8 minutes</span>
            <span class="location-desc">Bangalore, India <span style="font-size:0.7rem">▼</span></span>
        </div>
    </div>
    
    <div class="header-search">
        <span class="search-icon">🔍</span>
        <input type="text" class="search-input" placeholder="Search 'milk'">
    </div>

    <div class="nav-actions">
        <span class="login-btn">Login</span>
        <a href="cart.html" class="cart-btn-desktop">
            <span class="text-xl">🛒</span>
            <div class="flex flex-col items-start leading-none">
                <span class="text-xs font-medium" id="desk-cart-count">My Cart</span>
                <span class="text-xs font-bold" id="desk-cart-total"></span>
            </div>
        </a>
    </div>
</div>
`;

// 2. Mobile Header (Sticky & Compact)
const mobileHeaderHTML = `
<div class="mobile-header-modern">
    <div class="header-top-row">
        <div class="location-info">
            <div class="delivery-title">Delivery in <span class="delivery-time-highlight" style="margin-left:4px;"> 8 mins</span></div>
            <div class="location-subtitle">Home - Bangalore <span style="font-size: 0.6rem; transform: translateY(1px);">▼</span></div>
        </div>
        <div class="user-profile-btn">
            👤
        </div>
    </div>
    
    <div class="header-search-container">
        <label for="search-input-mobile" class="modern-search-bar">
            <svg class="search-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input id="search-input-mobile" type="text" class="modern-search-input" placeholder="Search 'milk', 'chips'...">
        </label>
    </div>
</div>
`;

// 3. Footer (Simple)
const footerHTML = `
<div class="container flex flex-col items-center py-8 text-muted text-sm">
    <div class="flex gap-4 mb-4 font-medium">
        <a href="#">About</a>
        <a href="#">Careers</a>
        <a href="#">Partner</a>
        <a href="https://adminfreshmart.netlify.app/">Admin</a>
    </div>
    <p class="text-xs">© 2024 Daily FarmFresh. All rights reserved.</p>
</div>
`;

// Helper: Format Currency
export function formatCurrency(amount) {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 0
    }).format(amount);
}

// Generate Product Card HTML matching the existing design
// Updated Product Card for Home Page
function generateProductCardHTML(product) {
    // Check NUMERIC stock logic
    const isOutOfStock = (product.stock_quantity !== null && product.stock_quantity <= 0);
    const hasDiscount = product.mrp && product.mrp > product.price;

    // UI Logic
    const saleTag = hasDiscount ? `<span class="absolute top-3 left-3 rounded-md bg-red-500 px-2 py-1 text-[10px] font-bold text-white uppercase">Sale</span>` : '';
    const opacityClass = isOutOfStock ? 'opacity-50 grayscale' : '';
    const cursorClass = isOutOfStock ? 'cursor-not-allowed' : 'hover:scale-110';
    const btnColor = isOutOfStock ? 'bg-gray-400' : 'bg-primary';
    const btnText = isOutOfStock ? 'Sold Out' : '<span class="material-symbols-outlined">add</span>';
    const btnDisabled = isOutOfStock ? 'disabled' : '';

    return `
        <div class="group rounded-3xl bg-white dark:bg-white/5 p-4 shadow-sm hover:shadow-xl transition-all duration-300 ${opacityClass}">
            <div class="relative mb-4 aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-50 to-green-100 dark:from-emerald-900/30 dark:to-green-800/30">
                ${product.image_url ? `<img src="${product.image_url}" class="h-full w-full object-cover" />` :
            `<div class="h-full w-full flex items-center justify-center"><span class="material-symbols-outlined text-6xl text-emerald-300">local_mall</span></div>`}
                ${saleTag}
            </div>
            <div class="px-2 pb-2">
                <span class="text-[10px] font-bold uppercase tracking-widest text-primary">${product.category || 'General'}</span>
                <h4 class="mt-1 text-lg font-bold truncate">${product.name}</h4>
                <p class="text-xs font-medium opacity-50">${product.unit || ''}</p>
                <div class="mt-4 flex items-center justify-between">
                    <span class="text-xl font-extrabold">₹${product.price}</span>
                    <button class="add-to-cart-btn flex h-10 w-10 items-center justify-center rounded-xl ${btnColor} text-white transition-transform ${cursorClass}"
                        data-id="${product.id}" ${btnDisabled}>
                        ${btnText}
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Initialize Home Page - Fetch and render products
async function initHomePage() {
    const grid = document.getElementById('featured-products-grid');
    if (!grid) return; // Not on home page

    // Show loading state
    grid.innerHTML = '<p class="col-span-full text-center text-gray-500">Loading products...</p>';

    try {
        // Fetch products from Supabase
        const allProducts = await window.dbFetchProducts();

        // Store globally for cart functionality
        products = allProducts;

        // Filter only 'In Stock' products
        // Create display list (show all, including out of stock)
        const displayProducts = allProducts;

        if (displayProducts.length === 0) {
            grid.innerHTML = '<p class="col-span-full text-center text-gray-500">No products available at the moment.</p>';
            return;
        }

        // Generate and inject HTML
        const cardsHTML = displayProducts.map(product => generateProductCardHTML(product)).join('');
        grid.innerHTML = cardsHTML;

        // Update product buttons after rendering
        updateProductButtons();

    } catch (error) {
        console.error('Error loading products:', error);
        grid.innerHTML = '<p class="col-span-full text-center text-red-500">Failed to load products. Please try again.</p>';
    }
}

// Generate Category Page Product Card HTML (different style from home page)
// Updated Product Card for Category/Search Page
function generateCategoryProductCardHTML(product) {
    // Check NUMERIC stock logic
    const isOutOfStock = (product.stock_quantity !== null && product.stock_quantity <= 0);

    return `
        <div class="product-card group flex flex-col p-3 rounded-lg border border-gray-100 bg-white transition-all h-full hover:shadow-lg relative ${isOutOfStock ? 'opacity-60' : ''}">
            <div class="relative aspect-square mb-3 bg-gray-50 rounded-lg flex items-center justify-center overflow-hidden">
                ${product.image_url ? `<img src="${product.image_url}" class="h-full w-full object-cover" />` :
            `<span class="material-symbols-outlined text-5xl text-gray-300">shopping_basket</span>`}
            </div>
            <div class="flex-grow">
                <h3 class="text-[13px] font-semibold text-gray-800 leading-snug mb-1 line-clamp-2">${product.name}</h3>
                <span class="text-[12px] text-gray-500 font-medium block mb-2">${product.unit || ''}</span>
            </div>
            <div class="mt-2 flex items-center justify-between">
                <div class="flex flex-col leading-none">
                    <span class="text-sm font-bold text-gray-900">₹${product.price}</span>
                </div>
                <button class="add-btn add-to-cart-btn ${isOutOfStock ? 'bg-gray-400 border-gray-400 cursor-not-allowed' : ''}" 
                    data-id="${product.id}" ${isOutOfStock ? 'disabled' : ''}>
                    ${isOutOfStock ? 'SOLD OUT' : 'ADD'}
                </button>
            </div>
        </div>
    `;
}

// Initialize Category Page - Fetch and filter products by category or search
async function initCategoryPage() {
    const grid = document.getElementById('category-products-grid');
    if (!grid) return; // Not on category page

    // Show loading state
    grid.innerHTML = '<p class="col-span-full text-center text-gray-500 py-8">Loading products...</p>';

    // Get URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const categoryParam = urlParams.get('cat');
    const searchParam = urlParams.get('search');

    // Update page title based on category or search
    const titleEl = document.getElementById('category-title');
    if (titleEl) {
        if (searchParam) {
            titleEl.textContent = `Search results for "${searchParam}"`;
        } else if (categoryParam) {
            titleEl.textContent = `Buy ${categoryParam} Online`;
        } else {
            titleEl.textContent = 'All Products';
        }
    }

    // Highlight active category in sidebar
    const categoryLinks = document.querySelectorAll('.category-link');
    categoryLinks.forEach(link => {
        const linkCat = link.dataset.cat;
        if (linkCat && categoryParam && linkCat.toLowerCase() === categoryParam.toLowerCase()) {
            link.classList.remove('border-transparent', 'hover:bg-gray-50');
            link.classList.add('border-primary', 'bg-primary-light', 'active');
            link.querySelector('div').classList.remove('bg-gray-100');
            link.querySelector('div').classList.add('bg-white', 'shadow-sm');
            link.querySelector('span').classList.remove('text-gray-600');
            link.querySelector('span').classList.add('text-primary', 'font-bold');
        } else {
            link.classList.add('border-transparent', 'hover:bg-gray-50');
            link.classList.remove('border-primary', 'bg-primary-light', 'active');
        }
    });

    try {
        // Fetch products from Supabase
        const allProducts = await window.dbFetchProducts();

        // Store globally for cart functionality
        products = allProducts;

        // Use all products (including Out of Stock)
        let filteredProducts = allProducts;

        // Apply category filter if present
        if (categoryParam) {
            filteredProducts = filteredProducts.filter(p =>
                p.category && p.category.toLowerCase() === categoryParam.toLowerCase()
            );
        }

        // Apply search filter if present
        if (searchParam) {
            const searchLower = searchParam.toLowerCase();
            filteredProducts = filteredProducts.filter(p =>
                (p.name && p.name.toLowerCase().includes(searchLower)) ||
                (p.category && p.category.toLowerCase().includes(searchLower))
            );
        }

        if (filteredProducts.length === 0) {
            const message = searchParam
                ? `No products found for "${searchParam}"`
                : categoryParam
                    ? `No products found in this category`
                    : 'No products available';
            grid.innerHTML = `<p class="col-span-full text-center text-gray-500 py-8">${message}</p>`;
            return;
        }

        // Generate and inject HTML
        const cardsHTML = filteredProducts.map(product => generateCategoryProductCardHTML(product)).join('');
        grid.innerHTML = cardsHTML;

        // Update product buttons after rendering
        updateProductButtons();

    } catch (error) {
        console.error('Error loading category products:', error);
        grid.innerHTML = '<p class="col-span-full text-center text-red-500 py-8">Failed to load products. Please try again.</p>';
    }
}

// Serialization of auth.js
// Duplicate import removed

// Initialization
document.addEventListener('DOMContentLoaded', async () => {
    // --- AUTH UI HANDLER ---
    // Function to update Header UI
    async function updateAuthUI() {
        const user = await getCurrentUser();

        // Select login buttons (Desktop & Mobile)
        // Ensure your HTML elements have these classes
        const loginBtns = document.querySelectorAll('.login-btn, .user-profile-btn');

        if (user) {
            // User IS logged in
            loginBtns.forEach(btn => {
                // Show User Icon instead of "Login" text
                btn.innerHTML = `<span class="material-symbols-outlined">person</span>`;
                btn.title = `Hi, ${user.profile?.full_name || 'User'}`;
                btn.style.cursor = 'pointer';

                // FIX: Directly go to Profile Page (No popup)
                btn.onclick = (e) => {
                    e.preventDefault();
                    console.log("Profile button clicked -> Going to profile.html"); // Debug line
                    window.location.href = 'profile.html';
                };
            });
        } else {
            // User is NOT logged in
            loginBtns.forEach(btn => {
                btn.textContent = "Login";
                btn.onclick = () => window.location.href = 'login.html';
            });
        }
    }

    // Run the check
    updateAuthUI();

    // Inject Header - DISABLED for new design which has hardcoded header
    /*
    const headerEl = document.querySelector('header');
    if (headerEl) {
        // We inject BOTH. CSS controls visibility.
        headerEl.innerHTML = desktopHeaderHTML + mobileHeaderHTML;
        // Remove class restrictions from the container if they conflict
        headerEl.className = ''; 
    }
    */

    const footerEl = document.querySelector('footer');
    // if (footerEl) footerEl.innerHTML = footerHTML; // Keep existing footer if any, or disable if new design has one

    // Initialize Home Page (fetch products from Supabase)
    await initHomePage();

    // Initialize Category Page (fetch products from Supabase)
    await initCategoryPage();

    // Initial Cart Update
    updateCartUI();

    // Listen for Cart Updates
    window.addEventListener('cart-updated', updateCartUI);
    window.addEventListener('cart-updated', updateProductButtons);

    // Initial render of product buttons based on cart state
    updateProductButtons();

    // Global Event Delegation for Cart Actions
    document.body.addEventListener('click', (e) => {
        // Handle "ADD" buttons
        const btn = e.target.closest('.add-to-cart-btn') || e.target.closest('.btn-add-blinkit');
        if (btn && !btn.disabled) {
            const productId = btn.dataset.id;
            const product = products.find(p => p.id == productId);

            if (product) {
                cart.add(product);
                showToast(`Added ${product.name}`);
            }
            return;
        }

        // Handle increment button
        const incBtn = e.target.closest('.qty-increment');
        if (incBtn) {
            const productId = parseInt(incBtn.dataset.id);
            cart.updateQty(productId, 1);
            return;
        }

        // Handle decrement button
        const decBtn = e.target.closest('.qty-decrement');
        if (decBtn) {
            const productId = parseInt(decBtn.dataset.id);
            cart.updateQty(productId, -1);
            return;
        }
    });
});

// Update product buttons to show quantity controls if item is in cart
function updateProductButtons() {
    document.querySelectorAll('.add-to-cart-btn, .btn-add-blinkit').forEach(btn => {
        const productId = parseInt(btn.dataset.id);
        const cartItem = cart.items.find(item => item.id === productId);
        const container = btn.parentElement;

        // Find existing quantity controls for THIS specific product
        let qtyControls = container.querySelector(`.qty-controls[data-product-id="${productId}"]`);

        if (cartItem && cartItem.qty > 0) {
            // Hide the add button
            btn.style.display = 'none';

            if (!qtyControls) {
                // Remove any orphaned qty-controls first
                const oldControls = container.querySelectorAll('.qty-controls');
                oldControls.forEach(ctrl => ctrl.remove());

                // Create quantity controls
                qtyControls = document.createElement('div');
                qtyControls.className = 'qty-controls flex items-center bg-primary rounded-xl overflow-hidden';
                qtyControls.dataset.productId = productId;
                qtyControls.innerHTML = `
                    <button class="qty-decrement flex h-10 w-10 items-center justify-center text-background-dark hover:bg-primary/80 transition-colors" data-id="${productId}">
                        <span class="material-symbols-outlined text-lg">remove</span>
                    </button>
                    <span class="qty-value w-8 text-center font-bold text-background-dark">${cartItem.qty}</span>
                    <button class="qty-increment flex h-10 w-10 items-center justify-center text-background-dark hover:bg-primary/80 transition-colors" data-id="${productId}">
                        <span class="material-symbols-outlined text-lg">add</span>
                    </button>
                `;
                container.appendChild(qtyControls);
            } else {
                // Update quantity display
                const qtyValue = qtyControls.querySelector('.qty-value');
                if (qtyValue) qtyValue.textContent = cartItem.qty;
            }
        } else {
            // Show add button, remove ALL quantity controls in this container
            btn.style.display = 'flex';
            const allControls = container.querySelectorAll('.qty-controls');
            allControls.forEach(ctrl => ctrl.remove());
        }
    });
}

function updateCartUI() {
    const totals = cart.getTotals();

    // New Design Desktop Badge
    const deskBadge = document.getElementById('desk-cart-badge');

    // Old Design Desktop Elements (Safety check)
    const deskCount = document.getElementById('desk-cart-count');
    const deskTotal = document.getElementById('desk-cart-total');

    if (deskBadge) {
        // Toggle visibility based on count
        if (totals.count > 0) {
            deskBadge.textContent = totals.count;
            deskBadge.classList.remove('hidden');
        } else {
            deskBadge.classList.add('hidden');
        }
    }

    if (deskCount && deskTotal) {
        if (totals.count > 0) {
            deskCount.textContent = `${totals.count} items`;
            deskTotal.textContent = `₹${totals.total}`;
        } else {
            deskCount.textContent = "My Cart";
            deskTotal.textContent = "";
        }
    }

    // Mobile Badge (if exists in bottom nav)
    const mobileBadge = document.getElementById('nav-badge');
    if (mobileBadge) {
        mobileBadge.textContent = totals.count;
        mobileBadge.classList.toggle('hidden', totals.count === 0);
    }

    // Sticky Cart Footer (Category Page)
    const stickyBar = document.getElementById('cart-sticky-bar');
    const stickyCount = document.getElementById('cart-sticky-count');
    const stickyTotal = document.getElementById('cart-sticky-total');

    if (stickyBar && stickyCount && stickyTotal) {
        if (totals.count > 0) {
            stickyBar.classList.remove('hidden');
            stickyBar.classList.add('flex'); // Ensure flex display when shown
            stickyCount.textContent = totals.count;
            stickyTotal.textContent = `₹${totals.total}`;
        } else {
            stickyBar.classList.add('hidden');
            stickyBar.classList.remove('flex');
        }
    }
}

// Toast Notification
function showToast(message) {
    let toast = document.querySelector('.toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.className = 'toast';
        document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2000);
}

// Inject Dynamic Styles for Utilities missed in CSS
const style = document.createElement('style');
style.textContent = `
    /* Toast Styles */
    .toast {
        position: fixed; bottom: 80px; left: 50%; transform: translateX(-50%) translateY(20px);
        background: #333; color: white; padding: 8px 16px; border-radius: 20px;
        font-size: 0.8rem; opacity: 0; transition: all 0.3s; pointer-events: none; z-index: 3000;
    }
    .toast.show { transform: translateX(-50%) translateY(0); opacity: 1; }

    /* Visibility Utilities for Header */
    @media (min-width: 1024px) {
        .header-mobile { display: none !important; }
    }
    @media (max-width: 1023px) {
        .header-desktop { display: none !important; }
    }
`;
document.head.appendChild(style);

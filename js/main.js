import { cart } from './cart.js';
import { products } from './data.js';

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
        <a href="admin.html">Admin</a>
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

// Initialization
document.addEventListener('DOMContentLoaded', () => {
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

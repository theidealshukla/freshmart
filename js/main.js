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
<div class="header-mobile" style="background: white; position: sticky; top: 0; z-index: 999; border-bottom: 1px solid #f0f0f0;">
    <div class="flex items-center justify-between p-3">
        <div class="flex flex-col">
            <span class="font-bold text-xl" style="letter-spacing: -0.5px;">FarmFresh in 8 mins</span>
            <span class="text-xs text-muted">Home - Bangalore ▼</span>
        </div>
        <div style="background: #f5f5f5; width: 36px; height: 36px; border-radius: 50%; display: flex; align-items: center; justify-content: center;">
            👤
        </div>
    </div>
    <div class="px-3 pb-3">
        <div class="flex items-center bg-gray-50 border rounded-lg px-3 py-2" style="background: #f8f8f8; border: 1px solid #eee; border-radius: 10px;">
            <span class="text-muted mr-2">🔍</span>
            <input type="text" placeholder="Search 'chips'" style="background: transparent; border: none; outline: none; width: 100%; font-size: 0.9rem;">
        </div>
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
    // Inject Header (Handle both if strict placement needed, otherwise replace first header)
    const headerEl = document.querySelector('header');
    if (headerEl) {
        // We inject BOTH. CSS controls visibility.
        headerEl.innerHTML = desktopHeaderHTML + mobileHeaderHTML;
        // Remove class restrictions from the container if they conflict
        headerEl.className = ''; 
    }

    const footerEl = document.querySelector('footer');
    if (footerEl) footerEl.innerHTML = footerHTML;

    // Initial Cart Update
    updateCartUI();

    // Listen for Cart Updates
    window.addEventListener('cart-updated', updateCartUI);

    // Global Event Delegation for "Add to Cart"
    document.body.addEventListener('click', (e) => {
        // Handle "ADD" buttons
        const btn = e.target.closest('.add-to-cart-btn') || e.target.closest('.btn-add-blinkit');
        if (btn && !btn.disabled) {
            const productId = btn.dataset.id;
            // Find product in data (requires importing products, or passing data)
            // For now, we assume we can find it or it's attached. 
            // Better: use the id to find in the imported 'products' array
            const product = products.find(p => p.id == productId);

            if (product) {
                cart.add(product);
                showToast(`Added ${product.name}`);
                
                // Visual feedback
                const originalText = btn.textContent;
                btn.textContent = "ADDED";
                btn.style.background = "#0c831f";
                btn.style.color = "white";
                setTimeout(() => {
                    btn.textContent = originalText; // Reset for now (simple logic)
                    btn.style.background = "";
                    btn.style.color = "";
                }, 1000);
            }
        }
    });
});

function updateCartUI() {
    const totals = cart.getTotals();
    
    // Desktop Cart Button
    const deskCount = document.getElementById('desk-cart-count');
    const deskTotal = document.getElementById('desk-cart-total');
    
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

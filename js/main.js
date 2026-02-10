
import { cart } from './cart.js';
import { products } from './data.js';

// Common UI Components
const headerHTML = `
<div class="container header-content flex justify-between items-center">
    <a href="index.html" class="logo">
        <span style="background:var(--primary); color:white; padding:2px 8px; border-radius:4px;">F</span> FreshMart
    </a>
    
    <div class="search-bar">
        <span style="color:var(--text-muted); margin-right:8px;">🔍</span>
        <input type="text" class="search-input" placeholder="Search for atta, dal, chips...">
    </div>

    <div class="nav-actions flex items-center gap-4">
        <a href="orders.html" class="nav-icon" title="My Orders">
            👤
        </a>
        <a href="cart.html" class="nav-icon cart-icon-wrapper" title="Cart">
            🛒
            <span id="cart-badge" class="cart-badge">0</span>
        </a>
    </div>
</div>
`;

const footerHTML = `
<div class="container flex flex-col items-center">
    <div class="flex gap-6 mb-4">
        <a href="#">About Us</a>
        <a href="#">Careers</a>
        <a href="#">Privacy Policy</a>
        <a href="admin.html">Admin</a>
    </div>
    <p class="text-muted">© 2023 FreshMart India. All rights reserved.</p>
</div>
`;

// Helper: Format Currency (INR)
export function formatCurrency(amount) {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 2
    }).format(amount);
}

// Initialization
document.addEventListener('DOMContentLoaded', () => {
    // Inject Header & Footer
    const headerEl = document.querySelector('header');
    if (headerEl) headerEl.innerHTML = headerHTML;

    const footerEl = document.querySelector('footer');
    if (footerEl) footerEl.innerHTML = footerHTML;

    // Update Init Cart Badge
    updateCartIcon();

    // Listen for Cart Updates
    window.addEventListener('cart-updated', updateCartIcon);

    // Global Event Delegation for "Add to Cart" buttons
    document.body.addEventListener('click', (e) => {
        if (e.target.closest('.add-to-cart-btn')) {
            const btn = e.target.closest('.add-to-cart-btn');
            const productId = parseInt(btn.dataset.id);
            const product = products.find(p => p.id === productId);

            if (product) {
                cart.add(product);
                // Optional: Show toast
                showToast(`Added ${product.name} to cart!`);

                // Animate button
                btn.classList.add('bump');
                setTimeout(() => btn.classList.remove('bump'), 200);
            }
        }
    });
});

function updateCartIcon() {
    const badge = document.getElementById('cart-badge');
    if (badge) {
        const count = cart.getTotals().count; // Assume getTotals returns item count
        badge.textContent = count;
        badge.classList.toggle('hidden', count === 0);
    }
}

// Simple Toast Notification
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);

    // Trigger reflow
    toast.offsetHeight;

    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 2000);
}

// Toast Styles Injection
const style = document.createElement('style');
style.textContent = `
.toast {
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%) translateY(100px);
    background: var(--dark);
    color: white;
    padding: 10px 20px;
    border-radius: 20px;
    z-index: 2000;
    transition: transform 0.3s ease;
    opacity: 0;
}
.toast.show {
    transform: translateX(-50%) translateY(0);
    opacity: 1;
}
.bump {
    transform: scale(0.95);
}
`;
document.head.appendChild(style);


const CART_KEY = 'freshmart_cart';

export const cart = {
    items: JSON.parse(localStorage.getItem(CART_KEY)) || [],

    save() {
        localStorage.setItem(CART_KEY, JSON.stringify(this.items));
        this.notify();
    },

    add(product, qty = 1) {
        const existing = this.items.find(item => item.id === product.id);
        if (existing) {
            existing.qty += qty;
        } else {
            this.items.push({ ...product, qty });
        }
        this.save();
    },

    remove(productId) {
        this.items = this.items.filter(item => item.id !== productId);
        this.save();
    },

    updateQty(productId, delta) {
        const item = this.items.find(item => item.id === productId);
        if (item) {
            item.qty += delta;
            if (item.qty <= 0) {
                this.remove(productId);
            } else {
                this.save();
            }
        }
    },

    clear() {
        this.items = [];
        this.save();
    },

    getTotals() {
        const subtotal = this.items.reduce((sum, item) => sum + (item.price * item.qty), 0);
        // GST is typically inclusive in India MRP, but for breakdown let's show 5% tax on grocery
        const tax = subtotal * 0.05;
        // Free shipping for orders above ₹499
        const shipping = subtotal > 499 ? 0 : 40;
        const total = subtotal + tax + shipping;

        // Return raw numbers for calculations, formatted for display
        // We'll return formatted strings by default to keep it simple for UI consumers
        return {
            subtotal: subtotal.toFixed(2),
            tax: tax.toFixed(2),
            shipping: shipping.toFixed(2),
            total: total.toFixed(2),
            count: this.items.reduce((acc, item) => acc + item.qty, 0)
        };
    },

    notify() {
        window.dispatchEvent(new CustomEvent('cart-updated', {
            detail: {
                items: this.items,
                totals: this.getTotals()
            }
        }));
    }
};

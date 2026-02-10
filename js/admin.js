import { orders } from './data.js';

document.addEventListener('DOMContentLoaded', () => {
    initDashboard();
});

function initDashboard() {
    renderStats();
    renderOrdersTable();
}

function renderStats() {
    // Mock Statistics
    const stats = {
        revenue: 145000,
        pendingOrders: 12,
        customers: 128
    };

    // Format Currency
    const fmt = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 });

    const elSales = document.getElementById('stat-sales');
    const elOrders = document.getElementById('stat-orders');
    const elCust = document.getElementById('stat-customers');

    if(elSales) elSales.textContent = fmt.format(stats.revenue);
    if(elOrders) elOrders.textContent = stats.pendingOrders;
    if(elCust) elCust.textContent = stats.customers;
}

function renderOrdersTable() {
    const tbody = document.getElementById('admin-orders-table');
    if (!tbody) return;

    // Use data.js orders, replicate to fill table
    const data = [...orders, ...orders].slice(0, 6);

    tbody.innerHTML = data.map(order => `
        <tr>
            <td class="font-bold text-primary">#${order.id}</td>
            <td>
                <div class="flex items-center gap-2">
                    <div style="width:24px; height:24px; background:#eee; border-radius:50%;"></div>
                    <span>Customer ${order.id.slice(-4)}</span>
                </div>
            </td>
            <td>
                <div class="text-sm text-muted">${order.items.length} Items</div>
            </td>
            <td class="font-bold">₹${order.total}</td>
            <td>
                <span class="status-badge ${order.status === 'Delivered' ? 'delivered' : 'live'}" 
                      style="font-size:0.7rem;">
                    ${order.status}
                </span>
            </td>
            <td>
                <button class="text-xs border rounded px-2 py-1 hover:bg-gray-50">View</button>
            </td>
        </tr>
    `).join('');
}

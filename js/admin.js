
import { orders } from './data.js';

export function initAdmin() {
    renderDashboardStats();
    renderRecentOrders();
}

function renderDashboardStats() {
    // Mock Stats
    const stats = {
        sales: 12450.00,
        orders: 156,
        customers: 24,
        growth: '+12%'
    };

    document.getElementById('stat-sales').textContent = `₹${stats.sales.toLocaleString('en-IN')}`;
    document.getElementById('stat-orders').textContent = stats.orders;
    document.getElementById('stat-customers').textContent = stats.customers;
}

function renderRecentOrders() {
    const tbody = document.getElementById('admin-orders-table');
    if (!tbody) return;

    // Use imported orders or generate random ones if list is short
    const displayOrders = [...orders, ...orders, ...orders].slice(0, 5); // Duplicate to fill table

    tbody.innerHTML = displayOrders.map(order => `
        <tr class="border-b hover:bg-gray-50">
            <td class="p-3 text-sm text-primary font-bold">#${order.id}</td>
            <td class="p-3 text-sm flex items-center gap-2">
                <img src="${order.items[0]?.image || 'https://via.placeholder.com/30'}" class="w-6 h-6 rounded-full" style="width:24px; height:24px;">
                ${order.items[0]?.name || 'Unknown'} +${order.itemCount - 1}
            </td>
            <td class="p-3 text-sm">${order.date}</td>
            <td class="p-3 text-sm font-bold">₹${order.total.toFixed(2)}</td>
            <td class="p-3">
                <span class="badge px-2 py-1 rounded text-xs font-bold ${getStatusClass(order.status)}">
                    ${order.status}
                </span>
            </td>
            <td class="p-3 text-sm text-right">
                <button class="text-xs text-primary hover:underline" style="color:var(--primary)">View</button>
            </td>
        </tr>
    `).join('');
}

function getStatusClass(status) {
    switch (status) {
        case 'Delivered': return 'bg-green-100 text-green-800';
        case 'Out for Delivery': return 'bg-blue-100 text-blue-800';
        case 'Cancelled': return 'bg-red-100 text-red-800';
        default: return 'bg-gray-100 text-gray-800';
    }
}

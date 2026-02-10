
export const categories = [
    { id: 'fruits-veg', name: 'Fruits & Veg', image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&q=80&w=200' },
    { id: 'dairy-bread', name: 'Dairy & Bread', image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&q=80&w=200' }, // Changed Dairy & Eggs -> Dairy & Bread (more common)
    { id: 'staples', name: 'Atta, Rice & Dal', image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=200' }, // Changed Pantry -> Staples
    { id: 'snacks-drinks', name: 'Snacks & Drinks', image: 'https://images.unsplash.com/photo-1621939514649-28b12e816a85?auto=format&fit=crop&q=80&w=200' },
    { id: 'personal-care', name: 'Personal Care', image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=200' },
    { id: 'household', name: 'Household', image: 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&q=80&w=200' },
];

export const products = [
    // Featured / Home
    {
        id: 1,
        name: 'Fresh Kashmiri Apples',
        category: 'fruits-veg',
        price: 180.00,
        unit: '1 kg',
        image: 'https://images.unsplash.com/photo-1630563452481-6f180e227308?auto=format&fit=crop&q=80&w=400',
        rating: 4.8,
        reviews: 142,
        badge: 'Season Special'
    },
    {
        id: 2,
        name: 'Amul Taaza Fresh Milk',
        category: 'dairy-bread',
        price: 54.00,
        unit: '1 L',
        image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&q=80&w=400', // Placeholder
        rating: 4.9,
        reviews: 528
    },
    {
        id: 3,
        name: 'Aashirvaad Whole Wheat Atta',
        category: 'staples',
        price: 245.00,
        unit: '5 kg',
        image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=400', // Placeholder
        rating: 4.8,
        reviews: 860,
        badge: 'Bestseller'
    },
    {
        id: 4,
        name: 'Tata Salt',
        category: 'staples',
        price: 28.00,
        unit: '1 kg',
        image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&q=80&w=400', // Placeholder
        rating: 4.9,
        reviews: 940
    },
    // Snacks & Drinks
    {
        id: 5,
        name: 'Thums Up',
        category: 'snacks-drinks',
        subcategory: 'Beverages',
        price: 40.00,
        origPrice: 45.00,
        unit: '750 ml',
        image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=400',
        badge: 'OFF ₹5'
    },
    {
        id: 6,
        name: 'Lays Classic Salted',
        category: 'snacks-drinks',
        subcategory: 'Snacks',
        price: 20.00,
        unit: '50g',
        image: 'https://images.unsplash.com/photo-1566478989037-eec170784d0b?auto=format&fit=crop&q=80&w=400'
    },
    {
        id: 7,
        name: 'Real Fruit Power - Mixed Fruit',
        category: 'snacks-drinks',
        subcategory: 'Beverages',
        price: 110.00,
        unit: '1L',
        image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&q=80&w=400'
    },
    {
        id: 8,
        name: 'Cadbury Dairy Milk Silk',
        category: 'snacks-drinks',
        subcategory: 'Chocolates',
        price: 80.00,
        unit: '60g',
        image: 'https://images.unsplash.com/photo-1623863765181-432d64f068af?auto=format&fit=crop&q=80&w=400',
        badge: 'Trending'
    },
    {
        id: 9,
        name: 'Doritos Nacho Cheese',
        category: 'snacks-drinks',
        subcategory: 'Snacks',
        price: 50.00,
        unit: '140g',
        image: 'https://images.unsplash.com/photo-1621447504864-d8686e12698c?auto=format&fit=crop&q=80&w=400'
    },
    {
        id: 10,
        name: 'Coca Cola Can',
        category: 'snacks-drinks',
        subcategory: 'Beverages',
        price: 40.00,
        unit: '300ml',
        image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=400'
    }
];

export const orders = [
    {
        id: 'ORD-8832-IN',
        date: 'Oct 24, 2023',
        total: 450.00,
        status: 'Out for Delivery',
        items: [
            { name: 'Kashmiri Apples', qty: 1, image: 'https://images.unsplash.com/photo-1630563452481-6f180e227308?w=100' },
            { name: 'Amul Milk', qty: 2, image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=100' }
        ],
        itemCount: 3
    },
    {
        id: 'ORD-8451-IN',
        date: 'Oct 15, 2023',
        total: 1240.00,
        status: 'Delivered',
        deliveredDate: 'Oct 16',
        items: [
            { name: 'Aashirvaad Atta', qty: 1, image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=100' },
            { name: 'Tata Salt', qty: 1, image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=100' }
        ],
        itemCount: 5
    }
];

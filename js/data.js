
export const categories = [
    { id: 'paan-corner', name: 'Paan Corner', image: 'https://images.unsplash.com/photo-1549480017-d76466a4b7e8?auto=format&fit=crop&q=80&w=200' },
    { id: 'dairy-bread', name: 'Dairy, Bread & Eggs', image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&q=80&w=200' },
    { id: 'fruits-veg', name: 'Fruits & Vegetables', image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&q=80&w=200' },
    { id: 'cold-drinks', name: 'Cold Drinks & Juices', image: 'https://images.unsplash.com/photo-1623864070747-0610996f2648?auto=format&fit=crop&q=80&w=200' },
    { id: 'snacks', name: 'Snacks & Munchies', image: 'https://images.unsplash.com/photo-1621939514649-28b12e816a85?auto=format&fit=crop&q=80&w=200' },
    { id: 'breakfast', name: 'Breakfast & Instant Food', image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&q=80&w=200' },
    { id: 'sweet-tooth', name: 'Sweet Tooth', image: 'https://images.unsplash.com/photo-1548907040-4baa42bf10c4?auto=format&fit=crop&q=80&w=200' },
    { id: 'bakery', name: 'Bakery & Biscuits', image: 'https://images.unsplash.com/photo-1588195538326-c5f1f9c4a79a?auto=format&fit=crop&q=80&w=200' },
    { id: 'tea-coffee', name: 'Tea, Coffee & Milk Drinks', image: 'https://images.unsplash.com/photo-1577968897966-3d4325b36b61?auto=format&fit=crop&q=80&w=200' },
    { id: 'staples', name: 'Atta, Rice & Dal', image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=200' },
    { id: 'masala', name: 'Masala, Oil & More', image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=200' },
    { id: 'sauces', name: 'Sauces & Spreads', image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=200' },
    { id: 'chicken-meat', name: 'Chicken, Meat & Fish', image: 'https://images.unsplash.com/photo-1588168333986-5078d3ae3976?auto=format&fit=crop&q=80&w=200' },
    { id: 'organic', name: 'Organic & Healthy Living', image: 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&q=80&w=200' },
    { id: 'baby-care', name: 'Baby Care', image: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&q=80&w=200' },
    { id: 'pharma', name: 'Pharma & Wellness', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=200' },
    { id: 'cleaning', name: 'Cleaning Essentials', image: 'https://images.unsplash.com/photo-1585830812406-894101e1493b?auto=format&fit=crop&q=80&w=200' },
    { id: 'home', name: 'Home & Office', image: 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&q=80&w=200' },
    { id: 'personal-care', name: 'Personal Care', image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=200' },
    { id: 'pet-care', name: 'Pet Care', image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=200' },
];

export const products = [
    // Featured / Home
    {
        id: 1,
        name: 'Fresh Kashmiri Apples',
        category: 'fruits-veg',
        price: 180.00,
        mrp: 220.00,
        unit: '1 kg',
        weight: '1 kg',
        image: 'https://images.unsplash.com/photo-1630563452481-6f180e227308?auto=format&fit=crop&q=80&w=400',
        rating: 4.8,
        ratingCount: 4171,
        badge: 'Season Special',
        isVeg: true,
        deliveryTime: '12 MINS'
    },
    {
        id: 2,
        name: 'Amul Taaza Fresh Milk',
        category: 'dairy-bread',
        price: 54.00,
        mrp: 58.00,
        unit: '1 L',
        weight: '1 L',
        image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&q=80&w=400',
        rating: 4.9,
        ratingCount: 1528,
        isVeg: true,
        bestseller: true,
        deliveryTime: '10 MINS'
    },
    {
        id: 3,
        name: 'Aashirvaad Whole Wheat Atta',
        category: 'staples',
        price: 245.00,
        mrp: 285.00,
        unit: '5 kg',
        weight: '5 kg',
        image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=400',
        rating: 4.8,
        ratingCount: 8600,
        badge: 'Bestseller',
        isVeg: true,
        deliveryTime: '15 MINS'
    },
    {
        id: 4,
        name: 'Tata Salt',
        category: 'staples',
        price: 28.00,
        mrp: 30.00,
        unit: '1 kg',
        weight: '1 kg',
        image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&q=80&w=400',
        rating: 4.9,
        ratingCount: 940,
        isVeg: true,
        deliveryTime: '8 MINS'
    },
    // Snacks & Drinks
    {
        id: 5,
        name: 'Cadbury Dairy Milk Silk Valentine Roast Almond',
        category: 'snacks',
        subcategory: 'Chocolates',
        price: 204.00,
        mrp: 214.00,
        unit: '134 g',
        weight: '134 g',
        image: 'https://images.unsplash.com/photo-1623863765181-432d64f068af?auto=format&fit=crop&q=80&w=400',
        rating: 4.8,
        ratingCount: 4171,
        isVeg: true,
        ad: true,
        deliveryTime: '11 MINS'
    },
    {
        id: 6,
        name: 'Nestle KitKat Valentine 4F Choco Wafer',
        category: 'snacks',
        subcategory: 'Chocolates',
        price: 30.00,
        mrp: 35.00,
        unit: '38.5 g',
        weight: '38.5 g',
        image: 'https://images.unsplash.com/photo-1623863765181-432d64f068af?auto=format&fit=crop&q=80&w=400',
        rating: 4.5,
        ratingCount: 256000,
        isVeg: true,
        badge: 'Bought Earlier',
        deliveryTime: '9 MINS'
    },
    {
        id: 7,
        name: 'Cadbury Dairy Milk Chocolate Bar',
        category: 'snacks',
        subcategory: 'Chocolates',
        price: 26.00,
        mrp: 28.00,
        unit: '26 g',
        weight: '26 g',
        image: 'https://images.unsplash.com/photo-1606312619070-d48b706521bf?auto=format&fit=crop&q=80&w=400',
        rating: 4.8,
        ratingCount: 33833,
        isVeg: true,
        deliveryTime: '8 MINS'
    },
    {
        id: 9,
        name: 'Snickers Nougat & Caramel Miniature',
        category: 'snacks',
        subcategory: 'Chocolates',
        price: 108.00,
        mrp: 135.00,
        unit: '103.5 g',
        weight: '103.5 g',
        image: 'https://images.unsplash.com/photo-1621447504864-d8686e12698c?auto=format&fit=crop&q=80&w=400',
        rating: 4.6,
        ratingCount: 10753,
        isVeg: true,
        ad: true,
        deliveryTime: '14 MINS'
    },
    {
        id: 'amul-buffalo',
        name: 'Amul Buffalo A2 Milk',
        category: 'dairy-bread',
        subcategory: 'Milk',
        price: 88.00,
        unit: '1 ltr',
        weight: '1 ltr',
        image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&q=80&w=400', // Placeholder
        rating: 4.8,
        ratingCount: 152,
        isVeg: true,
        deliveryTime: '10 MINS'
    },
    {
        id: 'amul-chai-mazza',
        name: 'Amul Chai Mazza Toned Milk',
        category: 'dairy-bread',
        subcategory: 'Milk',
        price: 55.00,
        unit: '1 ltr',
        weight: '1 ltr',
        image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&q=80&w=400',
        rating: 4.5,
        ratingCount: 89,
        isVeg: true,
        deliveryTime: '12 MINS'
    },
    {
        id: 'amul-gold-full',
        name: 'Amul Gold Full Cream Milk',
        category: 'dairy-bread',
        subcategory: 'Milk',
        price: 34.00,
        unit: '500 ml',
        weight: '500 ml',
        image: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&q=80&w=400',
        rating: 4.9,
        ratingCount: 2200,
        isVeg: true,
        deliveryTime: '8 MINS'
    },
    {
        id: 'amul-gold-ltr',
        name: 'Amul Gold Milk',
        category: 'dairy-bread',
        subcategory: 'Milk',
        price: 80.00,
        unit: '1 ltr',
        weight: '1 ltr',
        image: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&q=80&w=400',
        rating: 4.9,
        ratingCount: 1500,
        isVeg: true,
        deliveryTime: '9 MINS'
    },
    {
        id: 'amul-lactose',
        name: 'Amul Lactose Free Milk',
        category: 'dairy-bread',
        subcategory: 'Milk',
        price: 25.00,
        unit: '250 ml',
        weight: '250 ml',
        image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&q=80&w=400',
        rating: 4.7,
        ratingCount: 340,
        isVeg: true,
        deliveryTime: '11 MINS'
    },
    {
        id: 'amul-moti',
        name: 'Amul Moti Toned Milk (90 Days Shelf Life)',
        category: 'dairy-bread',
        subcategory: 'Milk',
        price: 32.00,
        unit: '450 ml',
        weight: '450 ml',
        image: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&q=80&w=400', // Placeholder
        rating: 4.6,
        ratingCount: 120,
        isVeg: true,
        deliveryTime: '15 MINS'
    },
    {
        id: 'amul-shakti',
        name: 'Amul Shakti Toned Milk',
        category: 'dairy-bread',
        subcategory: 'Milk',
        price: 30.00, // Guessing price
        unit: '500 ml',
        weight: '500 ml',
        image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&q=80&w=400',
        rating: 4.5,
        ratingCount: 900,
        isVeg: true,
        deliveryTime: '10 MINS',
        outOfStock: true
    },



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

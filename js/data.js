
export const categories = [
    { id: 'fruits-vegetables', name: 'Fruits & Vegetables', image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&q=80&w=200' },
    { id: 'dairy-bread-eggs', name: 'Dairy, Bread & Eggs', image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&q=80&w=200' },
    { id: 'atta-rice-staples', name: 'Atta, Rice & Staples', image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=200' },
    { id: 'oil-ghee-masala', name: 'Oil, Ghee & Masala', image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=200' },
    { id: 'snacks-packaged-food', name: 'Snacks & Packaged Food', image: 'https://images.unsplash.com/photo-1621939514649-28b12e816a85?auto=format&fit=crop&q=80&w=200' },
    { id: 'beverages', name: 'Beverages (Tea, Coffee, Soft Drinks, Juices)', image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&q=80&w=200' },
    { id: 'instant-ready-to-eat', name: 'Instant & Ready-to-Eat', image: 'https://images.unsplash.com/photo-1585238342024-78d387f4a707?auto=format&fit=crop&q=80&w=200' },
    { id: 'frozen-food', name: 'Frozen Food', image: 'https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?auto=format&fit=crop&q=80&w=200' },
    { id: 'bakery-sweets', name: 'Bakery & Sweets', image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&q=80&w=200' },
    { id: 'personal-care', name: 'Personal Care', image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=200' },
    { id: 'household-cleaning', name: 'Household & Cleaning', image: 'https://images.unsplash.com/photo-1585830812406-894101e1493b?auto=format&fit=crop&q=80&w=200' },
    { id: 'baby-care', name: 'Baby Care', image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&q=80&w=200' },
    { id: 'pet-care', name: 'Pet Care', image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&q=80&w=200' },
    { id: 'health-wellness', name: 'Health & Wellness', image: 'https://images.unsplash.com/photo-1505576399279-565b52d4ac71?auto=format&fit=crop&q=80&w=200' }
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
        category: 'snacks-beverages',
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
        category: 'snacks-beverages',
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
        category: 'snacks-beverages',
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
        category: 'snacks-beverages',
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
    // New Products for Snacks & Drinks Page
    {
        id: 101,
        name: 'Orange Fizz Sparkling Soda',
        category: 'snacks-beverages',
        price: 155.00,
        mrp: 185.00,
        unit: '2 L',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA9d6QWtV4fuhSBCUpolfgdzQf0yUUl09RnQjpMyaoDtzRYg1T9s7G4pnbc3FihezGOCqTy4EhS9fOTMOsUL-VFIBPcq7n3ly49A7rwRfhudIBiK9vu7K1KeeHms6KJetJSsDb24FBzXMzzVlIap_dMQhnQaUpURQiKctpTUWfyOPbzz4KrPFLIm-lppehA2-CHoPkZb07Bw_-zpytJXZIRe9Y3uiZXWRRHN1nirBNC45MKT7gRO1VKfDwcU4vTjBVJQ5SMPGPkvbs',
        deliveryTime: '10 MINS'
    },
    {
        id: 102,
        name: 'Classic Salted Potato Chips',
        category: 'snacks-beverages',
        price: 95.00,
        unit: '250 g',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAFBXLaZLLh2yiRlMlQEnEO1a5DTbIi8p5hAvkcYXjxSOEpZhg1VivE8aapTn8XqeI3CJE_TyllqtzkqE6SosuVuqYI03JY2ttuCoXqvIVlo7UdSENq5p-V04aR5DUshLzcCjAdCaX0y-vKkqCDNtCm9qMVpgsuO-TcLqY1MZaQeJNYytIFpc9D9690II4WHgVOU4OdAxJY-x0schyqPYSy22FA-GRVuM3V_W2xw91HA6ESg3bJ67dpUe1BSd_YOCp1sonR0ufpnvE',
        deliveryTime: '8 MINS'
    },
    {
        id: 103,
        name: 'Pure Organic Apple Juice',
        category: 'snacks-beverages',
        price: 345.00,
        unit: '1 L',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC9GPsYGyzKnKe9gK47QG_bTtGSH7_wW5kGMg4WFI6WRoXdwV7TmE6VZtFgaVzgrYi86rPuke3Eez8NC3MbsdCQWUZW9eVgeuOmIA1N_X7qtfxEe5ZmxV3zcEtFCSn9NNZ_c6i0MxxUludwIfhLA7TKz0QlulSNunSFcDUoGpmffU0uUJuJzsmDCZuxuB8_KMtKqCTqowiVTv_mm1iK3F1Fr6lfzif0EhCo-Pa8yl5MvFnirtk8QZLCZ9pdzeevKPmSP_XZkrt8E0U',
        deliveryTime: '12 MINS'
    },
    {
        id: 104,
        name: 'Premium Dark Chocolate 70%',
        category: 'snacks-beverages',
        price: 249.00,
        unit: '100 g',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDcBGbLgVCeDOaiBVYJLwWRD5WBbU1LmVv0cjkabfXjKSlWoK-2Vx5LRDBjx1tfGpFIEnqX6y64sjXHKGNSgW_-2ROVNWWxn-melB5fKf_8ymPJf10ekK3pbyjJdK1wMnZ0yDqtZHfrq3Ci8gKm6y1GUqz70r0CEySnsmv1Mza6q2XFd_EXYokWSu8__w5burpHoPIXS26e4ZSPTsbT1MWcxQwkGfZYc5fqm6l9-uGUxnV3p6s1ThC5NMml8tMxt5v2dD4naQJE1KQ',
        deliveryTime: '9 MINS'
    },
    {
        id: 105,
        name: 'Cheesy Spicy Nachos',
        category: 'snacks-beverages',
        price: 120.00,
        unit: '150 g',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC8isHRW0Kh43pWlroZwFKDkzZldlroaplISsk2vgQ8v7E3n27AuC5MR9kYZEwlMQD613gau1fxS2vVroqS9ePLbvtF86IkryJVJYH5K9RO8TZi8MCaFdaToi4NrJyQ-r3Ezc2iwH5k4W4DoOxX5cPcBZeOEsH2jRwLwm6oVlUCfT69pk9n0gd_VwzbSMGCX0H1wRw9kT4bFIUrhQfZS-Kv9nO0c2P7CTrB6vZXkRrkFqHRrvQPm86zcXcj-CqNgkDqZXFytwZUntU',
        deliveryTime: '11 MINS'
    },
    {
        id: 106,
        name: 'Refreshing Cola Soda',
        category: 'snacks-beverages',
        price: 40.00,
        mrp: 45.00,
        unit: '330 ml',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCjUWVOhzis9y2vDM4sJiFh_1hv2WZ5tCbcIacNG2zm4QXOOOyWPJN8vvzlhXXHinGoTMhXDLnDaIaWGMc6SaBK9Lye3kr3S1HvysAYxH7N23WSFrO4fc5_yK7uCvZ23vO6puYuadLRW36Mi5ZQGpmiiAfYGnSQZsNP0Unct8x3I_ua-jWDTCiWDK4P06Lwe14yzas5svbfKVkYBdexDzLIhZkuITozQH-rLUrsGiaIKdUu65R6UiuT_TpRhgxkSIjFAoV5_CnzCvQ',
        deliveryTime: '7 MINS'
    },
    {
        id: 107,
        name: 'Sparkling Mineral Water',
        category: 'snacks-beverages',
        price: 85.00,
        unit: '1 L',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDO1ClQOPEiI-kA-1Z9sTwhwr3IlM499FFirA5nLS50Ml6ehyHvjWMaxwgkpJPyIetIyW4iiK1LUbaGq00F2FkL15JRtchUHwYNbTgo_aJNVO-MPxyhw48guL-1yeoVlLM64qkEnSp8jGvgb4q0M5yhCELQcZ6tqvJ6Tf905dGbL6c1hEa0n7R4FrTQDGYVqBsO_h84ilWeTIWlu6k213pgJTYIOWFwD8kml9w5fQl3U925_J6Tht4gs4YJxZp-F9_XZcUnMSY0GZY',
        deliveryTime: '10 MINS'
    },
    {
        id: 108,
        name: 'Gummy Bears Party Mix',
        category: 'snacks-beverages',
        price: 120.00,
        unit: '200 g',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDGMhBKAlFPcuoovxxs0tyGwzUeMX-tNRUFhuOBirWKCgHwgs5hzYSbhmkOh_dRWhkbR6Nu-8lxTknUkXQ396MnbULhWBi6QqdMQH6zuz1cLFvDGZyQS2aU58HH_BQhzUUPeQIIM2z_kjAQ8Ol-ag8P_UWzXhnPmbvE3scZCk9U5fWkz7RO73xnU2WxQ6DUHKyjrjnSz0785OsR4s9272PfDhOTe--mpiejRMboIddQX1WLwai33Kz0Wp2pxqxzEZd5y1T3r9uH7pU',
        deliveryTime: '15 MINS'
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

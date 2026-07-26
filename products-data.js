// ShopNear Products Dataset
const PRODUCTS = [
  {
    id: "prod-1",
    name: "Apple iPhone 15 Pro (128GB) - Natural Titanium",
    category: "Mobiles",
    brand: "Apple",
    price: 124900,
    originalPrice: 134900,
    discount: 7,
    rating: 4.7,
    ratingCount: 14250,
    reviewCount: 1820,
    isAssured: true,
    inStock: true,
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=600&q=80"
    ],
    description: "Experience the revolutionary iPhone 15 Pro with Aerospace-grade titanium design, A17 Pro chip, customizable Action button, and powerful 48MP main camera system.",
    specs: {
      "Display": "6.1-inch Super Retina XDR OLED (120Hz ProMotion)",
      "Processor": "A17 Pro Chip Bionic (3nm)",
      "Camera": "48MP Main + 12MP Ultra Wide + 12MP Telephoto",
      "Battery": "Up to 23 hours video playback",
      "OS": "iOS 17",
      "Warranty": "1 Year Brand Warranty"
    },
    offers: [
      "Bank Offer: 10% Instant Discount up to ₹1,500 on HDFC Bank Credit Cards",
      "Special Price: Get extra ₹10,000 off (price inclusive of cashback)",
      "No Cost EMI: ₹10,408/month for 12 months"
    ],
    reviews: [
      { user: "Rahul Sharma", rating: 5, comment: "Camera quality is unmatched! The titanium finish feels premium in hand.", date: "2 days ago" },
      { user: "Priya Verma", rating: 4, comment: "Awesome performance for gaming and multitasking. Battery life is solid.", date: "1 week ago" }
    ]
  },
  {
    id: "prod-2",
    name: "Sony WH-1000XM5 Wireless Noise Cancelling Headphones",
    category: "Electronics",
    brand: "Sony",
    price: 26990,
    originalPrice: 34990,
    discount: 22,
    rating: 4.6,
    ratingCount: 8940,
    reviewCount: 940,
    isAssured: true,
    inStock: true,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=600&q=80"
    ],
    description: "Industry leading noise cancellation with two processors and 8 microphones. Magnificent sound quality with 30-hour battery life.",
    specs: {
      "Connectivity": "Bluetooth 5.2 & 3.5mm Aux",
      "Battery Life": "30 Hours with ANC ON",
      "Noise Cancellation": "Auto NC Optimizer",
      "Weight": "250g",
      "Warranty": "1 Year Sony India Warranty"
    },
    offers: [
      "Bank Offer: ₹2,000 Flat Discount on SBI Credit Cards",
      "Partner Offer: Free 3-month Spotify Premium Subscription"
    ],
    reviews: [
      { user: "Aman Gupta", rating: 5, comment: "Best ANC headphones on the market hands down! Super comfy.", date: "3 days ago" }
    ]
  },
  {
    id: "prod-3",
    name: "Samsung Galaxy Watch6 Classic (47mm, Bluetooth)",
    category: "Electronics",
    brand: "Samsung",
    price: 31999,
    originalPrice: 40999,
    discount: 21,
    rating: 4.5,
    ratingCount: 3420,
    reviewCount: 410,
    isAssured: true,
    inStock: true,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=600&q=80"
    ],
    description: "Classic design with refined rotating bezel. Track your sleep, body composition, heart rate, and workouts with high precision sensor suite.",
    specs: {
      "Display": "1.5-inch Sapphire Crystal AMOLED",
      "Water Resistance": "5ATM + IP68",
      "Sensors": "BioActive Sensor (ECG, BIA, HR)",
      "Battery": "425 mAh (up to 40 hours)"
    },
    offers: [
      "Bank Offer: ₹3,000 Cashback on ICICI Bank Cards"
    ],
    reviews: [
      { user: "Karan Patel", rating: 5, comment: "The physical rotating bezel is back and works flawlessly!", date: "5 days ago" }
    ]
  },
  {
    id: "prod-4",
    name: "Marvel Avengers Iron Man Arc Reactor Collectible Edition",
    category: "Avengers Special",
    brand: "Marvel",
    price: 4999,
    originalPrice: 8999,
    discount: 44,
    rating: 4.9,
    ratingCount: 5120,
    reviewCount: 830,
    isAssured: true,
    inStock: true,
    image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1635863138275-d9b33299680b?auto=format&fit=crop&w=600&q=80"
    ],
    description: "Official Marvel Avengers 1:1 Scale Wearable Arc Reactor MK50 Replica with LED illumination and touch activation display base.",
    specs: {
      "Material": "Die-cast Metal Alloy & Acrylic",
      "Lighting": "Multi-mode Blue LED Glow",
      "Power": "Rechargeable Type-C Battery",
      "Edition": "Limited Collectors Edition"
    },
    offers: [
      "Special Coupon: Extra 15% off with code AVENGERS20"
    ],
    reviews: [
      { user: "Vikram Malhotra", rating: 5, comment: "Proof that Tony Stark has a heart! Amazing collectible.", date: "Yesterday" }
    ]
  },
  {
    id: "prod-5",
    name: "Men's Slim Fit Casual Denim Jacket - Ocean Blue",
    category: "Fashion",
    brand: "Roadster",
    price: 1499,
    originalPrice: 3999,
    discount: 62,
    rating: 4.3,
    ratingCount: 18900,
    reviewCount: 2100,
    isAssured: true,
    inStock: true,
    image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=600&q=80"
    ],
    description: "Classic denim jacket crafted from 100% premium cotton stretch fabric. Features button closure, chest flap pockets, and stylish washed finish.",
    specs: {
      "Fabric": "98% Cotton, 2% Elastane",
      "Fit": "Slim Fit",
      "Pattern": "Solid Washed",
      "Care": "Machine Wash"
    },
    offers: [
      "Buy 2 Get 15% Additional Off",
      "Bank Offer: 5% Unlimited Cashback on ShopNear Axis Card"
    ],
    reviews: [
      { user: "Rohan Das", rating: 4, comment: "Fits perfectly. Great denim texture for winters.", date: "4 days ago" }
    ]
  },
  {
    id: "prod-6",
    name: "Stitch & Aroma Luxury Essential Oil Diffuser Set",
    category: "Home & Kitchen",
    brand: "Aroma Home",
    price: 2499,
    originalPrice: 5999,
    discount: 58,
    rating: 4.8,
    ratingCount: 6410,
    reviewCount: 720,
    isAssured: true,
    inStock: true,
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1602928321679-560bb453f190?auto=format&fit=crop&w=600&q=80"
    ],
    description: "Ultrasonic 500ml aroma humidifier with 7 color ambient LED lights and 4 pure essential oil bottles (Lavender, Eucalyptus, Tea Tree, Jasmine).",
    specs: {
      "Capacity": "500ml",
      "Timer Modes": "1H / 3H / 6H / Continuous",
      "Coverage Area": "Up to 350 sq ft",
      "Noise Level": "Ultra Quiet < 20dB"
    },
    offers: [
      "Combo Offer: Includes 4 Free Essential Oils worth ₹999"
    ],
    reviews: [
      { user: "Neha Kapoor", rating: 5, comment: "Makes my room smell like a luxury spa! Must buy.", date: "3 days ago" }
    ]
  },
  {
    id: "prod-7",
    name: "Nike Air Max 270 Running Shoes - Triple Black",
    category: "Fashion",
    brand: "Nike",
    price: 8995,
    originalPrice: 12995,
    discount: 30,
    rating: 4.6,
    ratingCount: 11200,
    reviewCount: 1450,
    isAssured: true,
    inStock: true,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=600&q=80"
    ],
    description: "Nike's first lifestyle Air Max brings you style, comfort and big attitude in the Nike Air Max 270.",
    specs: {
      "Upper Material": "Mesh & Synthetic",
      "Sole Material": "Air Unit Cushion Rubber",
      "Closure": "Lace-Up",
      "Warranty": "6 Months Manufacturer Warranty"
    },
    offers: [
      "Bank Offer: 10% Instant Discount on HDFC Cards"
    ],
    reviews: [
      { user: "Suresh K.", rating: 5, comment: "Super comfy air unit! Perfect for running and daily use.", date: "1 week ago" }
    ]
  },
  {
    id: "prod-8",
    name: "Dell XPS 13 Laptop (Intel i7 13th Gen, 16GB RAM, 512GB SSD)",
    category: "Electronics",
    brand: "Dell",
    price: 114990,
    originalPrice: 139990,
    discount: 17,
    rating: 4.7,
    ratingCount: 2310,
    reviewCount: 390,
    isAssured: true,
    inStock: true,
    image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=600&q=80"
    ],
    description: "Ultra-thin aluminum chassis with InfinityEdge FHD+ display, backlit keyboard, Windows 11 Home, and Intel Iris Xe Graphics.",
    specs: {
      "Processor": "13th Gen Intel Core i7-1354U",
      "RAM": "16GB LPDDR5",
      "Storage": "512GB M.2 PCIe NVMe SSD",
      "Display": "13.4-inch FHD+ (1920x1200) Anti-Glare"
    },
    offers: [
      "Exchange Offer: Up to ₹18,000 off on old laptops",
      "No Cost EMI available starting ₹9,582/mo"
    ],
    reviews: [
      { user: "Aditya S.", rating: 5, comment: "Compact, lightning fast, and battery lasts all day long.", date: "4 days ago" }
    ]
  },
  {
    id: "prod-9",
    name: "Marvel Captain America Shield Metal Replica (24 inch)",
    category: "Avengers Special",
    brand: "Marvel",
    price: 6999,
    originalPrice: 11999,
    discount: 41,
    rating: 4.9,
    ratingCount: 3980,
    reviewCount: 560,
    isAssured: true,
    inStock: true,
    image: "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?auto=format&fit=crop&w=600&q=80"
    ],
    description: "Authentic 1:1 scale Captain America Vibranium shield replica with adjustable leather arm straps and high-gloss metallic finish.",
    specs: {
      "Diameter": "24 inches (60cm)",
      "Material": "Heavy Die-cast Steel Alloy",
      "Straps": "Genuine Adjustable Leather Straps",
      "Weight": "3.2 kg"
    },
    offers: [
      "Flat ₹500 off for ShopNear Plus members"
    ],
    reviews: [
      { user: "Kavya M.", rating: 5, comment: "Heavy, authentic, and looks epic on my wall setup!", date: "2 weeks ago" }
    ]
  },
  {
    id: "prod-10",
    name: "Philips Smart Wi-Fi LED Bulb 9W E27 - 16 Million Colors",
    category: "Home & Kitchen",
    brand: "Philips",
    price: 699,
    originalPrice: 1499,
    discount: 53,
    rating: 4.4,
    ratingCount: 24500,
    reviewCount: 3100,
    isAssured: true,
    inStock: true,
    image: "https://images.unsplash.com/photo-1550985616-10810253b84d?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1550985616-10810253b84d?auto=format&fit=crop&w=600&q=80"
    ],
    description: "Control your lighting from anywhere using the Wi-Fi app or Amazon Alexa / Google Assistant voice commands.",
    specs: {
      "Wattage": "9W (825 Lumens)",
      "Color": "16 Million RGB Colors + Warm/Cool White",
      "Compatibility": "Alexa, Google Home, Siri Shortcuts"
    },
    offers: [
      "Buy Pack of 2 for ₹1,299"
    ],
    reviews: [
      { user: "Deepak R.", rating: 4, comment: "Easy to sync with Alexa. Great color brightness.", date: "3 days ago" }
    ]
  },
  {
    id: "prod-11",
    name: "Maybelline New York Superstay Matte Ink Liquid Lipstick",
    category: "Beauty & Toys",
    brand: "Maybelline",
    price: 449,
    originalPrice: 699,
    discount: 35,
    rating: 4.5,
    ratingCount: 32100,
    reviewCount: 4500,
    isAssured: true,
    inStock: true,
    image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=600&q=80"
    ],
    description: "Up to 16-hour long-lasting saturated matte color with arrow applicator for precise application.",
    specs: {
      "Finish": "Super Matte",
      "Longevity": "16 Hours Transfer-proof",
      "Volume": "5ml"
    },
    offers: [
      "Buy 2 Beauty Products & Get 10% Extra Off"
    ],
    reviews: [
      { user: "Sneha P.", rating: 5, comment: "Doesn't smudge at all even after meals!", date: "Yesterday" }
    ]
  },
  {
    id: "prod-12",
    name: "OnePlus 12R (16GB RAM, 256GB Storage) - Cool Blue",
    category: "Mobiles",
    brand: "OnePlus",
    price: 45999,
    originalPrice: 49999,
    discount: 8,
    rating: 4.6,
    ratingCount: 16500,
    reviewCount: 1980,
    isAssured: true,
    inStock: true,
    image: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=600&q=80"
    ],
    description: "Flagship performance powered by Snapdragon 8 Gen 2, 1.5K 120Hz ProXDR display, 5500 mAh battery with 100W SUPERVOOC charging.",
    specs: {
      "Display": "6.78-inch 120Hz AMOLED ProXDR",
      "Processor": "Qualcomm Snapdragon 8 Gen 2",
      "Camera": "50MP Sony IMX890 OIS + 8MP + 2MP",
      "Charging": "100W SUPERVOOC (0 to 100% in 26 mins)"
    },
    offers: [
      "Bank Offer: ₹2,000 Instant Discount on OneCard & HDFC Cards",
      "Free 6-Month Screen Replacement Guarantee"
    ],
    reviews: [
      { user: "Nitin B.", rating: 5, comment: "Charges super fast and battery lasts 1.5 days easily!", date: "6 days ago" }
    ]
  },
  {
    id: "prod-13",
    name: "Pure Brass Puja Thali Set with Diya and Bell",
    category: "Sawan Special",
    brand: "Aroma Home",
    price: 1299,
    originalPrice: 2499,
    discount: 48,
    rating: 4.8,
    ratingCount: 540,
    reviewCount: 85,
    isAssured: true,
    inStock: true,
    image: "https://images.unsplash.com/photo-1605806616949-1e87b487cb2a?auto=format&fit=crop&w=600&q=80",
    images: ["https://images.unsplash.com/photo-1605806616949-1e87b487cb2a?auto=format&fit=crop&w=600&q=80"],
    description: "Premium handcrafted pure brass Puja Thali for Sawan Somvar fasting and daily rituals. Includes Diya, Bell, Roli Katori, and Agarbatti stand.",
    specs: { "Material": "Pure Brass", "Weight": "850g", "Components": "5 Items" },
    offers: ["Bank Offer: 10% Instant Discount on HDFC Cards"],
    reviews: [{ user: "Anjali M.", rating: 5, comment: "Very heavy and authentic brass. Perfect for Sawan Puja!", date: "1 day ago" }]
  },
  {
    id: "prod-14",
    name: "Women's Emerald Green Ethnic Kurti Set",
    category: "Sawan Special",
    brand: "Biba",
    price: 1899,
    originalPrice: 3999,
    discount: 52,
    rating: 4.6,
    ratingCount: 1250,
    reviewCount: 310,
    isAssured: true,
    inStock: true,
    image: "https://images.unsplash.com/photo-1583391733958-d25e07fac662?auto=format&fit=crop&w=600&q=80",
    images: ["https://images.unsplash.com/photo-1583391733958-d25e07fac662?auto=format&fit=crop&w=600&q=80"],
    description: "Beautiful emerald green kurti with palazzo and dupatta, perfect traditional wear for the Sawan month festivities.",
    specs: { "Fabric": "Cotton Silk", "Fit": "Regular", "Wash Care": "Dry Clean" },
    offers: ["Special Sawan Coupon: Extra 30% off with code SAWAN30"],
    reviews: [{ user: "Priya S.", rating: 4, comment: "Color is exactly as shown. Very comfortable.", date: "3 days ago" }]
  }
];

// Coupon Codes
const PROMO_CODES = {
  "SHOPNEAR20": { discountPercent: 20, maxDiscount: 2000, minCart: 999, description: "20% Off up to ₹2,000 on orders above ₹999" },
  "WELCOME10": { discountPercent: 10, maxDiscount: 500, minCart: 499, description: "10% Off up to ₹500 for new users" },
  "AVENGERS20": { discountPercent: 15, maxDiscount: 1500, minCart: 1499, description: "15% Off on Marvel Avengers items" },
  "SAWAN30": { discountPercent: 30, maxDiscount: 1000, minCart: 999, description: "Sawan Special! 30% Off up to ₹1,000" }
};

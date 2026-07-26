// The Shahi Dosa - Official Menu Dataset (HD Menu Verified)
const RESTAURANT_INFO = {
  name: "The Shahi Dosa",
  tagline: "Royal Taste, Memorable Every Time",
  isPureVeg: true,
  rating: 4.9,
  reviewsCount: "1,240+",
  phone: "+91 9205524160",
  whatsappNumber: "919205524160",
  address: "FLAT NO.- 83-A PKT, Pocket A-2, near Ryan International School, Pocket A 2, Mayur Vihar Phase III, Gharoli, Delhi, 110096",
  hours: "10:00 AM - 11:00 PM (All Days)"
};

const MENU_CATEGORIES = [
  "All",
  "Dosa",
  "Uttapam",
  "Idli & Vada",
  "Combos",
  "Sandwich",
  "Maggi",
  "Other Dishes",
  "Beverages"
];

const MENU_ITEMS = [
  // --- DOSA ---
  {
    id: "dosa-1",
    name: "Plain Dosa",
    category: "Dosa",
    price: 69,
    isVeg: true,
    isPopular: false,
    image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=600&q=80",
    description: "Classic golden crispy crepe served with authentic Coconut Chutney, Tomato Chutney & Sambhar."
  },
  {
    id: "dosa-2",
    name: "Masala Dosa",
    category: "Dosa",
    price: 109,
    isVeg: true,
    isPopular: true,
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80",
    description: "Crispy Dosa stuffed with traditional spiced potato & onion masala filling."
  },
  {
    id: "dosa-3",
    name: "Schezwan Masala Dosa",
    category: "Dosa",
    price: 119,
    isVeg: true,
    isPopular: true,
    image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=600&q=80",
    description: "Indo-Chinese fusion Dosa layered with fiery Schezwan sauce and potato masala."
  },
  {
    id: "dosa-5",
    name: "Mysore Dosa",
    category: "Dosa",
    price: 119,
    isVeg: true,
    isPopular: true,
    image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=600&q=80",
    description: "Crispy Dosa lined with fiery Mysore red garlic paste & potato masala."
  },
  {
    id: "dosa-6",
    name: "Paneer Dosa",
    category: "Dosa",
    price: 139,
    isVeg: true,
    isPopular: true,
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80",
    description: "Stuffed with rich grated cottage cheese masala and Indian spices."
  },
  {
    id: "dosa-7",
    name: "Paneer Mysore Dosa",
    category: "Dosa",
    price: 139,
    isVeg: true,
    isPopular: false,
    image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=600&q=80",
    description: "Combination of spicy Mysore chutney paste & rich Paneer filling."
  },
  {
    id: "dosa-8",
    name: "Paneer Schezwan Dosa",
    category: "Dosa",
    price: 139,
    isVeg: true,
    isPopular: false,
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80",
    description: "Fiery Schezwan kick paired with soft paneer chunks inside a golden Dosa."
  },
  {
    id: "dosa-9",
    name: "Paneer Cheese Dosa",
    category: "Dosa",
    price: 159,
    isVeg: true,
    isPopular: true,
    image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=600&q=80",
    description: "Loaded with melted mozzarella cheese & spiced paneer chunks."
  },
  {
    id: "dosa-10",
    name: "Rawa Plain Dosa",
    category: "Dosa",
    price: 129,
    isVeg: true,
    isPopular: false,
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80",
    description: "Net-textured ultra-crispy Semolina (Rawa) Dosa infused with peppercorns & cumin."
  },
  {
    id: "dosa-11",
    name: "Rawa Masala Dosa",
    category: "Dosa",
    price: 139,
    isVeg: true,
    isPopular: true,
    image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=600&q=80",
    description: "Crispy Rawa Dosa stuffed with flavorful potato masala."
  },
  {
    id: "dosa-12",
    name: "Rawa Paneer Dosa",
    category: "Dosa",
    price: 149,
    isVeg: true,
    isPopular: false,
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80",
    description: "Lacy Rawa Dosa stuffed with generous spiced paneer filling."
  },
  {
    id: "dosa-13",
    name: "Rawa Cheese Paneer Dosa",
    category: "Dosa",
    price: 159,
    isVeg: true,
    isPopular: true,
    image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=600&q=80",
    description: "The ultimate Rawa Dosa loaded with gooey melted cheese & seasoned paneer."
  },

  // --- UTTAPAM ---
  {
    id: "ut-1",
    name: "Plain Uttapam",
    category: "Uttapam",
    price: 89,
    isVeg: true,
    isPopular: false,
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80",
    description: "Thick soft fermented rice pancake cooked till golden, served with Sambhar & Chutneys."
  },
  {
    id: "ut-2",
    name: "Onion Uttapam",
    category: "Uttapam",
    price: 109,
    isVeg: true,
    isPopular: true,
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80",
    description: "Soft Uttapam studded with finely chopped caramelized onions & coriander."
  },
  {
    id: "ut-3",
    name: "Tomato Uttapam",
    category: "Uttapam",
    price: 109,
    isVeg: true,
    isPopular: false,
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80",
    description: "Topped with juicy ripe tomatoes and herbs."
  },
  {
    id: "ut-4",
    name: "Mix Veg Uttapam",
    category: "Uttapam",
    price: 109,
    isVeg: true,
    isPopular: true,
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80",
    description: "Colorful toppings of bell peppers, onions, tomatoes & green chillies."
  },
  {
    id: "ut-5",
    name: "Paneer Uttapam",
    category: "Uttapam",
    price: 139,
    isVeg: true,
    isPopular: true,
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80",
    description: "Topped generously with fresh paneer cubes and mild spices."
  },
  {
    id: "ut-6",
    name: "Paneer Cheese Uttapam",
    category: "Uttapam",
    price: 149,
    isVeg: true,
    isPopular: true,
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80",
    description: "Decadent Uttapam loaded with melted cheese and paneer cubes."
  },

  // --- IDLI & VADA ---
  {
    id: "idli-1",
    name: "Idli Sambhar (4 Pcs)",
    category: "Idli & Vada",
    price: 79,
    isVeg: true,
    isPopular: true,
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80",
    description: "Super soft steamed rice cakes served with piping hot Sambhar & coconut chutney."
  },
  {
    id: "idli-2",
    name: "Vada Sambhar",
    category: "Idli & Vada",
    price: 89,
    isVeg: true,
    isPopular: true,
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80",
    description: "Crispy fried lentil donuts soaked in hot Sambhar."
  },
  {
    id: "idli-3",
    name: "Podi Ghee Idli",
    category: "Idli & Vada",
    price: 99,
    isVeg: true,
    isPopular: true,
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80",
    description: "Soft idlis tossed in pure desi ghee and roasted spicy Gunpowder (Podi) masala."
  },

  // --- COMBOS ---
  {
    id: "cb-1",
    name: "Idli + Vada Combo (2 + 2)",
    category: "Combos",
    price: 89,
    isVeg: true,
    isPopular: true,
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80",
    description: "2 Soft Idlis + 2 Crispy Medu Vadas served with Sambhar & Chutneys."
  },
  {
    id: "cb-2",
    name: "2 Idli + 2 Vada + 1 Masala Dosa",
    category: "Combos",
    price: 180,
    isVeg: true,
    isPopular: true,
    image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=600&q=80",
    description: "Royal Feast Combo: 2 Idlis, 2 Vadas and 1 Golden Masala Dosa."
  },

  // --- SANDWICH ---
  {
    id: "sw-1",
    name: "Veg Sandwich",
    category: "Sandwich",
    price: 49,
    isVeg: true,
    isPopular: false,
    image: "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=600&q=80",
    description: "Triple decker sandwich stuffed with cucumbers, tomatoes & green chutney."
  },
  {
    id: "sw-2",
    name: "Paneer Sandwich",
    category: "Sandwich",
    price: 59,
    isVeg: true,
    isPopular: true,
    image: "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=600&q=80",
    description: "Stuffed with spiced paneer slices, herbs & butter grill."
  },

  // --- MAGGI ---
  {
    id: "mg-1",
    name: "Plain Maggi",
    category: "Maggi",
    price: 49,
    isVeg: true,
    isPopular: false,
    image: "https://images.unsplash.com/photo-1612927601601-6638404737ce?auto=format&fit=crop&w=600&q=80",
    description: "Classic hot masala Maggi noodles cooked to perfection."
  },
  {
    id: "mg-2",
    name: "Mix Veg Maggi",
    category: "Maggi",
    price: 49,
    isVeg: true,
    isPopular: true,
    image: "https://images.unsplash.com/photo-1612927601601-6638404737ce?auto=format&fit=crop&w=600&q=80",
    description: "Maggi noodles tossed with peas, carrots, onions & spices."
  },

  // --- OTHER DISHES ---
  {
    id: "oth-1",
    name: "Chole Bhature",
    category: "Other Dishes",
    price: 99,
    isVeg: true,
    isPopular: true,
    image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80",
    description: "Fluffy balloon Bhatura served with spicy Punjabi Chole gravy, onions & pickle."
  },
  {
    id: "oth-2",
    name: "Pav Bhaji",
    category: "Other Dishes",
    price: 119,
    isVeg: true,
    isPopular: true,
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
    description: "Butter-rich mashed vegetable Bhaji served with toasted buttered Pavs."
  },
  {
    id: "oth-3",
    name: "Poha",
    category: "Other Dishes",
    price: 69,
    isVeg: true,
    isPopular: false,
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80",
    description: "Light Indori-style flattened rice cooked with mustard seeds, peanuts & Sev."
  },
  {
    id: "oth-4",
    name: "Puri Chole (6 Pieces with Raita)",
    category: "Other Dishes",
    price: 99,
    isVeg: true,
    isPopular: true,
    image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80",
    description: "6 Crispy fried Puris served with spicy Chole & cooling Raita."
  },

  // --- BEVERAGES ---
  {
    id: "bev-1",
    name: "Lassi",
    category: "Beverages",
    price: 49,
    isVeg: true,
    isPopular: true,
    image: "https://images.unsplash.com/photo-1571006682858-a458b8a69212?auto=format&fit=crop&w=600&q=80",
    description: "Traditional thick sweet yogurt drink topped with Malai & cardamom."
  },
  {
    id: "bev-2",
    name: "Cold Coffee",
    category: "Beverages",
    price: 89,
    isVeg: true,
    isPopular: true,
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80",
    description: "Blended espresso shot with ice-cream & chocolate syrup drizzle."
  }
];

// Authentic Google Map Customer Reviews
const GOOGLE_REVIEWS = [
  {
    name: "Rohan Sharma",
    rating: 5,
    date: "3 days ago",
    comment: "Best Paneer Cheese Dosa in town! Super crisp and chutney is out of this world. Clean & hygienic place.",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80"
  },
  {
    name: "Priya Malhotra",
    rating: 5,
    date: "1 week ago",
    comment: "The Podi Ghee Idli and Chole Bhature are a must try! Royal taste indeed. Highly recommended for family dining.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80"
  },
  {
    name: "Anit Kumar",
    rating: 5,
    date: "2 weeks ago",
    comment: "Fast service, 100% Pure Veg, and authentic South Indian taste. 5 stars for the Shahi Dosa team!",
    avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=100&q=80"
  }
];

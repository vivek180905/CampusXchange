import { db } from "./index";
import { users, products, comments } from "./schema";
import { sql } from "drizzle-orm";

// ============================================================
// SEED DATA FOR CAMPUSXCHANGE
// Run: npm run seed (from backend directory)
// ============================================================

const SEED_USERS = [
  {
    id: "seed_aarav_sharma",
    email: "aarav.sharma@college.edu",
    name: "Aarav Sharma",
    imageUrl: "https://ui-avatars.com/api/?name=Aarav+Sharma&background=6366f1&color=fff&size=128",
  },
  {
    id: "seed_priya_patel",
    email: "priya.patel@college.edu",
    name: "Priya Patel",
    imageUrl: "https://ui-avatars.com/api/?name=Priya+Patel&background=ec4899&color=fff&size=128",
  },
  {
    id: "seed_rohan_gupta",
    email: "rohan.gupta@college.edu",
    name: "Rohan Gupta",
    imageUrl: "https://ui-avatars.com/api/?name=Rohan+Gupta&background=14b8a6&color=fff&size=128",
  },
  {
    id: "seed_sneha_reddy",
    email: "sneha.reddy@college.edu",
    name: "Sneha Reddy",
    imageUrl: "https://ui-avatars.com/api/?name=Sneha+Reddy&background=f97316&color=fff&size=128",
  },
  {
    id: "seed_arjun_singh",
    email: "arjun.singh@college.edu",
    name: "Arjun Singh",
    imageUrl: "https://ui-avatars.com/api/?name=Arjun+Singh&background=8b5cf6&color=fff&size=128",
  },
  {
    id: "seed_ananya_iyer",
    email: "ananya.iyer@college.edu",
    name: "Ananya Iyer",
    imageUrl: "https://ui-avatars.com/api/?name=Ananya+Iyer&background=06b6d4&color=fff&size=128",
  },
  {
    id: "seed_vikram_joshi",
    email: "vikram.joshi@college.edu",
    name: "Vikram Joshi",
    imageUrl: "https://ui-avatars.com/api/?name=Vikram+Joshi&background=84cc16&color=fff&size=128",
  },
  {
    id: "seed_kavya_nair",
    email: "kavya.nair@college.edu",
    name: "Kavya Nair",
    imageUrl: "https://ui-avatars.com/api/?name=Kavya+Nair&background=e11d48&color=fff&size=128",
  },
  {
    id: "seed_rahul_verma",
    email: "rahul.verma@college.edu",
    name: "Rahul Verma",
    imageUrl: "https://ui-avatars.com/api/?name=Rahul+Verma&background=3b82f6&color=fff&size=128",
  },
  {
    id: "seed_divya_menon",
    email: "divya.menon@college.edu",
    name: "Divya Menon",
    imageUrl: "https://ui-avatars.com/api/?name=Divya+Menon&background=a855f7&color=fff&size=128",
  },
  {
    id: "seed_karthik_raj",
    email: "karthik.raj@college.edu",
    name: "Karthik Raj",
    imageUrl: "https://ui-avatars.com/api/?name=Karthik+Raj&background=f59e0b&color=fff&size=128",
  },
  {
    id: "seed_meera_das",
    email: "meera.das@college.edu",
    name: "Meera Das",
    imageUrl: "https://ui-avatars.com/api/?name=Meera+Das&background=10b981&color=fff&size=128",
  },
  {
    id: "seed_aditya_mishra",
    email: "aditya.mishra@college.edu",
    name: "Aditya Mishra",
    imageUrl: "https://ui-avatars.com/api/?name=Aditya+Mishra&background=ef4444&color=fff&size=128",
  },
  {
    id: "seed_riya_kapoor",
    email: "riya.kapoor@college.edu",
    name: "Riya Kapoor",
    imageUrl: "https://ui-avatars.com/api/?name=Riya+Kapoor&background=0ea5e9&color=fff&size=128",
  },
  {
    id: "seed_nikhil_saxena",
    email: "nikhil.saxena@college.edu",
    name: "Nikhil Saxena",
    imageUrl: "https://ui-avatars.com/api/?name=Nikhil+Saxena&background=d946ef&color=fff&size=128",
  },
];

// Helper to create a date N days ago
const daysAgo = (n: number) => new Date(Date.now() - n * 24 * 60 * 60 * 1000);

const SEED_PRODUCTS = [
  // ===== TEXTBOOKS =====
  {
    title: "Engineering Mathematics by B.S. Grewal",
    description:
      "44th edition, well maintained. Some highlighting on important formulas but overall in great condition. Perfect for 1st & 2nd year students. Contact: 98765xxxxx",
    imageUrl: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600",
    price: 250,
    isSold: false,
    userId: "seed_aarav_sharma",
    createdAt: daysAgo(15),
  },
  {
    title: "Introduction to Algorithms — CLRS (3rd Edition)",
    description:
      "The bible of DSA. Hardcover, no torn pages. Used for one semester only. Price is negotiable if you buy along with my other books. DM for bundle deals.",
    imageUrl: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=600",
    price: 450,
    isSold: false,
    userId: "seed_priya_patel",
    createdAt: daysAgo(12),
  },
  {
    title: "HC Verma — Concepts of Physics Vol 1 & 2",
    description:
      "Both volumes together. Some notes in pencil on the margins (can be erased). Best for JEE prep and 1st year physics. Meet near library.",
    imageUrl: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=600",
    price: 300,
    isSold: true,
    userId: "seed_rohan_gupta",
    createdAt: daysAgo(25),
  },
  {
    title: "Operating System Concepts — Galvin (10th Ed)",
    description:
      "Clean copy, used for OS course last semester. No markings. Comes with the companion CD (unused). Can deliver to any hostel on campus.",
    imageUrl: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=600",
    price: 350,
    isSold: false,
    userId: "seed_sneha_reddy",
    createdAt: daysAgo(8),
  },

  // ===== ELECTRONICS =====
  {
    title: "HP Pavilion Laptop — i5 11th Gen, 8GB RAM",
    description:
      "2 years old, battery health 82%. Comes with charger and laptop bag. Minor scratches on lid but screen is perfect. Great for coding and daily use. Reason: Upgrading to MacBook.",
    imageUrl: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600",
    price: 32000,
    isSold: false,
    userId: "seed_arjun_singh",
    createdAt: daysAgo(3),
  },
  {
    title: "boAt Rockerz 450 Wireless Headphones",
    description:
      "Black color, 6 months old. Works perfectly, selling because I got AirPods as a gift. Original box and cable included. 15hr battery life.",
    imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600",
    price: 800,
    isSold: false,
    userId: "seed_ananya_iyer",
    createdAt: daysAgo(5),
  },
  {
    title: "Casio fx-991EX Scientific Calculator",
    description:
      "Barely used, like-new condition. Has 552 functions — more than enough for engineering. Selling because I graduated. Includes cover case.",
    imageUrl: "https://images.unsplash.com/photo-1564466809058-bf4114d55352?w=600",
    price: 900,
    isSold: false,
    userId: "seed_vikram_joshi",
    createdAt: daysAgo(10),
  },
  {
    title: "iPhone 13 (128GB, Blue)",
    description:
      "1.5 years old, battery health 89%. Screen guard since day 1, no scratches. Comes with original box, cable, and a spigen case. No bill (gift from relative).",
    imageUrl: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=600",
    price: 38000,
    isSold: false,
    userId: "seed_kavya_nair",
    createdAt: daysAgo(2),
  },
  {
    title: "Logitech G102 Gaming Mouse",
    description:
      "RGB lighting, 8000 DPI. Used for 4 months. Selling because I switched to a wireless mouse. Perfect for gaming and design work.",
    imageUrl: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600",
    price: 600,
    isSold: true,
    userId: "seed_rahul_verma",
    createdAt: daysAgo(20),
  },
  {
    title: "JBL Flip 5 Bluetooth Speaker",
    description:
      "Waterproof, amazing bass. Red color. 1 year old, works flawlessly. Perfect for hostel parties. Selling because I need cash for a trip.",
    imageUrl: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600",
    price: 5500,
    isSold: false,
    userId: "seed_aditya_mishra",
    createdAt: daysAgo(6),
  },

  // ===== FURNITURE =====
  {
    title: "Wooden Study Table with Drawer",
    description:
      "Solid wood, very sturdy. Dimensions: 4ft x 2ft. Bought from a local carpenter. Has one drawer and a shelf below. Selling because I'm leaving the hostel. Pickup only — Hostel 7.",
    imageUrl: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=600",
    price: 1200,
    isSold: false,
    userId: "seed_divya_menon",
    createdAt: daysAgo(4),
  },
  {
    title: "Ergonomic Desk Lamp (LED, USB Powered)",
    description:
      "3 brightness levels, flexible neck. Clips onto desk edge. Used for night study sessions. Very energy efficient. Selling because I bought a ring light combo.",
    imageUrl: "https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=600",
    price: 450,
    isSold: false,
    userId: "seed_karthik_raj",
    createdAt: daysAgo(7),
  },
  {
    title: "Bean Bag (XXL, Blue) — Comfy AF",
    description:
      "Leatherette material, filled with premium beans. Super comfortable for gaming, reading or just chilling. Reason for selling: won't fit in my new room.",
    imageUrl: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600",
    price: 1500,
    isSold: true,
    userId: "seed_meera_das",
    createdAt: daysAgo(18),
  },

  // ===== CLOTHING & ACCESSORIES =====
  {
    title: "College Fest T-Shirt 2025 (Size XL)",
    description:
      "Official Techfest merchandise, black with neon green print. Worn only twice. Selling 3 of these — ₹150 each or ₹400 for all 3. DM for sizes.",
    imageUrl: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600",
    price: 150,
    isSold: false,
    userId: "seed_riya_kapoor",
    createdAt: daysAgo(9),
  },
  {
    title: "Nike Running Shoes (Size 9, Grey)",
    description:
      "Nike Revolution 6. Bought online, size didn't fit. Worn only once to check fit. Almost brand new with original box. Selling at a loss.",
    imageUrl: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600",
    price: 2200,
    isSold: false,
    userId: "seed_nikhil_saxena",
    createdAt: daysAgo(11),
  },
  {
    title: "Wildcraft Backpack (45L, Black)",
    description:
      "Used for one trekking trip only. Padded laptop compartment, rain cover included. Very spacious. Selling because I got a new one as a birthday gift.",
    imageUrl: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600",
    price: 1100,
    isSold: false,
    userId: "seed_aarav_sharma",
    createdAt: daysAgo(6),
  },

  // ===== MISCELLANEOUS =====
  {
    title: "Yamaha F310 Acoustic Guitar",
    description:
      "Amazing sound quality. Comes with a padded gig bag, picks, and a capo. Strings changed recently. Perfect for beginners and intermediate players. Selling because I barely play anymore.",
    imageUrl: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=600",
    price: 5500,
    isSold: false,
    userId: "seed_rohan_gupta",
    createdAt: daysAgo(1),
  },
  {
    title: "Hero Lectro C3 E-Cycle",
    description:
      "Electric + pedal hybrid. 25km range on full charge. Bought 1 year ago for ₹22,000. Battery and motor in perfect condition. Great for getting around campus. Charger included.",
    imageUrl: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=600",
    price: 12000,
    isSold: false,
    userId: "seed_vikram_joshi",
    createdAt: daysAgo(3),
  },
  {
    title: "Bajaj Room Cooler (36L)",
    description:
      "Desert cooler, perfect for hostel rooms. Used for 2 summers. Cooling is still great. Honeycomb pads replaced last month. Selling because hostel is getting AC.",
    imageUrl: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600",
    price: 3000,
    isSold: true,
    userId: "seed_arjun_singh",
    createdAt: daysAgo(30),
  },
  {
    title: "Complete Drawing/Drafting Kit",
    description:
      "Mini drafter, T-square, set squares, compass, French curves — everything you need for engineering drawing. Used for one semester. Comes in a neat carry case.",
    imageUrl: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600",
    price: 700,
    isSold: false,
    userId: "seed_sneha_reddy",
    createdAt: daysAgo(14),
  },
  {
    title: "Mattress — Single Bed (6ft x 3ft, 4 inch)",
    description:
      "Foam mattress, medium-firm. Used for one year. Washed and sun-dried. Has a removable cotton cover. Pickup from Girls Hostel 3. No delivery sorry.",
    imageUrl: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600",
    price: 1800,
    isSold: false,
    userId: "seed_ananya_iyer",
    createdAt: daysAgo(5),
  },
  {
    title: "Kindle Paperwhite (10th Gen, 8GB)",
    description:
      "Waterproof, ad-free version. Comes with a leather case. Over 200 books loaded. Battery lasts weeks. Selling because I switched back to physical books lol.",
    imageUrl: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=600",
    price: 6500,
    isSold: false,
    userId: "seed_kavya_nair",
    createdAt: daysAgo(8),
  },
  {
    title: "Multipurpose Printer — HP DeskJet 2723",
    description:
      "Print, scan, copy. WiFi enabled. Comes with half-full ink cartridges. Used for printing assignments and notes. Selling because I graduated. Working perfectly.",
    imageUrl: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=600",
    price: 2500,
    isSold: false,
    userId: "seed_divya_menon",
    createdAt: daysAgo(13),
  },
  {
    title: "Whiteboard (3ft x 2ft) with Markers",
    description:
      "Magnetic whiteboard with wall mount kit. Comes with 5 markers and a duster. Perfect for study planning or interview prep. Minor scratches but fully functional.",
    imageUrl: "https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?w=600",
    price: 500,
    isSold: false,
    userId: "seed_karthik_raj",
    createdAt: daysAgo(16),
  },
  {
    title: "Table Fan — Usha Maxx Air (400mm)",
    description:
      "3-speed settings, powerful airflow. Bought last summer. Barely used because hostel got AC installed mid-season. Copper motor — will last years.",
    imageUrl: "https://images.unsplash.com/photo-1617375407361-9815c98fbafa?w=600",
    price: 800,
    isSold: true,
    userId: "seed_rahul_verma",
    createdAt: daysAgo(22),
  },
];

// productIndex refers to the index in SEED_PRODUCTS array
// userId is the commenter (NOT the product owner — to simulate buyer-seller convos)
const SEED_COMMENTS = [
  // === Product 0: B.S. Grewal ===
  { productIndex: 0, userId: "seed_rohan_gupta", content: "Is this still available bro?", createdAt: daysAgo(14) },
  { productIndex: 0, userId: "seed_aarav_sharma", content: "Yes available! Come to H5 anytime after 5pm", createdAt: daysAgo(14) },
  { productIndex: 0, userId: "seed_priya_patel", content: "Will you take ₹200 for this?", createdAt: daysAgo(13) },
  { productIndex: 0, userId: "seed_aarav_sharma", content: "₹230 last price. Book is in really good condition", createdAt: daysAgo(13) },

  // === Product 1: CLRS ===
  { productIndex: 1, userId: "seed_arjun_singh", content: "Is the hardcover or paperback?", createdAt: daysAgo(11) },
  { productIndex: 1, userId: "seed_priya_patel", content: "Hardcover! Really solid binding", createdAt: daysAgo(11) },
  { productIndex: 1, userId: "seed_karthik_raj", content: "Can you do ₹400? I'm buying 2 more books from campus", createdAt: daysAgo(10) },

  // === Product 2: HC Verma (SOLD) ===
  { productIndex: 2, userId: "seed_sneha_reddy", content: "Are both volumes included?", createdAt: daysAgo(24) },
  { productIndex: 2, userId: "seed_rohan_gupta", content: "Yes both Vol 1 and Vol 2 together", createdAt: daysAgo(24) },
  { productIndex: 2, userId: "seed_sneha_reddy", content: "Perfect, I'll take them. Where to meet?", createdAt: daysAgo(23) },
  { productIndex: 2, userId: "seed_rohan_gupta", content: "Meet me near the library canteen tomorrow at 3pm", createdAt: daysAgo(23) },

  // === Product 3: OS Galvin ===
  { productIndex: 3, userId: "seed_divya_menon", content: "Is this the latest edition? We need 10th ed for our course", createdAt: daysAgo(7) },
  { productIndex: 3, userId: "seed_sneha_reddy", content: "Yes it's the 10th edition 👍", createdAt: daysAgo(7) },

  // === Product 4: HP Laptop ===
  { productIndex: 4, userId: "seed_kavya_nair", content: "What's the storage? SSD or HDD?", createdAt: daysAgo(2) },
  { productIndex: 4, userId: "seed_arjun_singh", content: "512GB SSD. Boots in like 8 seconds", createdAt: daysAgo(2) },
  { productIndex: 4, userId: "seed_rahul_verma", content: "Any dead pixels on the screen?", createdAt: daysAgo(2) },
  { productIndex: 4, userId: "seed_arjun_singh", content: "Nope, screen is clean. No dead pixels, no backlight bleed", createdAt: daysAgo(1) },
  { productIndex: 4, userId: "seed_nikhil_saxena", content: "Can you do ₹28k? I can pick up today", createdAt: daysAgo(1) },
  { productIndex: 4, userId: "seed_arjun_singh", content: "₹30k is my final price. It's worth it trust me", createdAt: daysAgo(1) },

  // === Product 5: boAt headphones ===
  { productIndex: 5, userId: "seed_meera_das", content: "How's the noise cancellation?", createdAt: daysAgo(4) },
  { productIndex: 5, userId: "seed_ananya_iyer", content: "It's passive noise cancellation — decent for the price. Great for library study sessions", createdAt: daysAgo(4) },
  { productIndex: 5, userId: "seed_riya_kapoor", content: "₹600? It's already 6 months old", createdAt: daysAgo(3) },

  // === Product 7: iPhone 13 ===
  { productIndex: 7, userId: "seed_aditya_mishra", content: "Is the price negotiable?", createdAt: daysAgo(1) },
  { productIndex: 7, userId: "seed_kavya_nair", content: "Slightly. Can do ₹36k if you pick up today", createdAt: daysAgo(1) },
  { productIndex: 7, userId: "seed_vikram_joshi", content: "Does Face ID work properly?", createdAt: daysAgo(1) },
  { productIndex: 7, userId: "seed_kavya_nair", content: "Everything works perfectly — Face ID, speakers, cameras, all good", createdAt: daysAgo(1) },

  // === Product 8: Gaming Mouse (SOLD) ===
  { productIndex: 8, userId: "seed_karthik_raj", content: "Is this the Lightsync version?", createdAt: daysAgo(19) },
  { productIndex: 8, userId: "seed_rahul_verma", content: "Yep, the one with customizable RGB zones", createdAt: daysAgo(19) },

  // === Product 10: Study Table ===
  { productIndex: 10, userId: "seed_riya_kapoor", content: "Can you share more photos? And will you deliver to H3?", createdAt: daysAgo(3) },
  { productIndex: 10, userId: "seed_divya_menon", content: "I'll share on WhatsApp — 9876xxxxx. No delivery sorry, it's too heavy. Pickup only from H7", createdAt: daysAgo(3) },

  // === Product 12: Bean Bag (SOLD) ===
  { productIndex: 12, userId: "seed_nikhil_saxena", content: "Is this still available??", createdAt: daysAgo(17) },
  { productIndex: 12, userId: "seed_meera_das", content: "Sold to Vikram yesterday. Sorry!", createdAt: daysAgo(17) },

  // === Product 16: Guitar ===
  { productIndex: 16, userId: "seed_priya_patel", content: "Is this good for complete beginners?", createdAt: daysAgo(0) },
  { productIndex: 16, userId: "seed_rohan_gupta", content: "Absolutely! Yamaha F310 is THE beginner guitar. I learned on this one", createdAt: daysAgo(0) },
  { productIndex: 16, userId: "seed_aditya_mishra", content: "Will you take ₹4500?", createdAt: daysAgo(0) },
  { productIndex: 16, userId: "seed_rohan_gupta", content: "₹5000 with the bag and capo. That's already a great deal", createdAt: daysAgo(0) },
  { productIndex: 16, userId: "seed_divya_menon", content: "Are the strings steel or nylon?", createdAt: daysAgo(0) },
  { productIndex: 16, userId: "seed_rohan_gupta", content: "Steel strings. Great for strumming Bollywood songs 🎶", createdAt: daysAgo(0) },

  // === Product 17: E-Cycle ===
  { productIndex: 17, userId: "seed_sneha_reddy", content: "How long does it take to fully charge?", createdAt: daysAgo(2) },
  { productIndex: 17, userId: "seed_vikram_joshi", content: "Around 4-5 hours for a full charge", createdAt: daysAgo(2) },
  { productIndex: 17, userId: "seed_aarav_sharma", content: "Can I test ride it before buying?", createdAt: daysAgo(1) },
  { productIndex: 17, userId: "seed_vikram_joshi", content: "Sure! I'm in H9. Come anytime after lunch", createdAt: daysAgo(1) },

  // === Product 21: Kindle ===
  { productIndex: 21, userId: "seed_meera_das", content: "Does it come with the books already on it?", createdAt: daysAgo(7) },
  { productIndex: 21, userId: "seed_kavya_nair", content: "Yes all 200+ books are on my Amazon account linked to it. I'll deregister and you can add your own, or I can keep my account linked if you want the books 😄", createdAt: daysAgo(7) },
  { productIndex: 21, userId: "seed_priya_patel", content: "Omg I want this! DM me please 🙏", createdAt: daysAgo(6) },

  // === Product 23: Whiteboard ===
  { productIndex: 23, userId: "seed_rahul_verma", content: "Perfect for DSA prep. Is this magnetic?", createdAt: daysAgo(15) },
  { productIndex: 23, userId: "seed_karthik_raj", content: "Yes it's magnetic! You can stick notes on it too", createdAt: daysAgo(15) },

  // === Product 19: Drafting Kit ===
  { productIndex: 19, userId: "seed_ananya_iyer", content: "Does this have a mini drafter included?", createdAt: daysAgo(13) },
  { productIndex: 19, userId: "seed_sneha_reddy", content: "Yes! Mini drafter, T-square, everything. Full kit", createdAt: daysAgo(13) },
  { productIndex: 19, userId: "seed_meera_das", content: "Can you do ₹500?", createdAt: daysAgo(12) },
  { productIndex: 19, userId: "seed_sneha_reddy", content: "₹600 final. The drafter alone costs more than that new", createdAt: daysAgo(12) },
];

async function seed() {
  console.log("🌱 Starting seed...\n");

  try {
    // Clean up any existing seed data (only seed data, not real user data)
    console.log("🧹 Cleaning up old seed data...");
    
    // Delete comments by seed users first (due to foreign keys)
    await db.delete(comments).where(
      sql`${comments.userId} LIKE 'seed_%'`
    );
    
    // Delete products by seed users
    await db.delete(products).where(
      sql`${products.userId} LIKE 'seed_%'`
    );
    
    // Delete seed users
    await db.delete(users).where(
      sql`${users.id} LIKE 'seed_%'`
    );

    console.log("✅ Old seed data cleaned\n");

    // Insert users
    console.log("👤 Inserting users...");
    await db.insert(users).values(SEED_USERS);
    console.log(`   ✅ ${SEED_USERS.length} users inserted\n`);

    // Insert products
    console.log("📦 Inserting products...");
    const insertedProducts = await db.insert(products).values(
      SEED_PRODUCTS.map((p) => ({
        title: p.title,
        description: p.description,
        imageUrl: p.imageUrl,
        price: p.price,
        isSold: p.isSold,
        userId: p.userId,
        createdAt: p.createdAt,
        updatedAt: p.createdAt,
      }))
    ).returning();
    console.log(`   ✅ ${insertedProducts.length} products inserted\n`);

    // Insert comments
    console.log("💬 Inserting comments...");
    const commentsToInsert = SEED_COMMENTS.map((c) => ({
      content: c.content,
      userId: c.userId,
      productId: insertedProducts[c.productIndex].id,
      createdAt: c.createdAt,
    }));
    await db.insert(comments).values(commentsToInsert);
    console.log(`   ✅ ${commentsToInsert.length} comments inserted\n`);

    console.log("🎉 Seed completed successfully!");
    console.log(`   📊 Summary: ${SEED_USERS.length} users, ${insertedProducts.length} products, ${commentsToInsert.length} comments`);
    
  } catch (error) {
    console.error("❌ Seed failed:", error);
    process.exit(1);
  }

  process.exit(0);
}

seed();

// src/js/db.js

const SEED_USERS = [
  {
    id: "admin_001",
    name: "Admin DamaraSkin",
    email: "admin@damaraskin.com",
    password: "password",
    role: "admin",
    phone: "081234567890",
    address: "DamaraSkin Headquarters, Jakarta",
    status: "active"
  },
  {
    id: "user_001",
    name: "Putri Cantika",
    email: "putri@damaraskin.com",
    password: "password",
    role: "user",
    phone: "089876543210",
    address: "Jl. Sehat No. 10, Bandung",
    skin_type: "dry",
    skin_concerns: ["brightening", "hydrating"],
    status: "active"
  },
  {
    id: "user_002",
    name: "Rani Amelia",
    email: "rani@example.com",
    password: "password",
    role: "user",
    phone: "081234567800",
    address: "Jl. Dummy No. 1, Surabaya",
    skin_type: "sensitive",
    skin_concerns: ["acne"],
    status: "active"
  },
  {
    id: "user_003",
    name: "Siti Rahma",
    email: "siti@example.com",
    password: "password",
    role: "user",
    phone: "081234567801",
    address: "Jl. Dummy No. 2, Yogyakarta",
    skin_type: "oily",
    skin_concerns: ["brightening"],
    status: "active"
  },
  {
    id: "user_004",
    name: "Dewi Lestari",
    email: "dewi@example.com",
    password: "password",
    role: "user",
    phone: "081234567802",
    address: "Jl. Melati No. 5, Jakarta",
    skin_type: "normal",
    skin_concerns: ["anti_aging"],
    status: "active"
  },
  {
    id: "user_005",
    name: "Larasati Putri",
    email: "laras@example.com",
    password: "password",
    role: "user",
    phone: "081234567803",
    address: "Jl. Anggrek No. 12, Semarang",
    skin_type: "combination",
    skin_concerns: ["pore", "brightening"],
    status: "active"
  },
  {
    id: "user_006",
    name: "Nadia Safira",
    email: "nadia@example.com",
    password: "password",
    role: "user",
    phone: "081234567804",
    address: "Jl. Mawar No. 8, Medan",
    skin_type: "sensitive",
    skin_concerns: ["acne", "hydrating"],
    status: "suspended"
  }
];

const SEED_PRODUCTS = [
  {
    id: "prod_001",
    name: "Skintific 5X Ceramide Barrier Moisture Gel",
    brand: "Skintific",
    slug: "skintific-5x-ceramide-barrier-moisture-gel",
    description: "Pelembap wajah terlaris dengan formulasi gabungan 5 jenis Ceramide berbeda. Sangat baik untuk memperkuat skin barrier, melembapkan kulit secara mendalam, menenangkan sel kulit sensitif, dan mengunci kelembapan selama 24 jam dengan tekstur gel air yang sangat ringan.",
    price: 139000,
    stock: 50,
    category: "moisturizer",
    skin_type: "sensitive",
    concern: ["hydrating"],
    concerns: ["hydrating"],
    image: "/images/products/skintific_moisturizer.jpg",
    images: ["/images/products/skintific_moisturizer.jpg"],
    rating: 4.8,
    review_count: 124,
    created_at: "2024-01-15"
  },
  {
    id: "prod_002",
    name: "Skin1004 Madagascar Centella Ampoule",
    brand: "Skin1004",
    slug: "skin1004-madagascar-centella-ampoule",
    description: "Ampul wajah legendaris yang mengandung 100% ekstrak murni daun Centella Asiatica dari Madagaskar. Berfungsi meredakan kemerahan, merawat kulit berjerawat, menenangkan iritasi kulit, serta merangsang regenerasi skin barrier yang rusak.",
    price: 198000,
    stock: 30,
    category: "serum",
    skin_type: "sensitive",
    concern: ["acne"],
    concerns: ["acne"],
    image: "/images/products/skin1004_ampoule.jpg",
    images: ["/images/products/skin1004_ampoule.jpg"],
    rating: 4.9,
    review_count: 95,
    created_at: "2024-01-16"
  },
  {
    id: "prod_003",
    name: "Hada Labo Gokujyun Ultimate Moisturizing Lotion",
    brand: "Hada Labo",
    slug: "hada-labo-gokujyun-ultimate-moisturizing-lotion",
    description: "Toner hidrasi legendaris asal Jepang yang mengandung 3 tipe Hyaluronic Acid. Membantu mengembalikan kelembapan alami kulit setelah mencuci muka, membuat kulit terhidrasi secara intensif sehingga terasa lebih kenyal, halus, dan elastis.",
    price: 45000,
    stock: 80,
    category: "toner",
    skin_type: "dry",
    concern: ["hydrating"],
    concerns: ["hydrating"],
    image: "/images/products/hada_labo_lotion.jpg",
    images: ["/images/products/hada_labo_lotion.jpg"],
    rating: 4.7,
    review_count: 210,
    created_at: "2024-01-17"
  },
  {
    id: "prod_004",
    name: "Somethinc Niacinamide + Moisture Sabi Beet Brightening Serum",
    brand: "Somethinc",
    slug: "somethinc-niacinamide-moisture-sabi-beet-brightening-serum",
    description: "Serum pencerah wajah premium buatan lokal dengan kandungan utama Niacinamide dan Sabiwhite (ekstrak kunyit). Sangat efektif menyamarkan noda hitam bekas jerawat, meratakan warna kulit yang belang, serta memberikan efek kilau sehat alami.",
    price: 119000,
    stock: 45,
    category: "serum",
    skin_type: "all",
    concern: ["brightening"],
    concerns: ["brightening"],
    image: "/images/products/somethinc_serum.jpg",
    images: ["/images/products/somethinc_serum.jpg"],
    rating: 4.8,
    review_count: 154,
    created_at: "2024-01-18"
  },
  {
    id: "prod_005",
    name: "COSRX Low pH Good Morning Gel Cleanser",
    brand: "COSRX",
    slug: "cosrx-low-ph-good-morning-gel-cleanser",
    description: "Pembersih wajah bertekstur gel transparan dengan formula pH rendah yang mendekati pH alami kulit. Mengandung Tea Tree Oil dan BHA untuk membersihkan minyak berlebih, mengangkat komedo, mencegah jerawat baru, tanpa efek kulit kering tertarik.",
    price: 125000,
    stock: 60,
    category: "cleanser",
    skin_type: "oily",
    concern: ["acne", "pore"],
    concerns: ["acne", "pore"],
    image: "/images/products/cosrx_cleanser.jpg",
    images: ["/images/products/cosrx_cleanser.jpg"],
    rating: 4.6,
    review_count: 188,
    created_at: "2024-01-19"
  },
  {
    id: "prod_006",
    name: "Avoskin Miraculous Refining Toner",
    brand: "Avoskin",
    slug: "avoskin-miraculous-refining-toner",
    description: "Toner eksfoliasi kimiawi lokal terbaik yang mengandung AHA, BHA, PHA, Niacinamide, dan Tea Tree. Membantu mengeksfoliasi sel kulit mati, membersihkan komedo di pori-pori tersumbat, serta memicu pertumbuhan kulit baru yang sehat dan cerah.",
    price: 165000,
    stock: 25,
    category: "toner",
    skin_type: "combination",
    concern: ["pore", "acne"],
    concerns: ["pore", "acne"],
    image: "/images/products/avoskin_toner.jpg",
    images: ["/images/products/avoskin_toner.jpg"],
    rating: 4.5,
    review_count: 74,
    created_at: "2024-01-20"
  },
  {
    id: "prod_007",
    name: "Whitelab Brightening Facial Wash",
    brand: "Whitelab",
    slug: "whitelab-brightening-facial-wash",
    description: "Sabun pembersih wajah lokal yang diperkaya dengan Niacinamide dan Collagen. Membantu mengangkat kotoran, sisa makeup, dan sebum berlebih sekaligus menjaga elastisitas kulit agar tetap kencang, cerah, dan tampak bersinar sepanjang hari.",
    price: 37000,
    stock: 100,
    category: "cleanser",
    skin_type: "normal",
    concern: ["brightening"],
    concerns: ["brightening"],
    image: "/images/products/whitelab_wash.jpg",
    images: ["/images/products/whitelab_wash.jpg"],
    rating: 4.4,
    review_count: 312,
    created_at: "2024-01-21"
  },
  {
    id: "prod_008",
    name: "Anessa Perfect UV Sunscreen Mild Milk SPF 50+",
    brand: "Anessa",
    slug: "anessa-perfect-uv-sunscreen-mild-milk-spf50",
    description: "Tabir surya harian premium bertekstur susu cair yang lembut untuk kulit sensitif dan bayi sekalipun. Menggunakan teknologi perlindungan UV eksklusif yang tahan terhadap gesekan, air, dan keringat, mencegah penuaan dini serta kerutan halus.",
    price: 180000,
    stock: 35,
    category: "sunscreen",
    skin_type: "sensitive",
    concern: ["anti_aging"],
    concerns: ["anti_aging"],
    image: "/images/products/anessa_sunscreen.jpg",
    images: ["/images/products/anessa_sunscreen.jpg"],
    rating: 4.9,
    review_count: 88,
    created_at: "2024-01-22"
  },
  {
    id: "prod_009",
    name: "Wardah Crystal Secret Dark Spot Brightening Serum",
    brand: "Wardah",
    slug: "wardah-crystal-secret-dark-spot-brightening-serum",
    description: "Serum intensif lokal pencerah flek dan noda hitam dengan kandungan Edelweiss Extract dan Alpha Arbutin. Membantu meratakan warna kulit wajah, menyamarkan flek membandel bekas jerawat, serta memberikan tampilan wajah cerah sebening kristal.",
    price: 85000,
    stock: 50,
    category: "serum",
    skin_type: "all",
    concern: ["brightening"],
    concerns: ["brightening"],
    image: "/images/products/wardah_serum.jpg",
    images: ["/images/products/wardah_serum.jpg"],
    rating: 4.6,
    review_count: 121,
    created_at: "2024-01-23"
  },
  {
    id: "prod_010",
    name: "L'Oreal Paris Glycolic-Bright Glowing Cleanser Foam",
    brand: "L'Oreal",
    slug: "loreal-paris-glycolic-bright-glowing-cleanser-foam",
    description: "Sabun pembersih wajah dari L'Oreal Paris yang mengandung Glycolic Acid (AHA). Membantu mengeksfoliasi sel kulit mati secara lembut setiap hari, meratakan tekstur kulit kasar, mencerahkan kulit kusam, dan meminimalkan penampakan pori-pori.",
    price: 69000,
    stock: 40,
    category: "cleanser",
    skin_type: "combination",
    concern: ["brightening", "pore"],
    concerns: ["brightening", "pore"],
    image: "/images/products/loreal_foam.jpg",
    images: ["/images/products/loreal_foam.jpg"],
    rating: 4.5,
    review_count: 143,
    created_at: "2024-01-24"
  },
  {
    id: "prod_011",
    name: "Sukin Signature Facial Moisturiser",
    brand: "Sukin",
    slug: "sukin-signature-facial-moisturiser",
    description: "Pelembap harian Sukin yang memadukan Rosehip Oil, Avocado, Sesame Seed Oil, dan Jojoba Oil untuk menutrisi kulit secara optimal. Memberikan hidrasi mendalam dan mengembalikan kekenyalan kulit alami Anda.",
    price: 145000,
    stock: 30,
    category: "moisturizer",
    skin_type: "normal",
    concern: ["hydrating"],
    concerns: ["hydrating"],
    image: "/images/products/default_product.png",
    images: ["/images/products/default_product.png"],
    rating: 4.7,
    review_count: 67,
    created_at: "2024-01-25"
  },
  {
    id: "prod_012",
    name: "Biore UV Aqua Rich Watery Essence SPF 50+",
    brand: "Biore",
    slug: "biore-uv-aqua-rich-watery-essence-spf50",
    description: "Tabir surya bertekstur sangat ringan seperti air dengan kandungan Hyaluronic Acid dan Royal Jelly. Melindungi kulit dari sinar UV secara maksimal tanpa rasa lengket atau white cast.",
    price: 115000,
    stock: 50,
    category: "sunscreen",
    skin_type: "oily",
    concern: ["hydrating"],
    concerns: ["hydrating"],
    image: "/images/products/default_product.png",
    images: ["/images/products/default_product.png"],
    rating: 4.8,
    review_count: 320,
    created_at: "2024-01-26"
  }
];

const SEED_REVIEWS = [
  { id: 1, product_id: "prod_001", user_name: "Rani Amelia", rating: 5, comment: "Produk ini sangat bagus dan cocok di kulit saya! Sangat melembapkan.", created_at: "2026-06-10T12:00:00Z" },
  { id: 2, product_id: "prod_001", user_name: "Siti Rahma", rating: 4, comment: "Suka sekali dengan teksturnya yang ringan dan cepat meresap.", created_at: "2026-06-11T14:30:00Z" },
  { id: 3, product_id: "prod_002", user_name: "Putri Cantika", rating: 5, comment: "Baru coba seminggu sudah terlihat hasilnya, kemerahan mereda.", created_at: "2026-06-12T09:15:00Z" },
  { id: 4, product_id: "prod_002", user_name: "Rani Amelia", rating: 5, comment: "Sangat direkomendasikan untuk masalah kulit sensitif dan berjerawat.", created_at: "2026-06-13T10:20:00Z" },
  { id: 5, product_id: "prod_003", user_name: "Putri Cantika", rating: 5, comment: "Toner legendaris! Kulit jadi kenyal dan elastis.", created_at: "2026-06-14T11:00:00Z" }
];

const SEED_ARTICLES = [
  {
    id: "art_001",
    title: "5 Langkah Skincare Rutin untuk Kulit Kering",
    slug: "5-langkah-skincare-rutin-untuk-kulit-kering",
    excerpt: "Kulit kering membutuhkan hidrasi ekstra dan kelembapan yang terkunci rapat. Berikut adalah langkah-langkah skincare pagi dan malam yang wajib Anda lakukan untuk mendapatkan kulit dewy.",
    content: "<p>Kulit kering seringkali ditandai dengan tekstur yang kasar, kusam, dan mudah mengelupas. Untuk mengatasinya, Anda membutuhkan rangkaian skincare yang fokus pada hidrasi dan memperkuat skin barrier.</p><h2>Langkah Skincare Pagi</h2><ul><li><strong>1. Pembersih Wajah Lembut:</strong> Gunakan face wash dengan formula pH seimbang yang tidak berbusa banyak agar kelembapan alami tidak terangkat.</li><li><strong>2. Hydrating Toner:</strong> Tepuk-tepuk toner dengan kandungan Hyaluronic Acid untuk mengembalikan air ke dalam sel kulit.</li><li><strong>3. Moisturizer:</strong> Aplikasikan pelembap bertekstur cream untuk mengunci hidrasi.</li><li><strong>4. Sunscreen:</strong> Wajib gunakan tabir surya minimal SPF 30 untuk melindungi kulit dari penuaan dini akibat UV.</li></ul><h2>Langkah Skincare Malam</h2><ul><li><strong>1. Double Cleansing:</strong> Bersihkan sisa kotoran dengan micellar water atau cleansing oil, dilanjutkan face wash.</li><li><strong>2. Moisturizer / Sleeping Mask:</strong> Gunakan moisturizer yang lebih tebal atau sleeping mask untuk kelembapan ekstra semalaman.</li></ul>",
    thumbnail: "/images/articles/dry_skin.png",
    jetpack_featured_media_url: "/images/articles/dry_skin.png",
    category: "Skincare Tips",
    author: "Damara Beauty",
    date: "2026-06-13",
    read_time: "5 menit"
  },
  {
    id: "art_002",
    title: "Cara Mengatasi Jerawat Aktif Secara Aman",
    slug: "cara-mengatasi-jerawat-secara-alami-dan-cepat",
    excerpt: "Jerawat aktif meradang memang sangat mengganggu penampilan. Pelajari kandungan aktif skincare terbaik seperti Salicylic Acid dan Centella Asiatica untuk meredakan kemerahan.",
    content: "<p>Mengatasi jerawat meradang membutuhkan ketelatenan dan pilihan kandungan skincare yang tepat. Menekan atau memencet jerawat hanya akan memperparah infeksi dan meninggalkan bopeng.</p><h2>Kandungan Aktif Pereda Jerawat</h2><ul><li><strong>Salicylic Acid (BHA):</strong> Bekerja membersihkan sumbatan minyak di dalam pori-pori.</li><li><strong>Centella Asiatica (Cica):</strong> Menenangkan kemerahan dan mempercepat penyembuhan kulit.</li><li><strong>Tea Tree Oil:</strong> Berperan sebagai antibakteri alami untuk melawan bakteri penyebab jerawat.</li></ul><p>Gunakan produk yang ringan (seperti gel) dan kurangi pemakaian scrub fisik sementara waktu agar jerawat tidak tergesek.</p>",
    thumbnail: "/images/products/default_product.png",
    jetpack_featured_media_url: "/images/products/default_product.png",
    category: "Skincare Tips",
    author: "Damara Beauty",
    date: "2026-06-10",
    read_time: "4 menit"
  },
  {
    id: "art_003",
    title: "Pentingnya Double Cleansing untuk Kulit Oily",
    slug: "mengenal-pentingnya-double-cleansing-setiap-hari",
    excerpt: "Mencuci muka dengan facial wash saja tidak cukup untuk membersihkan sisa makeup dan sunscreen. Temukan mengapa double cleansing adalah kunci wajah bebas komedo dan jerawat.",
    content: "<p>Double cleansing adalah metode membersihkan wajah dengan dua tahap pembersih berbeda. Tahap pertama menggunakan pembersih berbahan dasar minyak (oil/milk/micellar), dilanjutkan dengan sabun cuci muka berbahan dasar air.</p><h2>Mengapa Double Cleansing Penting?</h2><p>Sebagian besar sunscreen dan kosmetik diformulasikan tahan air. Sabun wajah biasa tidak dapat mengangkat lapisan lilin atau minyak tersebut sepenuhnya, menyisakan residu yang menyumbat pori-pori penyebab komedo. Lakukan double cleansing terutama pada sore atau malam hari setelah beraktivitas di luar rumah.</p>",
    thumbnail: "/images/products/default_product.png",
    jetpack_featured_media_url: "/images/products/default_product.png",
    category: "Skincare Tips",
    author: "Damara Beauty",
    date: "2026-06-08",
    read_time: "3 menit"
  },
  {
    id: "art_004",
    title: "Mengenal Kandungan Niacinamide dan Manfaatnya",
    slug: "mengenal-kandungan-niacinamide-dan-manfaatnya",
    excerpt: "Niacinamide adalah salah satu kandungan skincare paling populer saat ini. Simak manfaat hebatnya untuk mencerahkan dan menjaga skin barrier.",
    content: "<p>Niacinamide, atau dikenal juga sebagai Vitamin B3, adalah bahan serbaguna dalam dunia kecantikan. Kandungan ini sangat disukai karena bekerja dengan lembut tanpa menyebabkan iritasi parah bagi pemula.</p><h2>Manfaat Utama Niacinamide</h2><ul><li><strong>Mencerahkan Kulit:</strong> Membantu menghambat transfer pigmen warna ke sel kulit terluar, menyamarkan noda hitam bekas jerawat.</li><li><strong>Mengontrol Produksi Sebum:</strong> Sangat baik bagi kulit berminyak karena dapat membantu mengendalikan kelenjar minyak berlebih.</li><li><strong>Memperkuat Skin Barrier:</strong> Merangsang sintesis ceramide alami kulit untuk mengunci kelembapan dan mencegah infeksi bakteri.</li></ul>",
    thumbnail: "/images/products/default_product.png",
    jetpack_featured_media_url: "/images/products/default_product.png",
    category: "Skincare Tips",
    author: "Damara Beauty",
    date: "2026-06-14",
    read_time: "5 menit"
  },
  {
    id: "art_005",
    title: "Sunscreen: Mengapa Wajib Dipakai Setiap Hari",
    slug: "sunscreen-mengapa-wajib-dipakai-setiap-hari",
    excerpt: "Mengabaikan penggunaan sunscreen dapat memicu flek hitam, penuaan dini, hingga risiko kanker kulit. Cari tahu pentingnya proteksi UV harian.",
    content: "<p>Menggunakan serum mahal tidak akan ada gunanya jika Anda tidak melindungi kulit menggunakan tabir surya. Sinar ultraviolet (UV) dari matahari selalu ada sepanjang hari bahkan saat cuaca mendung.</p><h2>Alasan Wajib Memakai Sunscreen</h2><p>Sinar UVA menembus lapisan kulit dalam dan memecah kolagen, menyebabkan keriput halus dan kulit kendur (photoaging). Sinar UVB menyebabkan kulit terbakar matahari (sunburn) dan noda hitam. Pastikan Anda menggunakan sunscreen minimal dengan proteksi SPF 30 dan PA+++ setiap pagi hari dan lakukan re-apply setiap 2-3 jam saat berada di luar ruangan.</p>",
    thumbnail: "/images/products/default_product.png",
    jetpack_featured_media_url: "/images/products/default_product.png",
    category: "Skincare Tips",
    author: "Damara Beauty",
    date: "2026-06-15",
    read_time: "6 menit"
  },
  {
    id: "art_006",
    title: "Panduan Memilih Moisturizer Sesuai Jenis Kulit",
    slug: "panduan-memilih-moisturizer-sesuai-jenis-kulit",
    excerpt: "Pelembap adalah kunci mengunci hidrasi. Kenali jenis pelembap yang tepat, apakah gel untuk kulit berminyak atau krim untuk kulit kering.",
    content: "<p>Tugas utama moisturizer adalah mencegah penguapan air alami dari kulit. Namun, salah memilih tekstur dapat membuat kulit Anda terasa terlalu berminyak atau sebaliknya, kurang lembap.</p><h2>Cara Memilih Berdasarkan Jenis Kulit</h2><ul><li><strong>Kulit Berminyak/Kombinasi:</strong> Pilih pelembap bertekstur gel ringan berbasis air (water-based) agar cepat menyerap dan tidak menyumbat pori-pori wajah.</li><li><strong>Kulit Kering:</strong> Gunakan pelembap bertekstur krim tebal (rich cream) yang kaya kandungan emolin dan oklusif untuk menjaga barrier kulit sepanjang hari.</li><li><strong>Kulit Sensitif:</strong> Cari formula bebas alkohol, bebas parfum, dan hipoalergenik dengan kandungan penenang seperti Ceramide atau cica.</li></ul>",
    thumbnail: "/images/products/skintific_moisturizer.jpg",
    jetpack_featured_media_url: "/images/products/skintific_moisturizer.jpg",
    category: "Skincare Tips",
    author: "Damara Beauty",
    date: "2026-06-12",
    read_time: "5 menit"
  }
];

const SEED_ORDERS = [
  {
    id: "DS-20260612001",
    user_id: "user_001",
    user_name: "Putri Cantika",
    order_number: "ORD-20260612-001",
    total_price: 199000,
    total: 199000,
    shipping_cost: 15000,
    shipping: 15000,
    payment_method: "transfer_bank",
    payment_status: "paid",
    status: "delivered",
    order_status: "delivered",
    recipient_name: "Putri Cantika",
    recipient_phone: "089876543210",
    shipping_address: "Jl. Sehat No. 10, Bandung",
    notes: "Tolong diantar sebelum jam 5 sore.",
    tracking_number: "DS-9081237198",
    created_at: "2026-06-12T01:28:00Z",
    items: [
      { id: "item_seed_1", product_id: "prod_001", quantity: 1, qty: 1, price: 139000, name: "Skintific 5X Ceramide Barrier Moisture Gel" },
      { id: "item_seed_2", product_id: "prod_003", quantity: 1, qty: 1, price: 45000, name: "Hada Labo Gokujyun Ultimate Moisturizing Lotion" }
    ]
  },
  {
    id: "DS-20260615002",
    user_id: "user_002",
    user_name: "Rani Amelia",
    order_number: "ORD-20260615-002",
    total_price: 213000,
    total: 213000,
    shipping_cost: 15000,
    shipping: 15000,
    payment_method: "transfer_bank",
    payment_status: "paid",
    status: "shipped",
    order_status: "shipped",
    recipient_name: "Rani Amelia",
    recipient_phone: "081234567800",
    shipping_address: "Jl. Dummy No. 1, Surabaya",
    notes: "",
    tracking_number: "DS-9081237199",
    created_at: "2026-06-15T09:15:00Z",
    items: [
      { id: "item_seed_3", product_id: "prod_002", quantity: 1, qty: 1, price: 198000, name: "Skin1004 Madagascar Centella Ampoule" }
    ]
  },
  {
    id: "DS-20260616003",
    user_id: "user_003",
    user_name: "Siti Rahma",
    order_number: "ORD-20260616-003",
    total_price: 140000,
    total: 140000,
    shipping_cost: 15000,
    shipping: 15000,
    payment_method: "cod",
    payment_status: "unpaid",
    status: "pending",
    order_status: "pending",
    recipient_name: "Siti Rahma",
    recipient_phone: "081234567801",
    shipping_address: "Jl. Dummy No. 2, Yogyakarta",
    notes: "",
    tracking_number: "",
    created_at: "2026-06-16T11:00:00Z",
    items: [
      { id: "item_seed_4", product_id: "prod_005", quantity: 1, qty: 1, price: 125000, name: "COSRX Low pH Good Morning Gel Cleanser" }
    ]
  }
];

function initDB() {
  localStorage.removeItem("damaraskin_db_initialized");
  try {
    const users = localStorage.getItem("damaraskin_users");
    if (!users || JSON.parse(users).length === 0) {
      localStorage.setItem("damaraskin_users", JSON.stringify(SEED_USERS));
    }
  } catch (e) {
    localStorage.setItem("damaraskin_users", JSON.stringify(SEED_USERS));
  }
  try {
    const products = localStorage.getItem("damaraskin_products");
    if (!products || JSON.parse(products).length === 0) {
      localStorage.setItem("damaraskin_products", JSON.stringify(SEED_PRODUCTS));
    }
  } catch (e) {
    localStorage.setItem("damaraskin_products", JSON.stringify(SEED_PRODUCTS));
  }
  try {
    const reviews = localStorage.getItem("damaraskin_reviews");
    if (!reviews || JSON.parse(reviews).length === 0) {
      localStorage.setItem("damaraskin_reviews", JSON.stringify(SEED_REVIEWS));
    }
  } catch (e) {
    localStorage.setItem("damaraskin_reviews", JSON.stringify(SEED_REVIEWS));
  }
  try {
    const articles = localStorage.getItem("damaraskin_articles");
    if (!articles || JSON.parse(articles).length === 0) {
      localStorage.setItem("damaraskin_articles", JSON.stringify(SEED_ARTICLES));
    }
  } catch (e) {
    localStorage.setItem("damaraskin_articles", JSON.stringify(SEED_ARTICLES));
  }
  try {
    const orders = localStorage.getItem("damaraskin_orders");
    if (!orders || JSON.parse(orders).length === 0) {
      localStorage.setItem("damaraskin_orders", JSON.stringify(SEED_ORDERS));
    }
  } catch (e) {
    localStorage.setItem("damaraskin_orders", JSON.stringify(SEED_ORDERS));
  }
}

initDB();

// Core DB operations (String-safe matching)
export const db = {
  // Users / Auth
  getUsers() {
    try {
      const data = JSON.parse(localStorage.getItem("damaraskin_users") || "[]");
      return (data && data.length > 0) ? data : SEED_USERS;
    } catch (e) {
      return SEED_USERS;
    }
  },
  saveUsers(users) {
    localStorage.setItem("damaraskin_users", JSON.stringify(users));
  },
  getCurrentUser() {
    const user = sessionStorage.getItem("damaraskin_current_user") || localStorage.getItem("damaraskin_current_user");
    return user ? JSON.parse(user) : null;
  },
  setCurrentUser(user, remember = false) {
    const userStr = JSON.stringify(user);
    if (user) {
      if (remember) {
        localStorage.setItem("damaraskin_current_user", userStr);
      } else {
        sessionStorage.setItem("damaraskin_current_user", userStr);
      }
    } else {
      localStorage.removeItem("damaraskin_current_user");
      sessionStorage.removeItem("damaraskin_current_user");
    }
  },
  login(email, password, remember = false) {
    const users = this.getUsers();
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
      if (user.status === "suspended") {
        return { success: false, message: "Akun Anda ditangguhkan. Hubungi admin." };
      }
      this.setCurrentUser(user, remember);
      return { success: true, user };
    }
    return { success: false, message: "Email atau password salah." };
  },
  register(name, email, password) {
    const users = this.getUsers();
    if (users.some(u => u.email === email)) {
      return { success: false, message: "Email sudah digunakan." };
    }
    const newUser = {
      id: "user_" + Date.now(),
      name,
      email,
      password,
      role: "user",
      phone: "",
      address: "",
      skin_type: null,
      skin_concerns: [],
      status: "active"
    };
    users.push(newUser);
    this.saveUsers(users);
    this.setCurrentUser(newUser, false);
    return { success: true, user: newUser };
  },
  logout() {
    this.setCurrentUser(null);
  },
  updateProfile(name, email, phone, address) {
    const currentUser = this.getCurrentUser();
    if (!currentUser) return { success: false };
    
    const users = this.getUsers();
    const idx = users.findIndex(u => String(u.id) === String(currentUser.id));
    if (idx !== -1) {
      users[idx].name = name;
      users[idx].email = email;
      users[idx].phone = phone;
      users[idx].address = address;
      this.saveUsers(users);
      // Update session user
      const isLocal = !!localStorage.getItem("damaraskin_current_user");
      this.setCurrentUser(users[idx], isLocal);
      return { success: true, user: users[idx] };
    }
    return { success: false };
  },
  updatePassword(oldPassword, newPassword) {
    const currentUser = this.getCurrentUser();
    if (!currentUser) return { success: false, message: "Belum login." };
    
    const users = this.getUsers();
    const idx = users.findIndex(u => String(u.id) === String(currentUser.id));
    if (idx !== -1) {
      if (users[idx].password !== oldPassword) {
        return { success: false, message: "Password lama salah." };
      }
      users[idx].password = newPassword;
      this.saveUsers(users);
      // Update session user
      const isLocal = !!localStorage.getItem("damaraskin_current_user");
      this.setCurrentUser(users[idx], isLocal);
      return { success: true };
    }
    return { success: false, message: "User tidak ditemukan." };
  },
  updateSkinProfile(skinType, concerns) {
    const currentUser = this.getCurrentUser();
    if (!currentUser) return { success: false };
    
    const users = this.getUsers();
    const idx = users.findIndex(u => String(u.id) === String(currentUser.id));
    if (idx !== -1) {
      users[idx].skin_type = skinType;
      users[idx].skin_concerns = concerns;
      this.saveUsers(users);
      const isLocal = !!localStorage.getItem("damaraskin_current_user");
      this.setCurrentUser(users[idx], isLocal);
      return { success: true, user: users[idx] };
    }
    return { success: false };
  },
  toggleUserStatus(userId) {
    const users = this.getUsers();
    const idx = users.findIndex(u => String(u.id) === String(userId));
    if (idx !== -1 && users[idx].role !== "admin") {
      users[idx].status = users[idx].status === "active" ? "suspended" : "active";
      this.saveUsers(users);
      return { success: true, user: users[idx] };
    }
    return { success: false };
  },

  // Products
  getProducts() {
    try {
      const data = JSON.parse(localStorage.getItem("damaraskin_products") || "[]");
      const list = (data && data.length > 0) ? data : SEED_PRODUCTS;
      return list.map(p => {
        if (p.image && !p.image.startsWith("/") && !p.image.startsWith("http")) {
          p.image = "/" + p.image;
        }
        if (p.images) {
          p.images = p.images.map(img => (img.startsWith("/") || img.startsWith("http")) ? img : "/" + img);
        }
        return p;
      });
    } catch (e) {
      return SEED_PRODUCTS;
    }
  },
  saveProducts(products) {
    localStorage.setItem("damaraskin_products", JSON.stringify(products));
  },
  getProductBySlug(slug) {
    return this.getProducts().find(p => p.slug === slug);
  },
  getProductById(id) {
    return this.getProducts().find(p => String(p.id) === String(id));
  },
  saveProduct(productData) {
    const products = this.getProducts();
    if (productData.id) {
      const idx = products.findIndex(p => String(p.id) === String(productData.id));
      if (idx !== -1) {
        products[idx] = { ...products[idx], ...productData, id: String(productData.id) };
        this.saveProducts(products);
        return products[idx];
      }
    } else {
      const newProduct = {
        ...productData,
        id: "prod_" + Date.now(),
        rating: 5.0,
        review_count: 0,
        images: productData.images || [productData.image || "/images/products/default_product.png"],
        image: productData.image || (productData.images ? productData.images[0] : "/images/products/default_product.png")
      };
      products.push(newProduct);
      this.saveProducts(products);
      return newProduct;
    }
    return null;
  },
  deleteProduct(id) {
    let products = this.getProducts();
    products = products.filter(p => String(p.id) !== String(id));
    this.saveProducts(products);
    return true;
  },

  // Reviews
  getReviews(productId = null) {
    let reviews = [];
    try {
      reviews = JSON.parse(localStorage.getItem("damaraskin_reviews") || "[]");
    } catch (e) {}
    if (!reviews || reviews.length === 0) {
      reviews = SEED_REVIEWS;
    }
    if (productId) {
      return reviews.filter(r => String(r.product_id) === String(productId));
    }
    return reviews;
  },
  addReview(productId, rating, comment) {
    const user = this.getCurrentUser();
    if (!user) return { success: false, message: "Silakan login terlebih dahulu." };

    const reviews = JSON.parse(localStorage.getItem("damaraskin_reviews") || "[]");
    
    // Check if review already exists
    const reviewExists = reviews.some(r => String(r.product_id) === String(productId) && r.user_name === user.name);
    if (reviewExists) {
      return { success: false, message: "Anda sudah mengulas produk ini." };
    }

    const newReview = {
      id: Date.now(),
      product_id: String(productId),
      user_name: user.name,
      rating: parseInt(rating),
      comment,
      created_at: new Date().toISOString()
    };
    reviews.push(newReview);
    localStorage.setItem("damaraskin_reviews", JSON.stringify(reviews));

    // Recalculate product rating
    const pReviews = reviews.filter(r => String(r.product_id) === String(productId));
    const avgRating = pReviews.reduce((sum, r) => sum + r.rating, 0) / pReviews.length;
    
    const products = this.getProducts();
    const pIdx = products.findIndex(p => String(p.id) === String(productId));
    if (pIdx !== -1) {
      products[pIdx].rating = parseFloat(avgRating.toFixed(1));
      products[pIdx].review_count = pReviews.length;
      this.saveProducts(products);
    }

    return { success: true, review: newReview };
  },

  // Cart
  getCart() {
    const user = this.getCurrentUser();
    if (!user) return [];
    const key = `damaraskin_cart_${user.id}`;
    return JSON.parse(localStorage.getItem(key) || "[]");
  },
  saveCart(cart) {
    const user = this.getCurrentUser();
    if (!user) return;
    const key = `damaraskin_cart_${user.id}`;
    localStorage.setItem(key, JSON.stringify(cart));
    // Dispatch event to update navbar count
    window.dispatchEvent(new Event("cart-updated"));
  },
  addToCart(productId, quantity = 1) {
    const cart = this.getCart();
    const product = this.getProductById(productId);
    if (!product) return { success: false, message: "Produk tidak ditemukan." };

    const idx = cart.findIndex(item => String(item.product_id) === String(productId));
    if (idx !== -1) {
      const newQty = cart[idx].quantity + parseInt(quantity);
      if (newQty > product.stock) {
        return { success: false, message: `Stok tidak mencukupi. Tersedia: ${product.stock}` };
      }
      cart[idx].quantity = newQty;
    } else {
      if (parseInt(quantity) > product.stock) {
        return { success: false, message: `Stok tidak mencukupi. Tersedia: ${product.stock}` };
      }
      cart.push({
        id: Date.now(),
        product_id: String(productId),
        quantity: parseInt(quantity)
      });
    }
    this.saveCart(cart);
    return { success: true };
  },
  updateCartQty(cartItemId, newQuantity) {
    const cart = this.getCart();
    const idx = cart.findIndex(item => String(item.id) === String(cartItemId));
    if (idx !== -1) {
      const product = this.getProductById(cart[idx].product_id);
      if (newQuantity > product.stock) return { success: false };
      cart[idx].quantity = parseInt(newQuantity);
      this.saveCart(cart);
      return { success: true };
    }
    return { success: false };
  },
  removeFromCart(cartItemId) {
    let cart = this.getCart();
    cart = cart.filter(item => String(item.id) !== String(cartItemId));
    this.saveCart(cart);
    return true;
  },
  clearCart() {
    const user = this.getCurrentUser();
    if (!user) return;
    const key = `damaraskin_cart_${user.id}`;
    localStorage.removeItem(key);
    window.dispatchEvent(new Event("cart-updated"));
  },

  // Orders
  getOrders() {
    const orders = this.getAllOrders();
    const user = this.getCurrentUser();
    if (!user) return [];
    if (user.role === "admin") return orders;
    return orders.filter(o => String(o.user_id) === String(user.id));
  },
  getAllOrders() {
    try {
      const data = JSON.parse(localStorage.getItem("damaraskin_orders") || "[]");
      return (data && data.length > 0) ? data : SEED_ORDERS;
    } catch (e) {
      return SEED_ORDERS;
    }
  },
  getOrderById(id) {
    return this.getAllOrders().find(o => String(o.id) === String(id));
  },
  checkout(recipientName, recipientPhone, shippingAddress, notes, paymentMethod) {
    const user = this.getCurrentUser();
    if (!user) return { success: false, message: "Silakan login terlebih dahulu." };

    const cart = this.getCart();
    if (cart.length === 0) return { success: false, message: "Keranjang kosong." };

    const products = this.getProducts();
    const items = [];
    let totalPrice = 0;
    
    // Validate stock and compile items
    for (const item of cart) {
      const product = products.find(p => String(p.id) === String(item.product_id));
      if (!product || product.stock < item.quantity) {
        return { success: false, message: `Stok produk ${product ? product.name : 'tidak diketahui'} habis.` };
      }
      items.push({
        id: "item_" + Date.now() + "_" + Math.floor(Math.random() * 10000),
        product_id: String(product.id),
        quantity: item.quantity,
        qty: item.quantity,
        price: product.price,
        name: product.name
      });
      totalPrice += product.price * item.quantity;
      
      // Deduct stock
      product.stock -= item.quantity;
    }

    const shippingCost = 15000;
    const totalAmount = totalPrice + shippingCost;
    const orderNum = "ORD-" + new Date().toISOString().slice(0, 10).replace(/-/g, "") + "-" + Math.floor(1000 + Math.random() * 9000);
    const orderId = "DS-" + Date.now();

    const newOrder = {
      id: orderId,
      user_id: String(user.id),
      user_name: user.name, // denormalized for admin convenience
      order_number: orderNum,
      total_price: totalAmount,
      total: totalAmount,
      shipping_cost: shippingCost,
      shipping: shippingCost,
      payment_method: paymentMethod,
      payment_status: paymentMethod === "cod" ? "unpaid" : "paid",
      status: "pending",
      order_status: "pending",
      recipient_name: recipientName,
      recipient_phone: recipientPhone,
      shipping_address: shippingAddress,
      notes,
      tracking_number: "",
      created_at: new Date().toISOString(),
      items
    };

    // Save updated products and new order
    this.saveProducts(products);
    
    const allOrders = this.getAllOrders();
    allOrders.unshift(newOrder);
    localStorage.setItem("damaraskin_orders", JSON.stringify(allOrders));

    // Clear cart
    this.clearCart();
    return { success: true, order: newOrder };
  },
  updateOrderStatus(orderId, status) {
    const allOrders = this.getAllOrders();
    const idx = allOrders.findIndex(o => String(o.id) === String(orderId));
    if (idx !== -1) {
      allOrders[idx].status = status;
      allOrders[idx].order_status = status;
      if (status === "delivered") {
        allOrders[idx].payment_status = "paid";
      }
      if (status === "shipped" && !allOrders[idx].tracking_number) {
        allOrders[idx].tracking_number = "DS-" + Math.floor(1000000000 + Math.random() * 9000000000);
      }
      localStorage.setItem("damaraskin_orders", JSON.stringify(allOrders));
      return { success: true, order: allOrders[idx] };
    }
    return { success: false };
  },

  // Articles
  async getArticles() {
    const staticWpUrl = '/articles-wp.json';
    const fallbackWpUrl = '/public/articles-wp.json';
    let wpArticles = [];
    let fetchSuccess = false;

    // Fetch static WordPress articles from the pre-downloaded JSON file
    try {
      const controller = new AbortController();
      const id = setTimeout(() => controller.abort(), 3000);
      let response = await fetch(staticWpUrl, { signal: controller.signal });
      clearTimeout(id);
      
      if (!response.ok) {
        // Try fallback for Live Server (which doesn't map public folder to root)
        const controller2 = new AbortController();
        const id2 = setTimeout(() => controller2.abort(), 3000);
        response = await fetch(fallbackWpUrl, { signal: controller2.signal });
        clearTimeout(id2);
      }

      if (response.ok) {
        const posts = await response.json();
        if (Array.isArray(posts) && posts.length > 0) {
          wpArticles = this.mapWordPressPosts(posts);
          fetchSuccess = true;
        }
      }
    } catch (e) {
      console.warn("Failed to fetch static WordPress articles JSON, falling back...", e);
    }

    // 3. Load LocalStorage articles (created/edited by admin)
    let localArticles = [];
    try {
      const raw = localStorage.getItem("damaraskin_articles");
      if (raw) {
        localArticles = JSON.parse(raw);
      } else {
        localArticles = SEED_ARTICLES;
      }
    } catch (e) {
      localArticles = SEED_ARTICLES;
    }

    // Normalize local articles to match WP structures
    const normalizedLocal = localArticles.map(art => this.normalizeArticle(art));

    // Combine local custom articles and WordPress articles.
    const combined = [...normalizedLocal];
    wpArticles.forEach(wpArt => {
      const isDuplicate = combined.some(localArt => localArt.slug === wpArt.slug);
      if (!isDuplicate) {
        combined.unshift(wpArt);
      }
    });

    return combined;
  },

  mapWordPressPosts(posts) {
    return posts.map(post => {
      let thumbnail = '';
      if (post._embedded && post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'][0]) {
        thumbnail = post._embedded['wp:featuredmedia'][0].source_url;
      } else if (post.jetpack_featured_media_url) {
        thumbnail = post.jetpack_featured_media_url;
      } else {
        thumbnail = '/images/articles/default.png';
      }
      return {
        id: post.id,
        title: { rendered: post.title ? post.title.rendered : '' },
        excerpt: { rendered: post.excerpt ? post.excerpt.rendered : '' },
        content: { rendered: post.content ? post.content.rendered : '' },
        thumbnail: thumbnail,
        jetpack_featured_media_url: thumbnail,
        date: post.date || new Date().toISOString(),
        slug: post.slug || '',
        category: 'Skincare Tips',
        author: 'Damara Beauty',
        read_time: '5 menit'
      };
    });
  },

  normalizeArticle(art) {
    const normalized = { ...art };
    if (normalized.title && typeof normalized.title === "string") {
      normalized.title = { rendered: normalized.title };
    }
    if (normalized.excerpt && typeof normalized.excerpt === "string") {
      normalized.excerpt = { rendered: normalized.excerpt };
    }
    if (normalized.content && typeof normalized.content === "string") {
      normalized.content = { rendered: normalized.content };
    }
    if (!normalized.jetpack_featured_media_url && normalized.thumbnail) {
      normalized.jetpack_featured_media_url = normalized.thumbnail;
    }
    return normalized;
  },

  async getArticleBySlug(slug) {
    const articles = await this.getArticles();
    return articles.find(a => a.slug === slug);
  },

  saveArticles(articles) {
    localStorage.setItem("damaraskin_articles", JSON.stringify(articles));
  },

  async getArticleById(id) {
    const articles = await this.getArticles();
    return articles.find(a => String(a.id) === String(id));
  },

  async saveArticle(articleData) {
    const articles = await this.getArticles();
    if (articleData.id) {
      const idx = articles.findIndex(a => String(a.id) === String(articleData.id));
      if (idx !== -1) {
        articles[idx] = { ...articles[idx], ...articleData, id: String(articleData.id) };
        const onlyLocal = articles.filter(a => typeof a.id === 'string' && a.id.startsWith('art_'));
        this.saveArticles(onlyLocal);
        return articles[idx];
      }
    } else {
      const newArticle = {
        ...articleData,
        id: "art_" + Date.now(),
        date: new Date().toISOString().slice(0, 10),
        jetpack_featured_media_url: articleData.thumbnail || articleData.jetpack_featured_media_url || "/images/articles/default.png",
        title: typeof articleData.title === 'string' ? { rendered: articleData.title } : articleData.title,
        excerpt: typeof articleData.excerpt === 'string' ? { rendered: articleData.excerpt } : articleData.excerpt,
        content: typeof articleData.content === 'string' ? { rendered: articleData.content } : articleData.content
      };
      articles.push(newArticle);
      const onlyLocal = articles.filter(a => typeof a.id === 'string' && a.id.startsWith('art_'));
      this.saveArticles(onlyLocal);
      return newArticle;
    }
    return null;
  },

  async deleteArticle(id) {
    let localArticles = [];
    try {
      const raw = localStorage.getItem("damaraskin_articles");
      if (raw) localArticles = JSON.parse(raw);
      else localArticles = [...SEED_ARTICLES];
    } catch (e) {
      localArticles = [...SEED_ARTICLES];
    }
    localArticles = localArticles.filter(a => String(a.id) !== String(id));
    this.saveArticles(localArticles);
    return true;
  }
};

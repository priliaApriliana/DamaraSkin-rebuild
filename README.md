# DamaraSkin - Smart Skincare Consultation & Catalog

DamaraSkin adalah platform berbasis web modern yang dirancang untuk membantu perempuan (khususnya usia 18-35 tahun) menemukan rangkaian produk perawatan kulit (skincare) terbaik yang dipersonalisasi sesuai dengan jenis kulit dan permasalahan spesifik mereka.

Website ini dideploy secara otomatis ke Vercel: **[https://damaraskin-rebuild.vercel.app](https://damaraskin-rebuild.vercel.app)**

---

## 🌟 Fitur Utama

1. **Konsultasi Kulit Pintar (Skin Consultation)**
   - Kuesioner interaktif untuk menganalisis kondisi kulit secara instan.
   - Hasil rekomendasi kandungan aktif dan jenis skincare yang disesuaikan secara personal.

2. **Katalog Produk Terkurasi**
   - Halaman katalog lengkap dengan filter kategori produk, jenis kulit, dan masalah kulit.
   - Detil produk dengan daftar kandungan aktif, instruksi penggunaan, dan produk terkait.
   - Ulasan (review) bintang dari pengguna.

3. **Tips & Artikel Kecantikan**
   - Integrasi artikel dan tips seputar perawatan kulit yang diambil dari database WordPress API secara dinamis.

4. **Keranjang Belanja & Transaksi**
   - Simulasi keranjang belanja, pengisian formulir pengiriman, ringkasan transaksi, serta pelacakan riwayat pesanan (orders log).

5. **Panel Admin (Admin Dashboard)**
   - Akses manajemen data produk, pesanan (orders), pengguna (users), dan pengelolaan artikel secara visual.

---

## 🛠️ Tech Stack & Arsitektur

* **Core & Layout**: HTML5, Vanilla CSS dengan integrasi font estetis (**Cormorant Garamond** & **Poppins**).
* **Interaktivitas & State Management**: [Alpine.js](https://alpinejs.dev/) (mengelola data keranjang belanja, proses login, dan kuesioner secara reaktif).
* **Styling**: [Tailwind CSS v4.x](https://tailwindcss.com/) (menggunakan `@tailwindcss/vite` untuk optimasi compiler visual).
* **Build Tool**: [Vite](https://vite.dev/) (menjamin performa kompilasi static page secara optimal).
* **Database Simulasi**: Local DB berbasis `localStorage` untuk kelangsungan data user, produk, review, dan transaksi (SSoT).
* **Deployment**: [Vercel](https://vercel.com/) (dengan konfigurasi `vercel.json` untuk clean URLs dan URL rewriting).

---

## 🚀 Memulai (Local Development)

Ikuti langkah-langkah di bawah ini untuk menjalankan proyek ini di komputer lokal Anda:

### Prasyarat
Pastikan Anda sudah menginstal [Node.js](https://nodejs.org/) di sistem Anda.

### Langkah-langkah
1. **Clone Repository**
   ```bash
   git clone https://github.com/priliaApriliana/DamaraSkin-rebuild.git
   cd DamaraSkin-rebuild
   ```

2. **Instal Dependensi**
   ```bash
   npm install
   ```

3. **Jalankan Development Server**
   ```bash
   npm run dev
   ```
   Buka peramban (browser) dan akses alamat: `http://localhost:5173`

4. **Build untuk Produksi**
   Untuk mengompilasi semua berkas statis ke dalam folder `/dist`:
   ```bash
   npm run build
   ```

---

## 📂 Struktur Direktori Proyek

```text
DamaraSkin-rebuild/
├── admin/                 # Halaman panel admin (dashboard, produk, order, user)
├── pages/                 # Halaman utama aplikasi (auth, cart, articles, products, dll.)
├── public/                # Media statis (gambar produk, logo, favicon)
├── src/
│   ├── css/               # File styling app.css & compiled.css
│   └── js/                # Logika aplikasi (app.js, db.js, sync-wp.js)
├── index.html             # Landing page utama
├── package.json           # File konfigurasi dependensi & skrip Node.js
├── vercel.json            # Konfigurasi routing & rewrite Vercel
└── vite.config.js         # Konfigurasi bundler Vite
```

---

## 📝 Catatan Tugas UAS
Proyek web ini disusun dan disempurnakan sebagai pemenuhan tugas **UAS Workshop Desain UI**. Fokus utama adalah pada konsistensi visual grid, tipografi yang premium, whitespace yang bersih, serta layout modern yang responsif.

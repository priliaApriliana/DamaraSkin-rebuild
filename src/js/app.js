// src/js/app.js
import Alpine from 'https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/module.esm.js';
import { db } from './db.js';

window.db = db;
window.Alpine = Alpine;

// UI Layout HTML Templates
const navbarHTML = `
<nav class="bg-white/80 backdrop-blur-md border-b border-primary/10 sticky top-0 z-50 transition-all duration-300" x-data="navbarComponent">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
            <div class="flex items-center">
                <!-- Logo -->
                <div class="flex-shrink-0 flex items-center">
                    <a href="/index.html" class="flex items-center gap-2.5 group transition duration-300">
                        <img src="/images/logo.png" alt="DamaraSkin Logo" class="h-10 w-auto group-hover:scale-105 transition duration-300">
                        <span class="font-brush text-3xl md:text-4xl text-primary font-bold group-hover:text-accent transition duration-300">
                            DamaraSkin
                        </span>
                    </a>
                </div>
                <!-- Navigation Links (Desktop) -->
                <div class="hidden sm:ml-10 sm:flex sm:space-x-8">
                    <a href="/index.html" class="nav-link-item inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium transition duration-300 text-gray-400 hover:text-primary hover:border-primary-light">
                        Home
                    </a>
                    <a href="/pages/products/products.html" class="nav-link-item inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium transition duration-300 text-gray-400 hover:text-primary hover:border-primary-light">
                        Katalog Produk
                    </a>
                    <a href="/pages/articles/articles.html" class="nav-link-item inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium transition duration-300 text-gray-400 hover:text-primary hover:border-primary-light">
                        Tips & Artikel
                    </a>
                    <template x-if="currentUser && currentUser.role === 'user'">
                        <a href="/pages/dashboard/dashboard.html" class="nav-link-item inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium transition duration-300 text-gray-400 hover:text-primary hover:border-primary-light">
                            Skin Consultation
                        </a>
                    </template>
                </div>
            </div>

            <!-- Right side details -->
            <div class="hidden sm:flex sm:items-center sm:ml-6 space-x-4">
                <!-- Guest View -->
                <template x-if="!currentUser">
                    <div class="flex items-center space-x-4">
                        <a href="/pages/auth/login.html" class="text-sm font-medium text-gray-500 hover:text-primary transition duration-300">Login</a>
                        <a href="/pages/auth/register.html" class="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-primary hover:bg-accent rounded-full transition duration-300 shadow-md shadow-primary/20 hover:scale-105 transform">
                            Daftar
                        </a>
                    </div>
                </template>

                <!-- Authenticated View -->
                <template x-if="currentUser">
                    <div class="flex items-center space-x-4">
                        <!-- Cart Icon for Regular Users -->
                        <template x-if="currentUser.role === 'user'">
                            <a href="/pages/cart/cart.html" class="relative p-2 text-gray-500 hover:text-primary hover:bg-primary/5 rounded-full transition duration-300" aria-label="Keranjang Belanja">
                                <span class="sr-only">Keranjang</span>
                                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                </svg>
                                <template x-if="cartCount > 0">
                                    <span class="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-primary rounded-full cart-badge" x-text="cartCount">
                                    </span>
                                </template>
                            </a>
                        </template>

                        <!-- User Profile Dropdown -->
                        <div class="relative">
                            <button @click="open = !open" @click.away="open = false" class="flex items-center text-sm font-medium text-gray-500 hover:text-primary focus:outline-none transition duration-300 space-x-2" aria-label="Menu Profil">
                                <span x-text="currentUser.name"></span>
                                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                </svg>
                            </button>
                            <div x-show="open" x-transition class="absolute right-0 mt-2 w-48 rounded-xl shadow-lg bg-white border border-primary/5 py-1 ring-1 ring-black ring-opacity-5 z-50">
                                <template x-if="currentUser.role === 'admin'">
                                    <a href="/admin/dashboard.html" class="block px-4 py-2 text-sm text-gray-700 hover:bg-primary/5 hover:text-primary transition duration-200">
                                        Admin Dashboard
                                    </a>
                                </template>
                                <template x-if="currentUser.role === 'user'">
                                    <div>
                                        <a href="/pages/dashboard/dashboard.html" class="block px-4 py-2 text-sm text-gray-700 hover:bg-primary/5 hover:text-primary transition duration-200">
                                            Dashboard
                                        </a>
                                        <a href="/pages/profile/profile.html" class="block px-4 py-2 text-sm text-gray-700 hover:bg-primary/5 hover:text-primary transition duration-200">
                                            Profil Saya
                                        </a>
                                        <a href="/pages/orders/orders.html" class="block px-4 py-2 text-sm text-gray-700 hover:bg-primary/5 hover:text-primary transition duration-200">
                                            Riwayat Transaksi
                                        </a>
                                    </div>
                                </template>
                                <hr class="border-gray-100 my-1">
                                <button @click="logout()" class="block w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-red-50 transition duration-200">
                                    Logout
                                </button>
                            </div>
                        </div>
                    </div>
                </template>
            </div>

            <!-- Hamburger (Mobile) -->
            <div class="-mr-2 flex items-center sm:hidden" x-data="{ mobileOpen: false }">
                <button @click="mobileOpen = !mobileOpen" class="inline-flex items-center justify-center p-2 rounded-xl text-gray-400 hover:text-primary hover:bg-primary/5 focus:outline-none transition duration-300" aria-label="Toggle Menu Navigasi">
                    <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                        <path :class="{'hidden': mobileOpen, 'inline-flex': !mobileOpen }" class="inline-flex" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        <path :class="{'hidden': !mobileOpen, 'inline-flex': mobileOpen }" class="hidden" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                
                <!-- Mobile Menu Dropdown -->
                <div x-show="mobileOpen" x-transition class="absolute top-16 left-0 w-full bg-white border-b border-primary/10 shadow-lg p-4 z-50 flex flex-col space-y-3 sm:hidden" @click.away="mobileOpen = false">
                    <a href="/index.html" class="block px-3 py-2 rounded-xl text-base font-medium text-gray-700 hover:bg-primary/5 hover:text-primary transition">Home</a>
                    <a href="/pages/products/products.html" class="block px-3 py-2 rounded-xl text-base font-medium text-gray-700 hover:bg-primary/5 hover:text-primary transition">Katalog Produk</a>
                    <a href="/pages/articles/articles.html" class="block px-3 py-2 rounded-xl text-base font-medium text-gray-700 hover:bg-primary/5 hover:text-primary transition">Tips & Artikel</a>
                    
                    <template x-if="currentUser && currentUser.role === 'user'">
                        <div>
                            <a href="/pages/dashboard/dashboard.html" class="block px-3 py-2 rounded-xl text-base font-medium text-gray-700 hover:bg-primary/5 hover:text-primary transition">Skin Consultation</a>
                            <a href="/pages/cart/cart.html" class="block px-3 py-2 rounded-xl text-base font-medium text-gray-700 hover:bg-primary/5 hover:text-primary transition">
                                Keranjang (<span x-text="cartCount"></span>)
                            </a>
                            <a href="/pages/profile/profile.html" class="block px-3 py-2 rounded-xl text-base font-medium text-gray-700 hover:bg-primary/5 hover:text-primary transition">Profil Saya</a>
                            <a href="/pages/orders/orders.html" class="block px-3 py-2 rounded-xl text-base font-medium text-gray-700 hover:bg-primary/5 hover:text-primary transition">Riwayat Transaksi</a>
                        </div>
                    </template>

                    <template x-if="currentUser && currentUser.role === 'admin'">
                        <a href="/admin/dashboard.html" class="block px-3 py-2 rounded-xl text-base font-medium text-gray-700 hover:bg-primary/5 hover:text-primary transition">Admin Dashboard</a>
                    </template>
                    
                    <template x-if="currentUser">
                        <div>
                            <hr class="border-gray-100 my-1">
                            <button @click="logout()" class="block w-full text-left px-3 py-2 rounded-xl text-base font-medium text-red-500 hover:bg-red-50 transition">
                                Logout
                            </button>
                        </div>
                    </template>

                    <template x-if="!currentUser">
                        <div>
                            <a href="/pages/auth/login.html" class="block px-3 py-2 rounded-xl text-base font-medium text-gray-700 hover:bg-primary/5 hover:text-primary transition">Login</a>
                            <a href="/pages/auth/register.html" class="block text-center px-3 py-2 rounded-xl text-base font-medium text-white bg-primary hover:bg-accent transition shadow-md shadow-primary/20">Daftar</a>
                        </div>
                    </template>
                </div>
            </div>
        </div>
    </div>
</nav>
`;

const footerHTML = `
<footer class="bg-gray-50 border-t border-primary/10 py-12 mt-auto">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div class="col-span-1 md:col-span-2">
                <a href="/index.html" class="inline-flex items-center gap-3 group transition duration-300">
                    <img src="/images/logo.png" alt="DamaraSkin Logo" class="h-12 w-auto group-hover:scale-105 transition duration-300">
                    <span class="font-brush text-4xl text-primary font-bold group-hover:text-accent transition duration-300">
                        DamaraSkin
                    </span>
                </a>
                <p class="mt-4 text-sm text-gray-500 leading-relaxed max-w-sm">
                    DamaraSkin adalah platform konsultasi kulit pintar dan rekomendasi produk kecantikan yang dirancang khusus untuk memenuhi kebutuhan kulit unik Anda. Cantik alami dimulai dari perawatan yang tepat.
                </p>
                <div class="mt-6 flex space-x-4">
                    <a href="#" class="p-2 bg-primary/10 text-primary hover:bg-primary hover:text-white rounded-full transition duration-300" aria-label="Facebook DamaraSkin">
                        <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/></svg>
                    </a>
                    <a href="#" class="p-2 bg-primary/10 text-primary hover:bg-primary hover:text-white rounded-full transition duration-300" aria-label="Instagram DamaraSkin">
                        <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
                    </a>
                </div>
            </div>
            <div>
                <h3 class="text-sm font-semibold text-gray-700 tracking-wider uppercase border-b border-primary/10 pb-2">
                    Navigasi
                </h3>
                <ul class="mt-4 space-y-2">
                    <li><a href="/index.html" class="text-sm text-gray-500 hover:text-primary transition duration-200">Home</a></li>
                    <li><a href="/pages/products/products.html" class="text-sm text-gray-500 hover:text-primary transition duration-200">Katalog Produk</a></li>
                    <li><a href="/pages/articles/articles.html" class="text-sm text-gray-500 hover:text-primary transition duration-200">Tips & Artikel</a></li>
                    <template x-if="currentUser && currentUser.role === 'user'">
                        <li><a href="/pages/dashboard/dashboard.html" class="text-sm text-gray-500 hover:text-primary transition duration-200">Skin Consultation</a></li>
                    </template>
                </ul>
            </div>
            <div>
                <h3 class="text-sm font-semibold text-gray-700 tracking-wider uppercase border-b border-primary/10 pb-2">
                    Hubungi Kami
                </h3>
                <ul class="mt-4 space-y-2 text-sm text-gray-500">
                    <li class="flex items-center space-x-2">
                        <svg class="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                        <span>Gedung Damara, Lt. 3, Jakarta</span>
                    </li>
                    <li class="flex items-center space-x-2">
                        <svg class="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                        <span>support@damaraskin.com</span>
                    </li>
                    <li class="flex items-center space-x-2">
                        <svg class="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                        <span>+62 21-1234-5678</span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="mt-12 pt-8 border-t border-primary/5 text-center text-xs text-gray-400">
            &copy; 2026 DamaraSkin. Hak Cipta Dilindungi. Dibuat dengan &hearts; untuk UAS Workshop Desain UI.
        </div>
    </div>
</footer>
`;

const adminSidebarHTML = `
<!-- Mobile Sidebar Drawer (Off-canvas menu for mobile) -->
<div x-show="sidebarOpen" class="relative z-50 md:hidden" role="dialog" aria-modal="true" x-cloak>
    <!-- Overlay background -->
    <div x-show="sidebarOpen" 
         x-transition:enter="transition-opacity ease-linear duration-300" 
         x-transition:enter-start="opacity-0" 
         x-transition:enter-end="opacity-100" 
         x-transition:leave="transition-opacity ease-linear duration-300" 
         x-transition:leave-start="opacity-100" 
         x-transition:leave-end="opacity-0" 
         class="fixed inset-0 bg-gray-900/60 backdrop-blur-sm transition-opacity"></div>

    <div class="fixed inset-0 flex z-40">
        <!-- Off-canvas menu panel -->
        <div x-show="sidebarOpen" 
             x-transition:enter="transition ease-in-out duration-300 transform" 
             x-transition:enter-start="-translate-x-full" 
             x-transition:enter-end="translate-x-0" 
             x-transition:leave="transition ease-in-out duration-300 transform" 
             x-transition:leave-start="translate-x-0" 
             x-transition:leave-end="-translate-x-full" 
             class="relative flex-1 flex flex-col max-w-xs w-full bg-white pt-5 pb-4 shadow-2xl" 
             @click.away="sidebarOpen = false">
             
            <!-- Close Button -->
            <div class="absolute top-0 right-0 -mr-12 pt-2">
                <button @click="sidebarOpen = false" class="ml-1 flex items-center justify-center h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white" aria-label="Tutup Sidebar">
                    <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>

            <!-- Logo -->
            <div class="flex-shrink-0 flex items-center px-6 border-b border-gray-100 pb-4">
                <a href="/index.html" class="flex items-center gap-2.5 group transition duration-300">
                    <img src="/images/logo.png" alt="DamaraSkin Logo" class="h-8 w-auto">
                    <span class="font-brush text-2xl text-primary font-bold">
                        DamaraSkin
                    </span>
                </a>
            </div>

            <!-- Mobile Menu Links -->
            <div class="mt-6 flex-grow flex flex-col" x-data="adminSidebarComponent">
                <nav class="flex-1 px-4 space-y-1.5 overflow-y-auto">
                    <a href="/admin/dashboard.html" class="nav-admin-dashboard group flex items-center px-4 py-2.5 text-sm font-medium rounded-xl text-gray-600 hover:bg-primary/5 hover:text-primary transition">
                        <svg class="mr-3 h-5 w-5 text-gray-400 group-hover:text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2H6a2 2 0 01-2-2v-4zM14 16a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2v-4z"/>
                        </svg>
                        Dashboard
                    </a>
                    <a href="/admin/products.html" class="nav-admin-products group flex items-center px-4 py-2.5 text-sm font-medium rounded-xl text-gray-600 hover:bg-primary/5 hover:text-primary transition">
                        <svg class="mr-3 h-5 w-5 text-gray-400 group-hover:text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
                        </svg>
                        Kelola Produk
                    </a>
                    <a href="/admin/orders.html" class="nav-admin-orders group flex items-center px-4 py-2.5 text-sm font-medium rounded-xl text-gray-600 hover:bg-primary/5 hover:text-primary transition">
                        <svg class="mr-3 h-5 w-5 text-gray-400 group-hover:text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 11-4 0 2 2 0 014 0z"/>
                        </svg>
                        Kelola Pesanan
                    </a>
                    <a href="/admin/articles.html" class="nav-admin-articles group flex items-center px-4 py-2.5 text-sm font-medium rounded-xl text-gray-600 hover:bg-primary/5 hover:text-primary transition">
                        <svg class="mr-3 h-5 w-5 text-gray-400 group-hover:text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012 2h10a2 2 0 012 2v1m2 4a2 2 0 012 2v7a2 2 0 01-2 2H9a2 2 0 01-2-2v-1"/>
                        </svg>
                        Kelola Artikel
                    </a>
                    <a href="/admin/users.html" class="nav-admin-users group flex items-center px-4 py-2.5 text-sm font-medium rounded-xl text-gray-600 hover:bg-primary/5 hover:text-primary transition">
                        <svg class="mr-3 h-5 w-5 text-gray-400 group-hover:text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
                        </svg>
                        Kelola User
                    </a>
                    <a href="/admin/profile.html" class="nav-admin-profile group flex items-center px-4 py-2.5 text-sm font-medium rounded-xl text-gray-600 hover:bg-primary/5 hover:text-primary transition">
                        <svg class="mr-3 h-5 w-5 text-gray-400 group-hover:text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                        </svg>
                        Profil Admin
                    </a>
                </nav>
                <div class="p-4 border-t border-gray-100 bg-gray-50/50">
                    <button @click="logout()" class="w-full flex items-center px-4 py-2.5 text-sm font-semibold rounded-xl text-red-500 hover:bg-red-50 transition">
                        <svg class="mr-3 h-5 w-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/>
                        </svg>
                        Keluar
                    </button>
                </div>
            </div>
        </div>
        
        <div class="flex-shrink-0 w-14" aria-hidden="true">
            <!-- Force sidebar to shrink to fit close button -->
        </div>
    </div>
</div>

<!-- Desktop Sidebar -->
<div class="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0 bg-white border-r border-gray-200/80 shadow-[1px_0_10px_rgba(0,0,0,0.02)]">
    <div class="flex flex-col flex-grow pt-5 pb-4 overflow-y-auto">
        <div class="flex items-center flex-shrink-0 px-6 border-b border-gray-100/60 pb-5">
            <a href="/index.html" class="flex items-center gap-2.5 group transition duration-300">
                <img src="/images/logo.png" alt="DamaraSkin Logo" class="h-9 w-auto group-hover:scale-105 transition duration-300">
                <span class="font-brush text-2xl text-primary font-bold group-hover:text-accent transition duration-300">
                    DamaraSkin Admin
                </span>
            </a>
        </div>
        <div class="mt-6 flex-grow flex flex-col" x-data="adminSidebarComponent">
            <nav class="flex-1 px-4 space-y-1.5">
                <a href="/admin/dashboard.html" class="nav-admin-dashboard group flex items-center px-4 py-2.5 text-sm font-medium rounded-xl text-gray-600 hover:bg-primary/5 hover:text-primary transition">
                    <svg class="mr-3 h-5 w-5 text-gray-400 group-hover:text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2H6a2 2 0 01-2-2v-4zM14 16a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2v-4z"/>
                    </svg>
                    Dashboard
                </a>
                <a href="/admin/products.html" class="nav-admin-products group flex items-center px-4 py-2.5 text-sm font-medium rounded-xl text-gray-600 hover:bg-primary/5 hover:text-primary transition">
                    <svg class="mr-3 h-5 w-5 text-gray-400 group-hover:text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
                    </svg>
                    Kelola Produk
                </a>
                <a href="/admin/orders.html" class="nav-admin-orders group flex items-center px-4 py-2.5 text-sm font-medium rounded-xl text-gray-600 hover:bg-primary/5 hover:text-primary transition">
                    <svg class="mr-3 h-5 w-5 text-gray-400 group-hover:text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 11-4 0 2 2 0 014 0z"/>
                    </svg>
                    Kelola Pesanan
                </a>
                <a href="/admin/articles.html" class="nav-admin-articles group flex items-center px-4 py-2.5 text-sm font-medium rounded-xl text-gray-600 hover:bg-primary/5 hover:text-primary transition">
                    <svg class="mr-3 h-5 w-5 text-gray-400 group-hover:text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012 2h10a2 2 0 012 2v1m2 4a2 2 0 012 2v7a2 2 0 01-2 2H9a2 2 0 01-2-2v-1"/>
                    </svg>
                    Kelola Artikel
                </a>
                <a href="/admin/users.html" class="nav-admin-users group flex items-center px-4 py-2.5 text-sm font-medium rounded-xl text-gray-600 hover:bg-primary/5 hover:text-primary transition">
                    <svg class="mr-3 h-5 w-5 text-gray-400 group-hover:text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
                    </svg>
                    Kelola User
                </a>
                <a href="/admin/profile.html" class="nav-admin-profile group flex items-center px-4 py-2.5 text-sm font-medium rounded-xl text-gray-600 hover:bg-primary/5 hover:text-primary transition">
                    <svg class="mr-3 h-5 w-5 text-gray-400 group-hover:text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                    </svg>
                    Profil Admin
                </a>
            </nav>
            <div class="p-4 border-t border-gray-100">
                <button @click="logout()" class="w-full flex items-center px-4 py-2.5 text-sm font-semibold rounded-xl text-red-500 hover:bg-red-50 transition">
                    <svg class="mr-3 h-5 w-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/>
                    </svg>
                    Keluar
                </button>
            </div>
        </div>
    </div>
</div>
`;

// Inject layouts into matching containers
const navbarContainer = document.getElementById("navbar-container");
if (navbarContainer) {
  navbarContainer.innerHTML = navbarHTML;
}

const footerContainer = document.getElementById("footer-container");
if (footerContainer) {
  footerContainer.innerHTML = footerHTML;

  // Inject Back to Top button
  const bttBtn = document.createElement('button');
  bttBtn.className = 'back-to-top';
  bttBtn.setAttribute('aria-label', 'Kembali ke atas');
  bttBtn.innerHTML = '<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"/></svg>';
  bttBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  document.body.appendChild(bttBtn);
  window.addEventListener('scroll', () => {
    bttBtn.classList.toggle('visible', window.scrollY > 400);
  });
}

const adminSidebarContainer = document.getElementById("admin-sidebar-container");
if (adminSidebarContainer) {
  adminSidebarContainer.innerHTML = adminSidebarHTML;
}

// Active navigation links highlighting
const pathname = window.location.pathname;

// Update active class on admin sidebar links
if (pathname.startsWith("/admin/")) {
  const activeLinkClass = ["bg-primary", "text-white"];
  const inactiveLinkClass = ["text-gray-600", "hover:bg-primary/5", "hover:text-primary"];

  document.querySelectorAll("[class^='nav-admin-']").forEach(link => {
    const isDashboard = link.classList.contains("nav-admin-dashboard") && (pathname === "/admin/dashboard" || pathname === "/admin/dashboard.html");
    const isProducts = link.classList.contains("nav-admin-products") && pathname.startsWith("/admin/product");
    const isOrders = link.classList.contains("nav-admin-orders") && pathname.startsWith("/admin/order");
    const isArticles = link.classList.contains("nav-admin-articles") && pathname.startsWith("/admin/article");
    const isUsers = link.classList.contains("nav-admin-users") && pathname.startsWith("/admin/user");
    const isProfile = link.classList.contains("nav-admin-profile") && pathname.startsWith("/admin/profile");

    if (isDashboard || isProducts || isOrders || isArticles || isUsers || isProfile) {
      link.classList.add(...activeLinkClass);
      link.classList.remove(...inactiveLinkClass);
      link.querySelector("svg")?.classList.add("text-white");
      link.querySelector("svg")?.classList.remove("text-gray-400");
    } else {
      link.classList.add(...inactiveLinkClass);
      link.classList.remove(...activeLinkClass);
      link.querySelector("svg")?.classList.add("text-gray-400");
      link.querySelector("svg")?.classList.remove("text-white");
    }
  });
}

// Route Protection (Route Guards)
const guestOnlyPages = ["/login", "/register", "/pages/auth/login.html", "/pages/auth/register.html", "/pages/auth/forgot-password.html"];
const adminPages = [
  "/admin/dashboard", "/admin/products", "/admin/product-create", "/admin/product-edit", "/admin/orders", "/admin/order-detail", "/admin/users", "/admin/dashboard.html", "/admin/products.html", "/admin/product-create.html", "/admin/product-edit.html", "/admin/orders.html", "/admin/order-detail.html", "/admin/users.html",
  "/admin/articles", "/admin/article-create", "/admin/article-edit", "/admin/articles.html", "/admin/article-create.html", "/admin/article-edit.html", "/admin/profile", "/admin/profile.html"
];
const userOnlyPages = ["/dashboard", "/cart", "/checkout", "/orders", "/order-detail", "/order-success", "/profile", "/pages/dashboard/dashboard.html", "/pages/cart/cart.html", "/pages/checkout/checkout.html", "/pages/orders/orders.html", "/pages/orders/order-detail.html", "/pages/orders/order-success.html", "/pages/orders/transaction-history.html", "/pages/profile/profile.html"];

const currentUser = db.getCurrentUser();

if (pathname.startsWith("/admin/") || adminPages.includes(pathname)) {
  if (!currentUser || currentUser.role !== "admin") {
    window.location.href = "/pages/auth/login.html";
  }
} else if (userOnlyPages.some(page => pathname === page || pathname.startsWith(page))) {
  if (!currentUser || currentUser.role !== "user") {
    window.location.href = "/pages/auth/login.html";
  }
} else if (guestOnlyPages.includes(pathname)) {
  if (currentUser) {
    if (currentUser.role === "admin") {
      window.location.href = "/admin/dashboard.html";
    } else {
      window.location.href = "/pages/dashboard/dashboard.html";
    }
  }
}

// Alpine Components Definitions
Alpine.data('navbarComponent', () => ({
  currentUser: null,
  cartCount: 0,
  open: false,
  mobileOpen: false,
  init() {
    this.updateState();
    window.addEventListener('cart-updated', () => this.updateState());
    window.addEventListener('user-logged-in', () => this.updateState());
  },
  updateState() {
    this.currentUser = db.getCurrentUser();
    const cart = db.getCart();
    this.cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    this.$nextTick(() => {
      const pathname = window.location.pathname;
      document.querySelectorAll(".nav-link-item").forEach(link => {
        const href = link.getAttribute("href");
        
        // Define active conditions for Home, Products, Articles, and Skin Consultation (Dashboard)
        const isHomeActive = (pathname === "/" || pathname === "/index.html" || pathname.endsWith("/index.html") || pathname.endsWith("/")) && href === "/index.html";
        const isProductsActive = (pathname.includes("/pages/products/products.html") || pathname.includes("/pages/products/product-detail.html") || pathname.endsWith("/pages/products/products") || pathname.endsWith("/pages/products/product-detail")) && href === "/pages/products/products.html";
        const isArticlesActive = (pathname.includes("/pages/articles/articles.html") || pathname.includes("/pages/articles/article-detail.html") || pathname.endsWith("/pages/articles/articles") || pathname.endsWith("/pages/articles/article-detail")) && href === "/pages/articles/articles.html";
        const isDashboardActive = (
          pathname.includes("/pages/dashboard/dashboard.html") || pathname.endsWith("/pages/dashboard/dashboard") ||
          pathname.includes("/pages/consultation/consultation.html") || pathname.endsWith("/pages/consultation/consultation") ||
          pathname.includes("/pages/consultation/consultation-result.html") || pathname.endsWith("/pages/consultation/consultation-result")
        ) && href === "/pages/dashboard/dashboard.html";

        if (isHomeActive || isProductsActive || isArticlesActive || isDashboardActive) {
          link.classList.remove("border-transparent", "text-gray-400", "text-gray-500");
          link.classList.add("border-primary", "text-primary");
        } else {
          link.classList.remove("border-primary", "text-primary", "text-dark-text");
          link.classList.add("border-transparent", "text-gray-400");
        }
      });

      // Highlight Cart Link Icon if active
      const cartLink = document.querySelector('a[href="/pages/cart/cart.html"]');
      if (cartLink) {
        const isCartActive = pathname.includes("/pages/cart/cart.html") || pathname.endsWith("/pages/cart/cart") || pathname.includes("/pages/checkout/checkout.html") || pathname.endsWith("/pages/checkout/checkout");
        if (isCartActive) {
          cartLink.classList.remove("text-gray-400", "text-gray-500");
          cartLink.classList.add("text-primary");
        } else {
          cartLink.classList.remove("text-primary");
          cartLink.classList.add("text-gray-500");
        }
      }
    });
  },
  logout() {
    db.logout();
    window.dispatchEvent(new Event('user-logged-in'));
    window.location.href = "/pages/auth/login.html";
  }
}));

Alpine.data('adminSidebarComponent', () => ({
  logout() {
    db.logout();
    window.location.href = "/pages/auth/login.html";
  }
}));

// Global layout utility to render rating stars in vanilla HTML or Alpine loops
window.renderStars = function(rating) {
  let starsHtml = "";
  const rounded = Math.round(rating);
  for (let i = 1; i <= 5; i++) {
    if (i <= rounded) {
      starsHtml += `<svg class="h-4 w-4 fill-current text-yellow-400" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>`;
    } else {
      starsHtml += `<svg class="h-4 w-4 text-gray-300" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>`;
    }
  }
  return starsHtml;
};

// Global format currency
window.formatPrice = function(price) {
  return "Rp " + new Intl.NumberFormat("id-ID").format(price);
};

// Global status translation helper (EN → ID)
window.translateStatus = function(status) {
  const map = {
    'pending': 'Menunggu',
    'confirmed': 'Dikonfirmasi',
    'processing': 'Diproses',
    'shipped': 'Dikirim',
    'delivered': 'Selesai',
    'cancelled': 'Dibatalkan',
    'paid': 'Lunas',
    'unpaid': 'Belum Bayar'
  };
  return map[status] || (status.charAt(0).toUpperCase() + status.slice(1));
};

// Cart badge temporary pulse animation
window.addEventListener('cart-updated', () => {
  setTimeout(() => {
    const badge = document.querySelector('.cart-badge');
    if (badge) {
      badge.classList.add('animate-pulse');
      setTimeout(() => badge.classList.remove('animate-pulse'), 2000);
    }
  }, 50);
});

Alpine.start();

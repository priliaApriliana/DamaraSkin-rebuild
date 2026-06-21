import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'path';

export default defineConfig({
    plugins: [
        tailwindcss(),
    ],
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                products: resolve(__dirname, 'products.html'),
                'product-detail': resolve(__dirname, 'product-detail.html'),
                articles: resolve(__dirname, 'articles.html'),
                'article-detail': resolve(__dirname, 'article-detail.html'),
                dashboard: resolve(__dirname, 'dashboard.html'),
                cart: resolve(__dirname, 'cart.html'),
                checkout: resolve(__dirname, 'checkout.html'),
                orders: resolve(__dirname, 'orders.html'),
                'order-detail': resolve(__dirname, 'order-detail.html'),
                'order-success': resolve(__dirname, 'order-success.html'),
                'transaction-history': resolve(__dirname, 'transaction-history.html'),
                profile: resolve(__dirname, 'profile.html'),
                login: resolve(__dirname, 'login.html'),
                register: resolve(__dirname, 'register.html'),
                'admin-dashboard': resolve(__dirname, 'admin/dashboard.html'),
                'admin-products': resolve(__dirname, 'admin/products.html'),
                'admin-product-create': resolve(__dirname, 'admin/product-create.html'),
                'admin-product-edit': resolve(__dirname, 'admin/product-edit.html'),
                'admin-orders': resolve(__dirname, 'admin/orders.html'),
                'admin-order-detail': resolve(__dirname, 'admin/order-detail.html'),
                'admin-users': resolve(__dirname, 'admin/users.html'),
                'admin-articles': resolve(__dirname, 'admin/articles.html'),
                'admin-article-create': resolve(__dirname, 'admin/article-create.html'),
                'admin-article-edit': resolve(__dirname, 'admin/article-edit.html'),
                'admin-profile': resolve(__dirname, 'admin/profile.html'),
            }
        }
    }
});

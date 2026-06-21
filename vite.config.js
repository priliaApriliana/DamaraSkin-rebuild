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
                products: resolve(__dirname, 'pages/products/products.html'),
                'product-detail': resolve(__dirname, 'pages/products/product-detail.html'),
                articles: resolve(__dirname, 'pages/articles/articles.html'),
                'article-detail': resolve(__dirname, 'pages/articles/article-detail.html'),
                dashboard: resolve(__dirname, 'pages/dashboard/dashboard.html'),
                cart: resolve(__dirname, 'pages/cart/cart.html'),
                checkout: resolve(__dirname, 'pages/checkout/checkout.html'),
                orders: resolve(__dirname, 'pages/orders/orders.html'),
                'order-detail': resolve(__dirname, 'pages/orders/order-detail.html'),
                'order-success': resolve(__dirname, 'pages/orders/order-success.html'),
                'transaction-history': resolve(__dirname, 'pages/orders/transaction-history.html'),
                profile: resolve(__dirname, 'pages/profile/profile.html'),
                login: resolve(__dirname, 'pages/auth/login.html'),
                register: resolve(__dirname, 'pages/auth/register.html'),
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

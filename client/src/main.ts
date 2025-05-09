import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import HomeView from './views/HomeView.vue'
import AboutView from './views/AboutView.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import ShopView from './views/ShopView.vue'
import FavoritesView from './views/FavoritesView.vue'
import CartView from './views/CartView.vue'
import LoginPage from './views/login_register/LoginPage.vue'
import RegisterPage from './views/login_register/RegisterPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomeView },
    { path: '/login', component: LoginPage },
    { path: '/register', component: RegisterPage },
    { path: '/shop', component: ShopView },
    { path: '/about', component: AboutView },
    { path: '/favorites', component: FavoritesView },
    { path: '/cart', component: CartView },
  ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
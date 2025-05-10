import { createRouter, createWebHistory } from 'vue-router'
import { requireAuth, requireAdmin, redirectIfAuthenticated } from './guards'
import HomeView from '../views/HomeView.vue'
import AdminPanel from '../views/adminViews/AdminPanel.vue'
import LoginPage from '../views/login_register/LoginPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { 
      path: '/', 
      component: HomeView 
    },
    { 
      path: '/login', 
      component: LoginPage,
      beforeEnter: redirectIfAuthenticated
    },
    { 
      path: '/admin', 
      component: AdminPanel,
      beforeEnter: requireAdmin
    },
    // ...other routes
  ]
})

export default router
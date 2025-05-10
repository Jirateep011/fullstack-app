import { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'
import { useAuthStore } from '../stores/authStore'

export function requireAuth(to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) {
  const authStore = useAuthStore()
  
  if (!authStore.isAuthenticated) {
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
}

export async function requireAdmin(
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) {
  const authStore = useAuthStore()
  
  // Check if user is authenticated
  if (!authStore.isAuthenticated) {
    next({ 
      path: '/login',
      query: { redirect: to.fullPath }
    })
    return
  }

  // Verify auth status and check admin role
  await authStore.checkAuth()
  
  if (!authStore.isAdmin) {
    next({ path: '/' })
    return
  }
  
  next()
}

export function redirectIfAuthenticated(to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) {
  const authStore = useAuthStore()
  
  if (authStore.isAuthenticated) {
    next({ path: '/' })
  } else {
    next()
  }
}
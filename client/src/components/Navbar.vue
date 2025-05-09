<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <i class="fas fa-store me-2"></i>My App
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/">
              <i class="fas fa-home me-1"></i>Home
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/shop">
              <i class="fas fa-shopping-bag me-1"></i>Shop
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">
              <i class="fas fa-info-circle me-1"></i>About
            </router-link>
          </li>
        </ul>
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/favorites">
              <i class="fas fa-heart"></i>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/cart">
              <i class="fas fa-shopping-cart"></i>
            </router-link>
          </li>
          <!-- ส่วนที่เปลี่ยนแปลงตาม login status -->
          <template v-if="isLoggedIn">
            <li class="nav-item">
              <span class="nav-link">Welcome, {{ userName }}!</span>
            </li>
            <!-- เพิ่มเมนูสำหรับ Admin -->
            <li class="nav-item" v-if="isAdmin">
              <router-link to="/admin" class="nav-link">
                <i class="fas fa-users-cog"></i> Admin Panel
              </router-link>
            </li>
            <li class="nav-item ms-2">
              <button @click="handleLogout" class="btn btn-outline-light">
                <i class="fas fa-sign-out-alt me-1"></i>Logout
              </button>
            </li>
          </template>
          <template v-else>
            <li class="nav-item ms-2">
              <router-link to="/login" class="btn btn-outline-light">
                <i class="fas fa-sign-in-alt me-1"></i>Sign In
              </router-link>
            </li>
          </template>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'Navbar',
  setup() {
    const router = useRouter()
    const isLoggedIn = ref(false)
    const userName = ref('')
    const isAdmin = ref(false)

    const checkLoginStatus = () => {
      const token = localStorage.getItem('token')
      const storedName = localStorage.getItem('userName')
      const userRole = localStorage.getItem('userRole')
      
      isLoggedIn.value = !!token
      userName.value = storedName || ''
      isAdmin.value = userRole === 'Admin'
    }

    const handleLogout = () => {
      localStorage.removeItem('token')
      localStorage.removeItem('userName')
      isLoggedIn.value = false
      userName.value = ''
      router.push('/login')
    }

    onMounted(() => {
      checkLoginStatus()
      // เพิ่ม event listener สำหรับการ update สถานะ login
      window.addEventListener('storage', checkLoginStatus)
    })

    return {
      isLoggedIn,
      userName,
      isAdmin,
      handleLogout
    }
  }
})
</script>

<style scoped>
.nav-link {
  padding: 0.5rem 1rem;
}

.nav-link i {
  font-size: 1.1rem;
}

.navbar-nav .nav-item {
  display: flex;
  align-items: center;
}
</style>
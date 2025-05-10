<template>
  <div class="admin-panel">
    <h1 class="text-center mb-4">Admin Panel</h1>
    <div class="container">
      <div class="row g-4">
        <div class="col-md-4">
          <div class="card h-100">
            <div class="card-body">
              <h3 class="card-title">
                <i class="fas fa-users me-2"></i>Manage Users
              </h3>
              <p class="card-text">Manage user accounts, permissions, and roles.</p>
              <button class="btn btn-primary">
                <i class="fas fa-cog me-2"></i>Manage Users
              </button>
            </div>
          </div>
        </div>
        
        <div class="col-md-4">
          <div class="card h-100">
            <div class="card-body">
              <h3 class="card-title">
                <i class="fas fa-box me-2"></i>Manage Products
              </h3>
              <p class="card-text">Add, edit, or remove products from the inventory.</p>
              <button class="btn btn-primary">
                <i class="fas fa-edit me-2"></i>Manage Products
              </button>
            </div>
          </div>
        </div>
        
        <div class="col-md-4">
          <div class="card h-100">
            <div class="card-body">
              <h3 class="card-title">
                <i class="fas fa-shopping-cart me-2"></i>Manage Orders
              </h3>
              <p class="card-text">View and process customer orders.</p>
              <button class="btn btn-primary">
                <i class="fas fa-list me-2"></i>Manage Orders
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import { useAuthStore } from '../../stores/authStore'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'AdminPanel',
  setup() {
    const authStore = useAuthStore()
    const router = useRouter()

    onMounted(async () => {
      // Verify auth status on component mount
      await authStore.checkAuth()
      if (!authStore.isAdmin) {
        router.push('/')
      }
    })

    return {
      isAdmin: authStore.isAdmin
    }
  }
})
</script>

<style scoped>
.admin-panel {
  padding: 2rem 0;
}

.card {
  transition: transform 0.2s;
  border: none;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.card:hover {
  transform: translateY(-5px);
}

.card-title {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #333;
}

.btn-primary {
  width: 100%;
  margin-top: 1rem;
}
</style>
<template>
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="card shadow">
            <div class="card-body p-5">
              <h2 class="text-center mb-4">Sign In</h2>
              <form @submit.prevent="handleLogin">
                <div class="mb-3">
                  <label for="email" class="form-label">Email address</label>
                  <input 
                    type="email" 
                    class="form-control" 
                    id="email" 
                    v-model="email"
                    required
                  >
                </div>
                <div class="mb-3">
                  <label for="password" class="form-label">Password</label>
                  <input 
                    type="password" 
                    class="form-control" 
                    id="password" 
                    v-model="password"
                    required
                  >
                </div>
                <div class="mb-3 form-check">
                  <input type="checkbox" class="form-check-input" id="remember">
                  <label class="form-check-label" for="remember">Remember me</label>
                </div>
                <button type="submit" class="btn btn-primary w-100">Sign In</button>
              </form>
              <div class="mt-3 text-center">
                <p>Don't have an account? 
                  <router-link to="/register">Register here</router-link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue'
  
  export default defineComponent({
    name: 'LoginPage',
    setup() {
      const email = ref('')
      const password = ref('')
  
      const handleLogin = () => {
        // TODO: Implement login logic here
        console.log('Login attempted:', { email: email.value, password: password.value })
      }
  
      return {
        email,
        password,
        handleLogin
      }
    }
  })
  </script>
  
  <style scoped>
  .card {
    border: none;
    border-radius: 10px;
  }
  
  .card-body {
    background-color: #fff;
    border-radius: 10px;
  }
  
  .form-control:focus {
    box-shadow: none;
    border-color: #0d6efd;
  }
  
  .btn-primary {
    padding: 10px;
  }
  </style>
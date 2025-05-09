<template>
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="card shadow">
            <div class="card-body p-5">
              <h2 class="text-center mb-4">Create Account</h2>
              <form @submit.prevent="handleRegister">
                <div class="mb-3">
                  <label for="name" class="form-label">Full Name</label>
                  <input 
                    type="text" 
                    class="form-control" 
                    id="name" 
                    v-model="name"
                    required
                  >
                </div>
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
                <div class="mb-3">
                  <label for="confirmPassword" class="form-label">Confirm Password</label>
                  <input 
                    type="password" 
                    class="form-control" 
                    id="confirmPassword" 
                    v-model="confirmPassword"
                    required
                  >
                </div>
                <button type="submit" class="btn btn-primary w-100">Register</button>
              </form>
              <div class="mt-3 text-center">
                <p>Already have an account? 
                  <router-link to="/login">Sign in here</router-link>
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
    name: 'RegisterPage',
    setup() {
      const name = ref('')
      const email = ref('')
      const password = ref('')
      const confirmPassword = ref('')
  
      const handleRegister = () => {
        if (password.value !== confirmPassword.value) {
          alert('Passwords do not match!')
          return
        }
        // TODO: Implement registration logic here
        console.log('Registration attempted:', {
          name: name.value,
          email: email.value,
          password: password.value
        })
      }
  
      return {
        name,
        email,
        password,
        confirmPassword,
        handleRegister
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
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
  import { useRouter } from 'vue-router'
  
  export default defineComponent({
    name: 'RegisterPage',
    setup() {
      const router = useRouter()
      const name = ref('')
      const email = ref('')
      const password = ref('')
      const confirmPassword = ref('')
  
      const handleRegister = async () => {
        // ตรวจสอบ password ตรงกัน
        if (password.value !== confirmPassword.value) {
          alert('Passwords do not match!')
          return
        }
  
        try {
          const response = await fetch('http://localhost:5099/api/auth/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              name: name.value,
              email: email.value,
              password: password.value,
            }),
          })
  
          if (!response.ok) {
            const errorData = await response.json()
            throw new Error(errorData || 'Registration failed')
          }
  
          const data = await response.json()
          
          // Store token and user name in localStorage
          localStorage.setItem('token', data.token)
          localStorage.setItem('userName', data.name)
          localStorage.setItem('userRole', data.role)
          
          // แสดงข้อความสำเร็จ
          alert('Registration successful!')
          
          // redirect ไปหน้า home
          router.push('/').then(() => {
            window.location.reload()
          })
        } catch (error) {
          console.error('Registration error:', error)
          alert(error.message || 'Registration failed')
        }
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
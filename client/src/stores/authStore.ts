import { defineStore } from 'pinia'

interface User {
  id: number;
  email: string;
  role: string;
  name: string;
}

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as User | null,
    token: localStorage.getItem('token')
  }),

  getters: {
    isAuthenticated: (state) => !!state.token,
    isAdmin: (state) => state.user?.role === 'Admin'
  },

  actions: {
    async login(email: string, password: string) {
      try {
        const response = await fetch('http://localhost:5099/api/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email, password })
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || 'Login failed');
        }

        this.user = data;
        this.token = data.token;

        localStorage.setItem('token', data.token);
        localStorage.setItem('userName', data.name);
        localStorage.setItem('userRole', data.role);

        return data;
      } catch (error) {
        console.error('Login error:', error);
        throw error;
      }
    },

    async checkAuth() {
      try {
        const token = localStorage.getItem('token');
        if (!token) return false;

        const response = await fetch('http://localhost:5099/api/auth/verify', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (!response.ok) {
          this.logout();
          return false;
        }

        const data = await response.json();
        this.user = data;
        return true;
      } catch (error) {
        console.error('Auth check error:', error);
        this.logout();
        return false;
      }
    },

    logout() {
      this.user = null;
      this.token = null;
      localStorage.removeItem('token');
      localStorage.removeItem('userName');
      localStorage.removeItem('userRole');
    }
  }
});
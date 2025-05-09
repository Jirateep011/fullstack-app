<template>
  <div class="product-list">
    <div class="container">
      <h2 class="text-center my-4">Featured Products</h2>
      <div class="row">
        <div v-for="product in products" :key="product.id" class="col-md-4 mb-4">
          <div class="card h-100">
            <img :src="product.image" class="card-img-top" alt="Product Image">
            <div class="card-body">
              <h5 class="card-title">{{ product.name }}</h5>
              <p class="card-text">{{ product.description }}</p>
              <p class="card-text"><strong>${{ product.price }}</strong></p>
              <div class="d-flex justify-content-between align-items-center">
                <button @click="addToCart(product)" class="btn btn-primary">
                  <i class="fas fa-shopping-cart me-2"></i>Add to Cart
                </button>
                <button @click="addToFavorites(product)" class="btn btn-outline-danger">
                  <i class="fas fa-heart"></i>
                </button>
              </div>
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
  name: 'ProductList',
  setup() {
    const products = ref([
      {
        id: 1,
        name: 'Product 1',
        description: 'This is a sample product description.',
        price: 29.99,
        image: 'https://via.placeholder.com/300'
      },
      {
        id: 2,
        name: 'Product 2',
        description: 'Another amazing product description.',
        price: 39.99,
        image: 'https://via.placeholder.com/300'
      },
      {
        id: 3,
        name: 'Product 3',
        description: 'Yet another great product description.',
        price: 49.99,
        image: 'https://via.placeholder.com/300'
      }
    ])

    const addToCart = (product: any) => {
      alert(`Added ${product.name} to cart!`)
      // TODO: Implement cart functionality
    }

    const addToFavorites = (product: any) => {
      alert(`Added ${product.name} to favorites!`)
      // TODO: Implement favorites functionality
    }

    return {
      products,
      addToCart,
      addToFavorites
    }
  }
})
</script>

<style scoped>
.product-list {
  padding: 2rem 0;
}

.card {
  transition: transform 0.2s;
  border: none;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.card:hover {
  transform: translateY(-5px);
}

.card-img-top {
  height: 200px;
  object-fit: cover;
}

.btn-outline-danger {
  border-radius: 50%;
  width: 40px;
  height: 40px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
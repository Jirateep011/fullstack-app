<template>
    <div class="favorites">
      <h1>Favorites</h1>
      <div class="row">
        <div class="col-md-4 mb-4">
          <div class="card">
            <img src="https://via.placeholder.com/300" class="card-img-top" alt="Product">
            <div class="card-body">
              <h5 class="card-title">Product 1</h5>
              <p class="card-text">Product description goes here.</p>
              <p class="card-text"><strong>$19.99</strong></p>
              <button class="btn btn-primary">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue'
  
  export default defineComponent({
    name: 'FavoritesView'
  })
  </script>
  
  <style scoped>
  .favorites {
    padding: 20px;
  }
  </style>
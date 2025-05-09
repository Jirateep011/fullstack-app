<template>
  <div class="banner">
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="https://via.placeholder.com/1920x600/007bff/ffffff" class="d-block w-100" alt="Banner 1">
          <div class="carousel-caption">
            <h2>Welcome to Our Shop</h2>
            <p>Discover amazing products at great prices</p>
            <router-link to="/shop" class="btn btn-light btn-lg">Shop Now</router-link>
          </div>
        </div>
        <div class="carousel-item">
          <img src="https://via.placeholder.com/1920x600/28a745/ffffff" class="d-block w-100" alt="Banner 2">
          <div class="carousel-caption">
            <h2>New Arrivals</h2>
            <p>Check out our latest collection</p>
            <router-link to="/shop" class="btn btn-light btn-lg">View Collection</router-link>
          </div>
        </div>
        <div class="carousel-item">
          <img src="https://via.placeholder.com/1920x600/dc3545/ffffff" class="d-block w-100" alt="Banner 3">
          <div class="carousel-caption">
            <h2>Special Offers</h2>
            <p>Limited time deals on selected items</p>
            <router-link to="/shop" class="btn btn-light btn-lg">View Deals</router-link>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span class="carousel-control-prev-icon"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span class="carousel-control-next-icon"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HomeBanner'
})
</script>

<style scoped>
.banner {
  margin-bottom: 2rem;
}

.carousel-item {
  height: 60vh;
  min-height: 400px;
  background: #000;
}

.carousel-item img {
  object-fit: cover;
  height: 100%;
  width: 100%;
}

.carousel-caption {
  background: rgba(0, 0, 0, 0.5);
  padding: 2rem;
  border-radius: 10px;
}

.carousel-caption h2 {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.carousel-caption p {
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
}

.btn-lg {
  padding: 0.8rem 2rem;
  font-size: 1.1rem;
}
</style>
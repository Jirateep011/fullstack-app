<template>
  <div class="home">
    <HomeBanner />
    <ProductList />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HomeBanner from '../components/HomeBanner.vue';
import ProductList from '../components/ProductList.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    HomeBanner,
    ProductList
  }
});
</script>

<style scoped>
.home {
  text-align: center;
}
</style>
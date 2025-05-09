<template>
  <div class="home">
    <HomeBanner />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HomeBanner from '../components/HomeBanner.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    HomeBanner
  }
});
</script>

<style scoped>
.home {
  text-align: center;
}
</style>
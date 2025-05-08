<template>
  <div class="home">
    <h1>Welcome to the Home Page</h1>
    <HelloWorld />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    HelloWorld
  }
});
</script>

<style scoped>
.home {
  text-align: center;
}
</style>
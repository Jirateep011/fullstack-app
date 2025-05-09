<template>
    <div class="about">
      <h2>About View Component</h2>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'AboutView'
  });
  </script>
  
  <style scoped>
  .about {
    margin-top: 20px;
  }
  </style>
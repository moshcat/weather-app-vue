<script setup>
import MainNav from './components/MainNav.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="flex flex-col min-h-screen font-IBMPlexMono bg-weather-primary">
    <MainNav />
    <RouterView />
  </div>
</template>

<style scoped></style>
g

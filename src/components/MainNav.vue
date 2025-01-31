<template>
  <header class="sticky top-0">
    <RouterLink :to="{ name: home }">
      <h2
        class="py-3 text-sm font-semibold text-center text-weather-primary dark:text-weather-secondary"
      >
        weather.co
      </h2>
    </RouterLink>
    <nav
      class="flex flex-col items-center justify-center gap-2 px-4 py-3 sm:flex-row bg-weather-primary"
    >
      <RouterLink :to="{ name: home }">
        <h1
          class="text-sm font-medium transition ease-in-out delay-150 text-weather-secondary hover:text-weather-blue md:text-lg lg:text-2xl"
        >
          Home
        </h1>
      </RouterLink>
      <h1
        class="text-sm font-medium transition ease-in-out delay-150 text-weather-secondary md:text-lg lg:text-2xl"
      >
        ,
      </h1>
      <h1
        class="text-sm font-medium transition ease-in-out delay-150 text-weather-secondary hover:text-weather-blue md:text-lg lg:text-2xl"
      >
        How it works
      </h1>
      <h1
        class="text-sm font-medium transition ease-in-out delay-150 text-weather-secondary md:text-lg lg:text-2xl"
      >
        ,
      </h1>
      <h1
        class="text-sm font-medium transition ease-in-out delay-150 text-weather-secondary hover:text-weather-blue md:text-lg lg:text-2xl"
      >
        About
      </h1>
    </nav>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

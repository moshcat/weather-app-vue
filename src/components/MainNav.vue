<template>
  <header class="sticky top-0">
    <RouterLink :to="{ name: home }" class="relative">
      <h2
        class="py-3 mt-4 text-sm font-semibold text-center mt- text-weather-primary dark:text-weather-secondary"
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
        @click="toggleModal"
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

    <BaseModal :modalActive="modalActive" @close-modal="toggleModal">
      <div>
        <div class="p-4">
          <h1 class="text-lg font-medium text-black">About us</h1>
          <p class="pt-1 text-sm line-clamp-3">{{ modalContent.about }}</p>
        </div>
        <div class="p-4">
          <h1 class="text-lg font-medium text-black">How it works</h1>
          <ul>
            <li class="pt-1 text-sm" v-for="content in modalContent.howitworks" :key="content">
              {{ content }}
            </li>
          </ul>
        </div>
        <div class="p-4">
          <h1 class="text-lg font-medium text-black">Remove a city</h1>
          <p class="pt-1 text-sm line-clamp-3">{{ modalContent.removeCity }}</p>
        </div>
      </div>
    </BaseModal>
  </header>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { RouterLink } from 'vue-router'
import BaseModal from './BaseModal.vue'

const modalActive = ref(null)
const toggleModal = () => {
  modalActive.value = !modalActive.value
}

const modalContent = reactive({
  about:
    'weather.co  allows you to track current weather and future weather of cities from what you choose',
  howitworks: [
    '1. Search your city by entering the name into the search bar',
    '2. Select a city within the results, this will take you to the current weather for your selection',
    '3. Track the city by clicking on the "+" icon in the top right. This will save the city to view at a later time on the page',
  ],
  removeCity:
    'If you no longer want to track the city weather, simply select the city within the home page. At the bottom of the page, there will be an option delete the city',
})
</script>

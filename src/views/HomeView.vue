<template>
  <main class="container text-white">
    <div class="relative pt-4 mb-8">
      <div class="flex items-center justify-center mt-6">
        <input
          v-model="searchQuery"
          @input="getSearchResult"
          type="text"
          placeholder="put the city name here"
          class="px-4 py-1 bg-transparent border-2 border-b rounded-md border-weather-tertiary w-96 focus:border-weather-secondary focus:outline-none"
        />
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

const geoApi = import.meta.env.VITE_GEO_API
const searchQuery = ref('')
const queryTimeout = ref('')
const geoSearchResult = ref('')

// fungsi untuk mengambil data input lokasi
const getSearchResult = () => {
  clearTimeout(queryTimeout.value)
  queryTimeout.value = setTimeout(async () => {
    if (searchQuery.value !== '') {
      try {
        const result = await axios.get(
          `https://api.geoapify.com/v1/geocode/search?text=${searchQuery.value}&apiKey=${geoApi}`,
        )
        geoSearchResult.value = result.data.features
        console.log(geoSearchResult.value)
      } catch (error) {
        console.error(error)
      }
      return
    }
    geoSearchResult.value = null
  }, 300)
}
</script>

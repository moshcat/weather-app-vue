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
        <ul
          class="absolute w-96 rounded-lg px-1 py-2 shadow-md bg-white text-black top-[77px]"
          v-if="geoSearchResult"
        >
          <p v-if="searchError">Sorry, Something when wrong. Please try again</p>
          <p v-if="!searchError && geoSearchResult.length === 0">
            No results match your query, try a different term.
          </p>
          <template v-else>
            <li
              v-for="searchResult in geoSearchResult"
              :key="searchResult.id"
              class="px-2 py-1 cursor-pointer"
            >
              {{ searchResult.properties.formatted }}
            </li>
          </template>
        </ul>
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
const searchError = ref(null)

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
        searchError.value = true
        console.error(error)
      }
      return
    }
    geoSearchResult.value = null
  }, 300)
}
</script>

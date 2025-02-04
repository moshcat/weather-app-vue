<template>
  <div>
    <h1 class="text-weather-secondary">Ini informasi cuaca</h1>
  </div>
</template>

<script setup>
import axios from 'axios'
import { useRoute } from 'vue-router'

const route = useRoute()
const openWeatherApi = import.meta.env.VITE_OPEN_WEATHER_API
const getWeatherData = async () => {
  try {
    const weatherData = await axios.get(
      `https://api.openweathermap.org/data/3.0/onecall?lat=${route.query.lat}&lon=${route.query.lon}&exclude={part}&appid=${openWeatherApi}&units=imperial`,
    )

    // hitung tanggal dan waktu saat ini
    const localOffset = new Date().getTimezoneOffset() * 60000 // hitung jumlah waktu perbedaan jam utc dan local
    const utc = weatherData.data.current.dt * 1000 + localOffset
    weatherData.data.currentTime = utc + 1000 * weatherData.data.timezone_offset

    // hitung perbedaan cuaca perjam nya
    weatherData.data.hourly.forEach((hour) => {
      const utc = hour.dt * 1000 + localOffset
      hour.currentTime = utc + 1000 * hour.timezone_offset
    })

    return weatherData
  } catch (err) {
    console.error(err)
  }
}

const weatherData = await getWeatherData()
console.log(weatherData)
</script>

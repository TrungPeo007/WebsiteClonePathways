<template>
  <section class="tour-section">
    <div class="container">
      <p class="tour-subtitle">Các loại tour</p>
      <h2 class="tour-title">Của Pathways</h2>

      <div class="slider-container">
        <div class="slider" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
          <div v-for="(item, index) in tours" :key="index" class="slide">
            <img :src="item.image" alt="Tour Image" class="tour-image" />
            <h3 class="tour-name">{{ item.name }}</h3>
          </div>
        </div>
      </div>

      <div class="dots">
        <span
          v-for="(dot, i) in tours.length"
          :key="i"
          class="dot"
          :class="{ active: i === currentIndex }"
          @click="goToSlide(i)"
        ></span>
      </div>
    </div>
  </section>
</template>

<script setup>
// Danh sách tour (dùng ảnh local nhẹ)
const tours = [
  { image: "/images/tour1.webp", name: "Nghỉ dưỡng" },
  { image: "/images/tour2.webp", name: "Du lịch biển" },
  { image: "/images/tour3.webp", name: "Du lịch mạo hiểm" },
  { image: "/images/tour4.webp", name: "Du lịch thành phố" },
  { image: "/images/tour5.webp", name: "Mua sắm" },
  { image: "/images/tour6.webp", name: "Khám phá" }
]

import { ref, onMounted, onUnmounted } from "vue"

const currentIndex = ref(0)
let interval = null

// Chuyển slide tự động
const startSlide = () => {
  interval = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % tours.length
  }, 3000)
}

// Chuyển slide khi click dot
const goToSlide = (index) => {
  currentIndex.value = index
  resetSlide()
}

// Reset lại interval khi click
const resetSlide = () => {
  clearInterval(interval)
  startSlide()
}

onMounted(() => startSlide())
onUnmounted(() => clearInterval(interval))
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Quicksand:wght@400;600;700&display=swap");

.tour-section {
  text-align: center;
  padding: 60px 0;
}

.tour-subtitle {
  font-family: "Dancing Script", cursive;
  color: #f4a025;
  font-size: 26px;
  margin-bottom: 8px;
}

.tour-title {
  font-family: "Quicksand", sans-serif;
  font-weight: 700;
  font-size: 36px;
  color: #000;
  margin-bottom: 40px;
}

.slider-container {
  overflow: hidden;
  width: 100%;
  position: relative;
}

.slider {
  display: flex;
  transition: transform 0.6s ease;
}

.slide {
  min-width: 100%;
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
}

.tour-image {
  width: 200px;
  height: 160px;
  border-radius: 10px;
  object-fit: cover;
}

.tour-name {
  font-family: "Quicksand", sans-serif;
  margin-top: 8px;
  font-size: 16px;
  font-weight: 600;
  color: #000;
}

.dots {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 10px;
}

.dot {
  width: 12px;
  height: 12px;
  border: 2px solid #f4a025;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s;
}

.dot.active {
  background-color: #f4a025;
}
</style>

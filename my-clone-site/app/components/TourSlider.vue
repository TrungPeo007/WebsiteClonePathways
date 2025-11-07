<template>
  <section class="tour-section py-16 bg-white overflow-hidden">
    <div class="container mx-auto px-4 text-center">
      <p class="tour-subtitle">Các loại tour</p>
      <h2 class="tour-title">Của Pathways</h2>

      <!-- Slideshow vòng lặp -->
      <div class="slider-container">
        <div
          class="slider"
          :style="{ transform: `translateX(-${currentIndex * itemWidth}%)`, transition: 'transform 1.2s ease-in-out' }"
        >
          <!-- 6 ảnh + ảnh đầu lặp lại ở cuối -->
          <div v-for="(tour, index) in extendedTours" :key="index" class="tour-item">
            <img :src="tour.image" :alt="tour.name" class="tour-image" />
            <p class="tour-name">{{ tour.name }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'

const tours = [
  { image: '/images/tour1.webp', name: 'Du lịch biển' },
  { image: '/images/tour2.webp', name: 'Khám phá' },
  { image: '/images/tour3.webp', name: 'Nghỉ dưỡng' },
  { image: '/images/tour4.webp', name: 'Mua sắm' },
  { image: '/images/tour5.webp', name: 'Nghỉ dưỡng' },
  { image: '/images/tour6.webp', name: 'Du lịch biển' }
]

// Thêm ảnh đầu vào cuối để tạo vòng lặp mượt
const extendedTours = [...tours, tours[0]]

const currentIndex = ref(0)
const itemWidth = ref(16.666) // 100% / 6 ảnh
let interval = null

const startSlide = () => {
  interval = setInterval(() => {
    currentIndex.value += 1

    // Khi đến ảnh cuối (ảnh lặp), nhảy về đầu mượt
    if (currentIndex.value === tours.length) {
      setTimeout(() => {
        currentIndex.value = 0
        // Tắt transition để nhảy mượt
        const slider = document.querySelector('.slider')
        slider.style.transition = 'none'
        nextTick(() => {
          slider.style.transition = 'transform 1.2s ease-in-out'
        })
      }, 1200)
    }
  }, 3000) // Chuyển mỗi 3 giây
}

onMounted(() => {
  startSlide()
})

onUnmounted(() => {
  clearInterval(interval)
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Quicksand:wght@400;600;700&display=swap');

.tour-subtitle {
  font-family: 'Dancing Script', cursive;
  color: #f4a025;
  font-size: 26px;
  margin-bottom: 8px;
}

.tour-title {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 36px;
  color: #000;
  margin-bottom: 40px;
}

.slider-container {
  overflow: hidden;
  width: 100%;
}

.slider {
  display: flex;
  width: calc(100% * 7 / 6); /* 7 items (6 + 1 lặp) */
}

.tour-item {
  flex: 0 0 16.666%; /* 100% / 6 */
  padding: 0 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.tour-image {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 16px;
  transition: all 0.6s ease;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
}

.tour-item:hover .tour-image {
  transform: translateY(-8px) scale(1.05);
  box-shadow: 0 12px 24px rgba(0,0,0,0.15);
}

.tour-name {
  font-family: 'Quicksand', sans-serif;
  margin-top: 16px;
  font-size: 16px;
  font-weight: 600;
  color: #333;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
}

/* Responsive */
@media (max-width: 1200px) {
  .tour-item { padding: 0 8px; }
  .tour-image { height: 160px; }
}

@media (max-width: 992px) {
  .tour-item { flex: 0 0 33.333%; }
  .slider { width: calc(100% * 7 / 3); }
}

@media (max-width: 768px) {
  .tour-item { flex: 0 0 50%; }
  .slider { width: calc(100% * 7 / 2); }
}

@media (max-width: 480px) {
  .tour-item { flex: 0 0 100%; }
  .slider { width: calc(100% * 7); }
}
</style>
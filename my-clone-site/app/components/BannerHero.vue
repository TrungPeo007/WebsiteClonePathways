<template>
  <section
    class="hero-banner"
    :style="{ backgroundImage: 'url(' + images[currentIndex] + ')' }"
  >
    <div class="overlay">
      <div class="text-center hero-content">
        <h5 class="sub-title">Khám phá</h5>
        <h1 class="main-title">Một Phú Quốc hiện đại</h1>
        <p class="desc">
          Phú Quốc là đảo ngọc du lịch nổi tiếng khắp cả nước với những bãi biển tuyệt đẹp
        </p>
      </div>

      <!-- Khung tìm kiếm -->
      <div class="search-box d-flex align-items-center justify-content-between">
        <div class="search-item d-flex align-items-center">
          <i class="fa-solid fa-magnifying-glass"></i>
          <input type="text" placeholder="Địa điểm" />
        </div>

        <div class="divider"></div>

        <div class="search-item d-flex align-items-center">
          <i class="fa-solid fa-calendar-days"></i>
          <input type="text" placeholder="Chọn ngày" />
        </div>

        <div class="divider"></div>

        <button class="search-btn">Tìm kiếm</button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Danh sách ảnh slideshow
const images = [
  '/images/home_banner_slider_1.jpg',
  '/images/home_banner_slider_2.jpg',
  '/images/home_banner_slider_3.jpg'
]

const currentIndex = ref(0)
let intervalId = null

// Tự động đổi ảnh
onMounted(() => {
  intervalId = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % images.length
  }, 4000) // đổi ảnh mỗi 4 giây
})

onUnmounted(() => {
  clearInterval(intervalId)
})
</script>

<style scoped>
.hero-banner {
  position: relative;
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-image 1s ease-in-out;
}

.overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.hero-content {
  color: #fff;
  text-align: center;
  margin-bottom: 120px;
}

.sub-title {
  color: #ffae42;
  font-size: 28px;
  font-family: "Dancing Script", cursive;
  margin-bottom: 10px;
}

.main-title {
  font-size: 68px;
  font-weight: 800;
  margin-bottom: 18px;
}

.desc {
  font-size: 18px;
  color: #f2f2f2;
}

/* Khung tìm kiếm */
.search-box {
  background: #fff;
  border-radius: 14px;
  padding: 18px 24px;
  width: 80%;
  max-width: 1100px;
  position: absolute;
  bottom: 50px;
  box-shadow: 0 4px 25px rgba(0, 0, 0, 0.15);
}

.search-item {
  flex: 1;
  gap: 10px;
  font-size: 16px;
  color: #555;
}

.search-item i {
  color: #ff6600;
  font-size: 18px;
}

.search-item input {
  border: none;
  outline: none;
  width: 100%;
  font-size: 15px;
}

.divider {
  width: 1px;
  height: 24px;
  background: #ddd;
}

.search-btn {
  background: #ff6600;
  color: #fff;
  font-weight: 700;
  border: none;
  padding: 14px 36px;
  border-radius: 10px;
  transition: 0.3s ease;
  font-size: 16px;
}

.search-btn:hover {
  background: #e05500;
  cursor: pointer;
}
</style>

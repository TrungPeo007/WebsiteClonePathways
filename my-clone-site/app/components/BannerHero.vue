<template>
  <section class="hero-banner">
    <!-- Slideshow với từng slide riêng biệt -->
    <div
      v-for="(slide, index) in slides"
      :key="index"
      class="slide"
      :class="{ active: index === currentIndex }"
      :style="{ backgroundImage: 'url(' + slide.image + ')' }"
    >
      <div class="overlay">
        <div class="text-center hero-content">
          <h5 class="sub-title">{{ slide.subTitle }}</h5>
          <h1 class="main-title">{{ slide.mainTitle }}</h1>
          <p class="desc">{{ slide.desc }}</p>
        </div>

        <!-- Khung tìm kiếm -->
        <div class="search-box d-flex align-items-center justify-content-between">
          <div class="search-item d-flex align-items-center">
            <i class="fa-solid fa-magnifying-glass icon"></i>
            <input type="text" placeholder="Địa điểm" />
          </div>

          <div class="divider"></div>

          <div class="search-item d-flex align-items-center">
            <i class="fa-solid fa-calendar-days icon"></i>
            <input type="text" placeholder="Chọn ngày" />
          </div>

          <div class="divider"></div>

          <button class="search-btn">
            <span>Tìm kiếm</span>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Dữ liệu từng slide
const slides = [
  {
    image: '/images/home_banner_slider_1.webp',
    subTitle: 'Có gì mới ở',
    mainTitle: 'Hội An cổ kính',
    desc: 'Nhắc tới Hội An là phải kể tới các dãy nhà cổ màu vàng và dòng sông lung linh huyền ảo đêm xuống.'
  },
  {
    image: '/images/home_banner_slider_2.webp',
    subTitle: 'Chơi gì ở',
    mainTitle: 'Vịnh Hạ Long',
    desc: 'Hạ Long là một điểm du lịch ấn tượng nhất Việt Nam với một trong những kỳ quan thiên nhiên thế giới.'
  },
  {
    image: '/images/home_banner_slider_3.webp',
    subTitle: 'Khám phá',
    mainTitle: 'Một Phú Quốc hiện đại',
    desc: 'Phú Quốc là đảo ngọc du lịch nổi tiếng khắp cả nước với những bãi biển tuyệt đẹp.'
  }
]

const currentIndex = ref(0)
let intervalId = null

onMounted(() => {
  intervalId = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % slides.length
  }, 4000)
})

onUnmounted(() => {
  if (intervalId) clearInterval(intervalId)
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&family=Dancing+Script:wght@700&display=swap');

/* Font Awesome (BẮT BUỘC) */
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css');

/* Font Quicksand toàn bộ */
* {
  font-family: 'Quicksand', sans-serif;
}

.hero-banner {
  position: relative;
  height: 100vh;
  overflow: hidden;
}

.slide {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  opacity: 0;
  transition: opacity 1s ease-in-out;
  pointer-events: none;
}

.slide.active {
  opacity: 1;
  pointer-events: auto;
}

.overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.hero-content {
  color: #fff;
  text-align: center;
  margin-bottom: 120px;
  z-index: 2;
}

.sub-title {
  color: #ffae42;
  font-size: 28px;
  font-family: 'Dancing Script', cursive;
  font-weight: 700;
  margin-bottom: 10px;
}

.main-title {
  font-size: 68px;
  font-weight: 700;
  margin-bottom: 18px;
  line-height: 1.2;
}

.desc {
  font-size: 18px;
  color: #f2f2f2;
  max-width: 700px;
  margin: 0 auto;
  font-weight: 500;
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
  z-index: 10;
  display: flex;
  align-items: center;
  gap: 16px;
}

.search-item {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;
  color: #555;
  font-weight: 500;
}

.icon {
  color: #ff6600;
  font-size: 18px;
  width: 20px;
  text-align: center;
}

.search-item input {
  border: none;
  outline: none;
  width: 100%;
  font-size: 15px;
  font-weight: 500;
  color: #333;
  background: transparent;
}

.search-item input::placeholder {
  color: #999;
  font-weight: 400;
}

.divider {
  width: 1px;
  height: 32px;
  background: #ddd;
}

.search-btn {
  background: #ff6600;
  color: #fff;
  font-weight: 600;
  border: none;
  padding: 14px 36px;
  border-radius: 10px;
  transition: 0.3s ease;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
}

.search-btn:hover {
  background: #e05500;
}
</style>
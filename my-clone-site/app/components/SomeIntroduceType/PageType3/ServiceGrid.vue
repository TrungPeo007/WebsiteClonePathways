<template>
  <section class="py-20 bg-gradient-to-b from-cyan-600 to-cyan-800 text-white">
    <div class="max-w-7xl mx-auto px-6">
      <h2 class="text-4xl font-bold text-center mb-16">Chất lượng dịch vụ</h2>

      <!-- Grid 3 cột trên desktop, 2 cột trên tablet, 1 cột mobile -->
      <div class="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
        <ServiceBox
          title="Dịch vụ tiêu chuẩn cao"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, consectetur adipiscing elit consectetur adipiscing elit, sed do eiusmod tempor."
        />
        <ServiceBox
          title="Di chuyển tiện lợi"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, consectetur adipiscing elit consectetur adipiscing elit, sed do eiusmod tempor."
        />
        <ServiceBox
          title="Tư vấn đầy đủ"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, consectetur adipiscing elit consectetur adipiscing elit, sed do eiusmod tempor."
        />
        <ServiceBox
          title="Không phát sinh thêm chi phí"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, consectetur adipiscing elit consectetur adipiscing elit, sed do eiusmod tempor."
        />
        <ServiceBox
          title="Nhân viên đào tạo chuyên nghiệp"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, consectetur adipiscing elit consectetur adipiscing elit, sed do eiusmod tempor."
        />
        <ServiceBox
          title="An toàn là trên hết"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, consectetur adipiscing elit consectetur adipiscing elit, sed do eiusmod tempor."
        />
      </div>

      <!-- SLIDESHOW 3 ẢNH TỰ ĐỘNG -->
      <div class="flex justify-center mt-12 relative overflow-hidden">
        <div
          v-for="(img, index) in images"
          :key="index"
          class="absolute inset-0 flex justify-center"
          :class="{ 'opacity-0': index !== currentImageIndex }"
          :style="{ transition: 'opacity 1s ease-in-out' }"
        >
          <img
            :src="img"
            alt="Chất lượng dịch vụ"
            class="w-96 h-60 object-cover rounded-xl shadow-2xl"
          >
        </div>
      </div>

      <!-- Dots chỉ thị (tùy chọn) -->
      <div class="flex justify-center mt-6 gap-2">
        <span
          v-for="(img, index) in images"
          :key="index"
          class="w-2 h-2 rounded-full transition-all duration-300 cursor-pointer"
          :class="index === currentImageIndex ? 'bg-orange-500 w-8' : 'bg-white/50'"
          @click="currentImageIndex = index"
        ></span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import ServiceBox from './service/ServiceBox.vue'

// Danh sách 3 ảnh slideshow
const images = [
  '/images/enjoylife.webp',
  '/images/flag.webp',
  '/images/boatrun.webp',
]
const currentImageIndex = ref(0)
let slideInterval = null

// Tự động chuyển ảnh mỗi 4 giây
onMounted(() => {
  slideInterval = setInterval(() => {
    currentImageIndex.value = (currentImageIndex.value + 1) % images.length
  }, 4000)
})

onUnmounted(() => {
  if (slideInterval) clearInterval(slideInterval)
})
</script>

<style scoped>
/* Đảm bảo ảnh không bị nhảy */
.absolute img {
  transition: opacity 1s ease-in-out;
}
</style>
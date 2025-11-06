<template>
  <div class="hero relative">
    <!-- Ảnh nền -->
    <img 
      src="/images/danang.webp" 
      alt="Cầu Vàng Đà Nẵng" 
      class="w-full h-screen object-cover"
    />

    <!-- Overlay + Text -->
    <div class="absolute inset-0 bg-black/30 flex items-center">
      <div class="max-w-7xl mx-auto px-6">
        <h1 class="text-white text-5xl md:text-7xl font-bold drop-shadow-2xl">
          GIỚI THIỆU
        </h1>
        <p class="text-white/90 text-xl md:text-2xl mt-4 drop-shadow-lg">
          Pathways – Đồng hành cùng mọi hành trình
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
// Không cần script gì cả
</script>

<style scoped>
.hero {
  height: 100vh;
  min-height: 600px;
}
</style>
<script setup>
import menuheader from '~/components/menuheader.vue'
import headers from '~/components/headers.vue'
import Navbar from '~/components/Navbar.vue'
import Footer from '~/components/Footer.vue'
</script>

<template>
  <div>
    <!-- Các phần cố định trên mọi trang -->
    <menuheader />
    <headers />
    <Navbar />

    <!-- Vùng hiển thị nội dung từng trang -->
    <NuxtPage />

    <!-- Footer -->
    <Footer />
  </div>
</template>

<style scoped>

</style>

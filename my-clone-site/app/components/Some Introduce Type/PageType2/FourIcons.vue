<template>
  <section class="py-16 bg-gray-50">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <Iconbox
          icon="UserIcon"
          title="DU LỊCH TRONG & NGOẠI NƯỚC"
          desc="Là đơn vị đồng hành trong những chuyến du lịch, nghỉ dưỡng..."
        />
        <IconBox
          icon="HeartIcon"
          title="SỰ TIN TƯỞNG CỦA KHÁCH HÀNG"
          desc="Pathways đã và đang phát triển chiến lược xây dựng hệ sinh thái..."
        />
        <IconBox
          icon="ChatIcon"
          title="TƯ VẤN & HỖ TRỢ VISA"
          desc="Pathways với trên 10 năm kinh nghiệm cung cấp dịch vụ visa..."
        />
        <IconBox
          icon="GlobeIcon"
          title="CHUYÊN GIA DU LỊCH TOÀN CẦU"
          desc="Được trang bị những kĩ năng tốt nhất cùng kiến thức về du lịch..."
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import Iconbox from './icon-box/Iconbox.vue';
import { UserIcon, HeartIcon, ChatIcon, GlobeIcon } from 'vue-feather-icons'
</script>
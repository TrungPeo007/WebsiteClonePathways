<template>
  <div class="relative rounded-lg shadow-md overflow-hidden map-section">
    <!-- Nếu map chưa load -->
    <div v-if="!mapVisible" class="cursor-pointer" @click="loadMap">
      <img src="/images/map-thumbnail.webp" alt="Bản đồ Pathways" class="w-full h-[450px] object-cover" />
      <div class="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center text-white text-lg">
        Nhấn để xem bản đồ
      </div>
    </div>

    <!-- Khi đã load map -->
    <iframe
      v-else
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.506208515891!2d106.66446827465338!3d10.773374989377882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752edb8dca8991%3A0xc52cb5f1b289f3a0!2zMTgyIMSQLiBM4buFaSBE4bqhaSBIw6BuaCwgUGjGsOG7nW5nIDE1LCBRdeG6rW4gMTEsIEjDoCBO4buZaSBDaMOtIE1pbmggQ2jDrQ!5e0!3m2!1svi!2s!4v1697027258160!5m2!1svi!2s"
      width="100%"
      height="450"
      style="border:0;"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const mapVisible = ref(false)

function loadMap() {
  mapVisible.value = true
}
</script>

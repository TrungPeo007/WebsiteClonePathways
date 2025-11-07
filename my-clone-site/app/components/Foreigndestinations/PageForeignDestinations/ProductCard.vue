<template>
  <div class="bg-white rounded-lg shadow hover:shadow-md transition overflow-hidden">
    <img :src="image" alt="Tour image" class="w-full h-48 object-cover" loading="lazy" />
    <div class="p-3">
      <p class="text-sm text-orange-500 mb-1">{{ location }}</p>
      <h3 class="font-semibold text-base mb-2 line-clamp-2">{{ title }}</h3>
      <p class="text-gray-600 text-sm mb-1">Giá từ</p>
      <p class="font-semibold text-orange-600">{{ price }}₫</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  image: String,
  location: String,
  title: String,
  price: String,
})
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  line-clamp: 2;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>

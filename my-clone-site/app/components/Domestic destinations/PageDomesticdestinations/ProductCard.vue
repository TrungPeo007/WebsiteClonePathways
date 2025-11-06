<template>
  <div class="bg-white rounded-lg shadow hover:shadow-md transition overflow-hidden">
    <img :src="product.image" alt="" class="w-full h-40 object-cover" />
    <div class="p-3">
      <p class="text-sm text-gray-400">{{ product.location }}</p>
      <h3 class="text-sm font-semibold text-gray-800 mt-1 line-clamp-2">
        {{ product.title }}
      </h3>
      <p class="text-orange-600 font-semibold mt-2">
        {{ product.price.toLocaleString() }}₫ / người
      </p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  product: Object,
});
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

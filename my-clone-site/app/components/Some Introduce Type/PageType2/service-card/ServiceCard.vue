<template>
  <div class="text-center group">
    <div class="relative overflow-hidden rounded-xl shadow-xl mx-auto mb-8 w-80 h-64">
      <img 
        :src="img" 
        :alt="title"
        class="w-full h-full object-cover transition group-hover:scale-110 duration-500"
      >
      <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition"></div>
    </div>
    
    <h3 class="text-2xl font-bold text-gray-800 group-hover:text-orange-500 transition">
      {{ title }}
    </h3>
    
    <p class="mt-4 text-gray-600 leading-relaxed px-4">
      {{ desc }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  img: String,
  title: String,
  desc: String
})
</script>
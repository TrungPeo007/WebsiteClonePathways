<template>
  <div class="text-center group">
    <div class="w-20 h-20 mx-auto mb-5 bg-amber-50 rounded-full flex items-center justify-center transition group-hover:bg-amber-500 group-hover:scale-110">
      <component :is="icon" class="w-10 h-10 text-amber-600 group-hover:text-white transition" />
    </div>
    <h3 class="font-bold text-lg text-gray-800">{{ title }}</h3>
    <p class="text-sm text-gray-600 mt-3 leading-relaxed px-2">{{ desc }}</p>
  </div>
</template>

<script setup>
defineProps({
  icon: Object,
  title: String,
  desc: String
})
</script>
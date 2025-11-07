<template>
  <div
    class="bg-cyan-700/50 backdrop-blur p-8 rounded-xl border-2 border-white/30 
           hover:bg-orange-500 hover:border-orange-500 transition-all duration-300 
           cursor-pointer group"
  >
    <h3 class="text-xl font-bold group-hover:text-white">{{ title }}</h3>
    <p class="mt-4 text-sm opacity-90">{{ desc }}</p>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  desc: String
})
</script>
<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
    <ProductCard v-for="(p, i) in products" :key="i" :product="p" />
  </div>
</template>

<script setup>
import ProductCard from './ProductCard.vue';

const products = [
  { title: 'When you visit the Eternal Rome City', location: 'Hồ Chí Minh', image: '/images/hcmtour.webp', price: 7000000 },
  { title: 'Waiting for adventures? That Don’t miss them!', location: 'Hà Nội', image: '/images/hanoitour.webp', price: 5600000 },
  { title: 'This Spanish city is a feast for the eyes', location: 'Đà Nẵng', image: '/images/tourdanang.webp', price: 8000000 },
  { title: 'The City of Light draws visitors from around.', location: 'Paris', image: '/images/tourparis.webp', price: 12000000 },
  { title: 'Thái Lan: Bangkok (Vườn Nông Nọc, Buffet)', location: 'Thái Lan', image: '/images/thailan.webp', price: 6450000 },
  { title: 'Thái Lan: Pattaya – thiên đường du lịch', location: 'Thái Lan', image: '/images/tourgohanoi.webp', price: 7900000 }
]
</script>

<template>
  <div>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      <ProductCard
        v-for="(p, i) in products"
        :key="i"
        :image="p.image"
        :location="p.location"
        :title="p.title"
        :price="p.price"
      />
    </div>
  </div>
</template>

<script setup>
import ProductCard from './ProductCard.vue';

const products = [
  { image: '/images/tour1.jpg', location: 'Thái Lan', title: 'Tour Bangkok giá rẻ', price: '6,450,000' },
  { image: '/images/tour2.jpg', location: 'Hà Nội', title: 'Khám phá Hà Nội cổ kính', price: '5,600,000' },
  { image: '/images/tour3.jpg', location: 'Nha Trang', title: 'Thành phố biển Nha Trang', price: '7,000,000' },
]
</script>

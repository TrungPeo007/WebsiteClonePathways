<template>
  <div class="max-w-7xl mx-auto mt-8">
    <div class="text-gray-500 text-sm mb-4">Trang chủ / Tin tức</div>
    <h2 class="text-2xl font-bold mb-6">Tin tức</h2>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div class="lg:col-span-2">
        <NewsList />
      </div>
      <div>
        <NewsSidebar />
      </div>
    </div>
  </div>
</template>

<script setup>
import NewsList from '~/components/news/NewsList.vue';
import NewsSidebar from '~/components/news/NewsSidebar.vue';
</script>

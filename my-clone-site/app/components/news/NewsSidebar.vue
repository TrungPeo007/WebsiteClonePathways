<template>
  <div class="space-y-6">
    <div class="bg-white border rounded-lg p-4">
      <h3 class="font-semibold mb-3">Bài viết mới nhất</h3>
      <div v-for="(post, i) in latestPosts" :key="i" class="flex items-center gap-3 mb-3">
        <div class="relative w-16 h-12 flex-shrink-0">
          <img :src="post.image" class="w-full h-full object-cover rounded" />
          <div
            class="absolute -top-2 -left-2 bg-orange-500 text-white text-xs font-bold px-2 py-0.5 rounded-full"
          >
            {{ i + 1 }}
          </div>
        </div>
        <div>
          <p class="text-sm font-medium hover:text-blue-600 cursor-pointer">
            {{ post.title }}
          </p>
          <span class="text-xs text-gray-400">Tin tức - {{ post.date }}</span>
        </div>
      </div>
    </div>

    <div class="bg-white border rounded-lg p-4">
      <h3 class="font-semibold mb-3">Danh mục bài viết</h3>
      <ul class="divide-y text-sm">
        <li v-for="(cat, i) in categories" :key="i" class="py-2 flex justify-between">
          <span>{{ cat }}</span>
          <span>+</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const latestPosts = [
  { title: 'Hoà mình vào mùa hè với top 4 cù lao trù phú...', image: '/images/tintuc1.webp', date: '17/06/2024' },
  { title: 'Du lịch Sapa: Trải nghiệm Bản Cát Cát...', image: '/images/tintuc2.webp', date: '17/06/2024' },
  { title: 'Mùa hè ngắm mặt trời lúc nửa đêm ở Bắc Âu...', image: '/images/tintuc3.webp', date: '17/06/2024' },
  { title: 'Trải nghiệm thiên đường biển Phú Quốc...', image: '/images/tintuc4.webp', date: '17/06/2024' },
]

const categories = ['Trang chủ', 'Giới thiệu', 'Điểm đến trong nước', 'Điểm đến nước ngoài', 'Cẩm nang du lịch', 'Liên hệ']
</script>

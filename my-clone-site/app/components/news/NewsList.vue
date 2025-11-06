<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div
      v-for="(post, index) in posts"
      :key="index"
      class="bg-white rounded-lg shadow-sm overflow-hidden"
    >
      <img :src="post.image" alt="" class="w-full h-56 object-cover" />
      <div class="p-4">
        <h3 class="text-base font-semibold hover:text-blue-600 cursor-pointer mb-2">
          {{ post.title }}
        </h3>
        <p class="text-gray-500 text-sm mb-3 line-clamp-2">{{ post.desc }}</p>
        <div class="text-xs text-gray-400">
          <span>bởi {{ post.author }}</span> • <span>{{ post.date }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const posts = [
  {
    title: 'Hoà mình vào mùa hè với top 4 cù lao trù phú khi đi du lịch miền Tây',
    desc: 'Nhắc đến miền Tây, người ta thường nghĩ ngay đến những cù lao mát mẻ...',
    image: '/images/tintuc1.webp',
    author: 'Pathways',
    date: '17 Tháng 06, 2024',
  },
  {
    title: 'Du lịch Sapa: Trải nghiệm Bản Cát Cát và núi rừng Tây Bắc',
    desc: 'Trong hành trình du lịch Sapa - “xứ sở sương mù”...',
    image: '/images/tintuc2.webp',
    author: 'Pathways',
    date: '17 Tháng 06, 2024',
  },
  {
    title: 'Mùa hè ngắm mặt trời lúc nửa đêm ở Bắc Âu',
    desc: 'Từ những thị trấn xinh đẹp, những ngôi làng yên bình...',
    image: '/images/tintuc3.webp',
    author: 'Pathways',
    date: '17 Tháng 06, 2024',
  },
  {
    title: 'Trải nghiệm thiên đường biển với hành trình cano 3 đảo Phú Quốc',
    desc: 'Hơn 20 hòn đảo lớn nhỏ, mỗi điểm đến đều sở hữu vẻ đẹp riêng...',
    image: '/images/tintuc4.webp',
    author: 'Pathways',
    date: '17 Tháng 06, 2024',
  },
]
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>

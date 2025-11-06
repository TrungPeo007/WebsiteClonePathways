<template>
  <section class="blog-section">
    <div class="container">
      <p class="blog-subtitle">Our Blog</p>
      <h2 class="blog-title">Cẩm nang du lịch</h2>

      <div class="blog-grid">
        <div class="blog-card" v-for="(item, index) in blogs" :key="index">
          <img :src="item.image" alt="Blog Image" class="blog-image" />
          <div class="blog-meta">
            <span class="blog-tag">Tin tức</span>
            <span class="blog-date">
              <i class="fa-regular fa-calendar-days"></i> {{ item.date }}
            </span>
          </div>
          <h3 class="blog-heading">{{ item.title }}</h3>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const blogs = [
  {
    image: "/images/sapa.webp",
    date: "17 Tháng 06, 2024",
    title: "Du lịch Sapa: Trải nghiệm Bản Cát Cát nàng thơ của núi rừng Tây Bắc"
  },
  {
    image: "/images/bacuu.webp",
    date: "17 Tháng 06, 2024",
    title: "Mùa hè ngắm mặt trời lúc nửa đêm ở Bắc Âu, say đắm sắc màu Địa Trung Hải"
  },
  {
    image: "/images/phuquoc1.webp",
    date: "17 Tháng 06, 2024",
    title: "Trải nghiệm thiên đường biển với hành trình cano 3 đảo Phú Quốc"
  }
]
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Quicksand:wght@400;600;700&display=swap');

.blog-section {
  text-align: center;
  padding: 60px 0;
}

.blog-subtitle {
  font-family: 'Dancing Script', cursive;
  color: #f4a025;
  font-size: 28px;
  margin-bottom: 10px;
}

.blog-title {
  font-family: 'Quicksand', sans-serif;
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 50px;
  color: #000;
}

.blog-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.blog-card {
  text-align: left;
  background-color: #fff;
}

.blog-image {
  width: 100%;
  height: 260px;
  object-fit: cover;
  border-radius: 6px;
  margin-bottom: 15px;
}

.blog-meta {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
}

.blog-tag {
  border: 1px solid #f4a025;
  color: #f4a025;
  padding: 3px 10px;
  border-radius: 4px;
  font-size: 14px;
  transition: all 0.3s ease;
}

.blog-tag:hover {
  background-color: #f4a025;
  color: #fff;
  cursor: pointer;
}

.blog-date {
  color: #777;
  font-size: 14px;
}

.blog-heading {
  font-family: 'Quicksand', sans-serif;
  font-size: 20px;
  font-weight: 700;
  color: #000;
  line-height: 1.5;
}
</style>

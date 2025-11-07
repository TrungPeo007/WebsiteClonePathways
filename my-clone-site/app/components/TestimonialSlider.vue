<template>
  <section class="testimonial-section py-5">
    <div class="container text-center">
      <h5 class="sub-title mb-2">Đánh giá yêu thích</h5>
      <h2 class="main-title mb-5">Từ khách hàng của Pathways</h2>

      <!-- Swiper chỉ render sau khi isReady = true -->
      <Swiper
        v-if="isReady"
        :modules="[Pagination, Autoplay]"
        :slides-per-view="2"
        :space-between="30"
        :loop="true"
        :autoplay="{ delay: 3500, disableOnInteraction: false }"
        :pagination="{ clickable: true }"
        class="testimonial-slider"
        :lazy="true"
      >
        <SwiperSlide v-for="(item, index) in testimonials" :key="index">
          <div class="testimonial-card">
            <div class="d-flex align-items-center gap-3 mb-3">
              <img
                :src="item.image"
                alt="avatar"
                class="avatar"
                width="70"
                height="70"
              />
              <div class="text-start">
                <h5 class="fw-bold mb-1">{{ item.name }}</h5>
                <p class="text-muted mb-0">{{ item.field }}</p>
              </div>
              <div class="ms-auto text-warning">
                <i
                  v-for="i in 5"
                  :key="i"
                  class="fa-star"
                  :class="i <= item.stars ? 'fa-solid text-warning' : 'fa-regular text-warning'"
                ></i>
              </div>
            </div>
            <p class="testimonial-text">{{ item.text }}</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Autoplay } from 'swiper/modules'

// Chỉ import CSS cần thiết
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'

// ⚡ Trì hoãn render Swiper cho nhanh load
const isReady = ref(false)
onMounted(() => {
  setTimeout(() => (isReady.value = true), 300)
})

const testimonials = [
  {
    name: 'Nguyễn Văn A',
    field: 'Doanh nhân',
    stars: 5,
    text: 'Trải nghiệm tuyệt vời! Dịch vụ chuyên nghiệp và thân thiện.',
    image: '/images/avatar1.webp'
  },
  {
    name: 'Lê Thị B',
    field: 'Nhà thiết kế',
    stars: 4,
    text: 'Website đẹp, dễ dùng, tôi rất hài lòng khi đặt tour tại đây.',
    image: '/images/avatar2.webp'
  },
  {
    name: 'Phạm Văn C',
    field: 'Giáo viên',
    stars: 5,
    text: 'Dịch vụ chăm sóc khách hàng tận tình, sẽ giới thiệu bạn bè!',
    image: '/images/avatar3.webp'
  },
  {
    name: 'Trần Thị D',
    field: 'Sinh viên',
    stars: 4,
    text: 'Giá hợp lý, chất lượng tour tốt, đáng để trải nghiệm!',
    image: '/images/avatar4.webp'
  }
]
</script>

<style scoped>
.testimonial-section {
  background: #f9fcff;
  padding: 80px 0;
}

.sub-title {
  color: #ffae42;
  font-family: "Dancing Script", cursive;
  font-size: 28px;
}

.main-title {
  font-weight: 800;
  color: #222;
}

.testimonial-card {
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
  max-width: 600px;
  padding: 25px;
  text-align: left;
  transition: transform 0.3s ease;
}
.testimonial-card:hover {
  transform: translateY(-6px);
}
.avatar {
  border-radius: 50%;
  object-fit: cover;
}

.testimonial-text {
  font-size: 16px;
  color: #555;
  font-style: italic;
  line-height: 1.6;
}

/* Swiper pagination */
.swiper-pagination-bullet {
  background: #999;
  opacity: 0.6;
  transition: 0.3s;
}

.swiper-pagination-bullet-active {
  background: #ff6600;
  transform: scale(1.2);
  opacity: 1;
}

/* Ẩn navigation cho gọn */
.swiper-button-prev,
.swiper-button-next {
  display: none;
}
</style>

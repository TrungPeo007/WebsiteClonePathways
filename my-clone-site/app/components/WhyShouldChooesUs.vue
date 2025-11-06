<template>
  <section class="pathways-section">
    <div class="section-header">
      <p class="subtitle">Tại sao nên chọn</p>
      <h2 class="title">Dịch vụ du lịch của Pathways</h2>
    </div>

    <div class="services">
      <div class="service-card" v-for="(item, index) in services" :key="index">
        <div class="icon">
          <i :class="item.icon"></i>
        </div>
        <h3>{{ item.title }}</h3>
        <p>{{ item.desc }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "PathwaysSection",
  data() {
    return {
      services: [
        {
          icon: "fa-solid fa-hand-holding-dollar",
          title: "Giá trị tốt nhất",
          desc: "Chúng tôi tận tâm cung cấp giá trị đặc biệt cho chuyến du lịch của bạn, xứng đáng giá trị bạn bỏ ra.",
        },
        {
          icon: "fa-solid fa-lock",
          title: "Không phát sinh thêm",
          desc: "Hành trình của bạn với chúng tôi chỉ mang lại sự thư giãn, tận hưởng và khám phá nhiều hơn nữa.",
        },
        {
          icon: "fa-solid fa-piggy-bank",
          title: "Tư vấn chuyên nghiệp",
          desc: "Sẵn sàng cho chuyến du lịch kế tiếp của bạn? Liên hệ với chúng tôi ngay hôm nay để được tư vấn ngay.",
        },
        {
          icon: "fa-solid fa-clock",
          title: "Tiết kiệm thời gian",
          desc: "Bạn sẽ không mất nhiều thời gian để tìm hiểu và di chuyển, chúng tôi sẽ hỗ trợ bạn tất cả.",
        },
      ],
    };
  },
};
</script>

<style scoped>
.pathways-section {
  text-align: center;
  padding: 60px 20px;
}

.section-header .subtitle {
  color: #f9a826;
  font-size: 22px;
  font-family: 'Dancing Script', cursive;
}

.section-header .title {
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 50px;
}

.services {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 40px;
}

.service-card {
  max-width: 280px;
  text-align: center;
}

.service-card .icon {
  font-size: 40px;
  color: #ff7a00;
  margin-bottom: 15px;
}

.service-card h3 {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
}

.service-card p {
  color: #666;
  font-size: 16px;
  line-height: 1.6;
}
</style>

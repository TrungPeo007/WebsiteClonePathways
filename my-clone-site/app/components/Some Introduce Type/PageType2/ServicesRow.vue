<template>
  <section class="py-20 bg-gray-50">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid md:grid-cols-3 gap-12">
        <ServiceCard
          img="/images/chohoasen.webp"
          title="Dịch vụ du lịch"
          desc="Được trang bị những kĩ năng kinh doanh tốt nhất cùng kiến thức về du lịch được đào tạo bài bản, Nhân viên Kinh doanh Pathways luôn tư vấn cho khách hàng những điểm tham quan hấp dẫn phù hợp với từng đối tượng khác nhau."
        />

        <ServiceCard
          img="/images/about02_information_2_ico.webp"
          title="Dịch vụ Visa"
          desc="Pathways với trên 10 năm kinh nghiệm cung cấp dịch vụ visa và lữ hành quốc tế. Cùng đội ngũ chuyên viên tư vấn, kỹ năng xử lý các trường hợp khẩn cấp và khó."
        />

        <ServiceCard
          img="/images/howwework.webp"
          title="Chúng ta làm việc như thế nào"
          desc="Hướng đến lợi ích của khách hàng, Pathways luôn làm việc không mệt mỏi để mang đến những điểm du lịch mới, lạ cùng những dịch vụ hoàn hảo."
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import ServiceCard from './service-card/ServiceCard.vue';
</script>
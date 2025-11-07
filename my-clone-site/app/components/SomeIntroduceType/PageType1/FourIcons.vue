<template>
  <div class="grid grid-cols-2 lg:grid-cols-4 gap-10 mb-20">
    <IconCard
      icon="M12 2L2 12h3v8h14v-8h3L12 2z"
      title="DU LỊCH TRONG & NGOẠI NƯỚC"
      desc="Là đơn vị đồng hành trong những chuyến du lịch, nghỉ dưỡng, hội nghị của hàng ngàn công ty, nhóm gia đình..."
    />
    <IconCard
      icon="M12 21a9 9 0 100-18 9 9 0 000 18z M8.5 9.5a3.5 3.5 0 117 0 3.5 3.5 0 01-7 0z"
      title="SỰ TIN TƯỞNG CỦA KHÁCH HÀNG"
      desc="Pathways đã và đang phát triển chiến lược xây dựng hệ sinh thái khép kín nhằm đáp ứng..."
    />
    <IconCard
      icon="M9 12l2 2 4-4"
      title="TƯ VẤN & HỖ TRỢ VISA"
      desc="Pathways với trên 10 năm kinh nghiệm cung cấp dịch vụ visa và hỗ trợ visa..."
    />
    <IconCard
      icon="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      title="CHUYÊN GIA DU LỊCH TOÀN CẦU"
      desc="Được trang bị những kĩ năng tốt nhất cùng kiến thức về du lịch..."
    />
  </div>
</template>

<script setup>
const IconCard = defineComponent({
  props: ['icon', 'title', 'desc'],
  setup(props) {
    return () => (
      <div class="text-center">
        <div class="w-20 h-20 mx-auto mb-4 bg-amber-100 rounded-full flex items-center justify-center">
          <svg class="w-10 h-10 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={props.icon} />
          </svg>
        </div>
        <h3 class="text-lg font-bold text-gray-800 mb-2">{props.title}</h3>
        <p class="text-sm text-gray-600 leading-relaxed">{props.desc}</p>
      </div>
    )
  }
})
</script>
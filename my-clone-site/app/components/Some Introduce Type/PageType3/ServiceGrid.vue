<template>
  <section class="py-20 bg-gradient-to-b from-cyan-600 to-cyan-800 text-white">
    <div class="max-w-7xl mx-auto px-6">
      <h2 class="text-4xl font-bold text-center mb-16">Chất lượng dịch vụ</h2>
      <div class="grid md:grid-cols-3 gap-8">
        <ServiceBox title="Dịch vụ tiêu chuẩn cao" desc="Lorem ipsum dolor sit amet..." />
        <ServiceBox title="Di chuyển tiện lợi" desc="Lorem ipsum dolor sit amet..." />
        <ServiceBox title="Tư vấn đầy đủ" desc="Lorem ipsum dolor sit amet..." />
        <ServiceBox title="Không phát sinh thêm chi phí" desc="Lorem ipsum dolor sit amet..." />
        <ServiceBox title="Nhân viên đào tạo chuyên nghiệp" desc="Lorem ipsum dolor sit amet..." />
        <ServiceBox title="An toàn là trên hết" desc="Lorem ipsum dolor sit amet..." />
      </div>
      <div class="flex justify-center mt-12">
        <img src="https://i.imgur.com/9pQrT5v.jpg" class="w-96 rounded-xl shadow-2xl">
      </div>
    </div>
  </section>
</template>

<script setup>
const ServiceBox = defineProps(['title','desc'])
</script>

<template>
  <div class="bg-cyan-700/50 backdrop-blur p-8 rounded-xl border-2 border-white/30 hover:bg-orange-500 hover:border-orange-500 transition-all duration-300 cursor-pointer group">
    <h3 class="text-xl font-bold group-hover:text-white">{{ title }}</h3>
    <p class="mt-4 text-sm opacity-90">{{ desc }}</p>
  </div>
</template>
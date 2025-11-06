<!-- QualitySection.vue – FULL LOREM IPSUM SIÊU DÀI + HOVER 3D -->
<template>
  <section class="py-20 bg-gradient-to-b from-cyan-600 to-cyan-800 text-white overflow-hidden">
    <div class="max-w-7xl mx-auto px-6">
      <p class="text-center text-sm uppercase tracking-widest mb-3 opacity-90">Chất lượng</p>
      <h2 class="text-center text-5xl md:text-6xl font-black mb-16 leading-tight">
        CHẤT LƯỢNG CAO NHẤT
      </h2>

      <!-- 6 Ô ICON – LOREM DÀI THƯỢT -->
      <div class="grid md:grid-cols-3 gap-10 mb-20">
        <IconBox 
          type="fork-knife"
          title="Dịch vụ kèm theo"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
        <IconBox 
          type="plane"
          title="Di chuyển tiện lợi"
          desc="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        />
        <IconBox 
          type="message-square"
          title="Tư vấn đầy đủ"
          desc="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
        />
        <IconBox 
          type="pizza"
          title="Sản phẩm được tuyển chọn"
          desc="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet."
        />
        <IconBox 
          type="dollar-sign"
          title="Không phát sinh thêm chi phí"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo."
        />
        <IconBox 
          type="shield"
          title="An toàn là trên hết"
          desc="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident."
        />
      </div>

      <!-- CỜ VIỆT NAM – HOVER 3D SIÊU SANG -->
      <div class="flex justify-center">
        <div class="perspective-1000 group">
          <img 
            src="/images/redflag.webp" 
            alt="Cờ Việt Nam"
            class="w-96 h-64 object-cover rounded-2xl shadow-2xl transition-all duration-700 group-hover:shadow-3xl group-hover:-rotate-2 group-hover:scale-110"
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import IconBox from './IconBox.vue'
</script>

<style scoped>
.perspective-1000 { perspective: 1000px; }
</style>
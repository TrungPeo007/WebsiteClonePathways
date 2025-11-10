<template>
  <div>
    <BannerSection />

    <div class="max-w-7xl mx-auto mt-10 flex flex-col md:flex-row gap-6 px-4">
      <FilterSidebar />
      <div class="flex-1">
        <h2 class="text-xl font-semibold mb-4">Tất cả sản phẩm</h2>
        <ProductGrid />
        <div class="text-center mt-6">
          <button class="px-5 py-2 border rounded text-sm text-orange-500 border-orange-400 hover:bg-orange-50">
            Xem thêm sản phẩm
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import BannerSection from '~/components/Domesticdestinations/PageDomesticdestinations/BannerSection.vue';
import FilterSidebar from '~/components/Domesticdestinations/PageDomesticdestinations/FilterSidebar.vue';
import ProductGrid from '~/components/Domesticdestinations/PageDomesticdestinations/ProductGrid.vue';
</script>

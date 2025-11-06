<template>
  <aside class="w-full md:w-1/4 bg-white p-4 rounded-lg shadow-sm">
    <h3 class="text-lg font-semibold mb-4 text-orange-500">Tìm kiếm Tour</h3>

    <div class="space-y-3">
      <div>
        <label class="block text-sm mb-1">Địa điểm</label>
        <input type="text" placeholder="Nhập địa điểm" class="w-full border rounded px-2 py-1 text-sm" />
      </div>

      <div>
        <label class="block text-sm mb-1">Chọn ngày</label>
        <input type="date" class="w-full border rounded px-2 py-1 text-sm" />
      </div>

      <div>
        <h4 class="font-semibold text-sm mb-1 mt-3">Loại tour</h4>
        <label class="flex items-center gap-2"><input type="checkbox" /> Núi</label>
        <label class="flex items-center gap-2"><input type="checkbox" /> Biển</label>
      </div>

      <div>
        <h4 class="font-semibold text-sm mb-1 mt-3">Chi phí dự kiến</h4>
        <label class="flex items-center gap-2"><input type="checkbox" /> Dưới 5,000,000₫</label>
        <label class="flex items-center gap-2"><input type="checkbox" /> 5,000,000₫ - 10,000,000₫</label>
        <label class="flex items-center gap-2"><input type="checkbox" /> Trên 10,000,000₫</label>
      </div>
    </div>
  </aside>
</template>

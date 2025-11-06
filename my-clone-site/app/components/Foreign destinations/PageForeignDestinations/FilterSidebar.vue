<template>
  <div class="w-full md:w-1/4 bg-white p-4 rounded-lg shadow">
    <h3 class="font-semibold text-lg mb-3">Tìm Kiếm Tour</h3>

    <div class="mb-3">
      <input type="text" placeholder="Địa điểm" class="border w-full rounded p-2 text-sm" />
    </div>

    <div class="mb-3">
      <input type="date" class="border w-full rounded p-2 text-sm" />
    </div>

    <h4 class="font-semibold text-sm mb-2">Loại tour</h4>
    <div class="flex flex-col text-sm mb-3">
      <label><input type="checkbox" class="mr-2" /> Trong nước</label>
      <label><input type="checkbox" class="mr-2" /> Nước ngoài</label>
    </div>

    <h4 class="font-semibold text-sm mb-2">Chi phí dự kiến</h4>
    <div class="flex flex-col text-sm space-y-1">
      <label><input type="checkbox" class="mr-2" /> Dưới 5.000.000đ</label>
      <label><input type="checkbox" class="mr-2" /> 5.000.000đ - 10.000.000đ</label>
      <label><input type="checkbox" class="mr-2" /> Trên 10.000.000đ</label>
    </div>
  </div>
</template>

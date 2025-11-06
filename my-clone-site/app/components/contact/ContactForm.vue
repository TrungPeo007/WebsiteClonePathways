<template>
  <form class="space-y-3">
    <div class="grid md:grid-cols-3 gap-3">
      <input type="text" placeholder="Tên của bạn" class="border p-2 rounded w-full focus:outline-none focus:ring focus:ring-orange-300" />
      <input type="email" placeholder="Email của bạn" class="border p-2 rounded w-full focus:outline-none focus:ring focus:ring-orange-300" />
      <input type="text" placeholder="Số điện thoại của bạn" class="border p-2 rounded w-full focus:outline-none focus:ring focus:ring-orange-300" />
    </div>

    <textarea rows="4" placeholder="Nội dung" class="border p-2 rounded w-full focus:outline-none focus:ring focus:ring-orange-300"></textarea>

    <button type="button" class="bg-orange-500 text-white px-5 py-2 rounded hover:bg-orange-600 transition">
      Gửi cho chúng tôi
    </button>
  </form>
</template>

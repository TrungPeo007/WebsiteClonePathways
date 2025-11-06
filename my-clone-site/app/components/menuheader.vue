<template>
  <div class="topbar">
    <div class="container d-flex justify-content-between align-items-center">
      <!-- Bên trái -->
      <div class="d-flex align-items-center">
        <i class="fa-solid fa-clock text-orange"></i>
        <span>Giờ mở cửa: Thứ 2 đến thứ 6 8.00 am - 6.00 pm</span>
      </div>

      <!-- Bên phải -->
      <div class="d-flex align-items-center">
        <span class="me-2">Liên kết:</span>
        <a href="#"><i class="fab fa-facebook-f"></i></a>
        <a href="#"><i class="fab fa-youtube"></i></a>
        <a href="#"><i class="fab fa-instagram"></i></a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.topbar {
  background-color: #1c1c1c;
  color: #f5f5f5;
  font-family: "Nunito", sans-serif;
  font-size: 15px;
  padding: 12px 0;
  line-height: 1.7;
}

/* Icon đồng hồ màu cam, hướng đúng */
.text-orange {
  color: #ff6600;
  font-size: 17px;
  margin-right: 8px;
}

.topbar a {
  color: #f5f5f5;
  text-decoration: none;
  margin-left: 22px;
  font-size: 16px;
  transition: color 0.3s ease;
}

.topbar a:hover {
  color: #ff6600;
}
</style>

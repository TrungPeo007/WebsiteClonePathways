<template>
  <section class="top-destination">
    <div class="container">
      <h5 class="sub-title">Top địa điểm</h5>
      <h2 class="main-title">Được đặt nhiều nhất</h2>

      <div class="destination-grid">
        <div class="destination-card">
          <img src="/images/thailan.webp" alt="Thái Lan" />
          <div class="destination-name">Thái Lan</div>
        </div>
        <div class="destination-card">
          <img src="/images/dailoan.webp" alt="Đài Loan" />
          <div class="destination-name">Đài Loan</div>
        </div>
        <div class="destination-card">
          <img src="/images/nhatban.webp" alt="Nhật Bản" />
          <div class="destination-name">Nhật Bản</div>
        </div>
        <div class="destination-card">
          <img src="/images/phap.webp" alt="Pháp" />
          <div class="destination-name">Pháp</div>
        </div>
        <div class="destination-card">
          <img src="/images/danang.webp" alt="Đà Nẵng" />
          <div class="destination-name">Đà Nẵng</div>
        </div>
        <div class="destination-card">
          <img src="/images/phuquoc.webp" alt="Phú Quốc" />
          <div class="destination-name">Phú Quốc</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@500;600;700&family=Dancing+Script:wght@700&display=swap');

.top-destination {
  text-align: center;
  padding: 80px 0;
  background: #fff;
  font-family: 'Quicksand', sans-serif;
}

.sub-title {
  font-family: 'Dancing Script', cursive;
  color: #f9b233;
  font-weight: 700;
  font-size: 30px;
  margin-bottom: 8px;
}

.main-title {
  font-size: 34px;
  color: #111;
  font-weight: 700;
  margin-bottom: 40px;
}

/* --- Grid --- */
.destination-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 25px;
  justify-content: center;
  align-items: center;
}

/* --- Card --- */
.destination-card {
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.destination-card img {
  width: 100%;
  height: 230px;
  object-fit: cover;
  border-radius: 4px;
  transition: transform 0.5s ease;
}

/* --- Hover effect --- */
.destination-card:hover img {
  transform: scale(1.1);
  filter: brightness(0.9);
}

/* --- Tên địa điểm --- */
.destination-name {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  color: #fff;
  font-size: 26px;
  font-family: 'Dancing Script', cursive;
  font-weight: 700;
  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.6);
  letter-spacing: 1px;
}
</style>

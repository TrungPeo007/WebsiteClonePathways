<template>
  <footer class="footer">
    <!-- Section đăng ký nhận thông tin -->
    <div class="subscribe-box">
      <div class="subscribe-content">
        <h2 class="subscribe-title">
          Đăng ký để nhận các thông tin du lịch mới nhất
        </h2>
        <div class="subscribe-form">
          <input type="email" placeholder="Địa chỉ email" />
          <button>Đăng ký <i class="fa-solid fa-arrow-right"></i></button>
        </div>
      </div>
    </div>

    <!-- Footer chính -->
    <div class="footer-main">
      <div class="footer-container">
        <!-- Cột 1 -->
        <div class="footer-about">
          <p>
            Hướng đến lợi ích của khách hàng, Pathways luôn làm việc không mệt mỏi để mang đến
            những điểm du lịch mới, lạ cùng những dịch vụ hoàn hảo. Chúng tôi không chỉ đưa du khách
            khám phá các điểm tham quan mà trong từng chuyến đi, du khách còn được trải nghiệm
            những nét văn hóa truyền thống cũng như nền ẩm thực đa dạng đặc sắc từng vùng, miền.
          </p>
          <p class="contact-info">hi@pathways.abc</p>
          <p class="contact-info">1900.636.000</p>
        </div>

        <!-- Cột 2 -->
        <div class="footer-links">
          <h3>Giới thiệu</h3>
          <ul>
            <li>Trang chủ</li>
            <li>Giới thiệu</li>
            <li>Điểm đến trong nước</li>
            <li>Điểm đến nước ngoài</li>
            <li>Cẩm nang du lịch</li>
            <li>Liên hệ</li>
          </ul>
        </div>

        <!-- Cột 3 -->
        <div class="footer-links">
          <h3>Liên hệ</h3>
          <ul>
            <li>About</li>
            <li>Blog</li>
            <li>Contact</li>
            <li>Faq’s</li>
            <li>Testimonial</li>
          </ul>
        </div>

        <!-- Cột 4 -->
        <div class="footer-gallery">
          <h3>Hình ảnh</h3>
          <div class="gallery-grid">
            <img src="/images/img1.webp" alt="Gallery" />
            <img src="/images/img2.webp" alt="Gallery" />
            <img src="/images/img3.webp" alt="Gallery" />
            <img src="/images/img4.webp" alt="Gallery" />
            <img src="/images/img5.webp" alt="Gallery" />
          </div>
        </div>
      </div>
    </div>

    <!-- Bản quyền -->
    <div class="footer-bottom">
      <p>Copyright © 2024 Pathways, Inc. Powered by Haravan</p>
      <div class="socials">
        <i class="fa-brands fa-facebook-f"></i>
        <i class="fa-brands fa-youtube"></i>
        <i class="fa-brands fa-instagram"></i>
      </div>
    </div>
  </footer>
</template>

<script setup>
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@500;700&display=swap');

.footer {
  position: relative;
  padding-top: 100px;
  font-family: 'Quicksand', sans-serif;
  color: #fff;
}

/* === Subscribe orange box === */
.subscribe-box {
  background-color: #ff7900;
  border-radius: 10px;
  width: 80%;
  margin: 0 auto;
  padding: 50px 40px;
  position: relative;
  margin-bottom: -120px;
  top: -70px;
  z-index: 2;
}

.subscribe-title {
  font-size: 32px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 20px;
  max-width: 500px;
}

.subscribe-form {
  display: flex;
  gap: 15px;
  justify-content: center;
  align-items: center;
}

.subscribe-form input {
  width: 500px;
  padding: 14px 16px;
  border: none;
  border-radius: 6px;
  font-size: 16px;
}

.subscribe-form button {
  background: #000;
  color: #fff;
  border: none;
  padding: 14px 22px;
  border-radius: 6px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
}

.subscribe-form button:hover {
  background-color: #333;
}

/* === Main footer === */
.footer-main {
  background-color: #111;
  padding: 80px 0 40px 0;
}

.footer-container {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1.5fr;
  gap: 40px;
  width: 80%;
  margin: 0 auto;
}

.footer-about p {
  color: #ccc;
  line-height: 1.8;
  font-size: 15px;
}

.contact-info {
  margin-top: 15px;
  color: #fff;
  font-weight: 700;
}

.footer-links h3,
.footer-gallery h3 {
  font-weight: 700;
  font-size: 18px;
  margin-bottom: 15px;
}

.footer-links ul {
  list-style: none;
  padding: 0;
}

.footer-links li {
  color: #ccc;
  margin-bottom: 8px;
  cursor: pointer;
  transition: color 0.3s ease;
}

.footer-links li:hover {
  color: #ff7900;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}

.gallery-grid img {
  width: 100%;
  border-radius: 6px;
  object-fit: cover;
}

/* === Bottom line === */
.footer-bottom {
  background-color: #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 10%;
  color: #ccc;
  font-size: 14px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.socials i {
  margin-left: 15px;
  font-size: 16px;
  cursor: pointer;
  transition: color 0.3s ease;
}

.socials i:hover {
  color: #ff7900;
}

/* === Responsive === */
@media (max-width: 992px) {
  .footer-container {
    grid-template-columns: 1fr 1fr;
    text-align: left;
  }
  .subscribe-form {
    flex-direction: column;
  }
  .subscribe-form input {
    width: 100%;
  }
}

@media (max-width: 600px) {
  .footer-container {
    grid-template-columns: 1fr;
  }
  .subscribe-title {
    font-size: 24px;
    text-align: center;
  }
}
</style>

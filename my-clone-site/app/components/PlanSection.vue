<template>
  <section class="plan-section">
    <div class="container">
      <!-- Cột trái: text -->
      <div class="plan-text">
        <h5 class="highlight">Hãy để Pathways</h5>
        <h2 class="title">
          Lên kế hoạch cho một chuyến đi nên phiêu lưu thật thú vị của bạn
        </h2>
        <p class="desc">
          Chúng tôi tận tâm cung cấp giá trị đặc biệt cho khoản đầu tư du lịch của bạn.
          Mối quan hệ của chúng tôi với các đối tác du lịch đáng tin cậy.
        </p>

        <div class="features">
          <div class="feature-item">
            <div class="icon">
              <i class="fa-solid fa-globe"></i>
            </div>
            <div class="content">
              <h5>Tour quốc tế</h5>
              <p>
                Đội ngũ chuyên gia du lịch của chúng tôi mang đến nhiều kiến thức và chuyên môn phong phú.
              </p>
            </div>
          </div>

          <div class="feature-item">
            <div class="icon">
              <i class="fa-solid fa-coins"></i>
            </div>
            <div class="content">
              <h5>Nhiều lựa chọn dành cho bạn</h5>
              <p>
                Lên kế hoạch cho chuyến đi nên là một cuộc phiêu lưu thú vị, hãy để chúng tôi giúp bạn lên kế hoạch chuyến đi.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Cột phải: hình ảnh -->
      <div class="plan-images">
        <img src="/images/home_about_us_banner_2.webp" alt="ảnh giữa lớn" class="img large-left" />
        <img src="/images/home_about_us_banner_1.webp" alt="ảnh phải lớn" class="img large-right" />
        <img src="/images/home_about_us_banner_3.webp" alt="ảnh nhỏ dưới" class="img small-bottom" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.plan-section {
  padding: 100px 0;
  background: #fff;
  font-family: "Nunito", sans-serif;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 40px;
}

/* Text section */
.plan-text {
  flex: 1 1 50%;
  max-width: 600px;
}

.highlight {
  color: #ff9900;
  font-size: 30px;
  font-family: "Dancing Script", cursive;
}

.title {
  font-size: 42px;
  font-weight: 800;
  line-height: 1.2;
  margin: 15px 0 25px;
}

.desc {
  color: #666;
  font-size: 16px;
  margin-bottom: 40px;
}

.feature-item {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  margin-bottom: 25px;
}

.icon {
  background: #fff4ec;
  color: #ff6600;
  font-size: 18px;
  border-radius: 50%;
  padding: 18px;
  flex-shrink: 0;
}

.feature-item h5 {
  font-weight: 700;
  color: #111;
}

.feature-item p {
  color: #666;
}

/* ===== IMAGE LAYOUT ===== */
.plan-images {
  flex: 1 1 45%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  gap: 18px;
  align-items: center;
  justify-items: center;
  position: relative;
}

/* Base style */
.img {
  width: 100%;
  border-radius: 14px;
  object-fit: cover;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

/* Hai ảnh lớn cùng kích thước */
.large-left {
  grid-column: 1;
  grid-row: 1 / span 2;
  height: 460px;
}

.large-right {
  grid-column: 2;
  grid-row: 1;
  height: 460px;
}

/* Ảnh nhỏ dưới cùng */
.small-bottom {
  grid-column: 2;
  grid-row: 2;
  height: 230px;
}

/* Responsive */
@media (max-width: 992px) {
  .container {
    flex-direction: column;
  }

  .plan-images {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto;
  }

  .large-left,
  .large-right,
  .small-bottom {
    height: auto;
  }
}
</style>

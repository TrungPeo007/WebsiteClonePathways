<template>
  <header class="py-3 border-bottom">
    <div class="container d-flex align-items-center justify-content-between">
      <!-- Logo -->
      <div class="logo">
        <h3 class="fw-bold mb-0" style="letter-spacing: 1px;">PATHWAYS</h3>
      </div>

      <!-- Contact + Search -->
      <div class="d-flex align-items-center">
        <!-- Contact Info -->
        <div class="contact-info d-flex align-items-center gap-4 me-5">
          <div class="d-flex align-items-center gap-2 text-dark">
            <i class="fa-solid fa-phone" style="color: #ff6600;"></i>
            <span class="fw-semibold">1900.636000</span>
          </div>
          <div class="d-flex align-items-center gap-2 text-dark">
            <i class="fa-solid fa-envelope" style="color: #ff6600;"></i>
            <span class="fw-semibold">hi@pathways.abc</span>
          </div>
        </div>

        <!-- Search -->
        <div class="search-box d-flex align-items-center">
          <input
            type="text"
            class="form-control search-input"
            placeholder="Bạn cần tìm gì..."
          />
          <button type="submit" class="btn search-btn">
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
header {
  background-color: #fff;
  font-family: "Nunito", sans-serif;
}

/* Căn chỉnh phần liên hệ */
.contact-info {
  display: flex;
  align-items: center;
  gap: 25px; /* Khoảng cách giữa phone và email */
}

.contact-info i {
  color: #ff6600;
}

.contact-info span {
  font-weight: 600;
  color: #111;
}

/* Search box styling */
.search-box {
  display: flex;
  align-items: center;
}

.search-input {
  height: 50px;
  width: 300px;
  border: 1px solid #dedede;
  border-right: none;
  border-radius: 5px 0 0 5px;
  font-size: 16px;
  padding: 10px 20px;
  transition: all 0.5s ease;
}

.search-input::placeholder {
  color: #999;
  font-weight: 500;
}

.search-btn {
  height: 50px;
  background-color: #ff6600;
  color: #fff;
  border-radius: 0 5px 5px 0;
  padding: 0 18px;
  border: none;
  transition: background-color 0.3s;
}

.search-btn:hover {
  background-color: #e65c00;
}

.logo h3 {
  color: #111;
}
</style>

<template>
  <section class="login-section">
    <div class="login-container">
      <div class="tab-header">
        <h2
          :class="{ active: currentTab === 'login' }"
          @click="currentTab = 'login'"
        >
          Đăng nhập
        </h2>
        <span class="divider">|</span>
        <h2
          :class="{ active: currentTab === 'register' }"
          @click="currentTab = 'register'"
        >
          Đăng ký
        </h2>
      </div>

      <!-- Form đăng nhập -->
      <form v-if="currentTab === 'login'" class="form">
        <input
          type="email"
          placeholder="Vui lòng nhập email của bạn"
          class="input"
        />
        <input
          type="password"
          placeholder="Vui lòng nhập mật khẩu"
          class="input"
        />
        <p class="policy">
          This site is protected by reCAPTCHA and the Google
          <a href="#">Privacy Policy</a> and <a href="#">Terms of Service</a> apply.
        </p>
        <button type="submit" class="btn-login">ĐĂNG NHẬP</button>

        <div class="links">
          <p>
            Bạn quên mật khẩu?
            <a href="#">Quên mật khẩu?</a>
          </p>
          <p>
            Bạn chưa có tài khoản?
            <a href="#">Đăng ký</a>
          </p>
        </div>
      </form>

      <!-- Form đăng ký -->
      <form v-else class="form">
        <input
          type="text"
          placeholder="Nhập họ tên của bạn"
          class="input"
        />
        <input
          type="email"
          placeholder="Nhập email"
          class="input"
        />
        <input
          type="password"
          placeholder="Tạo mật khẩu"
          class="input"
        />
        <button type="submit" class="btn-login">ĐĂNG KÝ</button>

        <div class="links">
          <p>
            Đã có tài khoản?
            <a href="#" @click.prevent="currentTab = 'login'">Đăng nhập</a>
          </p>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
const currentTab = ref("login");
</script>

<style scoped>
.login-section {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
  background: #fff;
}

.login-container {
  width: 400px;
  text-align: center;
}

.tab-header {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  margin-bottom: 30px;
}

.tab-header h2 {
  font-size: 20px;
  font-weight: 600;
  color: #999;
  cursor: pointer;
  transition: 0.3s;
}

.tab-header h2.active {
  color: #000;
  font-weight: 700;
}

.divider {
  color: #ccc;
  font-size: 20px;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.input {
  width: 100%;
  padding: 14px;
  border: none;
  outline: none;
  background: #f5f5f5;
  border-radius: 4px;
  font-size: 14px;
}

.policy {
  font-size: 12px;
  color: #888;
  text-align: left;
  margin-top: -5px;
  line-height: 1.4;
}

.policy a {
  color: #2962ff;
  text-decoration: none;
}

.btn-login {
  background: #ff6600;
  color: #fff;
  border: none;
  padding: 12px;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;
}

.btn-login:hover {
  background: #e65c00;
}

.links {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  font-size: 13px;
}

.links a {
  color: #1a73e8;
  text-decoration: none;
  font-weight: 500;
}
</style>

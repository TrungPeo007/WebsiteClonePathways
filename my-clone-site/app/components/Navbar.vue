<template>
  <nav class="navbar-pathways">
    <div class="container d-flex align-items-center justify-content-between">
      <!-- Menu -->
      <ul class="menu d-flex align-items-center mb-0">
        <li><a href="#" class="active">TRANG CHỦ</a></li>

        <li class="dropdown">
          <a href="#">
            GIỚI THIỆU
            <i class="fa-solid fa-chevron-down ms-1"></i>
          </a>
          <ul class="dropdown-menu">
            <li><a href="/PageType1">Kiểu hiển thị 1</a></li>
            <li><a href="/PageType2">Kiểu hiển thị 2</a></li>
            <li><a href="/PageType3">Kiểu hiển thị 3</a></li>
          </ul>
        </li>

        <li class="dropdown">
          <a href="#">
            ĐIỂM ĐẾN TRONG NƯỚC
            <i class="fa-solid fa-chevron-down ms-1"></i>
          </a>
          <ul class="dropdown-menu">
            <li><a href="/Domesticdestinations">Phú Quốc</a></li>
            <li><a href="/Domesticdestinations">Nha Trang</a></li>
            <li><a href="/Domesticdestinations">Sapa</a></li>
            <li><a href="/Domesticdestinations">Hà Nội</a></li>
            <li><a href="/Domesticdestinationsc">Cần Thơ</a></li>
            <li><a href="/Domesticdestinations">Đà Lạt</a></li>
          </ul>
        </li>

        <li class="dropdown">
          <a href="#">
            ĐIỂM ĐẾN NƯỚC NGOÀI
            <i class="fa-solid fa-chevron-down ms-1"></i>
          </a>
          <ul class="dropdown-menu">
            <li><a href="/Foreigndestinations">Châu Âu</a></li>
            <li><a href="/Foreigndestinations">Nhật Bản</a></li>
            <li><a href="/Foreigndestinations">Thái Lan</a></li>
            <li><a href="/Foreigndestinations">HongKong</a></li>
            <li><a href="/Foreigndestinations">Singapore</a></li>
          </ul>
        </li>

        <li><a href="#">CẨM NANG DU LỊCH</a></li>
        <li><a href="/contact">LIÊN HỆ</a></li>
      </ul>

      <!-- User -->
      <div class="user d-flex align-items-center">
        <i class="fa-regular fa-user me-2"></i>
        <a href="/accounts">Tài khoản</a>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar-pathways {
  background-color: #fff6ef;
  font-family: "Nunito", sans-serif;
  border-radius: 8px;
  padding: 12px 0;
}

/* Menu items */
.menu {
  list-style: none;
  gap: 40px;
  font-size: 14px;
}

.menu li {
  position: relative;
}

.menu a {
  text-decoration: none;
  color: #111;
  font-weight: 600;
  transition: color 0.3s ease;
  display: inline-flex;
  align-items: center;
}

/* Khi hover vào mục dropdown => chữ & icon cam luôn */
.dropdown:hover>a {
  color: #ff6600;
}

.dropdown:hover>a i {
  color: #ff6600;
  transform: rotate(180deg);
}

/* Mũi tên mặc định quay xuống */
.dropdown a i {
  transition: transform 0.3s ease, color 0.3s ease;
}

/* Active + hover các mục bình thường */
.menu a.active {
  color: #ff6600;
}

.menu a:hover {
  color: #ff6600;
}

/* Dropdown menu cam */
.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background: #ff6600;
  list-style: none;
  padding: 0;
  margin: 0;
  display: none;
  border-radius: 0 0 6px 6px;
  min-width: 240px;
  z-index: 999;
  opacity: 0;
  transform: translateY(10px);
  transition: all 0.3s ease;
}

.dropdown:hover .dropdown-menu {
  display: block;
  opacity: 1;
  transform: translateY(0);
}

.dropdown-menu li a {
  display: block;
  padding: 12px 20px;
  color: #fff;
  font-weight: 600;
  text-decoration: none;
}

.dropdown-menu li a:hover {
  background-color: #e05500;
  color: #fff;
}

/* User section */
.user a {
  color: #111;
  font-weight: 600;
  text-decoration: none;
  font-size: 14px;
}

.user i {
  font-size: 14px;
}

.user a:hover {
  color: #ff6600;
}
</style>

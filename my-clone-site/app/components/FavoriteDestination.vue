<template>
  <section class="favorite-section">
    <div class="container">
      <!-- Tiêu đề + filter -->
      <div class="header-row">
        <div class="title-left">
          <h3 class="sub-title">Khám phá</h3>
          <h1 class="main-title">Các điểm đến ưa thích</h1>
        </div>
        <div class="filter-btns">
          <button class="active">All</button>
          <button>Nha Trang</button>
          <button>Đà Nẵng</button>
          <button>Hội An</button>
          <button>Thái Lan</button>
          <button>Châu Âu</button>
          <button>Trung Quốc</button>
        </div>
      </div>

      <!-- Card danh sách -->
      <div class="cards">
        <div class="card" v-for="(item, index) in destinations" :key="index">
          <div class="card-image">
            <img :src="item.image" :alt="item.title" />
            <div class="tag sale">{{ item.sale }}</div>
            <div class="tag highlight" v-if="item.highlight">Nổi bật</div>
          </div>

          <div class="card-content">
            <p class="location">📍 {{ item.location }}</p>
            <h3 class="title">{{ item.title }}</h3>

            <div class="price-block">
              <span class="price-label">Giá từ:</span>
              <div class="price-values">
                <div class="price-line current">
                  {{ item.price.toLocaleString() }}₫ <span class="unit">/ người</span>
                </div>
                <div class="price-line old">
                  {{ item.oldPrice.toLocaleString() }}₫ <span class="unit">/ người</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const destinations = [
  {
    image: "/images/bacau.webp",
    sale: "-6% Off",
    highlight: true,
    location: "Paris",
    title: "Bắc Âu: Đan Mạch - Iceland - Na Uy (Chương trình mới)",
    price: 88000000,
    oldPrice: 94000000,
  },
  {
    image: "/images/bacaunauy-thuydien.webp",
    sale: "-7% Off",
    highlight: true,
    location: "London",
    title:
      "Bắc Âu: Na Uy - Thụy Điển - Đan Mạch (Chiêm ngưỡng thiên nhiên hùng vĩ của vùng Bắc Âu)",
    price: 99000000,
    oldPrice: 108000000,
  },
  {
    image: "/images/bacau-na-uy-thuydien-phanlan.webp",
    sale: "-7% Off",
    highlight: true,
    location: "Italy",
    title:
      "Bắc Âu: Thụy Điển - Phần Lan - Na Uy - Đan Mạch (Thưởng thức trà chiều phong cách châu Âu)",
    price: 129000000,
    oldPrice: 138000000,
  },
  {
    image: "/images/black-knicker.webp",
    sale: "-18% Off",
    highlight: false,
    location: "Hồ Chí Minh",
    title: "Black knicker concealed back zip fasten.",
    price: 12300000,
    oldPrice: 15000000,
  },
    {
    image: "/images/AnhParis.webp",
    sale: "-6% Off",
    highlight: true,
    location: "ThaiLand",
    title: "Crystal clear blue sea water. No touristic noise.",
    price: 88000000,
    oldPrice: 94000000,
  },
    {
    image: "/images/cauvang.webp",
    sale: "-6% Off",
    highlight: true,
    location: "Paris",
    title: "Đà Nẵng - Huế - Đầm Lập An - La Vang - Động Phong Nha - KDL Bà Nà - Cầu Vàng",
    price: 88000000,
    oldPrice: 94000000,
  },
    {
    image: "/images/cauvang2.webp",
    sale: "-6% Off",
    highlight: true,
    location: "Paris",
    title: "Đà Nẵng – KDL Bà Nà – Sơn Trà – Hội An – La Vang - Động Phong Nha",
    price: 88000000,
    oldPrice: 94000000,
  },
    {
    image: "/images/newzealand.webp",
    sale: "-6% Off",
    highlight: true,
    location: "Paris",
    title: "New Zealand's South Island brims with majestic",
    price: 88000000,
    oldPrice: 94000000,
  },
];
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&family=Dancing+Script:wght@600&display=swap');

.favorite-section {
  padding: 80px 0;
  background: #f8fafc;
  font-family: 'Quicksand', sans-serif;
}

.container {
  width: 90%;
  max-width: 1300px;
  margin: auto;
}

/* --- Header --- */
.header-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 50px;
}

.title-left {
  text-align: left;
}

.sub-title {
  color: #f9b233;
  font-family: 'Dancing Script', cursive;
  font-weight: 600;
  font-size: 28px;
  margin: 0;
  letter-spacing: 1px;
  text-shadow: 1px 1px 2px rgba(249, 178, 51, 0.4);
}

.main-title {
  font-size: 38px;
  margin: 5px 0 0 0;
  font-weight: 700;
  color: #000;
}

/* --- Filter Buttons --- */
.filter-btns {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
}

.filter-btns button {
  background: #fff;
  border: 1px solid #ddd;
  padding: 8px 18px;
  border-radius: 10px;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  color: #000;
}

.filter-btns button.active,
.filter-btns button:hover {
  background: #ff7a00;
  color: #fff;
  border-color:#ff7a00;
}

/* --- Cards --- */
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 35px;
}

.card {
  background: #fff;
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
}

.card:hover {
  transform: translateY(-8px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

/* --- Ảnh + viền trắng rõ --- */
.card-image {
  position: relative;
  width: 100%;
  background: #fff;
  border-radius: 18px 18px 0 0;
  overflow: hidden;
  border: 10px solid #fff; /* viền trắng rõ hơn */
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.06);
}

.card-image img {
  display: block;
  width: 120%; /* tăng chiều ngang ảnh */
  height: 250px;
  object-fit: cover;
  border-radius: 14px;
  transition: transform 0.4s ease;
  margin-left: -10%;
}

.card:hover .card-image img {
  transform: scale(1.05);
}

/* --- Tag --- */
.tag {
  position: absolute;
  top: 14px;
  left: 14px;
  font-size: 13px;
  font-weight: 600;
  padding: 6px 12px;
  border-radius: 6px;
  color: #fff;
  z-index: 2;
}

.sale {
  background: #ff3b30;
}

.highlight {
  background: #00b14f;
  right: 14px;
  left: auto;
}

/* --- Nội dung card --- */
.card-content {
  padding: 25px 20px 28px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.location {
  display: inline-block;
  background: #fff7e6;
  color: #ff7a00;
  font-size: 14px;
  font-weight: 600;
  padding: 5px 12px;
  border-radius: 10px;
  margin-bottom: 12px;
  box-shadow: inset 0 0 0 1px #ffe2b3;
}

.title {
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 16px;
  color: #111;
  line-height: 1.5;
}

/* --- Giá --- */
.price-block {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-top: auto;
}

.price-label {
  color: #888;
  font-size: 14px;
  font-weight: 600;
}

.price-values {
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.price-line {
  font-size: 16px;
  font-weight: 700;
}

.price-line.current {
  color: #000;
}

.price-line.old {
  color: #aaa;
  text-decoration: line-through;
  font-weight: 500;
}

.unit {
  color: #777;
  font-size: 14px;
  font-weight: 400;
}
</style>

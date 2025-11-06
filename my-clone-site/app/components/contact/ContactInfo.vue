<template>
  <div>
    <h2 class="text-2xl font-bold mb-4">Thông tin liên hệ</h2>

    <ul class="space-y-3 text-gray-600 mb-8">
      <li><strong>📍 Địa chỉ:</strong> 1234 Nguyễn Thị Minh Khai, phường 3, quận 3</li>
      <li><strong>🕒 Thời gian làm việc:</strong> Thứ 2 - Thứ 6: 8h - 18h | Thứ 7: 8h - 17h</li>
      <li><strong>📞 Điện thoại:</strong> 1900.000.XXX</li>
      <li><strong>✉️ Email:</strong> hi@pathways.abc</li>
    </ul>

    <h3 class="text-xl font-semibold mb-3">Gửi thắc mắc cho chúng tôi</h3>
    <p class="text-gray-500 mb-4">
      Nếu bạn có thắc mắc gì, có thể gửi yêu cầu cho chúng tôi. Chúng tôi sẽ liên hệ lại sớm nhất có thể.
    </p>

    <ContactForm />
  </div>
</template>

<script setup>
import ContactForm from './ContactForm.vue'
</script>

<template>
    <div class="container mx-auto px-6 py-12 grid md:grid-cols-2 gap-10">
        <ContactInfo />
        <ContactMap />
    </div>
</template>
<script setup>
import ContactInfo from '@/components/contact/ContactInfo.vue';
import ContactMap from '@/components/contact/ContactMap.vue';
</script>

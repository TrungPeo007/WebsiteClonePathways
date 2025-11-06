<template>
  <section class="py-20 bg-gray-50">
    <div class="max-w-7xl mx-auto px-6">
      <BannerHero/>
      <AboutUsGrid/>
      <StorySection/>
      <AchievementSection />
      <FourIcons />
    </div>
  </section>
</template>
<script setup>
import BannerHero from './PageType1/BannerHero.vue';
import AboutUsGrid from './PageType1/AboutUsGrid.vue';
import StorySection from './PageType1/StorySection.vue';
import AchievementSection from './PageType1/AchievementSection.vue';
import FourIcons from './PageType1/FourIcons.vue';
</script>
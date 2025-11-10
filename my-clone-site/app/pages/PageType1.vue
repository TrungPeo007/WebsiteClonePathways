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
import BannerHero from '~/components/SomeIntroduceType/PageType1/BannerHero.vue';
import AboutUsGrid from '~/components/SomeIntroduceType/PageType1/AboutUsGrid.vue';
import StorySection from '~/components/SomeIntroduceType/PageType1/StorySection.vue';
import AchievementSection from '~/components/SomeIntroduceType/PageType1/AchievementSection.vue';
import FourIcons from '~/components/SomeIntroduceType/PageType1/FourIcons.vue';
</script>
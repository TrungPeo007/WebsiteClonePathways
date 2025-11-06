<template>
  <section class="py-20 bg-gray-50">
    <div class="max-w-7xl mx-auto px-6">
      <BannerHero/>
      <IntroBox />
      <ServiceGrid/>
      <TimelineItem />
      <NewsOperation/>
      <ExpandBranch/>
      <NewsContribution />
    </div>
  </section>
</template>

<script setup>
import BannerHero from './PageType1/BannerHero.vue';
import IntroBox from './PageType3/IntroBox.vue';
import ServiceGrid from './PageType3/ServiceGrid.vue';
import TimelineItem from './PageType3/TimelineItem.vue';
import NewsOperation from './PageType3/NewsOperation.vue';
import ExpandBranch from './PageType3/ExpandBranch.vue';
import NewsContribution from './PageType3/NewsContribution.vue';
</script>
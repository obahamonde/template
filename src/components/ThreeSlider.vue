<template>
  <Slider :images="images" />
</template>

<script setup lang="ts">
import { default as Slider } from 'troisjs/src/components/sliders/Slider2.vue';

const images = ref([
  { src: '/images/1.jpg' },
  { src: '/images/2.jpg' },
  { src: '/images/3.jpg' },
  { src: '/images/4.jpg' },
  { src: '/images/5.jpg' },
  { src: '/images/6.jpg' },
  { src: '/images/7.jpg' },
  { src: '/images/8.jpg' },
  { src: '/images/9.jpg' },
  { src: '/images/10.jpg' },
  { src: '/images/11.jpg' },
  { src: 'https://images.unsplash.com/photo-1602992708529-c9fdb12905c9' }
]);

</script>
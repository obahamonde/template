<script setup lang="ts">
useHead({
  title: 'Vipere',
  meta: [
    { name: 'description', content: 'Starter for web development with Vite and Python' }
  ],
  link: [
    {
      rel: 'icon',
      href: '/favicon.ico'
    },
  ],
})

</script>

<template>
  <RouterView />
</template>
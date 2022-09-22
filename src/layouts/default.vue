<script setup lang="ts">
const foo = ref(false)
</script>

<template>
  <div row>
    <Navbar />
    <div right-0 left-0 absolute>
      <RouterView />

      <Search />
      <Clock @showtime="foo=!foo" />

    </div>
    <Calendar v-if="foo" />

    <User />
  </div>
</template>

<script setup lang="ts">
const html = ref(false)
const python = ref(false)
const router = useRouter()
</script>
<template>
    <h1 row h-10 center bg-success text-primary font-script font-extrabold>
        <Ico icon="mdi-home" @click="router.push('/')" left-0 absolute rf text-2xl m-2 scale cp />Code your
        Profile!

        <Ico icon="logos:html-5" mx-4 text-2xl @click="html=!html" cp />
        <Ico icon="logos:python" mx-4 text-2xl @click="python=!python" cp />
    </h1>
    <Html v-if="html" />
    <Python v-if="python" />
</template>


<route lang="yaml">
meta:
  layout: code
</route>
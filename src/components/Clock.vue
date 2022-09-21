<script setup lang="ts">
const now = useNow()
watchEffect(() => {
        unref(now).getHours() > 18 ? useDark() : usePreferredDark()
})
</script>
<template>
        <strong cp z-50 tr fixed text-white m-4 hover:text-red title="Set up Pomodoro">{{
        now.toLocaleTimeString().replace(/:\d\d$/, "")
        
        }}</strong>
</template>
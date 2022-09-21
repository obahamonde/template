
<script setup lang="ts">
const cmd = ref()
const runCommand = () => {
    alert(cmd.value)
}
</script>
    

<template>
    <div>
        <input type="text" bl fixed bg-black text-success v-model="cmd" @keyup.enter="runCommand" />
    </div>
</template>
<script setup lang="ts">
import { useState } from "~/store"
const { state, setState } = useState()
const html = ref(false)
const python = ref(false)
onMounted(
    () => {
        setState("menu", true)
        return state
    }
)

const fetchHtml = () => {
    html.value = !html.value
    python.value = false
}
const fetchPython = () => {
    python.value = !python.value
    html.value = false
}
</script>
<template>
    <section class="col start tl fixed h-full pt-12 w-32 bg-gray-300 rounded-lg bg-gray-300">
  
        <nav class="col start gap-6 my-8">
            <h1 row @click="fetchHtml" cp  >
                <Ico icon="logos:html-5" mx-2 text-2xl /><span class="text-sm text-info">index.html</span>
            </h1>
            <h1 row @click="fetchPython" cp  >
                <Ico icon="logos:python" mx-2 text-2xl /><span class="text-sm text-info">app.py</span>
            </h1>
        </nav>
    </section>
    <Html v-if="html" ml-34 />
    <Python v-if="python" ml-34 />
</template>
<style global>
    [uncloak] {
        display: none;
    }
</style>
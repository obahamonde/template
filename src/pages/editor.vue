<script setup lang="ts">
    const html = ref(false)
    const python = ref(false)
    const router = useRouter()
    
    const handleHtml = () => {
        html.value = !html.value
        python.value = false
    }
    
    const handlePython = () => {
        python.value = !python.value
        html.value = false
    }
    </script>
    <template>
        <h1 row h-10 center bg-success text-primary font-script font-extrabold>
            <Ico icon="mdi-home" @click="router.push('/')" left-0 absolute rf text-2xl m-2 scale cp />Code your
            Profile!
    
            <Ico icon="logos:html-5" mx-4 text-2xl @click="handleHtml" cp />
            <Ico icon="logos:python" mx-4 text-2xl @click="handlePython" cp />
        </h1>
        <Html v-if="html"
        
        />
        <Python v-if="python"
         
         />
    </template>
    
    
    <route lang="yaml">
        meta:
          layout: code
        </route>
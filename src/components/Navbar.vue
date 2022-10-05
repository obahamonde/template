<script setup lang="ts">
import { useAuth0 } from "@auth0/auth0-vue";
const { isAuthenticated } = useAuth0();
const foo = ref(false)
</script>
<template>
  <section row center absolute dark:bg-accent bg-secondary min-w-12 z-40 text-white tl rounded>
    <Ico icon="mdi-menu" z-50 text-xl w-32 text-amber @click="foo = !foo" cp v-if="!foo" />
    <nav row center pb-1 pl-2 v-if="foo">
      
      <div row center>
            <RouterLink m-2 to="/" title="Home">
          <div i-carbon-home />
        </RouterLink>


        <RouterLink m-2 to="/about" title="About">
          <div i-carbon-information />
        </RouterLink>

        <RouterLink m-2 to="/blog" title="Blog">
          <div i-carbon-blog />
        </RouterLink>

        <RouterLink m-2 to="/contact" title="Contact">
          <Ico icon="mdi-email" />
        </RouterLink>
        <div v-if="isAuthenticated" row center>
          <RouterLink m-2 to="/workspace" title="Workspace">
            <Ico icon="mdi-cloud" />
          </RouterLink>
        
        <RouterLink m-2 to="/translate" title="Translator">
          <Ico icon="mdi-translate" />
        </RouterLink>
        <RouterLink m-2 to="/editor" title="Code Editor">
          <Ico icon="mdi-xml"
          @click="foo = !foo" />
        </RouterLink>
      </div> 
        <button m-2 title="ToggleDark" @click="toggleDark()">
          <div m-2 col center z-50 text-xl scale-75>
            <div i="carbon-sun dark:carbon-moon" />
          </div>
        </button>
      </div>
    </nav>

  
  </section>
</template>
<style scoped>
.router-link-exact-active {
  @apply scale-125;
  @apply text-warning;
}
</style>
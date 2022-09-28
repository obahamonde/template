<script setup lang="ts">
import { useAuth0 } from "@auth0/auth0-vue";
const { isAuthenticated } = useAuth0();

</script>
<template>
  <section col center absolute dark:bg-accent bg-secondary min-w-16 z-40 text-white m-4 rounded-lg shadow>
    <nav col items-center>

      <div col center>
            <RouterLink m-4 to="/" title="Home">
          <div i-carbon-home />
        </RouterLink>


        <RouterLink m-4 to="/about" title="About">
          <div i-carbon-information />
        </RouterLink>

        <RouterLink m-4 to="/blog" title="Blog">
          <div i-carbon-blog />
        </RouterLink>

        <RouterLink m-4 to="/contact" title="Contact">
          <Ico icon="mdi-email" />
        </RouterLink>
        <div v-if="isAuthenticated" col center>
          <RouterLink m-4 to="/workspace" title="Workspace">
            <Ico icon="mdi-cloud" />
          </RouterLink>
      
        <RouterLink m-4 to="/editor" title="Code Editor">
          <Ico icon="mdi-xml" />
        </RouterLink>
        <RouterLink m-4 to="/translate" title="Translator">
          <Ico icon="mdi-translate" />
        </RouterLink>
        <RouterLink m-4 to="/poll" title="Poll">
          <Ico icon="mdi-poll" />
        </RouterLink>
      </div> 
        <button m-4 title="ToggleDark" @click="toggleDark()">
          <div m-4 col center z-50 text-xl scale-75>
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
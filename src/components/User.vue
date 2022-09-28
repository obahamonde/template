<script setup lang="ts">import { useAuth0 } from '@auth0/auth0-vue';
import { useState } from '~/store';
const { isAuthenticated, logout } = useAuth0();
const { state } = useState()
const toggle = ref(false)
const chat = ref(false)
</script>
<template>
    <div br fixed v-if="isAuthenticated">
        <img :src="state.user.picture" circle x4 br fixed m-4 @click="toggle = !toggle" />
        <ul col end mb-24 m-4 fade-in-right v-if="toggle">
            <Ico icon="mdi-logout" x2 text-secondary hover:text-danger cp scale @click="logout()" />
            <RouterLink to="profile" title="Profile" rf text-secondary hover:text-success>
                <Ico icon="mdi-account" x2 />
            </RouterLink>
            <Ico icon="mdi-chat" x2 @click="chat = !chat" cp text-secondary hover:text-success />
        </ul>
        <div v-if="chat">
        <Chat @close="chat = false" />
    </div>
    </div>
    <div v-else>
        <Auth />
    </div>
  
</template>

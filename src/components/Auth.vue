<script setup lang="ts">import { useAuth0 } from '@auth0/auth0-vue';
import { useState } from '~/store';

const { isAuthenticated, loginWithRedirect: login } = useAuth0();
const { setState } = useState()
const request = useRequest()

onMounted(() => {
    if (isAuthenticated) {
        const { data } = request("auth").json()
        setState("user", data)
    }
})


</script>

<template>
    <Ico icon="mdi-login" className="m-4 x2 scale-75 cp hover:text-success scale" @click="login()"
        v-if="!isAuthenticated" />
</template>
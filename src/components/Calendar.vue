<script setup lang="ts">
import { useAuth0 } from '@auth0/auth0-vue'
const { isAuthenticated, user, loginWithRedirect, logout } = useAuth0()
if (!isAuthenticated.value) {
    loginWithRedirect()
}
</script>
<template>
    <section v-if="isAuthenticated" tr fixed mt-24 m-4>
        <input type="date" v-model="date" />
        <input type="time" v-model="time" />
        <button @click="addEvent">Add Event</button>
    </section>
    <section v-else>
        <Ico icon="mdi-login" @click="loginWithRedirect" />
    </section>
    <section v-if="isAuthenticated" row center>
        <div v-for="event in events" :key="event.id">
            <h1>{{ event.title }}</h1>
            <h2>{{ event.start }}</h2>
            <h2>{{ event.end }}</h2>
        </div>
    </section>
</template>
<script setup lang="ts">
import { useState } from '~/store'
const { state, setState } = useState()
</script>
<script setup lang="ts">
const email = reactive({
    email: '',
    subject: '',
    message: '',
})
const sendEmail = () => useFetch('/api/email?email=' + email.email + '&subject=' + email.subject + '&message=' + email.message).json()
</script>
<template>
    <h1 text-center mt-12 font-script text-secondary dark:text-success animate-fade-in>Let's get in touch!</h1>
    <div col center m-auto mt-12 gap-4 bg-gray-300 text-secondary shadow rounded-lg w-64 p-4>
        <label for="email">Email</label>
        <input type="email" v-model="email.email" rounded-md no-outline dark:text-success />
        <label for="subject">Subject</label>
        <input type="text" v-model="email.subject" rounded-md no-outline dark:text-success />
        <label for="message">Message</label>
        <textarea v-model="email.message" rounded-md no-outline dark:text-success />
        <button @click="sendEmail" btn-post>Send</button>
    </div>
</template>

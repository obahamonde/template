<template>
    <div col center>
        <div br h-96 w-48 shadow text-xs col start fixed mb-40 m-4 overflow-y-auto overflow-x-hidden p-2 bg-success
            text-black>
            <p v-for="message in state.messages" p-2>
                <strong>{{message.user}}</strong> : <span>{{message.message}}</span>
            </p>

        </div>
        <input @keyup.enter="sendMessage" bg-white text-black mb-32 m-4 br b-2 b-teal fixed text-center w-48 />
    </div>
</template>
<script setup lang="ts">
import { useState } from "~/store"
const { state, setState } = useState()
const request = useRequest()
setState("messages", ["foo"])
const sendMessage = (e: KeyboardEvent) => {
    const input = e.target as HTMLInputElement
    setState("messages", [...state.messages, { "user": state.user.nickname, "message": input.value }])
    const { data } = request("/chat?message=" + input.value).json()
    setState("messages", [...state.messages, { "user": "🤖Bot", "message": data }])
    input.value = ""
}
</script>
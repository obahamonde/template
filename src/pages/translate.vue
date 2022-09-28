<script setup lang="ts">
import { Ref } from 'vue';
const text = ref()
const translated = ref() as Ref<any>
const source = ref()
const target = ref()

const pattern = new RegExp(/^[^\s]+$/)


const translate = async () => {
    translated.value = text.value ? useFetch("/api/translate/" + source.value + "/" + target.value + "/" + text.value).json().data : ''
}

watchEffect(() => {
    if (source.value == undefined) source.value = 'en'
    if (target.value == undefined) target.value = 'es'
})

const fromFrench = () => {
    source.value = 'fr'
    pattern.test(text.value) ? translate() : null
}

const toFrench = () => {
    target.value = 'fr'
    pattern.test(text.value) ? translate() : null
}

const fromEnglish = () => {
    source.value = 'en'
    pattern.test(text.value) ? translate() : null
}

const toEnglish = () => {
    target.value = 'en'
    pattern.test(text.value) ? translate() : null
}

const fromSpanish = () => {
    source.value = 'es'
    pattern.test(text.value) ? translate() : null
}
const toSpanish = () => {
    target.value = 'es'
    pattern.test(text.value) ? translate() : null
}

const translator = computed(() => {
    switch (source.value) {
        case 'fr':
            return "Traducteur Français"
        case 'en':
            return "English Translator"
        case 'es':
            return "Traductor Español"
    }
})
</script>
<template>
    <h1 col center text-4xl dark:text-success font-script m-8 text-secondary fade-in-down>{{translator}}</h1>
    <section row center gap-4 rounded-xl shadow bg-secondary dark:bg-accent class="w-1/2 mx-auto" fade-in-up>
        <div col center h-96 w-72>
            <h1 row gap-4>
                <img src="/images/fr.svg" @click="fromFrench" cp scale hover:shadow
                    :class="source=='fr' ? 'shadow' : ''" />
                <img src="/images/us.svg" @click="fromEnglish" cp scale hover:shadow
                    :class="source=='en' ? 'shadow' : ''" />
                <img src="/images/pe.svg" @click="fromSpanish" cp scale hover:shadow
                    :class="source=='es' ? 'shadow' : ''" />
            </h1>
            <textarea p-2 b-2 border-black border-dashed rounded-lg rows="10" cols="32" m-4 v-model="text"
                placeholder="Enter text to translate" @keydown.enter="translate"
                @keydown.backspace="translated='...'" />
        </div>
        <div col center>
            <h1 row gap-4>
                <img src="/images/fr.svg" @click="toFrench" cp scale hover:shadow
                    :class="target=='fr' ? 'shadow' : ''"
                    :hidden="source=='fr'"
                    />
                <img src="/images/us.svg" @click="toEnglish" cp scale hover:shadow
                    :class="target=='en' ? 'shadow' : ''" 
                    :hidden="source=='en'"
                    />
                <img src="/images/pe.svg" @click="toSpanish" cp scale hover:shadow
                    :class="target=='es' ? 'shadow' : ''"
                    :hidden="source=='es'"
                    />
            </h1>
            <div col start p-2 b-2 border-black border-dashed m-4 h-64 w-72 rounded-lg bg-white dark:bg="#3B3B3B" dark:text-white v-if="translated!=''"
                placeholder="Translated text">
                {{ translated }}
            </div>
        </div>
    </section>
</template>
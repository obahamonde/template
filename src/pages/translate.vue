<script setup lang="ts">
import { Ref } from 'vue';
import { useAuth0 } from '@auth0/auth0-vue';
const { isAuthenticated } =  useAuth0();
const text = ref()
const translated = ref("...") as Ref<any>
const translator = ref()
const source = ref('en')
const target = ref('es')

const translatorTitle = (source: string, target: string) => {
    switch (target) {
        case 'en':
            return source === 'fr' ? 'French to English Translator' : 'Spanish to English Translator'
        case 'fr':
            return source === 'en' ? 'Traducteur Anglais vers Français' : 'Traducteur Espagnol vers Français'
        case 'es':
            return source === 'en' ? 'Traductor Inglés a Español' : 'Traductor Francés a Español'
    }
}

watchEffect(() => {
    translator.value = translatorTitle(source.value, target.value)
})

const translate = async () => {
    if (text.value) {
        const { data } = await useFetch(`/api/translate/${source.value}/${target.value}/${text.value}`)
        translated.value = data.value
    }
}

</script>
<template>
    <section v-if="isAuthenticated" class="mb-16 w-72 col center bg-transparent p-1 
     tl fixed m-1 hover:border-solid">
        <h1 col start text-sm dark:text-success font-serif m-8 text-secondary fade-in-down>{{translator}}</h1>
        <div col center h-64 w-64 ml-2 >
            <h1 row gap-4>
                <img src="/images/fr.svg" @click="source='fr'; translate()" cp scale hover:shadow
                    :class="source=='fr' ? 'shadow scale-110' : ''" :hidden="target=='fr' ? true : false" />
                <img src="/images/us.svg" @click="source='en'; translate()" cp scale hover:shadow
                    :class="source=='en' ? 'shadow scale-110' : ''" :hidden="target=='en' ? true : false" />
                <img src="/images/pe.svg" @click="source='es'; translate()" cp scale hover:shadow
                    :class="source=='es' ? 'shadow scale-110' : ''" :hidden="target=='es' ? true : false" />
            </h1>
            <textarea p-2 b-2 border-success border-solid rounded-lg rows="10" cols="32" m-4 v-model="text"
                placeholder="Enter text to translate" @keydown.enter="translate"
                @keydown.backspace="translated='...'" />
        </div>
        <div col center h-64 w-64>
            <h1 row gap-4>
                <img src="/images/fr.svg" @click="target='fr'; translate()" class="cp scale hover:shadow"
                    :class="target=='fr' ? 'shadow scale-110' : ''" :hidden="source=='fr'" />
                <img src="/images/us.svg" @click="target='en'; translate()" class="cp scale hover:shadow"
                    :class="target=='en' ? 'shadow scale-110' : ''" :hidden="source=='en'" />
                <img src="/images/pe.svg" @click="target='es'; translate()" class="cp scale hover:shadow"
                    :class="target=='es' ? 'shadow scale-110' : ''" :hidden="source=='es'" />
            </h1>
            <div col start p-2 b-2 border-success border-solid ml-2 mt-4     h-64 w-72 rounded-lg bg-white dark:bg="#3B3B3B"
                dark:text-white v-if="translated!=''" placeholder="Translated text">
                {{ translated }}
            </div>
        </div>
    </section>
</template>
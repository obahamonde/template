<template>
    <div row h-screen>
        <div class="w-1/2">
            <prism-editor class="my-editor " v-model="editorCode" :highlight="highlighter" line-numbers>
            </prism-editor>
        </div>
        <iframe class="w-1/2" :src="url" frameborder="0" allowfullscreen></iframe>
    </div>
</template>
<script setup>
import { PrismEditor } from "vue-prism-editor";

// import highlighting library (you can use any library you want just return html string)
import prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css"; // import syntax highlighting styles
const { data } = useFetch("/api/html").text()
const editorCode = ref(data)
const libsCode = ref(useFetch("/api/lib").text().data)
const url = computed(() => {
    return "data:text/html;charset=utf-8," + encodeURIComponent(editorCode.value) + encodeURIComponent(libsCode.value)
})
const highlighter = (code) => { return prism.highlight(code, prism.languages.js); };
const testCode = () => { alert(editorCode.value) }
</script>
<style>
.my-editor {
    /* we dont use `language-` classes anymore so thats why we need to add background and text color manually */
    background: #2d2d2d;
    color: #ccc;

    /* you must provide font-family font-size line-height. Example: */
    font-family: Fira code, Fira Mono, Consolas, Menlo, Courier, monospace;
    font-size: 14px;
    line-height: 1.5;
    padding-top: 10px;
    height: 100%;
}

/* optional class for removing the outline */
.prism-editor__textarea:focus {
    outline: none;
}


.mb-4 {
    margin-bottom: 1rem;
}
</style>
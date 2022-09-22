<template>
    <h1 row h-10 center bg-success text-primary font-script font-extrabold>
        <Ico icon="mdi-home" @click="router.push('/')" left-0 absolute rf text-2xl m-2 scale cp />Code your
        Profile!

    </h1>

    <div row>
        <div class="w-1/2">
            <prism-editor class="my-editor " v-model="editorCode" :highlight="highlighter" line-numbers>
            </prism-editor>
        </div>
        <div v-html="editorCode" class="w-1/2 bg-transparent h-94vh w-75vw"></div>
    </div>

</template>

<script>
// import Prism Editor
import { PrismEditor } from "vue-prism-editor"; //
import "vue-prism-editor/dist/prismeditor.min.css"; // import the styles somewhere

// import highlighting library (you can use any library you want just return html string)
import prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css"; // import syntax highlighting styles

import { defineComponent, onMounted, ref } from "vue";
export default defineComponent({
    components: {
        PrismEditor,
    },
    setup() {
        const editorCode = ref("<h1 class='title'>Hello World!</h1><style>.title{color:purple;font-size:3rem;text-align:center;margin-top:6rem;}</style>")
        const highlighter = (code) => {
            return prism.highlight(code, prism.languages.js);
        };
        const router = useRouter()
        return { editorCode, highlighter, router };
    },
});
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
<route lang="yaml">
    meta:
      layout: code
    </route>
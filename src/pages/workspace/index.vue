<template>
    <Upload bg-transparent p-4 rounded-lg b-2 border-dashed border-gray-500 shadow-light shadow-md cp @upload="onUpload"
        bl fixed m-4 hover:border-solid />
    <section grid4 p-16 gap-8>
        <div v-for="upload in unref(uploads)" col center>

            <img :src="upload" h-32 />
            <Ico icon="mdi-delete" @click="onDelete(upload)" cp x1 scale hover:text-danger />
        </div>
    </section>
</template>
<script setup lang="ts">
const uploads = ref(useRequest()("upload").json().data)
const onUpload = (urls: any) => {
    uploads.value = useRequest()("upload").json().data
}
const onDelete = (url: string) => {
    useRequest()("upload?url=" + encodeURIComponent(url),{
        method: "DELETE"
    }).json()
    uploads.value = useRequest()("upload").json().data
}
</script>
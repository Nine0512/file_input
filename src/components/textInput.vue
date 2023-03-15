<script setup>
import {ref} from 'vue'

let base64 = ref('')
let file = ref(null)
let previewFile = ref('')
const handleFileChange = (e) => {
  file.value = e.target.files[0]
  const reader = new FileReader()
  reader.onload = (e) => {
    base64.value = e.target.result
    console.log(base64.value)
    previewFile.value = URL.createObjectURL(e.target.files[0])
  }
  reader.readAsDataURL(file.value)
}
</script>

<template>
  <input type="file" class="file-input w-full max-w-xs" @change="handleFileChange"/>
  <br>
  <a :href="previewFile">here</a>
</template>
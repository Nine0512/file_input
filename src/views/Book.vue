<script setup>

import { ref, watch} from 'vue'
import {useRoute} from 'vue-router'
import InputModal from '../components/InputModal.vue'
import book from '../book/Ore no Imouto ga Konna ni Kawaii Wake ga Nai Ayase IF.pdf'

let pageImg = ref()
const route = useRoute()
let id = route.params.id

watch(() => route.params.id, () => {
  id = route.params.id
  renderImg()
})

const getImg = async () => {
  const res = await fetch(`http://localhost:3004/image/${id}`)
  const data = await res.json()
  return data
}

const renderImg = async () => {
  const img = await getImg()
  pageImg.value = img
}

let deleteImg = async (id) => {
  await fetch(`http://localhost:3004/image/${id}`, {
    method: 'delete',
  }).then(() => {
    imgArr.value = imgArr.value.filter(item => item.id !== id)
  })
}

renderImg()
</script>

<template>
  <div class="w-full min-h-screen flex justify-center text-black">
    <div class="w-full lg:w-4/6 lg:grid lg:grid-cols-6 gap-4 mx-5 my-2 mt-10">
      <div class="w-full lg:col-span-2">
        <img :src="pageImg?.imageBase64" class="w-full object-cover">
      </div>
      <div class="lg:col-span-2 my-5">
        <h1 class="text-2xl font-bold">{{ pageImg?.title }}</h1>
        <p class="text-lg">Author : {{ pageImg?.author }}</p>
        <p class="text-lg">Category :
          {{ pageImg?.category.length > 1 ? pageImg?.category.join(',') : pageImg?.category.join('') }}</p>
      </div>
      <div class="lg:col-span-2 flex-col justify-end my-5">
        <p class="text-lg font-bold">Price : {{ pageImg?.price }}</p>
        <p class="text-lg font-bold">Date : {{ pageImg?.date }}</p>
      </div>
      <div class="col-span-2 lg:col-span-6">
        <h1 class="text-2xl font-bold">Description : {{ pageImg?.title }}</h1>
        <p class="text-lg my-4 text-justify">&nbsp;&nbsp;&nbsp;&nbsp;{{ pageImg?.description }}</p>
      </div>
      <div class="col-span-6">
        <a :href="book" class="btn" target="_blank">Download</a>
      </div>
      <div class="col-span-6 flex justify-end my-5">
        <InputModal method="update" :id="pageImg?.id" :item="pageImg"/>
        <label for="my-modal-6" class="btn ml-2">Delete</label>

        <input type="checkbox" id="my-modal-6" class="modal-toggle"/>
        <div class="modal modal-bottom sm:modal-middle">
          <div class="modal-box">
            <h3 class="font-bold text-lg">Are you sure!</h3>
            <p class="py-4">You won't be able to revert this!</p>
            <div class="modal-action">
              <a href="/" class="btn btn-error" @click="deleteImg(pageImg?.id)">Delete</a>
              <label for="my-modal-6" class="btn">Cancel</label>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped>

</style>
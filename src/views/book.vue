<script setup>

import {ref} from 'vue'
import {useRoute} from 'vue-router'
import InputModal from '../components/InputModal.vue'

let pageImg = ref()
const route = useRoute()
let id = route.params.id

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
  <div class="w-full min-h-screen flex justify-center">
    <div class="w-4/6 grid grid-cols-6 gap-4 my-2">
      <div class="col-span-2 w-full">
        <img :src="pageImg?.imageBase64" class="w-full object-cover">
      </div>
      <div>
        <h1 class="text-2xl font-bold col-span-2">{{ pageImg?.title }}</h1>
        <p class="text-lg font-bold">Author : {{ pageImg?.author }}</p>
        <p class="text-lg font-bold">Category : {{ pageImg?.category.length > 1? pageImg?.category.join(','):pageImg?.category.join('')}}</p>
      </div>
      <div class="col-span-2 justify-end flex">
        <div>
          <p class="text-lg font-bold">Price : {{ pageImg?.price }}</p>
          <p class="text-lg font-bold">Date : {{ pageImg?.date }}</p>
        </div>
      </div>
      <div class="col-span-6">
        <h1 class="text-2xl font-bold">Description : {{ pageImg?.title }}</h1>
        <p class="text-lg font-bold">{{ pageImg?.description }}</p>
      </div>
      <div class="col-span-6 flex justify-end">
        <InputModal method="update" :id="pageImg?.id" :item="pageImg" />
        <label for="my-modal-6" class="btn ml-2">Delete</label>

        <input type="checkbox" id="my-modal-6" class="modal-toggle" />
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
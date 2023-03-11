<script setup>
import {ref} from 'vue'
import Card from '../components/card.vue'
import InputModal from '../components/InputModal.vue'

let imgArr = ref([])

const getImg = async () => {
  const res = await fetch('http://localhost:3004/image')
  const data = await res.json()
  return data
}

const renderImg = async () => {
  const img = await getImg()
  img.forEach(item => {
    let imgObj = {
      id: item.id,
      imageBase64: item.imageBase64,
      title: item.title,
      author: item.author,
      price: item.price,
      date: item.date,
      category: item.category
    }
    imgArr.value.push(imgObj)
  })
}
renderImg()

</script>

<template>
  <div class="w-full min-h-screen flex justify-center">
    <div class="w-4/6 grid grid-cols-6 gap-4 my-2">
      <div v-for="item in imgArr" :key="item.id" class="">
        <Card :id="item.id" :img="item.imageBase64" :title="item.title" :author="item.author" :category="item.category"
              :price="item.price" :date="item.date"/>
      </div>
      <div class="col-span-6 flex justify-end">
        <InputModal />
      </div>
    </div>
  </div>


</template>

<style scoped>

</style>